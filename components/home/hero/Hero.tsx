import Section from '@/components/layout/Section'
import HeroVideo, { HeroVideoPlayPauseBtn } from './HeroVideo'
import { PX16, PX18, PX50, PX70 } from '@/components/typography/TextSize'
import Container from '@/components/layout/Container'
import { IconArrowDown } from '@tabler/icons-react'
import Fade from '@/components/animations/Fade'
import { heroMainHeading, heroSubHeading } from '@/constants/hero'
import { HeroVideoContextProvider } from '@/contexts/heroVideoContext'
import HeroOtherProductsContainer, { HeroOtherProductImage } from './HeroOtherProductsContainer'

const Hero = () => {
  return (

    <HeroVideoContextProvider>
      <Section className='relative max-w-dvw overflow-hidden'>
        <div className="absolute w-full h-full bg-primary-lighter -z-2" />
        <HeroVideo className='bg-green-400-'/>
        <HeroOtherProductImage />
        <div className='pt-25 lg:pt-36 min-h-screen'>
          <Container className='h-[calc(100dvh-100px)] lg:h-[calc(100dvh-144px)] '>
            <div className='flex flex-col justify-between h-full'>
              <Fade from='up' delay={3.5} triggerOnce>
                <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-start'>
                  <PX70 className='w-[50%] leading-none font-medium hidden lg:block'>{heroMainHeading}</PX70>
                  <PX50 tag='h1' className='w-full sm:w-[50%] leading-none font-medium block lg:hidden'>{heroMainHeading}</PX50>
                  <PX18 className='w-[80%] sm:w-[50%] md:w-[35%] lg:w-[25%] mt-2 leading-none font-bold'>{heroSubHeading}</PX18>
                </div>
              </Fade>
              <div className='mb-8 w-full grid grid-cols-3 items-center'>
                <HeroVideoPlayPauseBtn />
                <a href='#introduction' className='px-8 h-13 w-max mx-auto rounded-full text-white bg-black/90 hover:bg-black flex justify-center items-center'>
                  <IconArrowDown className='animate-bounce' size={28} />
                </a>
                <HeroOtherProductsContainer/>
              </div>
            </div>
          </Container>
        </div>
      </Section>
    </HeroVideoContextProvider>
  )
}

export default Hero
