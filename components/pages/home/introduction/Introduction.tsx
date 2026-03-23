import Fade from '@/components/animations/Fade'
import TextReveal from '@/components/animations/TextReveal'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import LinkTag from '@/components/LinkTag'
import { Text } from '@/components/typography/Text'

const Introduction = () => {

    return (
        <Section className='min-h-max! py-40 flex items-center' id='introduction'>
            <Container>
                <div className='grid gap-12 lg:grid-cols-2'>

                    <div className='gap-4 flex flex-col'>
                        <Fade from='down' className='sm:w-[50%] '>

                            <Text size='sm' className='font-semibold sm:w-[50%]- '>
                                SP Mech is an Indian manufacturer of CNC and Special Purpose machines, that has been offering not only product quality but also customer peace of mind.
                            </Text>
                        </Fade>
                        <Fade from='down'>

                            <LinkTag href='/about' variant='button' className='hidden! lg:flex!'>
                                <Text size='base' className='font-medium'>

                                    about our company
                                </Text>
                            </LinkTag>
                        </Fade>
                    </div>
                    <div>
                        <div className='relative -top-2 '>
                            <TextReveal>

                                <Text size='2xl' className=' w-max font-medium leading-[1.2] text-muted-foreground/20'>Development,</Text>
                            </TextReveal>
                            <TextReveal>
                                <Text size='2xl' className=' w-max font-medium leading-[1.2] text-muted-foreground/20'>installation,</Text>
                            </TextReveal>
                            <TextReveal>
                                <Text size='2xl' className=' w-max font-medium leading-[1.2] text-muted-foreground/20'>support and</Text>
                            </TextReveal>
                            <TextReveal>
                                <Text size='2xl' className=' w-max font-medium leading-[1.2] text-muted-foreground/20'>service of</Text>
                            </TextReveal>
                            <TextReveal>
                                <Text size='2xl' className=' w-max font-medium leading-[1.2] text-muted-foreground/20'>CNC machines.</Text>
                            </TextReveal>
                        </div>

                    </div>
                    <div className='flex lg:hidden'>
                        <LinkTag href='/about' variant='button'>
                            <Text size='base' className='font-medium'>

                                about our company
                            </Text>
                        </LinkTag>
                    </div>
                </div>
            </Container>

        </Section>
    )
}

export default Introduction
