"use client"
import { motion } from 'motion/react'
import { default as SPMechLogoAnimation } from '../animations/SPMechLogo'

const FirstLoader = () => {
    return (
        <motion.div
            initial={{
                translateY: 0
            }}
            animate={{
                translateY: "-100%",
                transition: {
                    delay: 2.5,
                    duration: 0.5,
                    ease: "easeInOut"
                }
            }}
            className='fixed w-dvw h-dvh bg-white z-1000 flex items-center justify-center'
        >
            <SPMechLogoAnimation />
        </motion.div>
    )
}

export default FirstLoader
