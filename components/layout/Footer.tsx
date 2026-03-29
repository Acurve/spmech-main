import Container from './Container'
import { Text } from '../typography/Text'
import { Icon, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube, IconHeadphones, IconHeartFilled, IconLocation, IconMail, IconPhone } from '@tabler/icons-react'
import LinkTag from '../LinkTag'
import { Dancing_Script } from "next/font/google"
import { cn } from '@/lib/utils'
import TypewriterEffect from '../TypeWriterEffect'
import Fade from '../animations/Fade'
import { getManufacturerInfo } from '@/utils/api/api'
import { ManufacturerInfo } from '@/types/manufacturer'

const dancingScript = Dancing_Script({
  subsets: ["latin"]
})

type FooterContactDetailsItemProps = {
  Icon: Icon,
  itemName: string,
  itemValue: string,
  href: string,
  className?: string,
  multiple?: boolean
}
const FooterContactDetailsItem = ({ Icon, itemName, itemValue, href, className, multiple = false }: FooterContactDetailsItemProps) => {
  return (
    <li className={cn('flex gap-2', className)}>
      <Icon className='text-brand w-8' />
      <div className='flex flex-col gap flex-1'>
        <Text as='span' size='sm' className='font-semibold w-max'>{itemName}</Text>
        {
          multiple && itemValue.split(",").length > 1 ?
            <>
              {itemValue.split(",").map((value, index) => {
                const prefix = href.split(":")[0]
                const newHref = `${prefix}:${value.trim()}`
                return (
                  <LinkTag key={index} href={newHref} target='_blank' variant='custom' className='text-black/80 hover:text-black transition-colors duration-300 w-max'>
                    <Text as='span' size='sm' className='font-medium'>{value}</Text>
                  </LinkTag>
                )
              })}
            </>
            :
            <LinkTag href={href} target='_blank' variant='custom' className='text-black/80 hover:text-black transition-colors duration-300'>
              <Text as='span' size='sm' className='font-medium'>{itemValue}</Text>
            </LinkTag>
        }
      </div>
    </li>
  )
}

const FooterContactDetails = ({ className = '', contactDetails }: { className?: string } & Partial<ManufacturerInfo>) => {
  return (
    <div className={cn('', className)}>
      <Fade from='down' delay={1.5} className='flex flex-col gap-8' triggerOnce>
        <Text as='span' size='base' className='font-bold'>Get In Touch</Text>

        <ul className='space-y-4'>
          <FooterContactDetailsItem
            href={`mailto:${contactDetails?.email}`}
            Icon={IconMail} itemName='Email'
            itemValue={contactDetails?.email!}
            multiple />

          <FooterContactDetailsItem
            href={`tel:${contactDetails?.mobileNo}`}
            Icon={IconPhone} itemName='Phone'
            itemValue={contactDetails?.mobileNo!}
            multiple />

          <FooterContactDetailsItem
            href={`tel:${contactDetails?.customerCareNo}`}
            Icon={IconHeadphones} itemName='Customer Care'
            itemValue={contactDetails?.customerCareNo!}
            multiple />

          <FooterContactDetailsItem
            href='https://www.google.com/maps/place/S.+P.+ENGINEERING/@22.4289782,70.037116,814m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3957159937799399:0xd2288a0f1c874be7!8m2!3d22.4289782!4d70.0396909!16s%2Fg%2F11fwcw49hh?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D'
            Icon={IconLocation}
            itemName='Address'
            itemValue={contactDetails?.address!} />
        </ul>
      </Fade>
    </div>
  )
}

const FooterTop = ({ footerDetails }: { footerDetails: ManufacturerInfo }) => {
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
      href: "/blogs",
    },

  ]
  return (
    <div className='flex lg:flex-row flex-col gap-20 lg:gap-0'>
      <div className='lg:w-[50%] flex flex-col lg:justify-between gap-10 lg:gap-0'>

        <div className="flex flex-col">

          <Text as='span' size='lg' className={cn(dancingScript.className, "font-extrabold")}>
            <TypewriterEffect cursorClassName='hidden' persistenceKey='footer-manufacturing-by'>manufacturing by</TypewriterEffect>
          </Text>
          <Fade from='down' triggerOnce delay={1.5} className='flex flex-col gap-1'>

            <Text size='2xl' className="font-medium text-brand">{footerDetails.name}</Text>
            <Text as='span' size='sm' className='min-[480px]:w-[60%]!'>SP Engineering is a trusted global manufacturer of high-performance CNC and special-purpose machines for modern industries.</Text>
          </Fade>

        </div>
        <div id='footer links' className=''>
          <Fade from='down' triggerOnce delay={1.5}>

            <ul className='flex flex-col min-[360px]:flex-row gap-4 font-medium'>
              {
                footerNavLinks.map((link) => (

                  <li key={link.id}><LinkTag href={link.href} className='text-black! after:bg-brand'><Text as='span' size='sm'>{link.name}</Text></LinkTag></li>
                ))
              }
            </ul>
          </Fade>
        </div>
      </div>
      <FooterContactDetails className='lg:w-[50%]' contactDetails={footerDetails.contactDetails} />
    </div>
  )
}
const FooterMiddle = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-10 lg:gap-0'>
      <div className='lg:w-[50%]'>
        <div className='flex gap-8'>
          <a href="https://www.instagram.com/s.p.engineering_official/#" target='_blank'><IconBrandInstagram className='hover:text-brand transition-colors duration-300' /></a>
          <a href="https://www.youtube.com/@spmechgroup" target='_blank'><IconBrandYoutube className='hover:text-brand transition-colors duration-300' /></a>
          <a href="https://www.linkedin.com/in/s-p-mach-637b76341/" target='_blank'><IconBrandLinkedin className='hover:text-brand transition-colors duration-300' /></a>

        </div>
      </div>
      <div className='flex justify-between lg:w-[50%] flex-col gap-10 sm:gap-0 sm:flex-row'>
        <div className='space-x-8 font-medium '>
          <LinkTag href='/privacy-policy' className='text-black! after:bg-brand'><Text as='span' size='sm'>Privacy policy</Text></LinkTag>
          <LinkTag href='/terms-conditions' className='text-black! after:bg-brand'><Text as='span' size='sm'>Terms and condition</Text></LinkTag>
        </div>
        <div>
          <Text as='span' size='sm' className='font-medium'>&copy; 2026 SP Mech Group</Text>
        </div>
      </div>

    </div>
  )
}
const FooterBottom = () => {
  return (
    <div>
      <div className='flex justify-center space-x-2'>
        <Text as='span' size='sm' className='text-muted-foreground flex gap-2 items-end'>
          made with
          <IconHeartFilled className='text-destructive animate-pulse mb-1' /> by</Text>
        <LinkTag href='https://acurve.in' target='_blank' className='text-black! font-medium after:bg-destructive'>
          <Text as='span' size='base' >Acurve.in</Text>
        </LinkTag>

      </div>
    </div>
  )
}

const Footer = async () => {
  const response = await getManufacturerInfo()
  const footerDetails: ManufacturerInfo = response?.data ?? {
    name: "SP Engineering",
    contactDetails: {
      email: "",
      mobileNo: "",
      address: "",
    }
  }
  return (
    <footer>
      <Container>
        <hr className='border border-muted-foreground' />
        <div className='pt-20 pb-10 space-y-20'>

          <FooterTop footerDetails={footerDetails} />
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
