import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ImageParallax from '@/components/animations/ImageParallax'
import {  Text } from '@/components/typography/Text'
import { easeSectionDescription, easeSectionHeading } from '@/constants/ease'

const Ease = () => {
    return (
        <Section className='min-h-max mt-20 lg:mt-40'>
            <Container>
                <div className='grid md:grid-cols-2 gap-14'>
                    <ImageParallax imageSrc='images/ease.webp' className='max-h-160' />
                    <div className='flex items-center'>
                        <div className='space-y-7'>

                            <Text as='h2' size='2xl' className='font-medium leading-[1.1]'>{easeSectionHeading}</Text>
                            <Text size="base" className='font-medium'>{easeSectionDescription}</Text>
                        </div>
                    </div>
                </div>
            </Container>

        </Section>
    )
}

export default Ease
