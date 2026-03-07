import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ContactForm from '@/components/pages/contact/ContactForm'
import Hero from '@/components/pages/contact/Hero'
import BreadCrumb, { BreadCrumb as BreadCrumbType } from '@/components/shared/BreadCrumb'
import { DottedMap, DottedMapProps } from '@/components/ui/dotted-map'
import { IconHome } from '@tabler/icons-react'
import React from 'react'

// jamnagar
const markers = [
  {
    lat: 22.4707,
    lng: 70.0577,
    size: 0.5,
  }
]
const page = () => {
  const ContactBreadCrumbs: BreadCrumbType[] = [
    {
      name: "Home",
      href: "/home",
      icon: <IconHome />
    },
    {
      name: "contact",
      href: "/contact",
    },
  ]
  return (
    <>
      <div className='pt-21'>
        <Container className='pt-16'>
          <BreadCrumb links={ContactBreadCrumbs} isAnimated />
        </Container>
          <Hero />
      </div>
      <Section className='min-h-max'>
        <Container>
          <DottedMap dotRadius={0.3} markerColor='orange' markers={markers} />
        </Container>
      </Section>
    </>
  )
}

export default page
