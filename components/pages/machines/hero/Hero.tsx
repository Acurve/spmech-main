import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import { cn } from '@/lib/utils'
import { HeroMachineDetails } from '../MachineMain'
import { Text } from '@/components/typography/Text'
import LinkTag from '@/components/LinkTag'
import {
    ArrowRight,
    Banknote,
    TrendingUp,
    Clock,
    Award,
    ThumbsUp,
    Zap,
    Gauge,
    ShieldCheck
} from 'lucide-react';
import { IconCheck } from '@tabler/icons-react'
import HeroImageContainer from './HeroImageContainer'
import IconContainer from '@/components/shared/IconContainer'

type HeroProps = {
    className?: string,
    machineDetails: HeroMachineDetails
}

type IncludedBenefitsContainerProps = {
    className?: string,
    benefits: string[]
}

const IncludedBenefitsContainer = ({ benefits, className = "" }: IncludedBenefitsContainerProps) => {
    return (
        <div className={cn("flex flex-col gap-3", className)}>
            <Text as='span' size='base' className='font-medium'>Advantages</Text>
            <ul className={"grid grid-cols-2 gap-2"}>
                {

                    benefits.map((benefit, index) => (

                        <li key={`${benefit}-${index}`}>
                            <div className='flex items-center gap-2'>
                                <IconContainer className='p-0 bg-background' icon={<IconCheck size={20} className='text-brand ' />} />
                                <Text as='span' size='sm' className='font-medium text-foreground/80'>{benefit}</Text>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
const HeroCTA = ({ className = "" }: { className?: string }) => {
    return (
        <div className={cn('gap-4 mt-auto flex flex-col sm:flex-row lg:flex-col!', className)}>
            <LinkTag href='/contact' variant='button-brand' className="group relative  gap-3  transition-all duration-200  hover:bg-orange-600 shadow-[0_8px_30px_rgb(249,115,22,0.3)] hover:shadow-[0_8px_30px_rgb(249,115,22,0.5)] hover:-translate-y-0.5 w-full sm:flex-1 lg:flex-none">
                <Text as='span' size='base' className='font-medium'>
                    Start Project
                </Text>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </LinkTag>
            <a href='#machine-video' className='h-12 border border-primary! flex items-center px-6 rounded-full hover:bg-primary hover:text-background transition-all duration-300 justify-center sm:flex-1 lg:flex-none' >
                <Text as='span' size='base' className='font-medium'>
                    Watch Demo
                </Text>
            </a>
        </div>
    )
}


type MachineNameAndDescriptionProps = {
    className?: string,
    name: string,
    description?: string
}
const MachineNameAndDescription = ({ description, name, className = "" }: MachineNameAndDescriptionProps) => {
    return (
        <div className={cn('space-y-4', className)}>

            <Text as='h1' size='custom' className='text-4xl sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-6xl 2xl:text-[68px] min-[1600px]:text-7xl font-semibold text-foreground/80 leading-none tracking-tight'>{name}</Text>
            <Text as='p' size='sm' className='font- text-foregroud/70 leading-[1.1]'>{description}</Text>
        </div>
    )
}
const Hero = ({ className = "", machineDetails }: HeroProps) => {
    const includedBenefits = ["completion in 15 days", "installation support", "operating guidance"]
    return (
        <Section className={cn("", className)}>
            <Container className='space-y-8'>


                <div className='flex flex-col lg:flex-row lg:h-[95dvh] gap-8 lg:gap-0'>

                    <HeroImageContainer images={machineDetails.images} />

                    <div className='lg:pl-12 lg:pr-12 lg:w-1/2'>
                        <div className='flex flex-col gap-8 h-full'>
                            <MachineNameAndDescription name={machineDetails.modelName!} description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur laboriosam ipsum! Temporibus optio, alias fugit impedit natus delectus odit sequi ' />

                            <IncludedBenefitsContainer benefits={machineDetails.advantages} />

                            <HeroCTA />
                        </div>
                    </div>

                </div>

            </Container>
        </Section >
    )
}

export default Hero
