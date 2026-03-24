"use client"
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { useEffect, useRef, useState } from 'react'
import type { Benefits } from '@/constants/benefits'
import benefits from '@/constants/benefits'
import BackgroundVideo from '@/components/shared/BackgroundVideo'
import { cn } from '@/lib/utils'
import { useInView } from 'motion/react'
import { Text } from '@/components/typography/Text'
import SectionHeader from '@/components/shared/SectionHeader'


type Benefit = Pick<Benefits, "id" | "description" | "heading" | "mainBenefitStat" | "icon">
type CardContainerProps = {
    benefits: Benefit[],
    className?: string,
    changeActiveIndex: (activeIndex: number) => void
}



const CardItem = ({
    benefit,
    index,
    changeActiveIndex,
    className
}: {
    benefit: Benefit
    index: number
    changeActiveIndex: (i: number) => void
    className?: string
}) => {
    const ref = useRef<HTMLDivElement>(null)

    const isInView = useInView(ref, {
        amount: 0.6, // 80% visible = active
    })

    useEffect(() => {
        if (isInView) {
            changeActiveIndex(index)
        }
    }, [isInView, index, changeActiveIndex])

    return (
        <div className={cn("h-[150dvh]", className)}>
            <div ref={ref} className="h-dvh flex items-center sticky top-0">
                <div
                    className={cn(
                        `
        lg:w-140 w-102
        p-8 lg:p-10
        rounded-2xl
        flex flex-col gap-6
        transition-all duration-300
        `,
                        className
                    )}
                >

                    {/* Heading */}
                    <Text
                        as="h3"
                        size="lg"
                        className="font-semibold leading-tight tracking-tight flex items-center gap-2 capitalize text-foreground"
                    >
                        <benefit.icon />
                        {benefit.heading}
                    </Text>

                    {/* Stat */}
                    <Text
                        size="2xl"
                        className="font-bold tracking-tight text-brand"
                    >
                        {benefit.mainBenefitStat}
                    </Text>

                    {/* Description */}
                    <Text
                        size="base"
                        className="leading-relaxed max-w-prose"
                    >
                        {/* <TypewriterEffect delay={0} speed={0}> */}

                        {benefit.description}
                        {/* </TypewriterEffect> */}
                    </Text>
                </div>
            </div>
        </div>
    )
}

const CardContainer = ({
    benefits,
    changeActiveIndex,
    className = "",
}: CardContainerProps) => {
    return (
        <div className={className}>
            {benefits.map((benefit, index) => (
                <CardItem
                    key={benefit.id}
                    benefit={benefit}
                    index={index}
                    changeActiveIndex={changeActiveIndex}
                />
            ))}
        </div>
    )
}

type Item = Pick<Benefits, "id" | "videoSrc">

type CarouselContainerProps = {
    items: Item[],
    className?: string
    activeIndex: number,
}



const CarouselContainer = ({ items, activeIndex, className = "" }: CarouselContainerProps) => {
    const [api, setApi] = useState<CarouselApi>()
    useEffect(() => {
        if (!api) return
        api.scrollTo(activeIndex, false)
    }, [activeIndex, api])

    return (
        <div className={cn('relative', className)}>
            <div className="h-max w-full sticky top-12">
                <Carousel
                    setApi={setApi}
                    opts={{ watchDrag: false }}
                >

                    <CarouselContent className='h-[calc(100dvh-48px-48px)]'>
                        {
                            items.map((item) => (
                                <CarouselItem key={item.id} className='flex w-full'>
                                    <div className='w-full rounded-2xl overflow-hidden  relative'>
                                        <BackgroundVideo videoSrc={item.videoSrc} className='border-2' withOverLay withPlayPauseBtn />
                                    </div>
                                </CarouselItem>
                            ))
                        }

                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}

const DesktopBenefits = ({ className }: { className?: string }) => {


    const carouselItems = benefits.map((benefit) => ({ id: benefit.id, videoSrc: benefit.videoSrc }))
    const cardItems = benefits.map(({ id, description, mainBenefitStat, heading, icon, videoSrc }) => ({ id, heading, mainBenefitStat, description, icon, videoSrc }))
    const [activeIndex, setActiveIndex] = useState<number>(0)
    return (
        <Section className={cn("bg-border mt-24", className)}>
            <Container className='space-y-16'>

                <SectionHeader
                    eyeBrow='_benefits'
                    heading={<>Even more reason to <br className="hidden md:block" /> consider SP &nbsp;Engineering</>}
                />

                <div className='grid grid-cols-2'>
                    <CardContainer changeActiveIndex={setActiveIndex} className='pr-8' benefits={cardItems} />
                    <CarouselContainer activeIndex={activeIndex} items={carouselItems} />
                </div>
            </Container>
        </Section>
    )
}

export default DesktopBenefits
