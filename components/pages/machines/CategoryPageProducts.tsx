"use client"

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import LinkTag from "@/components/LinkTag";
import { Text } from "@/components/typography/Text";
import { cn } from "@/lib/utils";
import { IconArrowRight } from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type ProductContainerProps = {
    imageSrc: string,
    machineName: string,
    href: string,
    description?: string,
    className?: string,
    reversed?: boolean,
    index: number
}

export const ProductContainer = ({ index, imageSrc, machineName, href, description = "", className = "", reversed = false }: ProductContainerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // True parallax effect for the image
    const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    return (
        <Section className={cn("bg-white py-16 lg:py-32", className)}>
            <Container>
                <div ref={containerRef}>
                    <Container>
                        <div className="">
                            <div className={`flex flex-col items-center gap-16 lg:gap-24 ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                                {/* Image Container with Curtain Reveal & Parallax */}
                                <div className="w-full lg:w-1/2 relative">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className="group relative aspect-square w-full overflow-hidden bg-gray-50 sm:aspect-video lg:aspect-square rounded-3xl"
                                    >
                                        {/* Curtain Reveal Animation */}
                                        <motion.div
                                            className="absolute inset-0 z-10 bg-white"
                                            initial={{ height: "100%" }}
                                            whileInView={{ height: "0%" }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                                        />

                                        <motion.img
                                            src={imageSrc}
                                            alt={machineName}
                                            style={{ y: imageY, scale: 1.15 }}
                                            className="h-full w-full object-contain transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-125"
                                        />
                                        {/* Overlay subtle shadow */}
                                        <div className="absolute inset-0 bg-black/5 transition-opacity duration-700 group-hover:bg-transparent pointer-events-none" />
                                    </motion.div>
                                </div>

                                {/* Content Container */}
                                <div className="flex w-full flex-col lg:w-1/2">
                                    <motion.div
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                        className="relative"
                                    >
                                        {/* Background Watermark Number */}
                                        <div className="absolute -top-12 -left-6 z-0 md:-left-12 md:-top-16 opacity-[0.03] select-none pointer-events-none">
                                            <span className="font-bold text-gray-900 text-8xl md:text-[12rem] leading-none tracking-tighter">
                                                {index.toString().padStart(2, '0')}
                                            </span>
                                        </div>

                                        <div className="relative z-10">
                                            <Text as="span" size="sm" className="mb-5 block font-bold text-brand uppercase tracking-[0.2em]">
                                                {index.toString().padStart(2, '0')} — Model
                                            </Text>
                                            <h2 className="mb-6 text-4xl font-medium tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                                                {machineName}
                                            </h2>

                                            <p className="mb-12 text-lg leading-relaxed text-gray-500 max-w-xl">
                                                {description}
                                            </p>

                                            {/* Call to Action to Dedicated Page */}
                                            <LinkTag
                                                href={href}
                                                variant="custom"
                                                className="group inline-flex gap-4 items-center tracking-widest text-gray-900 transition-colors hover:text-brand"
                                            >
                                                <Text as="span" size="sm" className="relative pb-1 uppercase font-semibold">
                                                    See details
                                                    <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-brand transition-transform duration-500 ease-out group-hover:scale-x-100" />
                                                </Text>
                                                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 transition-all duration-500 ease-out group-hover:border-brand group-hover:bg-brand group-hover:text-white group-hover:scale-110">
                                                    <IconArrowRight className="h-5 w-5 transition-transform duration-500 ease-out group-hover:-rotate-45" />
                                                </span>
                                            </LinkTag>
                                        </div>
                                    </motion.div>
                                </div>

                            </div>
                        </div>
                    </Container>
                </div>
            </Container>
        </Section>
    )
}

