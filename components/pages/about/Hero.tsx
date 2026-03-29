import Fade from "@/components/animations/Fade"
import ImageParallax from "@/components/animations/ImageParallax"
import Container from "@/components/layout/Container"
import Section from "@/components/layout/Section"
import BreadCrumb, { type BreadCrumb as BreadCrumbType } from "@/components/shared/BreadCrumb"
import { Text } from "@/components/typography/Text"
import { IconHome } from "@tabler/icons-react"

const Hero = () => {
    const aboutBreadCrumbs: BreadCrumbType[] = [
        {
            name: "Home",
            href: "/",
            icon: <IconHome />
        },
        {
            name: "about",
            href: "/about",
        },
    ]
    return (
        <Section className='min-h-max py-0'>
            <div className='pt-21'>

                <Container className='pt-16'>
                    <div className='space-y-16'>
                        <BreadCrumb links={aboutBreadCrumbs} isAnimated />
                        <div className='flex flex-col md:flex-row gap-8'>
                            <ImageParallax
                                offset={["start center", "end start"]}
                                className='hidden w-[35%] md:flex'
                                imageSrc='https://spmech-assets-prod.s3.ap-south-1.amazonaws.com/assets/about/about-2.webp' />
                            <ImageParallax
                                className='md:flex-1 '
                                imageSrc='https://spmech-assets-prod.s3.ap-south-1.amazonaws.com/assets/about/about-1.webp' />
                        </div>
                        <Fade from='down' delay={0.5} triggerOnce>
                            <Text as='h1' size='2xl' className='font-medium md:w-[calc(65%-32px)] ml-auto'>About SP Engineering</Text>
                        </Fade>
                    </div>
                </Container>
            </div>
        </Section>
    )
}
export default Hero