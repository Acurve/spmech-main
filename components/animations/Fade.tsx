"use client"

import { ReactNode, useRef } from "react"
import { motion, useInView, type Easing } from "motion/react"
import type { HTMLMotionProps } from "motion/react"
import { cn } from "@/lib/utils"

type FadeProps = {
  from: "up" | "down" | "right" | "left"
  duration?: number
  delay?: number
  distance?: number
  children: ReactNode
  className?: string
  triggerOnce?: boolean
  threshold?: number
  ease?: Easing
} & HTMLMotionProps<"div">

const Fade = ({
  from,
  duration = 0.6,
  delay = 0,
  distance = 30,
  children,
  className,
  triggerOnce = false,
  threshold = 0.1,
  ease = "easeOut",
  ...rest
}: FadeProps) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const isInView = useInView(ref, {
    once: triggerOnce,
    amount: threshold
  })

  const getInitialPosition = () => {
    switch (from) {
      case "up":
        return { y: -distance, opacity: 0 }
      case "down":
        return { y: distance, opacity: 0 }
      case "right":
        return { x: -distance, opacity: 0 }
      case "left":
        return { x: distance, opacity: 0 }
      default:
        return { opacity: 0 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease
      }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export default Fade