"use client"
import { motion, useMotionTemplate, useScroll, UseScrollOptions, useTransform, } from "motion/react"
import { PropsWithChildren, useRef } from "react"

type TextRevealProps = PropsWithChildren<{
    offset?: UseScrollOptions["offset"]
}>

const TextReveal = ({ children, offset = ["start end", "center"] }: TextRevealProps) => {

    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset
    })


    const value = useTransform(scrollYProgress, [0, 1], [0, 100])
    return (
        <motion.div
            ref={ref}
            className='bg-black bg-clip-text'
            style={{ width: useMotionTemplate`${value}%` }}

        >
            {children}
        </motion.div>
    )
}

export default TextReveal