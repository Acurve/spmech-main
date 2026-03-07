"use client"

import { Text } from "@/components/typography/Text"
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
    icon?: ReactNode,
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
        <div ref={ref} className="text-center flex flex-col gap-2">
            <div className=" flex justify-center text-primary w-24  mx-auto">
                {icon}
            </div>
            <Text as="span" size="3xl" className="font-medium leading-none text-brand hidden md:block">
                <motion.span>
                    {formatted}
                </motion.span>
                <motion.span>
                    {suffix}
                </motion.span>
            </Text>
            <Text as="span" size="4xl" className="font-medium leading-none text-brand md:hidden">
                <motion.span>
                    {formatted}
                </motion.span>
                <motion.span>
                    {suffix}
                </motion.span>
            </Text>
            <Text as="span" size="2xl" className="font-medium text-primary hidden md:block">{label}</Text>
            <Text as="span" size="4xl" className="font-medium text-primary md:hidden">{label}</Text>
        </div>
    )
}
export default StatItem