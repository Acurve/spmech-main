"use client"

import { PX18, PX50 } from "@/components/typography/TextSize"
import {
    motion,
    useInView,
    useMotionValue,
    useTransform,
    animate
} from "motion/react"
import { ReactNode, useEffect, useRef } from "react"

export type StatItemProps = {
    value: number
    label: string,
    icon: ReactNode,
    suffix?: string
    duration?: number
    decimals?: number
}

const StatItem = ({
    value,
    label,
    suffix = "",
    duration = 1.5,
    decimals = 0,
    icon
}: StatItemProps) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(ref, { once: true })

    const count = useMotionValue(0)

    const formatted = useTransform(count, latest =>
        latest.toFixed(decimals)
    )

    useEffect(() => {
        if (isInView) {
            animate(count, value, {
                duration,
                ease: "easeOut"
            })
        }
    }, [isInView, value, duration, count])

    return (
        <div ref={ref} className="text-center space-y-6">
            <div className=" flex justify-center w-28  mx-auto">
                {icon}
            </div>
            <PX50 className="font-bold leading-none">
                <motion.span>
                    {formatted}
                </motion.span>
                <motion.span>
                    {suffix}
                </motion.span>
            </PX50>
            <div className="w-12 h-1 bg-primary-orange mx-auto" />
            <PX18 className="font-medium">{label}</PX18>
        </div>
    )
}
export default StatItem
