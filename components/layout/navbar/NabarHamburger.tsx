"use client"

import { cn } from "@/lib/utils";
import { useTabletNavigation } from "@/contexts/tabletNavigationContext";
const NavbarHamBurger = ({ className = "" }: { className?: string }) => {
    const { isOpen, setIsOpen } = useTabletNavigation();
    return (

        <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn("relative aspect-square border border-black rounded-full h-10 flex flex-col items-center justify-center focus:outline-none group hover:bg-black transition-all duration-300", className)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
        >

            <span
                className={`
              absolute h-0.5 w-6 bg-black rounded-full 
              transition-all duration-300 ease-out transform origin-center group-hover:bg-white
              ${isOpen ? 'rotate-45' : '-translate-y-1 group-hover:-translate-y-1.5 '}
            `}
            />


            <span
                className={`
                absolute h-0.5 w-6 bg-black rounded-full 
                transition-all duration-300 ease-out transform origin-center group-hover:bg-white
                ${isOpen ? '-rotate-45' : 'translate-y-1 group-hover:translate-y-1.5 '}
                `}
            />
        </button>
    )
}

export default NavbarHamBurger;