import { RevealText, ScrollRevealWrapper } from '@/components/animations/TextReveal'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import SectionHeader from '@/components/shared/SectionHeader'
import { Text } from '@/components/typography/Text'
import { cn } from '@/lib/utils'
import { ManufacturerTimeline } from '@/types/manufacturer'
import { IconTriangleFilled } from '@tabler/icons-react'

type SingleJourneyCardProps = {
    snap: Snap,
    className?: string,
}

const SingleJourneyCard = ({ className, snap }: SingleJourneyCardProps) => {
    return (
        <ScrollRevealWrapper direction='vertical' offset={["start 0.6", "start 0.4"]}>

            <div className={cn("relative w-max flex gap-12 md:gap-24 group/journeyCard", className)}>
                <div className='relative flex flex-col justify-around'>
                    {/* Base Layer (Faded) */}
                    <div className='flex flex-col justify-around text-muted-foreground/20 h-full'>
                        <IconTriangleFilled className='rotate-180' />
                        <IconTriangleFilled className='rotate-180' />
                        <IconTriangleFilled className='rotate-180' />
                    </div>

                    {/* Fill Layer (Primary) revealed by scroll */}
                    <div
                        className='absolute inset-0 flex flex-col justify-around text-primary h-full transition-all duration-75 ease-linear'
                        style={{
                            clipPath: 'polygon(0% 0%, 100% 0%, 100% var(--reveal-progress, 0%), 0% var(--reveal-progress, 0%))'
                        }}
                    >
                        <IconTriangleFilled className='rotate-180' />
                        <IconTriangleFilled className='rotate-180' />
                        <IconTriangleFilled className='rotate-180' />
                    </div>
                </div>
                <RevealText className='py-12'>

                    <div className='flex flex-col'>

                        <Text as='span' size='sm' className='font-medium'>year</Text>
                        <Text as='span' size='2xl' className='font-medium'>{snap.year}</Text>
                    </div>
                </RevealText>
                <div className=' relative flex items-center py-12'>
                    <RevealText>

                        <Text as='p' size='base' className='font-medium w-48 sm:w-sm lg:w-lg'>{snap.message}</Text>
                    </RevealText>
                </div>
                <div className="absolute hidden lg:flex aspect-square justify-end w-max left-full transition-opacity duration-500 ml-8 -translate-y-[40%] group-hover/journeyCard:opacity-100 opacity-0 rounded-2xl overflow-hidden">
                    <img src={snap.imageUrl} alt="" className='w-120  object-contain bg-border' />
                </div>
            </div>
        </ScrollRevealWrapper>
    )
}


export type Snap = ManufacturerTimeline // snapshot of the journey

type JourneyProps = {
    timeline: Snap[]
}
const Journey = ({ timeline }: JourneyProps) => {
    return (
        <Section className=''>
            <Container>
                <div className='space-y-16  relative'>
                    <SectionHeader heading="Our history" eyeBrow='_journey' />

                    <div className='mb-16'>

                        {
                            timeline.map((snap, index) => (

                                <SingleJourneyCard
                                    key={`journey-${index}`}
                                    className='text-muted-foreground/20'
                                    snap={snap}

                                />
                            ))
                        }
                    </div>
                </div>
            </Container>

        </Section>
    )
}

export default Journey
