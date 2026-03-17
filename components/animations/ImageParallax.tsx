"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useReducedMotion,
    UseScrollOptions,
} from "motion/react"; // Note: 'framer-motion' is the industry standard package name
import { cn } from "@/lib/utils";

type ImageParallaxProps = {
    /** Container styles (e.g., width, aspect-ratio, margins) */
    className?: string;
    /** Specific styles for the motion image */
    imageClassName?: string;
    /** Framer motion scroll offset triggers */
    offset?: UseScrollOptions["offset"];
    /** Image source URL */
    imageSrc: string;
    /** Alt text for accessibility */
    alt?: string;
    /** * Force an aspect ratio to prevent Layout Shift (CLS). 
     * Defaulted to video for safety. 
     */
    aspectRatio?: "aspect-video" | "aspect-square" | "aspect-auto" | string;
};

/**
 * A production-hardened Parallax Image component.
 * Features: CLS prevention, Reduced Motion support, and GPU acceleration.
 */
const ImageParallax = ({
    className = "",
    imageClassName = "",
    offset = ["start end", "end start"],
    imageSrc,
    alt = "",
    aspectRatio = "aspect-square",
}: ImageParallaxProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset,
    });

    // Parallax Range: 
    // We move the image from 0% to -15%. 
    // Since the image is h-[115%], this covers the gap perfectly.
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        prefersReducedMotion ? ["0%", "0%"] : ["0%", "-15%"]
    );

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative overflow-hidden h-[90dvh] rounded-2xl isolate",
                aspectRatio,
                className
            )}
        >
            <motion.img
                src={imageSrc}
                alt={alt}
                loading="lazy"
                decoding="async"
                className={cn(
                    "absolute inset-x-0 top-0 w-full h-[125%] object-cover",
                    "will-change-transform min-h-full",
                    imageClassName
                )}
                style={{
                    y,
                    // Optimization: Ensure GPU rendering
                    transformPerspective: 1000
                }}
                // Error handling fallback
                onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://placehold.co/600x400?text=Image+Error";
                }}
            />
        </div>
    );
};

export default ImageParallax;