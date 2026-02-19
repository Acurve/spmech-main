import Section from '../layout/Section'
import Container from '../layout/Container'
import { CallToActionSectionText, CallToActionText as CallToActionLinkText } from '@/constants/callToAction'
import { cn } from '@/lib/utils'
import ImageParallax from '../animations/ImageParallax'
import { PX18, PXCustom } from '../typography/TextSize'
import LinkTag from '../LinkTag'
type CallToActionProps = {
    className?: string,
    imageSrc?: string,
    text?: string,
    linkText?: string,
    reverse?: boolean,
    linkHref?: string,
}

const CallToAction = ({
    className = "",
    imageSrc = "images/call_to_action.webp",
    text = CallToActionSectionText,
    linkText = CallToActionLinkText,
    reverse = false,
    linkHref = "/contact"

}: CallToActionProps) => {
    return (
        <Section className={cn("my-20", className)}>
            <Container className='flex items-center min-h-dvh'>
                <div className='grid md:grid-cols-2 gap-10'>
                    <div className={` flex items-center ${reverse && "col-start-2"}`}>
                        <div className='space-y-8 md:pr-10 xl:px-16'>
                            <PXCustom tag='h2' className='font-medium leading-[1.1] text-[40px]! xl:text-[50px]!'>{text}</PXCustom>
                            <LinkTag href={linkHref} variant='button-primary' className='w-full! md:w-max! '>
                                <PX18 className='text-center font-medium w-full'>
                                    {linkText}
                                </PX18>
                            </LinkTag>
                        </div>
                    </div>
                    {imageSrc &&
                        <div className={`${reverse && "col-start-1"} h-108 md:h-150`} >

                            <ImageParallax imageSrc={imageSrc} className='h-full' />
                        </div>
                    }
                </div>
            </Container>
        </Section>

    )
}

export default CallToAction
