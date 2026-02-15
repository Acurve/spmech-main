"use client"
import { ReactNode } from 'react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

type FadeProps = {
    from: "up" | "down" | "right" | "left"
    duration?: number
    delay?: number
    distance?: number
    children: ReactNode
    className?: string
    triggerOnce?: boolean
    threshold?: number
}

const Fade = ({
    from,
    duration = 0.6,
    delay = 0,
    distance = 30,
    children,
    className = "",
    triggerOnce = false,
    threshold = 0.1
}: FadeProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: triggerOnce,
        amount: threshold
    })

    const getInitialPosition = () => {
        switch (from) {
            case 'up':
                return { y: -distance, opacity: 0 }
            case 'down':
                return { y: distance, opacity: 0 }
            case 'right':
                return { x: -distance, opacity: 0 }
            case 'left':
                return { x: distance, opacity: 0 }
            default:
                return { opacity: 0 }
        }
    }

    const getAnimatePosition = () => {
        return { x: 0, y: 0, opacity: 1 }
    }

    return (
        <motion.div
            ref={ref}
            initial={getInitialPosition()}
            animate={isInView ? getAnimatePosition() : getInitialPosition()}
            transition={{
                duration,
                delay,
                ease: "easeOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default Fade