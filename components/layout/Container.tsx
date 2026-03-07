import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

type ContainerProps = PropsWithChildren<{
    className?: string
}>

const Container = ({ className = "", children }: ContainerProps) => {
    return (
        <div className={cn("px-6 sm:px-12", className)}>
            {children}
        </div>
    )
}

export default Container
