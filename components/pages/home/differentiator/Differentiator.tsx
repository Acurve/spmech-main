import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import SectionHeader from '@/components/shared/SectionHeader'
import { Text } from '@/components/typography/Text'

type DifferentiatorImageContainerProps = {
    imageSrc: string,
    altText: string,
    text?: string
}
const DifferentiatorImageContainer = ({ imageSrc, altText, text = "" }: DifferentiatorImageContainerProps) => {
    return (
        <div className='relative rounded-2xl w-full aspect-video md:aspect-6/5 overflow-hidden '>
            <div className="absolute w-full h-full bg-linear-to-b from-transparent via-transparent to-black z-2" />
            <img src={imageSrc} alt={altText} className='absolute bg-primary-light w-full h-full object-cover z-1' />
            <Text as='span' size='lg' className='font-medium absolute z-3 bottom-8 left-8 text-white'>{text}</Text>
        </div>
    )
}

const Differentiator = () => {
    return (
        <Section className='sm:mt-30 mt-20 min-h-max'>
            <Container className='xl:px-27-'>
                <div className='space-y-8 md:space-y-16'>
                    <div className=''>
                        <SectionHeader heading="" eyeBrow='_differentiator' className='flex justify-end -mr-4' />
                        <Text as='h2' size='2xl' className='text-end leading-[1.2] font-medium'>
                            Designed for <span className='text-brand'>Precision,</span><br />
                            Built for <span className='text-brand'>Performance</span>
                        </Text>
                    </div>
                    {/* <div className='hidden min-[440px]:block md:hidden'>
                        <Text as='h2' size='lg' className='leading-[1.2] font-bold min-[500px]:text-end flex flex-col'>

                        <span>Designed for Precision,</span>
                        <span>Built for Performance</span>
                        </Text>
                    </div> */}
                    
                    <div className='grid md:grid-cols-2 gap-8'>
                        <DifferentiatorImageContainer imageSrc='images/offers/offer_1.webp' altText='CNC Image' text='Precision' />
                        <DifferentiatorImageContainer imageSrc='images/offers/offer_2.webp' altText='CNC Image' text='Performance' />
                    </div>
                </div>
            </Container>

        </Section>
    )
}

export default Differentiator
