import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type IconContainerProps = {
    className?: string,
    icon: ReactNode,
}

const IconContainer = ({ className = "", icon }: IconContainerProps) => {
    return (
        <div className={cn('p-0.5 rounded-full bg-brand', className)}>
            {icon}
        </div>
    )
}

export default IconContainer
