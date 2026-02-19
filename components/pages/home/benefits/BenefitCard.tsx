import { PX18, PX24, PX30, PX50 } from "@/components/typography/TextSize"
import { Benefits } from "@/constants/benefits"
import { cn } from "@/lib/utils"

type BenefitCardProps = Pick<Benefits,
    "heading" | "mainBenefitStat" | "description"
> & { className?: string }

const BenefitCard = ({ heading, description, mainBenefitStat, className = "" }: BenefitCardProps) => {
    return (
        <>
            <div className={cn('p-6 lg:w-140 w-102 bg-white rounded-xl md:flex flex-col gap-4 hidden', className)}>
                <PX30 className='font-medium capitalize'>{heading}</PX30>
                <PX50 className='font-bold text-primary-orange'>{mainBenefitStat}</PX50>
                <PX18 className='font-medium'>{description}</PX18>
            </div>
            <div className={cn('p-6 lg:w-140 w-102 bg-white rounded-xl flex flex-col md:hidden gap-4', className)}>
                <PX24 className='font-medium capitalize'>{heading}</PX24>
                <PX30 className='font-bold text-primary-orange'>{mainBenefitStat}</PX30>
                <PX18 className='font-medium'>{description}</PX18>
            </div>
        </>
    )
}

export default BenefitCard
