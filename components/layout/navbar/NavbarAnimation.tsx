"use client"

import { useHeroVideoState } from "@/contexts/heroVideoContext"
import { useTabletNavigation } from "@/contexts/tabletNavigationContext"
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { PropsWithChildren, useState } from "react"



const NavbarAnimation = ({ children }: PropsWithChildren) => {
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)
    const { isOpen } = useTabletNavigation()
    const { currentImg } = useHeroVideoState()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0

        if (!isOpen) {

            // scroll down even 1px → hide
            if (latest > previous) {
                setHidden(true)
            }

            // scroll up → show
            if (latest < previous) {
                setHidden(false)
            }
        }
    })
    return (
        <motion.div
            variants={{
                visible: { y: 0 },
                hidden: { y: "-128px" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed w-full z-100 ${currentImg ? "bg-transparent" : "bg-primary-lighter"}`}
        >
            {children}
        </motion.div>
    )
}

export default NavbarAnimation
