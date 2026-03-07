"use client"
import { motion } from "motion/react"
import SPMechLogoAnimation from "../animations/SPMechLogo"

const FirstLoader = () => {
    return (
        <motion.div
            initial={{ translateY: 0 }}
            exit={{
                translateY: "-100%",
                transition: {
                    duration: 0.6,
                    ease: "easeInOut",
                },
            }}
            className="fixed w-dvw h-dvh bg-white z-1000 flex items-center justify-center"
        >
            <SPMechLogoAnimation />
        </motion.div>

    )
}

export default FirstLoader