import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import BreadCrumb, { BreadCrumb as BreadCrumbType } from '@/components/shared/BreadCrumb'
import { IconHome } from '@tabler/icons-react'
import Fade from '@/components/animations/Fade'
import { Text } from '@/components/typography/Text'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms & Conditions | SP Mech Group',
    description: 'Terms and Conditions for using the SP Mech Group website and services.',
}

const TermsConditions = () => {
    const breadCrumbs: BreadCrumbType[] = [
        {
            name: "Home",
            href: "/",
            icon: <IconHome />
        },
        {
            name: "Terms & Conditions",
            href: "/terms-conditions",
        },
    ]

    return (
        <div className="bg-[#FAFAFA] min-h-screen">
            <div className='pt-28 pb-12 bg-white border-b border-gray-100'>
                <Container>
                    <BreadCrumb links={breadCrumbs} isAnimated />
                    <Fade from="down" delay={0.1} className="mt-8">
                        <Text as="h1" size="4xl" className="font-medium tracking-tight text-gray-900 mb-4">
                            Terms & Conditions
                        </Text>
                        <Text as="p" size="lg" className="text-gray-500 max-w-2xl">
                            Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </Text>
                    </Fade>
                </Container>
            </div>

            <Section className='py-16 md:py-24'>
                <Container className="max-w-4xl">
                    <Fade from="up" delay={0.2} className="bg-white rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 space-y-10 prose prose-lg prose-gray max-w-none">

                        <div className="space-y-4">
                            <Text as="h2" size="2xl" className="font-semibold text-gray-900">1. Agreement to Terms</Text>
                            <Text as="p" size="base" className="text-gray-600 leading-relaxed">
                                These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and SP Mech Group concerning your access to and use of this website. You agree that by accessing the website, you have read, understood, and agreed to be bound by all of these Terms and Conditions.
                            </Text>
                        </div>

                        <div className="space-y-4">
                            <Text as="h2" size="2xl" className="font-semibold text-gray-900">2. Intellectual Property Rights</Text>
                            <Text as="p" size="base" className="text-gray-600 leading-relaxed">
                                Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site and the trademarks, service marks, and logos contained therein are owned or controlled by us, and are protected by copyright and intellectual property laws.
                            </Text>
                        </div>

                        <div className="space-y-4">
                            <Text as="h2" size="2xl" className="font-semibold text-gray-900">3. User Representations</Text>
                            <Text as="p" size="base" className="text-gray-600 leading-relaxed">
                                By using the Site, you represent and warrant that all registration information you submit will be true, accurate, current, and complete. You agree to comply with these terms and will not access the site through automated or non-human means, whether through a bot, script or otherwise.
                            </Text>
                        </div>

                        <div className="space-y-4">
                            <Text as="h2" size="2xl" className="font-semibold text-gray-900">4. Products and Services</Text>
                            <Text as="p" size="base" className="text-gray-600 leading-relaxed">
                                All purchases and inquiries through our website or resulting from visits made by you are governed by our specific Terms of Sale/Supply, which are distinct from these Website Terms and Conditions. We make every effort to display as accurately as possible the colors, features, specifications, and details of the products.
                            </Text>
                        </div>

                        <div className="space-y-4">
                            <Text as="h2" size="2xl" className="font-semibold text-gray-900">5. Modifications and Interruptions</Text>
                            <Text as="p" size="base" className="text-gray-600 leading-relaxed">
                                We reserve the right to change, modify, or remove the contents of the website at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our website.
                            </Text>
                        </div>

                        <div className="space-y-4">
                            <Text as="h2" size="2xl" className="font-semibold text-gray-900">6. Governing Law</Text>
                            <Text as="p" size="base" className="text-gray-600 leading-relaxed">
                                These Terms shall be governed by and defined following the laws of India. SP Mech Group and yourself irrevocably consent that the courts of Jamnagar, Gujarat shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                            </Text>
                        </div>

                    </Fade>
                </Container>
            </Section>
        </div>
    )
}

export default TermsConditions
