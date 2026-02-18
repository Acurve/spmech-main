import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import { PX24, PX30, PX50 } from '@/components/typography/TextSize'

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
            <PX30 className='font-medium absolute z-3 bottom-8 left-8 text-white'>{text}</PX30>
        </div>
    )
}

const Differentiator = () => {
    return (
        <Section className='sm:mt-30 mt-20 min-h-max'>
            <Container className='xl:px-27'>
                <div className='space-y-8 md:space-y-20'>
                    <div className='hidden md:block'>
                        <PX50 className='leading-[1.2] font-medium text-end mr-12'>Designed for Precision,</PX50>
                        <PX50 className='leading-[1.2] font-medium text-end mr-12'>Built for Performance</PX50>
                    </div>
                    <div className='hidden min-[440px]:block md:hidden'>
                        <PX30 tag='h2' className='leading-[1.2] font-bold min-[500px]:text-end'>Designed for Precision,</PX30>
                        <PX30 tag='h2' className='leading-[1.2] font-bold min-[500px]:text-end'>Built for Performance</PX30>
                    </div>
                    <div className='block min-[440px]:hidden'>
                        <PX24 tag='h2' className='leading-[1.2] font-bold'>Designed for Precision,</PX24>
                        <PX24 tag='h2' className='leading-[1.2] font-bold'>Built for Performance</PX24>
                    </div>
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
