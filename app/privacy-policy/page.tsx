import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import BreadCrumb, { BreadCrumb as BreadCrumbType } from '@/components/shared/BreadCrumb'
import { IconHome } from '@tabler/icons-react'
import Fade from '@/components/animations/Fade'
import { Text } from '@/components/typography/Text'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy | SP Mech Group',
    description: 'Privacy Policy for SP Mech Group. Learn how we collect, use, and protect your data.',
}

const PrivacyPolicy = () => {
    const breadCrumbs: BreadCrumbType[] = [
        {
            name: "Home",
            href: "/",
            icon: <IconHome />
        },
        {
            name: "Privacy Policy",
            href: "/privacy-policy",
        },
    ]

    return (
        <div className="bg-[#FAFAFA] min-h-screen">
            <div className='pt-28 pb-12 bg-white border-b border-gray-100'>
                <Container>
                    <BreadCrumb links={breadCrumbs} isAnimated />
                    <Fade from="down" delay={0.1} className="mt-8">
                        <Text as="h1" size="4xl" className="font-medium tracking-tight text-gray-900 mb-4">
                            Privacy Policy
                        </Text>
                        <Text as="p" size="lg" className="text-gray-500 max-w-2xl">
                            Last updated on: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </Text>
                    </Fade>
                </Container>
            </div>

            <Section className='py-16 md:py-24'>
                <Container className="max-w-4xl">
                    <Fade from="up" delay={0.2} className="bg-white rounded-4xl p-8 md:p-12 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 space-y-10 prose prose-lg prose-gray max-w-none">

                        <div className="space-y-4">
                            <Text as="h2" size="2xl" className="font-semibold text-gray-900">1. Information We Collect</Text>
                            <Text as="p" size="base" className="text-gray-600 leading-relaxed">
                                At SP Mech Group, we collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products, when participating in activities on the Website, or otherwise when contacting us. The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use.
                            </Text>
                        </div>

                        <div className="space-y-4">
                            <Text as="h2" size="2xl" className="font-semibold text-gray-900">2. How We Use Your Information</Text>
                            <Text as="p" size="base" className="text-gray-600 leading-relaxed">
                                We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. Specifically, we use the information we collect to fulfill and manage your orders, respond to inquiries, send administrative information to you, and improve our services and site performance.
                            </Text>
                        </div>

                        <div className="space-y-4">
                            <Text as="h2" size="2xl" className="font-semibold text-gray-900">3. Will Your Information Be Shared?</Text>
                            <Text as="p" size="base" className="text-gray-600 leading-relaxed">
                                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We securely process data and do not sell your personal information to third parties.
                            </Text>
                        </div>

                        <div className="space-y-4">
                            <Text as="h2" size="2xl" className="font-semibold text-gray-900">4. Tracking Technologies</Text>
                            <Text as="p" size="base" className="text-gray-600 leading-relaxed">
                                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
                            </Text>
                        </div>

                        <div className="space-y-4">
                            <Text as="h2" size="2xl" className="font-semibold text-gray-900">5. How Long Do We Keep Your Information?</Text>
                            <Text as="p" size="base" className="text-gray-600 leading-relaxed">
                                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law.
                            </Text>
                        </div>

                        <div className="space-y-4">
                            <Text as="h2" size="2xl" className="font-semibold text-gray-900">6. Contact Us</Text>
                            <Text as="p" size="base" className="text-gray-600 leading-relaxed">
                                If you have questions or comments about this policy, you may email us or contact us by post at our corporate headquarters in Jamnagar, Gujarat.
                            </Text>
                        </div>

                    </Fade>
                </Container>
            </Section>
        </div>
    )
}

export default PrivacyPolicy
