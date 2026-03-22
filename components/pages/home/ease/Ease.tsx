import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ImageParallax from '@/components/animations/ImageParallax'
import { Text } from '@/components/typography/Text'
import { easeSectionDescription, easeSectionHeading } from '@/constants/ease'

const Ease = () => {
    return (
        <Section className='min-h-max'>
            <Container>
                <div className='grid lg:grid-cols-2 gap-14'>
                    <div className='flex items-center lg:col-start-2'>
                        <div className='space-y-7'>

                            <Text as='h2' size='2xl' className='font-medium leading-[1.1]'>{easeSectionHeading}</Text>
                            <Text size="base" className='font-medium'>{easeSectionDescription}</Text>
                        </div>
                    </div>
                    <ImageParallax imageSrc='images/ease.webp' className='max-h-160 h-120 lg:h-160 lg:col-start-1 lg:row-start-1 w-full' />
                </div>
            </Container>

        </Section>
    )
}

export default Ease
