"use client"

import { useTabletNavigation } from "@/contexts/tabletNavigationContext"
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { PropsWithChildren, useState } from "react"



const NavbarAnimation = ({ children }: PropsWithChildren) => {
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)
    const { isOpen } = useTabletNavigation()

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
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-128px" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed w-full z-100 bg-primary-lighter`}
        >
            {children}
        </motion.nav>
    )
}

export default NavbarAnimation
