import LordiconAnimation from '@/components/animations/LordIconAnimation'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import { Text } from '@/components/typography/Text'
import { ReactNode } from 'react'
import Target from "@/public/icons/target.json"
import Ease from "@/public/icons/ease.json"
import Expand from "@/public/icons/expand.json"
import SectionHeader from '@/components/shared/SectionHeader'

const FeatureIcon = ({ icon, text }: { icon: ReactNode, text: string }) => {
    return (
        <div className='space-y-2 text-center'>
            <div className='w-32 aspect-square rounded-4xl border-brand! border flex items-center justify-center'>
                {icon}
            </div>
            <Text as='span' size='base' className='font-medium' >{text}</Text>
        </div>
    )
}

const Features = () => {
    return (
        <Section className='min-h-max mt-24'>
            <Container className='px-0'>
                <div className='bg-primary rounded-3xl p-12 md:px-19 md:py-40'>
                    <div className='grid min-[1100px]:grid-cols-2 grid-cols-1 gap-16 min-[1100px]:gap-0 items-center'>

                        <div className=''>
                            <SectionHeader heading="" eyeBrow='_features' className='text-background/70' />
                            <Text as='h2' size='2xl' className='font-medium text-white leading-[1.2] text-center min-[1100px]:text-start'>
                                More <span className='text-brand'>output</span>,
                                <br />
                                Consistent <span className='text-brand'>quality.</span></Text>
                        </div>

                        <div className='flex justify-center text-white flex-col sm:flex-row items-center gap-10 sm:gap-16 min-[1100px]:gap-8'>
                            <FeatureIcon text='Precision' icon={<LordiconAnimation icon={Target} delay={0} interval={2000} />} />
                            <FeatureIcon text='Capacity' icon={<LordiconAnimation icon={Expand} delay={0} interval={2000} />} />
                            <FeatureIcon text='Ease' icon={<LordiconAnimation icon={Ease} delay={0} interval={2000} />} />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Features
