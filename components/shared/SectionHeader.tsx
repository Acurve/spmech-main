import { ReactNode } from 'react'
import { Text } from '../typography/Text'
import { cn } from '@/lib/utils'

type SectionHeaderProps = {
    className?: string,
    heading: string | ReactNode,
    eyeBrow?: string,
    description?: string,
    descriptionContainerClassName?: string,
    descriptionTextClassName?: string,
}

const SectionHeader = ({ className = "", heading, eyeBrow = "", description = "",descriptionContainerClassName="", descriptionTextClassName="" }: SectionHeaderProps) => {
    return (
        <div className={cn(" grid grid-cols-1 md:grid-cols-12 gap-8",className)} >
            <div className="md:col-span-8 flex flex-col gap-2">
                {eyeBrow && 
                <Text as='span' size='sm'>{eyeBrow}</Text>
                }
                <Text as='h2' size='2xl' className="font-medium tracking-tighter leading-[0.9] ">
                    {heading}
                </Text>
            </div>
            <div className={cn("md:col-span-4 flex flex-col justify-end items-start md:items-end",descriptionContainerClassName)}>
                <Text size='base' className={cn("font-medium leading-snug max-w-sm md:text-right",descriptionTextClassName)}>
                    {description}
                </Text>
            </div>
        </div>
    )
}

export default SectionHeader
