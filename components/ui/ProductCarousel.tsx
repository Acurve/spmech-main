"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, animate, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, Cpu, Play, Settings, ShieldCheck } from "lucide-react";
import { Text } from "@/components/typography/Text";
import Container from "@/components/layout/Container";
import useIsMobile from "@/hooks/useIsMobile";
import LinkTag from "@/components/LinkTag";

export type Product = {
    id: string;
    name: string;
    description: string;
    imageSrc: string;
}



const GAP = 32;
const ACTIVE_RATIO = 0.75;
const INACTIVE_RATIO = 0.25;
const IMAGE_RATIO = 0.50;

interface CarouselItemImageProps {
    imageSrc: string;
    name: string;
    isMobile: boolean;
    activeWidthPx: number;
    isActive: boolean;
}

/**
 * Component for the Image section of the Carousel Item
 */
const CarouselItemImage = ({ imageSrc, name, isMobile, activeWidthPx, isActive }: CarouselItemImageProps) => {
    return (
        <div
            className="relative shrink-0 h-1/2 md:h-full py-8"
            style={{
                width: isMobile ? "100%" : activeWidthPx * IMAGE_RATIO,
            }}
        >
            <img
                src={imageSrc}
                className="w-full h-full object-contain"
                alt={name}
                draggable="false"
            />

        </div>
    );
};

interface CarouselItemDetailsProps {
    product: Product;
    index: number;
    totalOriginal: number;
    isMobile: boolean;
    activeWidthPx: number;
    isActive: boolean;
}

const CarouselItemDetails = ({ product, isMobile, isActive }: CarouselItemDetailsProps) => {
    return (
        <div
            className="flex flex-col bg-secondary shrink-0 h-[55%] md:h-full px-8  py-8 md:py-0 relative z-20"
            style={{ width: isMobile ? "100%" : "50%" }}
        >
            <AnimatePresence mode="wait">
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-full  py-8 flex flex-col gap-4"
                    >
                        <Text as="h3" size="xl" className="text-background leading-relaxed font-medium shrink-0">
                            {product.name}
                        </Text>

                        <Text size="base"
                            className="text-background/80 leading-relaxed font-normal shrink-0">
                            {product.description}
                        </Text>

                        <div className="flex flex-wrap items-center gap-6 mt-auto">

                            <LinkTag href="" className="group" variant="button-brand">
                                <Text size="base">
                                    View Specifications
                                </Text>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />

                            </LinkTag>

                            <LinkTag href="" variant="custom" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors cursor-pointer">
                                <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-white transition-colors">
                                    <Play size={14} fill="currentColor" />
                                </div>
                                <Text size="base">
                                    Watch Demo
                                </Text>
                            </LinkTag>
                        </div>


                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

interface CarouselItemProps {
    product: Product;
    index: number;
    currentIndex: number;
    totalOriginal: number;
    isMobile: boolean;
    activeWidthPx: number;
    inactiveWidthPx: number;
    isSnapping: boolean;
}

/**
 * Individual Carousel Item Wrapper
 */
const CarouselItem = ({
    product,
    index,
    currentIndex,
    totalOriginal,
    isMobile,
    activeWidthPx,
    inactiveWidthPx,
    isSnapping
}: CarouselItemProps) => {
    const isActive = index === currentIndex;
    const cardWidth = isActive ? activeWidthPx : inactiveWidthPx;
    const scale = isActive ? isMobile ? 1 : 1 : 0.8

    return (
        <div
            className="h-130 2xl:h-[720px]- shrink-0 select-none"
            style={{
                width: cardWidth,
                marginRight: GAP,
                transition: isSnapping
                    ? "none"
                    : "width 700ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
        >
            <div
                className={`h-full w-full rounded-2xl overflow-hidden
            flex flex-col md:flex-row-reverse relative
           bg-secondary duration-700`}
                style={{
                    scale,
                    transition: "scale 700ms cubic-bezier(0.4, 0, 0.2, 1), opacity 700ms cubic-bezier(0.4, 0, 0.2, 1)"
                }}
            >
                <div
                    className={`absolute transition-all inset-0 duration-300  flex flex-col h-full z-100 p-8 ${isActive ? "hidden bg-transparent pointer-events-none w-6/10" : "bg-foreground/90 w-full"}`}

                >
                    <Text as="h3" size='xl' className={`font-medium  transition-all duration-700 ${isActive ? "text-background" : "text-background/70"}`}>
                        {product.name}
                    </Text>
                    {!isActive &&
                        <LinkTag
                            href="/"
                            variant="button-outline"
                            className={`mt-auto cursor-pointer w-full bg-transparent hover:bg-background hover:text-foreground ${isActive ? "opacity-100" : "opacity-70"}`}>
                            <Text as="span" size="sm" className="font-medium">
                                View Specifications
                            </Text>
                        </LinkTag>}
                </div>

                <CarouselItemImage
                    imageSrc={product.imageSrc}
                    name={product.name}
                    isMobile={isMobile}
                    activeWidthPx={activeWidthPx}
                    isActive={isActive}
                />

                <CarouselItemDetails
                    product={product}
                    index={index}
                    totalOriginal={totalOriginal}
                    isMobile={isMobile}
                    activeWidthPx={activeWidthPx}
                    isActive={isActive}
                />
            </div>
        </div>
    );
};

/**
 * Main Application / Carousel Component
 */
const Carousel = ({ items }: { items: Product[] }) => {
    const SEAMLESS_PRODUCTS = [...items, ...items, ...items];
    const [index, setIndex] = useState(0);
    const [isSnapping, setIsSnapping] = useState(false);
    const isMobile = useIsMobile();
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const isAnimating = useRef(false);

    const totalOriginal = items.length;
    const activeWidthPx = isMobile ? containerWidth : (containerWidth - GAP) * ACTIVE_RATIO;
    const inactiveWidthPx = isMobile ? containerWidth : (containerWidth - GAP) * INACTIVE_RATIO;
    const stepPx = (isMobile ? activeWidthPx : inactiveWidthPx) + GAP;
    const trackWidthPx = activeWidthPx + (SEAMLESS_PRODUCTS.length - 1) * (inactiveWidthPx + GAP);

    useEffect(() => {
        const obs = new ResizeObserver(() => {
            if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
        });
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
            obs.observe(containerRef.current);
        }
        return () => obs.disconnect();
    }, []);

    const handleNext = () => {
        if (isAnimating.current || containerWidth === 0) return;
        isAnimating.current = true;

        const nextIndex = index + 1;
        setIndex(nextIndex);

        animate(x, -(nextIndex * stepPx), {
            type: "spring",
            stiffness: isMobile ? 60 : 45,
            mass: 1.2,
            onComplete: () => {
                if (nextIndex >= totalOriginal) {
                    setIsSnapping(true);
                    setIndex(0);
                    x.set(0);
                    setTimeout(() => {
                        setIsSnapping(false);
                        isAnimating.current = false;
                    }, 50);
                } else {
                    isAnimating.current = false;
                }
            },
        });
    };

    const handlePrev = () => {
        if (isAnimating.current || containerWidth === 0) return;
        isAnimating.current = true;

        const prevIndex = index - 1;

        if (prevIndex < 0) {
            // Jump seamlessly to the last item
            const lastIndex = totalOriginal - 1;
            setIsSnapping(true);
            setIndex(lastIndex);
            x.set(-(lastIndex * stepPx));
            setTimeout(() => {
                setIsSnapping(false);
                isAnimating.current = false;
            }, 50);
        } else {
            setIndex(prevIndex);
            animate(x, -(prevIndex * stepPx), {
                type: "spring",
                stiffness: isMobile ? 60 : 45,
                mass: 1.2,
                onComplete: () => {
                    isAnimating.current = false;
                },
            });
        }
    };

    useEffect(() => {
        const id = setInterval(handleNext, 6000);
        return () => clearInterval(id);
    }, [index, isMobile, containerWidth]);

    return (
        <div className="space-y-4">

            <div ref={containerRef} className="relative w-full overflow-hidden">
                {containerWidth > 0 && (
                    <motion.div
                        className="flex items-end"
                        style={{ x, width: trackWidthPx }}
                    >
                        {SEAMLESS_PRODUCTS.map((product, i) => (
                            <CarouselItem
                                key={`${product.id}-${i}`}
                                product={product}
                                index={i}
                                currentIndex={index}
                                totalOriginal={totalOriginal}
                                isMobile={isMobile}
                                activeWidthPx={activeWidthPx}
                                inactiveWidthPx={inactiveWidthPx}
                                isSnapping={isSnapping}
                            />
                        ))}
                    </motion.div>
                )}
            </div>

            {/* Progress dots + Prev/Next on mobile */}
            <div className="flex items-center justify-between ">
                <div className="flex items-center gap-4">

                    {items.map((_, i) => (
                        <div
                            key={i}
                            className="relative h-2 bg-primary overflow-hidden rounded-full"
                            style={{
                                width: index % totalOriginal === i ? (isMobile ? 40 : 80) : (isMobile ? 20 : 40),
                                transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                        >
                            <div
                                className={`absolute inset-0 bg-brand transition-transform duration-6000 ease-linear origin-left ${index % totalOriginal === i ? "scale-x-100" : "scale-x-0"
                                    }`}
                            />
                        </div>
                    ))}
                </div>
                {/* Prev / Next Buttons */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={handlePrev}
                        className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-brand! bg-white text-foreground hover:bg-brand hover:text-white transition-colors duration-300"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-brand! bg-white text-foreground hover:bg-brand hover:text-white transition-colors duration-300"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Carousel;