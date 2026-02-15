import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ImageParallax from '@/components/animations/ImageParallax'
import { PX18, PX30, PX50 } from '@/components/typography/TextSize'
import { easeSectionDescription, easeSectionHeading } from '@/constants/ease'

const Ease = () => {
    return (
        <Section className='min-h-max mt-20 lg:mt-40'>
            <Container>
                <div className='grid md:grid-cols-2 gap-14'>
                    <ImageParallax imageSrc='images/ease.webp' className='max-h-160' />
                    <div className='flex items-center'>
                        <div className='space-y-7'>

                            <PX50 className='font-medium leading-[1.1] hidden lg:block'>{easeSectionHeading}</PX50>
                            <PX30 className='font-semibold leading-[1.1] md:text-[36px] block lg:hidden'>{easeSectionHeading}</PX30>
                            <PX18 className='font-medium'>{easeSectionDescription}</PX18>
                        </div>
                    </div>
                </div>
            </Container>

        </Section>
    )
}

export default Ease
