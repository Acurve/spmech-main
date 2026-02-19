"use client"
import Section from '@/components/layout/Section'
import { PX18, PX30, PX50 } from '@/components/typography/TextSize'
import { motion, useInView, useScroll, useTransform } from 'motion/react'
import { PropsWithChildren, useRef, useState, useEffect } from 'react'
import BenefitCard from './BenefitCard'
import benefits, { benefitsSectionheading } from '@/constants/benefits'
import { cn } from '@/lib/utils'

const CardContainer = ({
    children,
    onVisible,
    src
}: PropsWithChildren<{ onVisible: (src: string) => void, src: string }>) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0, 0, 1, 0, 0])
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            if (latest > 0.1 && latest < 0.9) {
                onVisible(src)
            }
        })

        return () => unsubscribe()
    }, [scrollYProgress, onVisible, src])

    return (
        <div className='relative h-[150dvh]'>

            <Section className='sticky flex justify-center items-center  top-0 h-screen'>
                <motion.div
                    ref={ref}
                    className='ml-auto mr-8'
                    style={{ opacity }}
                >
                    {children}
                </motion.div>
            </Section>
        </div>
    )
}


const DesktopBenefits = ({ className = "" }: { className?: string }) => {
    const [currentSrc, setCurrentSrc] = useState("images/benefits/increase_production.webp")

    return (
        <div>
            <Section className={cn('relative h-[450dvh]', className)}>
                <div className='sticky top-0 h-screen w-full -z-10'>
                    <div className='absolute w-full h-full z-1000 flex items-center'>

                        <PX30 className='w-68 min-[800px]:w-96 text-white ml-8 xl:ml-28 font-bold z-20'>
                            {benefitsSectionheading}
                        </PX30>
                    </div>
                    <div className="relative h-screen">

                        {
                            benefits.map((benefit) => (

                                <img
                                    key={benefit.id}
                                    src={benefit.imageSrc || ""}
                                    alt=""
                                    className='w-full h-full object-cover transition-opacity duration-500 absolute'
                                    style={{
                                        opacity: `${currentSrc === benefit.imageSrc ? 1 : 0}`
                                    }}
                                />
                            ))
                        }
                        <div className="absolute z-10 w-full h-full bg-black/60" />
                    </div>
                </div>

                {/* Scroll hijack content */}
                <div className='absolute inset-0 w-full'>
                    {benefits.map((benefit) => (

                        <CardContainer
                            key={benefit.id}
                            onVisible={setCurrentSrc}
                            src={benefit.imageSrc || ""}>
                            <BenefitCard
                                heading={benefit.heading}
                                description={benefit.description}
                                mainBenefitStat={benefit.mainBenefitStat} />
                        </CardContainer>
                    ))}
                </div>
            </Section>
        </div>
    )
}

export default DesktopBenefits
