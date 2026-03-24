"use client";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Play, Pause } from "lucide-react";
import { useHeroVideo } from "@/contexts/heroVideoContext";
import Container from "@/components/layout/Container";
import { Text } from "@/components/typography/Text";
import LinkTag from "@/components/LinkTag";
import { cn } from "@/lib/utils";
import useIsMobile from "@/hooks/useIsMobile";
import Fade from "@/components/animations/Fade";


const BackgroundVideo = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { isPlaying, currentCategory } = useHeroVideo()
    useEffect(() => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current?.play().catch((error) => {
                console.warn("Video playback was blocked or failed:", error);
            });
        } else {
            videoRef.current.pause();
        }
    }, [isPlaying]);

    return (
        <motion.video
            ref={videoRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover -z-20"
            autoPlay
            muted
            loop
            playsInline
        >
            <source src={currentCategory!.videoSrc} />
            Your browser does not support the video tag.
        </motion.video>
    );
};

export const HeroVideo = ({ className = "" }) => {
    const videoContainerRef = useRef(null);
    const { currentCategory } = useHeroVideo();


    const { scrollYProgress } = useScroll({
        target: videoContainerRef,
        offset: ["start end", "start start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const radius = useTransform(scrollYProgress, [0, 1], [96, 0]);
    const isMobile = useIsMobile()
    return (
        <motion.div
            ref={videoContainerRef}
            style={{
                scale: isMobile ? 1 : scale,
                borderRadius: radius
            }}
            className={cn(" h-full w-full overflow-hidden", className)}
        >
            {/* Smoothly crossfade between videos on activeIndex change */}
            <AnimatePresence initial={false}>
                <BackgroundVideo key={currentCategory.name} />
            </AnimatePresence>

            <HeroVideoOverlay />
        </motion.div>
    );
};

export const HeroVideoPlayPauseBtn = () => {
    const { isPlaying, setIsPlaying } = useHeroVideo();
    return (
        <button
            className="rounded-full border border-white/30 bg-black/40 backdrop-blur-md text-white h-14 w-14 flex justify-center items-center hover:bg-white hover:text-black transition-all duration-300 shrink-0"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause video" : "Play video"}
        >
            {isPlaying ? <Pause size={20} className="fill-current" /> : <Play size={20} className="fill-current" />}
        </button>
    );
};

const HeroVideoOverlay = () => {
    return (
        <div className="relative flex flex-col justify-end w-full h-full z-10">
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent pointer-events-none -z-10" />

            <Container className="py-12  flex flex-col lg:flex-row lg:justify-between w-full gap-10">
                <div className="flex items-start lg:items-center gap-6 w-max lg:max-w-xl">
                    <div className="mt-2 lg:mt-0">
                        <HeroVideoPlayPauseBtn />
                    </div>
                    <HeroVideoOverlayText />
                </div>

                <HeroVideoOverlayOtherMachines />
            </Container>
        </div>
    );
};

const HeroVideoOverlayText = () => {
    const { currentCategory } = useHeroVideo()
    return (
        <div className="text-white max-w-xl  flex flex-col justify-center">
            {/* mode="wait" ensures text smoothly swaps out before swapping in */}
            <AnimatePresence mode="wait">
                <Fade
                    key={currentCategory.name}
                    from="down"
                    ease="easeInOut"
                    duration={0.4}
                    exit={{ opacity: 0, y: -15 }}
                >

                    <Text as="h3" size="xl">{currentCategory.name}</Text>
                    <Text size="sm" className="font-normal">{currentCategory.description}</Text>
                </Fade>

            </AnimatePresence>
        </div>
    );
};


const HeroVideoOverlayOtherMachines = () => {
    const { currentCategory, setCurrentCategory, categories } = useHeroVideo()
    const isMobile = useIsMobile()
    return (
        <div className="w-max lg:w-auto mt-auto">
            <ul className="flex gap-2 snap-x no-scrollbar">
                {categories.map((category) => {
                    const isActive = currentCategory === category;
                    return (
                        <li key={category.id} className="snap-start relative">
                            {/* Trigger the state change smoothly upon hover */}
                            <LinkTag
                                href={category.href}
                                notLink={isMobile ? true : false}
                                onMouseEnter={() => setCurrentCategory(category)}
                                className={cn(
                                    "flex w-28 aspect-square md:w-36  transition-all duration-300 overflow-hidden group text-background rounded-2xl bg-foreground",
                                    isActive
                                        ? "bg-primary border-2 border-background"
                                        : "bg-muted hover:bg-primary"
                                )}
                            >
                                <img
                                    src={category.image.primary}
                                    className={`absolute h-full  bottom-0 object-contain w-full transition-transform duration-700  group-hover:scale-105`}
                                    alt={category.name}
                                />
                                <div className="bg-linear-to-b p-2 from-transparent via-black/70 to-black w-full h-full absolute group-hover:text-white flex items-end justify-center">
                                    <Text size="xs" className="font-medium transition-all duration-300 mb-3">
                                        {category.name}
                                    </Text>

                                </div>
                            </LinkTag>
                        </li>
                    );
                })}
            </ul>
        </div>

    );
};

export default HeroVideo