import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ContactForm from './ContactForm'
import { Text } from '@/components/typography/Text'
import LinkTag from '@/components/LinkTag'
import socialMediaList from '@/constants/socialMediaList'
import { cn } from '@/lib/utils'
import Fade from '@/components/animations/Fade'
import { IconMapPin, IconShare, IconMail, IconPhone } from '@tabler/icons-react'
import { getManufacturerInfo } from '@/utils/api/api'

const ContactDetailsBar = async ({ className }: { className?: string }) => {
    const response = await getManufacturerInfo()
    const data = response.data
    return (
        <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-900', className)}>

            {/* Location Card */}
            <Fade from="up" delay={0.4} className="group flex flex-col p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand/30">
                <div className="w-14 h-14 rounded-2xl bg-brand/5 flex items-center justify-center text-brand mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand/10">
                    <IconMapPin className="w-7 h-7" stroke={1.5} />
                </div>
                <div className="space-y-3">
                    <Text as="h3" size="lg" className="font-semibold tracking-tight text-gray-900">Headquarters</Text>
                    <Text size="sm" className="font-medium text-gray-500 leading-relaxed tracking-widest">
                        Jamnagar <br />
                        Gujarat, India <br />
                        361004
                    </Text>
                </div>
            </Fade>

            {/* Social Media Card */}
            <Fade from="up" delay={0.5} className="group flex flex-col p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand/30">
                <div className="w-14 h-14 rounded-2xl bg-brand/5 flex items-center justify-center text-brand mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand/10">
                    <IconShare className="w-7 h-7" stroke={1.5} />
                </div>
                <div className="space-y-3">
                    <Text as="h3" size="lg" className="font-semibold tracking-tight text-gray-900">Social Media</Text>
                    <div className="flex flex-col space-y-2.5">
                        {socialMediaList.map((socialMedia, index) => (
                            <LinkTag key={`contact-hero-social-${index}`} href={socialMedia.href} variant="custom" className="w-max inline-block">
                                <Text size="sm" className="font-medium text-gray-500 transition-colors duration-300 hover:text-brand flex items-center gap-2">
                                    {socialMedia.name}
                                </Text>
                            </LinkTag>
                        ))}
                    </div>
                </div>
            </Fade>

            {/* Email Card */}
            <Fade from="up" delay={0.6} className="group flex flex-col p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand/30">
                <div className="w-14 h-14 rounded-2xl bg-brand/5 flex items-center justify-center text-brand mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand/10">
                    <IconMail className="w-7 h-7" stroke={1.5} />
                </div>
                <div className="space-y-3">
                    <Text as="h3" size="lg" className="font-semibold tracking-tight text-gray-900">Email Inquiries</Text>
                    <LinkTag href={`mailto:${data.contactDetails.email}`} variant="custom" className="w-max inline-block">
                        <Text size="sm" className="font-medium text-gray-500 transition-colors duration-300 hover:text-brand">
                            {data.contactDetails.email}
                        </Text>
                    </LinkTag>
                </div>
            </Fade>

            {/* Phone Card */}
            <Fade from="up" delay={0.7} className="group flex flex-col p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand/30">
                <div className="w-14 h-14 rounded-2xl bg-brand/5 flex items-center justify-center text-brand mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand/10">
                    <IconPhone className="w-7 h-7" stroke={1.5} />
                </div>
                <div className="flex flex-col gap-2">
                    <Text as="h3" size="lg" className="font-semibold tracking-tight text-gray-900">Direct Contact</Text>
                    <LinkTag href={`tel:${data.contactDetails.customerCareNo}`} variant="custom" className="w-max inline-block">
                        <Text size="sm" className="font-medium text-gray-500 transition-colors duration-300 hover:text-brand">
                            {data.contactDetails.customerCareNo}
                        </Text>
                    </LinkTag>
                    <LinkTag href={`tel:${data.contactDetails.mobileNo}`} variant="custom" className="w-max inline-block">
                        <Text size="sm" className="font-medium text-gray-500 transition-colors duration-300 hover:text-brand">
                            {data.contactDetails.mobileNo}
                        </Text>
                    </LinkTag>
                </div>
            </Fade>

        </div>
    )
}

const Hero = () => {
    return (
        <Section className='flex flex-col pt-16 py-0 mb-24 gap-16'>
            <Container className='h-full w-full'>
                <div className='relative w-full rounded-4xl overflow-hidden min-h-[max(calc(100vh-140px),700px)] shadow-2xl'>

                    {/* Background Images & Overlay */}
                    <img src="https://spmech-assets-prod.s3.ap-south-1.amazonaws.com/assets/about/vision.webp" alt="Background" className="absolute inset-0 w-full object-cover h-full" />
                    <div className="absolute inset-0 z-1 bg-black/60 backdrop-blur-[2px]" />

                    {/* Main Content */}
                    <div className='grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] z-10 p-8 md:p-12 lg:p-16 gap-12 lg:gap-24 h-full relative'>

                        <div className='flex flex-col justify-center py-8 lg:py-0'>
                            <Fade from="down" className="mb-4">
                                <Text as="span" size="sm" className="font-bold text-brand uppercase tracking-widest">
                                    Get In Touch
                                </Text>
                            </Fade>
                            <Fade from="down" delay={0.1}>
                                <h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                                    You Have Questions,<br />
                                    We Have Answers.
                                </h1>
                            </Fade>
                            <Fade from="down" delay={0.2}>
                                <p className="text-lg text-white/90 max-w-lg leading-relaxed">
                                    Our engineering team is ready to assist you with technical specifications, international shipping inquiries, or custom machinery requests.
                                </p>
                            </Fade>
                        </div>

                        <Fade from="up" delay={0.3} className="h-full">
                            <ContactForm className='rounded-3xl h-full shadow-2xl border-none' />
                        </Fade>
                    </div>
                </div>
            </Container>

            {/* Pulled Out Contact Details Section */}
            <Container>
                <ContactDetailsBar />
            </Container>
        </Section>
    )
}

export default Hero
