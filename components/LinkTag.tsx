"use client"

import { HTMLAttributes, PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'


type LinkVariant =
    | "hover-underline"
    | "hover-underline-white"
    | "button-black"
    | "button-primary"
    | "button-outline"
    | "custom"

type LinkTagProps = PropsWithChildren<{
    className?: string,
    variant?: LinkVariant,
    href?: string,
    notLink?: boolean
} & HTMLAttributes<HTMLAnchorElement>>

const common = {
    base: {

        button: "h-[52px] px-6 rounded-full flex items-center transition-all duration-500 w-max",
        link: "",
        underLineLink: `
        relative 
        
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
        after:transform-gpu
        `
    },
    hover: {
        button: "",
        link: "",
        underLineLink: `
            hover:after:origin-left 
            hover:after:scale-x-100
        `
    }
}

const variantClasses: Record<LinkVariant, {
    base?: string
    hover?: string
    active?: string
}> = {
    custom: {},

    "hover-underline": {
        base: `text-primary-light ${common.base.underLineLink}`,
        hover: `hover:text-black ${common.hover.underLineLink}`,
        active: "after:scale-x-100 text-black!"
    },
    "hover-underline-white": {
        base: `text-white ${common.base.underLineLink}`,
        hover: `${common.hover.underLineLink}`,
        active: "after:scale-x-100"
    },

    "button-outline": {
        base: `${common.base.button} border border-primary-foreground text-primary-foreground`,
        hover: "hover:bg-primary-foreground hover:text-white",
        active: "bg-primary-foreground text-white"
    },

    "button-primary": {
        base: `${common.base.button} text-white bg-primary-orange`,
        hover: "hover:bg-primary-foreground hover:text-white",
        active: "bg-primary-foreground text-white"
    },
    "button-black": {
        base: `${common.base.button} text-white bg-primary-foreground`,
        hover: "",
        active: ""
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
