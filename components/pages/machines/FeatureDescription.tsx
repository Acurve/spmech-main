"use client"

import Fade from '@/components/animations/Fade'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import SectionHeader from '@/components/shared/SectionHeader'
import { Text } from '@/components/typography/Text'
import { cn } from '@/lib/utils'
import { IconCheck } from '@tabler/icons-react'

type FeatureDescriptionProps = {
    className?: string,
    features: Record<string, string>,
}

const FeatureDescription = ({ className = "", features }: FeatureDescriptionProps) => {

    // Quick guard to prevent rendering empty sections
    if (!features || Object.keys(features).length === 0) return null;

    return (
        <Section className={cn("py-16 bg-white", className)}>
            <Container>
                <div className='space-y-4'>
                    <Fade from='down'>
                        <SectionHeader heading="Key Features" />
                    </Fade>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {Object.entries(features).map(([title, description], index) => (
                            <Fade
                                key={index}
                                from='up'
                                delay={index * 0.1}
                                className='group flex gap-5 rounded-2xl p-4 bg-background'
                            >
                                <div className='shrink-0 mt-1'>
                                    <div className='w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white'>
                                        <IconCheck className='w-4 h-4' stroke={3} />
                                    </div>
                                </div>
                                <div className='space-y-2'>
                                    <Text as='h3' size='lg' className='font-semibold text-gray-900 group-hover:text-brand transition-colors duration-300 capitalize'>
                                        {title.split("_").join(" ")}
                                    </Text>
                                    <Text as='p' size='base' className='text-gray-500 leading-relaxed font-medium'>
                                        {description}
                                    </Text>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default FeatureDescription
