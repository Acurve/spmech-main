import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ImageParallax from '@/components/animations/ImageParallax'
import { PX16, PX18, PX30, PX50 } from '@/components/typography/TextSize'
import { IconCertificate, IconWorld, IconShieldCheck, IconHeadset } from '@tabler/icons-react'

const trustPoints = [
    {
        icon: <IconCertificate size={28} className='text-primary-orange' />,
        title: 'ISO Certified',
        description: 'Our manufacturing processes meet international quality standards, ensuring every machine is built to last.',
    },
    {
        icon: <IconWorld size={28} className='text-primary-orange' />,
        title: 'Global Installations',
        description: '200+ machines installed across 12 countries, serving the hinge and lock hardware industry worldwide.',
    },
    {
        icon: <IconShieldCheck size={28} className='text-primary-orange' />,
        title: 'Quality Guaranteed',
        description: 'Every machine undergoes rigorous testing and quality checks before leaving our facility in Jamnagar.',
    },
    {
        icon: <IconHeadset size={28} className='text-primary-orange' />,
        title: 'Dedicated Support',
        description: 'On-site installation, operator training, and ongoing maintenance support to keep your production running.',
    },
]

const Ease = () => {
    return (
        <Section className='min-h-max mt-20 lg:mt-40'>
            <Container>
                <div className='grid md:grid-cols-2 gap-14'>
                    <ImageParallax imageSrc='images/ease.webp' className='max-h-160' />
                    <div className='flex items-center'>
                        <div className='space-y-10'>
                            <div className='space-y-4'>
                                <PX18 className='font-bold text-primary-orange'>Why Manufacturers Trust Us</PX18>
                                <PX50 className='font-medium leading-[1.1] hidden lg:block'>Built on reliability, backed by results</PX50>
                                <PX30 className='font-semibold leading-[1.1] md:text-[36px] block lg:hidden'>Built on reliability, backed by results</PX30>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                                {trustPoints.map((point, index) => (
                                    <div key={index} className='space-y-3'>
                                        <div className='flex items-center gap-3'>
                                            <div className='w-10 h-10 rounded-xl bg-primary-orange/10 flex items-center justify-center shrink-0'>
                                                {point.icon}
                                            </div>
                                            <PX16 className='font-bold'>{point.title}</PX16>
                                        </div>
                                        <PX16 className='text-muted-foreground leading-relaxed'>{point.description}</PX16>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Ease
