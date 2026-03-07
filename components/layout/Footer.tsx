import { ReactNode } from 'react'
import Container from './Container'
import { Text } from '../typography/Text'
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube, IconLocation, IconMail, IconPhone } from '@tabler/icons-react'
import LinkTag from '../LinkTag'
import { Dancing_Script } from "next/font/google"
import { cn } from '@/lib/utils'
import TypewriterEffect from '../TypeWriterEffect'
import Fade from '../animations/Fade'

const dancingScript = Dancing_Script({
  subsets: ["latin"]
})

type FooterContactDetailsItemProps = {
  icon: ReactNode,
  itemName: string,
  itemValue: string,
  href: string
}
const FooterContactDetailsItem = ({ icon, itemName, itemValue, href }: FooterContactDetailsItemProps) => {
  return (
    <li className='flex gap-4'>
      {icon}
      <div className='flex flex-col gap'>
        <Text as='span' size='sm' className='font-semibold'>{itemName}</Text>
        <LinkTag href={href} variant='custom' className='text-black/80 hover:text-black transition-colors duration-300'>
          <Text as='span' size='sm' className='font-medium'>{itemValue}</Text>
        </LinkTag>
      </div>
    </li>
  )
}

const FooterContactDetails = ({ className = '' }: { className?: string }) => {
  return (
    <div className={cn('', className)}>
      <Fade from='down' delay={1.5} className='flex flex-col gap-8'>
        <Text as='span' size='base' className='font-bold'>Get In Touch</Text>

        <ul className='space-y-4'>
          <FooterContactDetailsItem href='' icon={<IconMail />} itemName='Email' itemValue='contact@spmech.com' />
          <FooterContactDetailsItem href='' icon={<IconPhone />} itemName='Phone' itemValue='+91 953157682' />
          <FooterContactDetailsItem href='' icon={<IconLocation />} itemName='Address' itemValue='Jamnagar, gujarat, india - 361005' />
        </ul>
      </Fade>
    </div>
  )
}



const FooterTop = () => {
  const footerNavLinks = [
    {
      id: "a89s489e446d6448e46g4",
      name: "home",
      href: "/",
    },
    {
      id: "a89s489sef84d6448e46g4",
      name: "about",
      href: "/about",
    },
    {
      id: "8a67sdgsdf4e4d6448e46g4",
      name: "contact",
      href: "/contact",
    },
    {
      id: "a89s4e78f78e4e84f86e46g4",
      name: "blog",
      href: "/blog",
    },
    {
      id: "a89s489e44g4e84f86e46g4",
      name: "products",
      href: "/products",
    },
  ]
  return (
    <div className='flex lg:flex-row flex-col gap-20 lg:gap-0'>
      <div className='lg:w-[50%] flex flex-col lg:justify-between gap-10 lg:gap-0'>

        <div className="flex flex-col">

          <Text as='span' size='lg' className={cn(dancingScript.className, "font-extrabold")}>
            <TypewriterEffect cursorClassName='hidden'>manufacturing by</TypewriterEffect>
          </Text>
          <Fade from='down' triggerOnce delay={1.5} className='flex flex-col'>

            <Text size='2xl' className="font-medium hidden min-[480px]:block">SP &nbsp;Engineering</Text>
            <Text as='span' size='sm' className='min-[480px]:w-[60%]!'>SP Engineering is a trusted global manufacturer of high-performance CNC and special-purpose machines for modern industries.</Text>
          </Fade>

        </div>
        <div id='footer links' className=''>
          <Fade from='down' triggerOnce delay={1.5}>

            <ul className='flex flex-col min-[360px]:flex-row gap-4 font-medium'>
              {
                footerNavLinks.map((link)=>(

                  <li key={link.id}><LinkTag href={link.href} className='text-black! after:bg-brand'><Text as='span' size='sm'>{link.name}</Text></LinkTag></li>
                ))
              }
            </ul>
          </Fade>
        </div>
      </div>
      <FooterContactDetails className='lg:w-[50%]' />
    </div>
  )
}
const FooterMiddle = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-10 lg:gap-0'>
      <div className='lg:w-[50%]'>
        <div className='flex gap-8'>
          <IconBrandFacebook />
          <IconBrandInstagram />
          <IconBrandYoutube />
          <IconBrandLinkedin />
        </div>
      </div>
      <div className='flex justify-between lg:w-[50%] flex-col gap-10 sm:gap-0 sm:flex-row'>
        <div className='space-x-8 font-medium '>
          <LinkTag className='text-black! after:bg-brand'><Text as='span' size='sm'>Privacy policy</Text></LinkTag>
          <LinkTag className='text-black! after:bg-brand'><Text as='span' size='sm'>Terms and condition</Text></LinkTag>
        </div>
        <div>
          <Text as='span' size='sm' className='font-medium'>&copy; 2026 SP Mech</Text>
        </div>
      </div>

    </div>
  )
}
const FooterBottom = () => {
  return (
    <div>
      <div className='flex justify-center space-x-2'>
        <Text as='span' size='sm' className='text-muted-foreground'>Designed & Developed by:</Text>
        <LinkTag className='text-black! font-medium after:bg-brand'>
          <Text as='span' size='sm' >Acurve.in</Text>
        </LinkTag>

      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <Container>
        <hr className='border border-muted-foreground' />
        <div className='pt-20 pb-10 space-y-20'>

          <FooterTop />
          <Fade from='down' delay={1.5} triggerOnce>

            <FooterMiddle />
          </Fade>
          <Fade from='down' delay={1.5} triggerOnce>

            <FooterBottom />
          </Fade>
        </div>
      </Container>
    </footer >
  )
}

export default Footer
