import  { ReactNode } from 'react'
import Container from './Container'
import { PX16, PX18, PX30, PX50 } from '../typography/TextSize'
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube, IconLocation, IconMail, IconPhone } from '@tabler/icons-react'
import LinkTag from '../LinkTag'
import Image from 'next/image'
import { cn } from '@/lib/utils'

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
        <PX16 className='font-semibold'>{itemName}</PX16>
        <LinkTag href={href} variant='custom' className='text-black/80 hover:text-black transition-colors duration-300'>
          <PX16 className='font-medium'>{itemValue}</PX16>
        </LinkTag>
      </div>
    </li>
  )
}

const FooterContactDetails = ({ className = '' }: { className?: string }) => {
  return (
    <div className={cn('flex flex-col gap-8', className)}>
      <PX18 className='font-bold text-primary-orange'>Get In Touch</PX18>
      <ul className='space-y-4'>
        <FooterContactDetailsItem href='' icon={<IconMail />} itemName='Email' itemValue='contact@spmech.com' />
        <FooterContactDetailsItem href='' icon={<IconPhone />} itemName='Phone' itemValue='+91 953157682' />
        <FooterContactDetailsItem href='' icon={<IconLocation />} itemName='Address' itemValue='Jamnagar, gujarat, india - 361005' />
      </ul>
    </div>
  )
}

const FooterTop = () => {
  return (
    <div className='flex lg:flex-row flex-col gap-20 lg:gap-0'>
      <div className='lg:w-[50%] flex flex-col lg:justify-between gap-10 lg:gap-0'>

        <div className="flex flex-col">
          <Image src={"brandLogo.svg"} alt="SP Mech" width={80} height={80} />
          <PX50 className="font-medium hidden min-[480px]:block">SP Engineering</PX50>
          <PX30 className="font-medium block min-[480px]:hidden">SP Engineering</PX30>
          <PX16 className='min-[480px]:w-[70%]'>SP Engineering is a trusted global manufacturer of high-performance CNC and special-purpose machines for modern industries.</PX16>

        </div>
        <div id='footer links' className=''>
          <ul className='flex flex-col min-[360px]:flex-row gap-4 font-medium'>
            <li><LinkTag className='text-black!'><PX16>Home</PX16></LinkTag></li>
            <li><LinkTag className='text-black!'><PX16>About</PX16></LinkTag></li>
            <li><LinkTag className='text-black!'><PX16>contact</PX16></LinkTag></li>
            <li><LinkTag className='text-black!'><PX16>Blog</PX16></LinkTag></li>
            <li><LinkTag className='text-black!'><PX16>products</PX16></LinkTag></li>
          </ul>
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
          <LinkTag className='text-black!'><PX16>Privacy policy</PX16></LinkTag>
          <LinkTag className='text-black!'><PX16>Terms and condition</PX16></LinkTag>
        </div>
        <div>
          <PX16 className='font-medium'>&copy; 2026 SP Mech</PX16>
        </div>
      </div>

    </div>
  )
}
const FooterBottom = () => {
  return (
    <div>
      <div className='flex justify-center space-x-2'>
        <PX16 className='text-muted-foreground'>Designed & Developed by:</PX16>
        <LinkTag className='text-black! font-medium'>
          <PX16>Acurve.in</PX16>
        </LinkTag>

      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <Container>
        <hr className='border border-primary-orange/30'/>
        <div className='pt-20 pb-10 space-y-20'>

          <FooterTop />
          <FooterMiddle />
          <FooterBottom />
        </div>
      </Container>
    </footer >
  )
}

export default Footer
