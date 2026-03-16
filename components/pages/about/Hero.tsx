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
            href: "/home",
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
                                imageSrc='42NPeS5Q4XJSBKB9WVXmoZUS39DmsBoQRS77rB6mpjYf4AYw4eKcZg4WeK2hgeUyGrPxtWF8mkfxUiEiKTi3i8pUPwz9muX' />
                            <ImageParallax
                                className='md:flex-1 '
                                imageSrc='https://d3fmssennfe86p.cloudfront.net/en-us/wp-content/uploads/sites/4/2023/10/CNC-MANUFACTURERS-IN-INDIA-1.webp' />
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