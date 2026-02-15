"use client"

import { HTMLAttributes, PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'


type LinkVariant =
    | "hover-button-primary"
    | "hover-button-black"
    | "hover-underline"
    | "hover-primary-color"
    | "button-black"
    | "custom"

type LinkTagProps = PropsWithChildren<{
    className?: string,
    variant?: LinkVariant,
    href?: string,
    notLink?: boolean
} & HTMLAttributes<HTMLAnchorElement>>

const variantClasses: Record<LinkVariant, {
    base?: string
    hover?: string
    active?: string
}> = {
    custom: {},

    "hover-underline": {
        base: `
            relative 
            text-primary-light
            transition-all
            duration-500
            after:absolute 
            after:left-0 
            after:right-0 
            after:-bottom-1.5   
            after:h-[1.5px] 
            after:w-full 
            after:origin-right  
            after:scale-x-0  
            after:bg-current 
            after:transition-transform  
            after:duration-500 
            after:will-change-transform 
            after:transform-gpu`,
        hover: `
            hover:text-black
            hover:after:origin-left 
            hover:after:scale-x-100
            `,
        active: "after:scale-x-100 text-black!"
    },

    "hover-primary-color": {
        base: "transition-all duration-500",
        hover: "hover:text-primary",
        active: "text-primary"
    },

    "hover-button-primary": {
        base: "h-[52px] px-6 rounded-4xl overflow-hidde flex items-center transition-all duration-500 w-max border border-primary text-primary bg-white",
        hover: "hover:bg-primary hover:text-white",
        active: "bg-primary text-white"
    },

    "hover-button-black": {
        base: "h-[52px] px-6 rounded-full flex items-center transition-all duration-500 w-max border border-primary-foreground text-primary-foreground",
        hover: "hover:bg-primary-foreground hover:text-white",
        active: "bg-primary-foreground text-white"
    },

    "button-black": {
        base: "h-[52px] px-6 rounded-full flex items-center transition-all duration-500 w-max text-white bg-primary-foreground",
        hover: "hover:bg-primary-foreground",
        active: "bg-primary-foreground text-white"
    }
}

const LinkTag = ({ children, className = "", variant = "hover-underline", href = "", notLink = false, ...anchorProps }: LinkTagProps) => {

    const pathName = usePathname()
    const isActive = pathName === href
    const styles = variantClasses[variant]

    if (notLink) {
        return (
            <span
                {...anchorProps}
                className={cn(
                    "cursor-pointer",
                    className,
                    styles.base,
                    isActive ? styles.active : styles.hover
                )}
            >
                {children}
            </span>
        )
    }

    return (
        <Link
            {...anchorProps}
            href={href}
            className={cn(
                className,
                styles.base,
                isActive ? styles.active : styles.hover
            )}
        >
            {children}
        </Link>
    )
}

export default LinkTag
