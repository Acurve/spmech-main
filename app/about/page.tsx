import AboutParagraphs from '@/components/pages/about/AboutParagraphs';
import VMV from '@/components/pages/about/vmv/VMV';
import Journey from '@/components/pages/about/Journey';
import Hero from '@/components/pages/about/Hero';
import { Metadata } from 'next';
import { getManufacturerInfo } from '@/utils/api/api';
import { ManufacturerInfo } from '@/types/manufacturer';


export const metadata: Metadata = {
  title: 'About Us | SP Mech Group - Decades of Engineering Excellence',
  description: 'Learn about the journey of SP Mech Group. Our commitment to quality, innovation in machine manufacturing, and our global impact in the hardware industry.',
  openGraph: {
    title: 'The Story of SP Mech Group',
    description: 'From local manufacturing to global machine supply. Discover our mission and values.',
    url: `${process.env.NEXT_PUBLIC_MAIN_URL}/about`,
    images: [
      {
        url: '/BrandLogo.svg',
        alt: 'About SP Mech Group',
      },
    ],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/about`,
  },
};

export default async function Page() {
  const response = await getManufacturerInfo()
  const footerDetails: Pick<ManufacturerInfo, "profileText" | "timeline"> = {
    profileText: response.data.profileText,
    timeline: response.data.timeline
  }
  return (
    <>
      <Hero />
      <AboutParagraphs paragraphs={footerDetails.profileText} />
      <VMV />
      <Journey timeline={footerDetails.timeline} />
    </>


  );
}