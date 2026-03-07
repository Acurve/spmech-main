import ScrollRevealParagraph from '@/components/animations/ScrollRevealParagraph'

import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import { Text } from '@/components/typography/Text'

const AboutParagraphs = () => {
    return (
        <Section className=''>
            <Container className='md:flex gap-8 '>

                <div className='w-[35%] hidden md:block pr-16'>
                    <Text size='sm'>
                        SP Mech is an Indian manufacturer of CNC and Special Purpose machines, that has been offering not only product quality but also customer peace of mind.
                    </Text>
                </div>
                <div className='flex-1'>
                    <ScrollRevealParagraph
                        text="This animation now tracks lines rather than just words. As you scroll, the first line reveals from left to right completely. Because each line has its own scroll trigger, the second line will only start its sequential reveal once it reaches the specific threshold in the viewport, making every line break feel like a fresh start for the animation."
                    />
                    <ScrollRevealParagraph
                        text="Sequential flow is powerful for storytelling. It guides the eye naturally across the page. By detecting line wraps dynamically, this component stays responsive—whether you are on a mobile device with many short lines or a desktop with a few long ones, the flow remains consistent."
                    />

                </div>
            </Container>

        </Section>
    )
}
export default AboutParagraphs;

