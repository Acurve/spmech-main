import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import { cn } from '@/lib/utils'
import { HeroMachineDetails } from '../MachineMain'
import { Text } from '@/components/typography/Text'
import LinkTag from '@/components/LinkTag'
import { IconArrowRight, IconCheck } from '@tabler/icons-react'
import HeroImageContainer from './HeroImageContainer'
import Fade from '@/components/animations/Fade'

type HeroProps = {
    className?: string,
    machineDetails: HeroMachineDetails
}

type MachineAdvantagesProps = {
    className?: string,
    advantages: string[]
}

const MachineAdvantages = ({ advantages, className = "" }: MachineAdvantagesProps) => {
    return (
        <div className={cn("flex flex-col gap-4", className)}>
            <Fade from='down' delay={0.4}>
                <Text as='span' size='sm' className='font-bold uppercase tracking-widest text-gray-400'>
                    Key Advantages
                </Text>
            </Fade>
            <ul className={"grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6"}>
                {advantages.map((adv, index) => (
                    <Fade from='down' delay={0.5 + (index * 0.1)} key={`${adv}-${index}`}>
                        <li>
                            <div className='flex items-start gap-3 group'>
                                <span className='flex-none mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white'>
                                    <IconCheck size={14} className='stroke-3' />
                                </span>
                                <Text as='span' size='sm' className='font-medium text-gray-700 leading-snug'>
                                    {adv}
                                </Text>
                            </div>
                        </li>
                    </Fade>
                ))}
            </ul>
        </div>
    )
}

const HeroCTA = ({ className = "" }: { className?: string }) => {
    return (
        <Fade from='down' delay={0.8} className='mt-auto pt-4'>
            <div className={cn('gap-5 flex flex-col sm:flex-row xl:w-4/5', className)}>
                <LinkTag 
                    href='/contact' 
                    variant='custom' 
                    className="group relative flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-brand px-8 text-white transition-all duration-300 hover:shadow-[0_8px_25px_rgb(249,115,22,0.35)] hover:-translate-y-1 sm:flex-1"
                >
                    <span className="absolute inset-0 w-full h-full -ml-[100%] bg-white/20 transition-all duration-500 group-hover:ml-[100%]" />
                    <Text as='span' size='base' className='font-semibold tracking-wide z-10'>
                        Start Project
                    </Text>
                    <IconArrowRight className="w-5 h-5 z-10 transition-transform duration-300 group-hover:translate-x-1" />
                </LinkTag>
                
                <a 
                    href='#machine-video' 
                    className='group flex h-14 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 transition-all duration-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white sm:flex-1' 
                >
                    <Text as='span' size='base' className='font-medium tracking-wide'>
                        Watch Demo
                    </Text>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current opacity-70 transition-all group-hover:opacity-100">
                        <IconArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:-rotate-45" />
                    </span>
                </a>
            </div>
        </Fade>
    )
}

type MachineNameAndDescriptionProps = {
    className?: string,
    name: string,
    description?: string
}

const MachineNameAndDescription = ({ description, name, className = "" }: MachineNameAndDescriptionProps) => {
    return (
        <div className={cn('space-y-6', className)}>
            <Fade from='down' delay={0.1}>
                <Text as='span' size='sm' className='font-bold text-brand uppercase tracking-[0.2em] block'>
                    Precision Series
                </Text>
            </Fade>
            <Fade from='down' delay={0.2}>
                <h1 className='text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]'>
                    {name}
                </h1>
            </Fade>
            <Fade from='down' delay={0.3}>
                <p className='text-lg leading-relaxed text-gray-500 max-w-2xl'>
                    {description}
                </p>
            </Fade>
        </div>
    )
}

const Hero = ({ className = "", machineDetails }: HeroProps) => {
    return (
        <Section className={cn("pt-8 pb-16 lg:py-24", className)}>
            <Container>
                <div className='flex flex-col lg:flex-row gap-12 lg:gap-16'>
                    <HeroImageContainer images={machineDetails.images} />

                    <div className='lg:w-1/2 flex flex-col justify-center'>
                        <div className='flex flex-col gap-10 lg:gap-12 h-full'>
                            <MachineNameAndDescription 
                                name={machineDetails.modelName!} 
                                description={machineDetails.description || 'Engineered for exceptional scale and accuracy. This model represents the pinnacle of modern industrial capability, combining robust materials with advanced smart controls.'} 
                            />

                            {machineDetails.advantages && machineDetails.advantages.length > 0 && (
                                <MachineAdvantages advantages={machineDetails.advantages} />
                            )}

                            <HeroCTA />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Hero
