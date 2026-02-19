import Fade from '@/components/animations/Fade'
import TextReveal from '@/components/animations/TextReveal'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import LinkTag from '@/components/LinkTag'
import { PX16, PX18, PX50, PX30 } from '@/components/typography/TextSize'

const Introduction = () => {

    return (
        <Section className='min-h-max! bg-white' id='introduction'>
            <Container className='py-40'>
                <div className='grid gap-12 lg:grid-cols-2'>

                    <div className='gap-4 flex flex-col'>
                        <Fade from='down' className='sm:w-[50%] '>

                            <PX18 className='font-bold sm:w-[50%]- '>
                                SP Mech is an Indian manufacturer of CNC and Special Purpose machines, that has been offering not only product quality but also customer peace of mind.
                            </PX18>
                        </Fade>
                        <Fade from='down'>

                            <LinkTag href='/about' variant='button-primary' className='hidden! lg:flex!'>
                                <PX16 className='font-medium'>

                                    about our company
                                </PX16>
                            </LinkTag>
                        </Fade>
                    </div>
                    <div>
                        <div className='relative -top-2 hidden sm:block'>
                            <TextReveal>

                                <PX50 className=' w-max font-medium leading-[1.2] text-muted-foreground/20'>Development,</PX50>
                            </TextReveal>
                            <TextReveal>
                                <PX50 className=' w-max font-medium leading-[1.2] text-muted-foreground/20'>installation,</PX50>
                            </TextReveal>
                            <TextReveal>
                                <PX50 className=' w-max font-medium leading-[1.2] text-muted-foreground/20'>support and</PX50>
                            </TextReveal>
                            <TextReveal>
                                <PX50 className=' w-max font-medium leading-[1.2] text-muted-foreground/20'>service of</PX50>
                            </TextReveal>
                            <TextReveal>
                                <PX50 className=' w-max font-medium leading-[1.2] text-muted-foreground/20'>CNC machines.</PX50>
                            </TextReveal>
                        </div>
                        <div className='relative -top-2 block sm:hidden'>
                            <TextReveal>

                                <PX30 className=' w-max font-medium leading-[1.2] text-muted-foreground/20'>Development,</PX30>
                            </TextReveal>
                            <TextReveal>
                                <PX30 className=' w-max font-medium leading-[1.2] text-muted-foreground/20'>installation,</PX30>
                            </TextReveal>
                            <TextReveal>
                                <PX30 className=' w-max font-medium leading-[1.2] text-muted-foreground/20'>support and</PX30>
                            </TextReveal>
                            <TextReveal>
                                <PX30 className=' w-max font-medium leading-[1.2] text-muted-foreground/20'>service of</PX30>
                            </TextReveal>
                            <TextReveal>
                                <PX30 className=' w-max font-medium leading-[1.2] text-muted-foreground/20'>CNC machines.</PX30>
                            </TextReveal>
                        </div>
                    </div>
                    <div className='flex lg:hidden'>
                        <LinkTag href='/about' variant='button-primary'>
                            <PX16 className='font-medium'>

                                about our company
                            </PX16>
                        </LinkTag>
                    </div>
                </div>
            </Container>

        </Section>
    )
}

export default Introduction
