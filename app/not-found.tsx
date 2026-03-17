import Container from '@/components/layout/Container'
import { Text } from '@/components/typography/Text'
import LinkTag from '@/components/LinkTag'
import Fade from '@/components/animations/Fade'
import { IconHome, IconMail, IconPhone } from '@tabler/icons-react'
import { getManufacturerInfo } from '@/utils/api/api'

export default async function NotFound() {
  const response = await getManufacturerInfo()
  const data = response?.data

  return (
    <div className="bg-[#FAFAFA] min-h-[max(calc(100vh-140px),700px)] flex flex-col items-center justify-center py-24">
      <Container className="max-w-4xl w-full flex flex-col items-center justify-center h-full">
        <Fade from="up" className="w-full flex flex-col items-center justify-center text-center space-y-6 bg-white rounded-[2rem] p-8 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden relative">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,132,42,0.03)_0%,transparent_70%)] pointer-events-none" />

          <Text as="h1" className="font-bold text-brand tracking-tighter sm:text-8xl lg:text-9xl">
            404
          </Text>
          <Text as="h2" size="3xl" className="font-medium tracking-tight text-gray-900">
            Page Not Found
          </Text>
          <Text as="p" size="base" className="text-gray-500 max-w-lg mx-auto">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </Text>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 pt-6">
            <LinkTag href="/" variant="button-brand" className="flex items-center gap-2">
              <IconHome className="w-5 h-5" />
              <span>Back to Home</span>
            </LinkTag>
            <LinkTag href="/contact" variant="button-outline" className="flex items-center gap-2">
              <IconMail className="w-5 h-5" />
              <span>Contact Support</span>
            </LinkTag>
          </div>

          <div className="w-full mt-12 pt-8 border-t border-gray-100">
            <Text as="h3" size="lg" className="font-semibold text-gray-900 mb-6 relative z-10">Need immediate assistance?</Text>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 relative z-10">
              {data?.contactDetails?.email && (
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-brand/5 flex items-center justify-center text-brand transition-colors group-hover:bg-brand/10">
                    <IconMail className="w-5 h-5" />
                  </div>
                  <a href={`mailto:${data.contactDetails.email}`} className="text-gray-600 hover:text-brand transition-colors font-medium">
                    {data.contactDetails.email}
                  </a>
                </div>
              )}
              {data?.contactDetails?.customerCareNo && (
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-brand/5 flex items-center justify-center text-brand transition-colors group-hover:bg-brand/10">
                    <IconPhone className="w-5 h-5" />
                  </div>
                  <a href={`tel:${data.contactDetails.customerCareNo}`} className="text-gray-600 hover:text-brand transition-colors font-medium">
                    {data.contactDetails.customerCareNo}
                  </a>
                </div>
              )}
            </div>
          </div>
        </Fade>
      </Container>
    </div>
  )
}
