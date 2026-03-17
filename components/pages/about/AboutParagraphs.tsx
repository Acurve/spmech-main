"use client"
import ScrollRevealParagraph from '@/components/animations/ScrollRevealParagraph'

import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import MachinePageLoader from '@/components/loaders/MachinePageLoader'
import { Text } from '@/components/typography/Text'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

type AboutDetails = {
    success: boolean,
    message: string,
    data: {
        _id: string,
        name: string,
        logoText: string,
        tagline: string,
        profileText: string[],
        contactDetails: {
            address: string,
            email: string,
            customerCareNo: string,
            mobileNo: string
        },
        createdAt: string,
        updatedAt: string,
        __v: number
    }
}
type AboutParagraphsProps = {
    paragraphs: string[]
}
const AboutParagraphs = ({ paragraphs }: AboutParagraphsProps) => {

    return (
        <Section className=''>
            <Container className='md:flex gap-8 '>

                <div className='w-[35%] hidden md:block pr-16'>
                    <Text size='sm'>
                        SP Mech is an Indian manufacturer of CNC and Special Purpose machines, that has been offering not only product quality but also customer peace of mind.
                    </Text>
                </div>
                <div className='flex-1'>
                    {
                        paragraphs.map((text, index) => (

                            <ScrollRevealParagraph
                                key={index}
                                text={text}
                            />
                        ))
                    }


                </div>
            </Container>

        </Section>
    )
}
export default AboutParagraphs;

