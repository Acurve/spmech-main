import LordiconAnimation from '@/components/animations/LordIconAnimation'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import { PX18, PX24, PX30, PX50 } from '@/components/typography/TextSize'
import { ReactNode } from 'react'
import Target from "@/public/icons/target.json"
import Ease from "@/public/icons/ease.json"
import Expand from "@/public/icons/expand.json"

const FeatureIcon = ({ icon, text }: { icon: ReactNode, text: string }) => {
    return (
        <div className='space-y-2 text-center'>
            <div className='w-24 aspect-square rounded-4xl border-primary-orange border flex items-center justify-center'>
                {icon}
            </div>
            <PX18 className='font-medium' >{text}</PX18>
        </div>
    )
}

type DifferentiatorImageContainerProps = {
    imageSrc: string,
    altText: string,
    text?: string
}
const DifferentiatorImageContainer = ({ imageSrc, altText, text = "" }: DifferentiatorImageContainerProps) => {
    return (
        <div className='relative rounded-2xl w-full aspect-video md:aspect-6/5 overflow-hidden'>
            <div className="absolute w-full h-full bg-linear-to-b from-transparent via-transparent to-black z-2" />
            <img src={imageSrc} alt={altText} className='absolute bg-primary-foreground w-full h-full object-cover z-1' />
            <PX30 className='font-medium absolute z-3 bottom-8 left-8 text-white'>{text}</PX30>
        </div>
    )
}

const Features = () => {
    return (
        <Section className='min-h-max! mt-10 mb-20'>
            <Container className='px-0! md:px-8!'>
                <div className='space-y-16'>
                    {/* Feature icons block */}
                    <div className='bg-primary-foreground rounded-3xl p-12 md:px-19 md:py-40'>
                        <div className='grid min-[1100px]:grid-cols-2 grid-cols-1 gap-16 min-[1100px]:gap-0 items-center'>

                            <div className='md:block hidden'>
                                <PX50 className='font-medium text-white leading-[1.2] text-center min-[1100px]:text-start'>Designed for Precision, <br /> Built for Performance.</PX50>
                            </div>
                            <div className='block md:hidden'>
                                <PX30 className='font-medium text-white leading-[1.2] text-center'>Designed for Precision, Built for Performance.</PX30>
                            </div>
                            <div className='flex justify-center text-white flex-col sm:flex-row items-center gap-10 sm:gap-16 min-[1100px]:gap-8'>
                                <FeatureIcon text='Precision' icon={<LordiconAnimation icon={Target} delay={0} interval={2000} />} />
                                <FeatureIcon text='Capacity' icon={<LordiconAnimation icon={Expand} delay={0} interval={2000} />} />
                                <FeatureIcon text='Ease' icon={<LordiconAnimation icon={Ease} delay={0} interval={2000}/>} />
                            </div>
                        </div>
                    </div>

                    {/* Differentiator images */}
                    <div className='px-4 md:px-0'>
                        <div className='grid md:grid-cols-2 gap-8'>
                            <DifferentiatorImageContainer imageSrc='images/offers/offer_1.webp' altText='CNC precision machining' text='Precision' />
                            <DifferentiatorImageContainer imageSrc='images/offers/offer_2.webp' altText='CNC high-performance output' text='Performance' />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Features
