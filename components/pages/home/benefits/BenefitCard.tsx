import { Text } from "@/components/typography/Text"
import { Benefits } from "@/constants/benefits"
import { cn } from "@/lib/utils"

type BenefitCardProps = Pick<Benefits,
    "heading" | "mainBenefitStat" | "description"
> & { className?: string }

const BenefitCard = ({ heading, description, mainBenefitStat, className = "" }: BenefitCardProps) => {
    return (
        <>
            <div className={cn('p-6 lg:w-140 w-102 bg-background rounded-xl flex flex-col gap-4', className)}>
                <Text as="h3" size="lg" className='font-medium capitalize'>{heading}</Text>
                <Text size="xl" className='font-bold'>{mainBenefitStat}</Text>
                <Text size="base" className='font-medium'>{description}</Text>
            </div>

        </>
    )
}

export default BenefitCard