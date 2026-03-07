import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ContactForm from './ContactForm'
import SectionHeader from '@/components/shared/SectionHeader'
import { Text } from '@/components/typography/Text'
import LinkTag from '@/components/LinkTag'
import socialMediaList from '@/constants/socialMediaList'
import { cn } from '@/lib/utils'
const DesktopOtherContactDetails = ({ className }: { className?: string }) => {
    return (
        <div className={cn('hidden grid-cols-2 gap-4 text-background', className)}>
            {/* location */}
            <div>
                <div className='space-y-4'>
                    <Text as="span" size='lg' className='font-medium'>Location</Text>
                    <Text size='xs' className='font-medium text-background/90'>
                        jamnagar <br />
                        gujarat <br />
                        india <br />
                        361004.
                    </Text>
                </div>
            </div>
            {/* social media */}
            <div>
                <div className='space-y-4'>
                    <Text as="span" size='lg' className='font-medium'>Social Media</Text>
                    <div className='space-y-2'>
                        {
                            socialMediaList.map((socialMedia, index) => (

                                <LinkTag key={`contact-hero-social-${index}`} href={socialMedia.href} variant='custom'>
                                    <Text size='xs' className='font-medium text-background/90'>
                                        {socialMedia.name}
                                    </Text>
                                </LinkTag>
                            ))
                        }

                    </div>

                </div>
            </div>
            {/* email */}
            <div>
                <div className='space-y-2 flex flex-col'>
                    <Text as="span" size='lg' className='font-medium'>Email</Text>
                    <LinkTag href='mailto:contact@spmech.com' variant='custom'>
                        <Text as="span" size='xs' className='font-medium text-background/90'>contact@spmech.com</Text>
                    </LinkTag>
                </div>
            </div>
            {/* number */}
            <div>
                <div className='space-y-2 flex flex-col'>
                    <Text as="span" size='lg' className='font-medium'>Contact</Text>
                    <LinkTag href='tel:+91 00000 00000' variant='custom'>
                        <Text as="span" size='xs' className='font-medium text-background/90'>+91 00000 00000</Text>
                    </LinkTag>
                </div>
            </div>

        </div>
    )
}
const TabletContactDetails = ({ className = "" }: { className?: string }) => {
    return (
        <div className={cn("", className)}>

        </div>
    )
}
const Hero = () => {
    const headingDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat earum, iste reprehenderit itaque consequuntur minus ipsam, natus dicta voluptatibus."
    return (
        <Section className=' flex pt-16! py-0'>
            <Container className='h-full w-full px-0'>

                <div className='relative w-full  rounded-2xl overflow-hidden min-h-[calc(100dvh-84px-24px)]'>
                    <img src="images/vmv/vision.webp" alt="" className="absolute inset-0 w-full object-cover h-full -z-2" />
                    <div className="absolute -z-1 bg-primary/70 inset-0" />
                    {/* main */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 z-10 p-8 gap-8 h-full justify-between'>

                        <div className='flex flex-col justify-between'>
                            <SectionHeader heading={<>You Have Questions,<br />We Have Answers.</>} description={headingDescription} className='text-background md:grid-cols-1' descriptionContainerClassName='md:items-start'
                                descriptionTextClassName='md:text-start text-sm! text-background/90' />
                            <DesktopOtherContactDetails className="xl:grid" />
                        </div>
                        <ContactForm className='rounded-2xl overflow-hidden h-full' />
                        <DesktopOtherContactDetails className="grid xl:hidden grid-cols-2 min-[860px]:grid-cols-4 lg:col-span-2 justify-between" />
                    </div>
                </div>

                {/* <TabletContactDetails className='xl:hidden mt-16' /> */}

            </Container>

        </Section>
    )
}

export default Hero
