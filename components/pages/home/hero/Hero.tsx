import Section from '@/components/layout/Section'
import HeroVideo from './HeroVideo'
import { Text } from '@/components/typography/Text'
import Container from '@/components/layout/Container'
import Fade from '@/components/animations/Fade'
import TypewriterEffect from '@/components/TypeWriterEffect'



const Hero = () => {


  return (

    <Section className='relative max-w-dvw py-0 overflow-x-clip '>
      <div className='pt-21'>
        <Container className=''>
          {/* main hero section's text start from here */}
          <div className='flex items-end h-64 lg:h-96 pb-4'>
            {/* <Fade from='up' delay={0.5} triggerOnce>
              // <Text as='h1' size='3xl' className='pr-24 leading-none'>
                <p>Engineered precision,</p>
                <p>Faster production,</p>
                <p>Zero compromise on quality</p>
              </Text>
            </Fade> */}
            {/* <Fade from='up' delay={0.5} triggerOnce> */}
            <Text as='h1' size='3xl' className='pr-24 leading-none'>

              <TypewriterEffect>
                <span className='text-brand'>SP Engineering </span> Exist to  <br />
                Deliver the Future of CNC <br />
                Manufacturing: <span className='text-brand'> Precision at Scale</span>

              </TypewriterEffect>
            </Text>


            {/* </Fade> */}

          </div>
        </Container>
        <div className="relative w-dvw h-[120dvh]">
          <Fade from='down' delay={5.5} triggerOnce>
            <div className=" h-[120dvh]">

              <HeroVideo className='border border-destructive sticky top-0 h-dvh' />
            </div>
          </Fade>
        </div>
      </div>
    </Section>
  )
}

export default Hero
