import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Hero from '@/components/pages/contact/Hero'
import BreadCrumb, { BreadCrumb as BreadCrumbType } from '@/components/shared/BreadCrumb'
import { IconHome } from '@tabler/icons-react'
import Fade from '@/components/animations/Fade'
import { Text } from '@/components/typography/Text'
import WorldMap from '@/components/ui/world-map'

const page = () => {
  const ContactBreadCrumbs: BreadCrumbType[] = [
    {
      name: "Home",
      href: "/",
      icon: <IconHome />
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ]
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className='pt-24'>
        <Container className='pb-12'>
          <BreadCrumb links={ContactBreadCrumbs} isAnimated />
        </Container>
        <Hero />
      </div>

      <Section className='min-h-max pb-32 pt-0'>
        <Container>
          <Fade from="up" className="flex flex-col items-center justify-center text-center space-y-4 mb-16">
            <Text as="h2" size="3xl" className="font-medium tracking-tight text-gray-900">Global Reach</Text>
            <Text as="p" size="base" className="text-gray-500 max-w-2xl">Equipping manufacturers around the world from our headquarters in Jamnagar, Gujarat.</Text>
          </Fade>

          <Fade from="up" delay={0.2} className="relative bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
            {/* Decorative radial gradient for map backdrop */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,132,42,0.03)_0%,transparent_70%)] pointer-events-none" />
            <WorldMap
              lineColor='#F5842A'
              dots={[
                {
                  start: { lat: 6.5, lng: 76.5 }, // Start: Delhi/North India (Aceternity Adjusted)
                  end: { lat: -1.2921, lng: 36.8219 }, // Nairobi, Kenya
                },
                {
                  start: { lat: 6.5, lng: 76.5 },
                  end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles, USA
                },
                {
                  start: { lat: 6.5, lng: 76.5 },
                  end: { lat: 51.5074, lng: -0.1278 }, // London, UK
                },
                {
                  start: { lat: 6.5, lng: 76.5 },
                  end: { lat: 25.2048, lng: 55.2708 }, // Dubai, UAE
                },
                {
                  start: { lat: 6.5, lng: 76.5 },
                  end: { lat: -33.8688, lng: 151.2093 }, // Sydney, Australia
                },
                {
                  start: { lat: 6.5, lng: 76.5 },
                  end: { lat: 35.6762, lng: 139.6503 }, // Tokyo, Japan
                },
                {
                  start: { lat: 6.5, lng: 76.5 },
                  end: { lat: -23.5505, lng: -46.6333 }, // São Paulo, Brazil
                },
                {
                  start: { lat: 6.5, lng: 76.5 },
                  end: { lat: 48.8566, lng: 2.3522 }, // Paris, France
                },
                {
                  start: { lat: 6.5, lng: 76.5 },
                  end: { lat: 40.7128, lng: -74.006 }, // New York, USA
                },
                {
                  start: { lat: 6.5, lng: 76.5 },
                  end: { lat: -10.5, lng: 85.5 }, // srilanka
                },
              ]}
            />
          </Fade>
        </Container>
      </Section>
    </div>
  )
}

export default page
