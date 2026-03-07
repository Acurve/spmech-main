"use client";

import React, { useState, useRef, PropsWithChildren } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

type InteractiveHoverButtonProps = PropsWithChildren<{
    className?: string
}>

const InteractiveHoverButton = ({ children, className = "" }: InteractiveHoverButtonProps) => {
    const [_, setIsHovered] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // Mouse position relative to button width (0 to 100)
    const mouseX = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 100, damping: 10 });

    // Convert 0-100 to a percentage string for clip-path
    const clipPathValue = useTransform(springX, (value) => `inset(0 ${100 - value}% 0 0)`);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        mouseX.set(percentage);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        mouseX.set(0); // Liquid retreats
    };

    return (
        <button
            ref={buttonRef}
            onPointerMove={handleMouseMove}
            onPointerEnter={handleMouseEnter}
            onPointerLeave={handleMouseLeave}
            className={cn("group relative h-12 border rounded-full cursor-pointer border-brand! bg-transparent overflow-hidden transition-transform duration-300", className)}

        >
            {/* Base Layer: Black Text */}
            <div className="relative z-10 block tracking-widest text-inherit transition-colors duration-300">
                {children}
            </div>

            {/* Liquid Layer */}
            <motion.div
                className="absolute -inset-px z-20 pointer-events-none"
                style={{ clipPath: clipPathValue }}
            >
                {/* The "Liquid" Background */}
                <div className="absolute inset-0 rounded-full bg-brand" />



                {/* Inverted Text Layer (White) */}
                <div className="absolute inset-0 flex items-center justify-center tracking-widest text-white whitespace-nowrap leading-0">
                    {children}
                </div>
            </motion.div>


        </button>
    );
};

export default InteractiveHoverButton