import { cn } from '@/lib/utils'
import { HTMLAttributes, PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
    className?: string
} & HTMLAttributes<HTMLDivElement>>

const Section = ({ children, className = "", ...sectionProps }: SectionProps) => {
    return (
        <div
            {...sectionProps}
            className={cn("min-h-screen py-16", className)}
        >
            {children}
        </div>
    )
}

export default Section
