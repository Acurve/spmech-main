"use client"

import Fade from '@/components/animations/Fade'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import SectionHeader from '@/components/shared/SectionHeader'
import { Text } from '@/components/typography/Text'
import { cn } from '@/lib/utils'
import { IconArrowRight } from '@tabler/icons-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

type SpecificationsProps = {
    className?: string,
    specifications: Record<string, string>,
}

const SpecificationsTable = ({ className = "", specifications }: SpecificationsProps) => {
    return (
        <div className={cn("overflow-hidden w-full", className)}>
            <div className="flex border-b border-gray-200/50 pb-4 mb-2">
                <div className="flex-1">
                    <Fade from='down'>
                        <Text as='span' size='sm' className='font-bold text-gray-400 tracking-widest uppercase'>Property</Text>
                    </Fade>
                </div>
                <div className="flex-1 text-right">
                    <Fade from='down'>
                        <Text as='span' size='sm' className='font-bold text-gray-400 tracking-widest uppercase'>Value</Text>
                    </Fade>
                </div>
            </div>

            <div className="flex flex-col">
                {Object.keys(specifications).map((spec, index) => (
                    <Fade 
                        from='down' 
                        className="group flex items-center justify-between py-5 border-b border-gray-100 last:border-0 transition-colors duration-300 hover:bg-gray-50/50 px-2 -mx-2 rounded-lg" 
                        delay={index * 0.05}
                        key={index}
                    >
                        <Text as='span' size='base' className="text-gray-600 font-medium capitalize transition-colors duration-300 group-hover:text-brand">
                            {spec.split("_").join(" ")}
                        </Text>
                        <Text as="span" size='base' className="text-gray-900 font-semibold md:text-lg text-right font-mono tracking-tight transition-colors duration-300 group-hover:text-brand">
                            {specifications[spec]}
                        </Text>
                    </Fade>
                ))}
            </div>

            {/* Table Footer / Note */}
            <Fade from='up' delay={0.3} className="pt-10 flex items-center">
                <a className="group flex items-center gap-4 text-brand font-medium hover:text-orange-600 transition-colors cursor-pointer">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand/30 bg-brand/5 transition-all duration-300 group-hover:bg-brand group-hover:border-brand text-brand group-hover:text-white">
                        <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                    <Text as='span' size='sm' className='font-semibold tracking-wide uppercase'>
                        Download Full PDF Catalog
                    </Text>
                </a>
            </Fade>
        </div>
    )
}

const Specifications = ({ className = "", specifications, image }: SpecificationsProps & { image: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <Section className={cn("py-16 lg:py-24", className)}>
            <div ref={containerRef}>
                <Container className='overflow-hidden'>
                    <div className='relative space-y-12 bg-gray-50/50 border border-gray-100 p-8 md:p-12 lg:p-16 rounded-[2rem] overflow-hidden'>
                    
                    {/* Abstract Grid Pattern Background */}
                    <div 
                        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}
                    />
                    
                    <div className="relative z-10 space-y-12">
                        <Fade from='down'>
                            <SectionHeader heading="Technical Specifications" className="mb-0" />
                        </Fade>
                        <div className='w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-center'>
                            <SpecificationsTable specifications={specifications} className='w-full lg:w-[55%]' />
                            
                            <Fade from='up' className='w-full lg:w-[45%] lg:flex hidden items-center justify-center relative h-[500px]'>
                                <motion.img 
                                    src={image} 
                                    alt="Machine outline specification" 
                                    style={{ y: imageY }}
                                    className='w-full h-full object-contain opacity-60 mix-blend-multiply drop-shadow-xl' 
                                />
                            </Fade>
                        </div>
                    </div>

                </div>
                </Container>
            </div>
        </Section>
    )
}

export default Specifications
