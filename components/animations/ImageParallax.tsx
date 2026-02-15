"use client"

import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform, UseScrollOptions } from "motion/react"
import { useRef } from "react"

type ImageParallaxProps = {
    className?: string,
    imageClassName?: string,
    offset?: UseScrollOptions["offset"],
    imageSrc: string,
}

const ImageParallax = ({ className = "", imageClassName = "", offset = ["start end", "end start"], imageSrc }: ImageParallaxProps) => {
    const ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset
    })

    const translateY = useTransform(scrollYProgress, [0, 1], [0, -100])

    return (
        <div ref={ref} className={cn("rounded-2xl flex overflow-hidden", className)}>
            <motion.img
                src={imageSrc}
                alt=""
                className={cn("flex object-cover w-full h-[140%] lg:h-[120%]", imageClassName)}
                style={{ y: translateY }}
            />
        </div>
    )
}

export default ImageParallax
