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
import { Machine } from '@/types/machine'

type SpecificationsProps = {
    className?: string,
    specifications: Machine['specifications'],
    image?: string,
    pdfUrl: string,
}

const SpecificationsTable = ({ className = "", title, specifications }: { className?: string, title?: string, specifications: Record<string, string> }) => {
    return (
        <div className={cn("overflow-hidden w-full", className)}>
            {title && (
                <Fade triggerOnce from='down'>
                    <Text as='h3' size='xl' className='font-semibold tracking-tight mt-8 mb-6 border-b-2 border-brand! pb-2 w-max'>{title}</Text>
                </Fade>
            )}

            <div className="flex border-b border-gray-400! pb-4 mb-2">
                <div className="flex-1">
                    <Fade triggerOnce from='down'>
                        <Text as='span' size='sm' className='font-bold tracking-widest uppercase'>Property</Text>
                    </Fade>
                </div>
                <div className="flex-1 text-right">
                    <Fade triggerOnce from='down'>
                        <Text as='span' size='sm' className='font-bold tracking-widest uppercase'>Value</Text>
                    </Fade>
                </div>
            </div>

            <div className="flex flex-col">
                {Object.keys(specifications).map((spec, index) => (
                    <Fade triggerOnce
                        from='down'
                        className="group grid grid-cols-2 items-start justify-between py-5 border-b border-gray-300! last:border-0 transition-colors duration-300 px-2 -mx-2"
                        delay={index * 0.05}
                        key={index}
                    >
                        <Text as='span' size='base' className="font-medium capitalize transition-colors duration-300 group-hover:text-brand">
                            {spec.split("_").join(" ")}
                        </Text>
                        <Text as="span" size='base' className="font-semibold md:text-lg text-right font-mono tracking-tight transition-colors duration-300 group-hover:text-brand">
                            {specifications[spec]}
                        </Text>
                    </Fade>
                ))}
            </div>
        </div>
    )
}

const Specifications = ({ className = "", specifications, image, pdfUrl }: SpecificationsProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    if (!specifications || Object.keys(specifications).length === 0) return null;

    // Detect if specifications is an object containing nested objects (grouped)
    const isGrouped = Object.values(specifications).some((value) => typeof value === 'object' && value !== null);
    return (
        <Section className={cn("py-16 lg:py-24", className)}>
            <div ref={containerRef}>
                <Container className='overflow-hidden px-0'>
                    <div className=' bg-white relative space-y-12 border border-gray-100 p-8 md:p-12 lg:p-16 rounded-4xl overflow-hidden'>

                        {/* Abstract Grid Pattern Background */}
                        <div
                            className="absolute inset-0 opacity-[0.02] pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}
                        />

                        <div className="relative  z-10 space-y-4">
                            <Fade triggerOnce from='down'>
                                <SectionHeader heading="Technical Specifications" />
                            </Fade>

                            <div className={cn('w-full grid gap-16 grid-cols-1 lg:gap-24', isGrouped ? '' : 'lg:grid-cols-2')}>

                                {/* Render either Grouped specs or Simple specs */}
                                <div className='space-y-8'>


                                    <div className={cn("w-full space-y-8 gap-8", isGrouped ? 'lg:w-full- lg:columns-2' : '')}>
                                        {isGrouped ? (
                                            Object.entries(specifications).map(([groupName, groupSpecs], index) => {
                                                if (typeof groupSpecs !== 'object' || groupSpecs === null) return null;
                                                return (
                                                    <SpecificationsTable
                                                        className='bg-muted p-4 rounded-2xl'
                                                        key={index}
                                                        title={groupName}
                                                        specifications={groupSpecs as Record<string, string>}
                                                    />
                                                )
                                            })
                                        ) : (
                                            <SpecificationsTable
                                                specifications={specifications as Record<string, string>} />
                                        )}

                                    </div>
                                    {/* Table Footer / Note */}
                                    <Fade triggerOnce from='down' delay={0.3} className="flex items-center">
                                        <a href={pdfUrl} download target='_blank' className="group flex items-center gap-4 text-brand font-medium hover:text-orange-600 transition-colors cursor-pointer">
                                            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand/30 bg-brand/5 transition-all duration-300 group-hover:bg-brand group-hover:border-brand text-brand group-hover:text-white">
                                                <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                                            </span>
                                            <Text as='span' size='sm' className='font-semibold tracking-wide uppercase'>
                                                View Full PDF Catalog
                                            </Text>
                                        </a>
                                    </Fade>
                                </div>

                                {/* Outline Image rendering based on layout mode */}
                                {image && (
                                    <Fade triggerOnce from='down' className={cn('w-full h-full relative flex items-center justify-center', isGrouped ? 'lg:w-full bg-white/50 rounded-3xl' : '')}>
                                        <motion.img
                                            src={image}
                                            alt="Machine outline specification"
                                            style={isGrouped ? {} : { y: imageY }}
                                            className='w-full h-full object-cover opacity-60 mix-blend-multiply drop-shadow-xl'
                                        />
                                    </Fade>
                                )}

                            </div>
                        </div>

                    </div>
                </Container>
            </div>
        </Section>
    )
}

export default Specifications
