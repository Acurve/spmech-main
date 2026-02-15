import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import { PX30 } from '@/components/typography/TextSize'
import benefits, { benefitsSectionheading } from '@/constants/benefits'
import { cn } from '@/lib/utils'
import BenefitCard from './BenefitCard'

const TabletBenefits = ({ className = "" }: { className?: string }) => {
  return (
    <Section className={cn("min-h-max", className)}>
      <Container className='rounded-2xl py-10 bg-primary-lighter'>
        <div className='space-y-14'>

          <PX30 className='font-medium leading-[1.2] min-[544px]:w-[60%]'>{benefitsSectionheading}</PX30>
          <div className='space-y-10'>
            {benefits.map((benefit) => (
              <BenefitCard
                key={benefit.id}
                className='w-full shadow-xl '
                heading={benefit.heading}
                description={benefit.description}
                mainBenefitStat={benefit.mainBenefitStat} />
            ))}
          </div>
        </div>
      </Container>

    </Section>
  )
}

export default TabletBenefits
