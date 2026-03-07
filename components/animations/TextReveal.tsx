"use client"
import { cn } from "@/lib/utils"
import { motion, useMotionTemplate, useScroll, UseScrollOptions, useTransform, } from "motion/react"
import { PropsWithChildren, useEffect, useRef, useState } from "react"

type TextRevealProps = PropsWithChildren<{
    offset?: UseScrollOptions["offset"],
    vertical?: boolean,
    className?: string
}>

const TextReveal = ({ children, offset = ["start end", "center"], vertical = false, className = "" }: TextRevealProps) => {

    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset
    })


    const value = useTransform(scrollYProgress, [0, 1], [0, 100])
    return (
        <motion.div
            ref={ref}
            className={cn('bg-black bg-clip-text', className)}
            style={{
                width: vertical ? "100%" : useMotionTemplate`${value}%`,
                height: vertical ? useMotionTemplate`${value}%` : "100%"
            }}

        >
            {children}
        </motion.div>
    )
}

export default TextReveal


interface ScrollRevealWrapperProps {
    children: React.ReactNode;
    className?: string;
    /** Choose whether the fill happens horizontal or vertical */
    direction?: 'horizontal' | 'vertical';
    /** The color the text starts with */
    baseColor?: string;
    /** The color the text fills with */
    fillColor?: string;
    /** * Framer Motion scroll offsets 
     * For sequential list items, ["start 0.8", "start 0.2"] is a great default.
     * It ensures the animation finishes as the item moves towards the top.
     */
    offset?: UseScrollOptions['offset'];
}

/**
 * A wrapper that provides a reactive CSS variable (--reveal-gradient) 
 * based on scroll position. Children can use this variable for 
 * complex multi-element reveals.
 */
export const ScrollRevealWrapper: React.FC<ScrollRevealWrapperProps> = ({
    children,
    className = '',
    direction = 'horizontal',
    baseColor = '#d1d5db',
    fillColor = '#000000',
    offset = ["start 0.8", "start 0.2"]
}) => {
    const targetRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: offset,
    });

    // Transform scroll progress to a percentage for CSS gradients
    const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

    // Map our simplified direction prop to CSS gradient directions
    const gradientDir = direction === 'vertical' ? 'to bottom' : 'to right';

    return (
        <motion.div
            ref={targetRef}
            className={className}
            style={{
                // We pass the gradient logic as a CSS variable to all children.
                // Children must have 'bg-clip-text text-transparent' to see the effect.
                // @ts-ignore - Custom CSS variable
                '--reveal-gradient': useTransform(
                    progress,
                    (v) => `linear-gradient(${gradientDir}, ${fillColor} ${v}%, ${baseColor} ${v}%)`
                ),
            }}
        >
            {children}
        </motion.div>
    );
};


export const RevealText = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div
        className={`bg-clip-text text-transparent transition-colors group-hover/journeyCard:text-foreground inline-block ${className}`}
        style={{ backgroundImage: 'var(--reveal-gradient)' }}
    >
        {children}
    </div>
);

