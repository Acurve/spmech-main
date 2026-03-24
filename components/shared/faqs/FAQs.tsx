"use client"
import Section from '../../layout/Section'
import Container from '../../layout/Container'
import { cn } from '@/lib/utils'
import FAQItem, { type FAQ as FAQType } from './FAQItem'
import { useState } from 'react'
import SectionHeader from '../SectionHeader'

type FAQsProps = {
    title?: string,
    className?: string,
    faqList: FAQType[]
}

const FAQs = ({ className = "", faqList }: FAQsProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    return (
        <Section className={cn("", className)}>
            <Container>
                <div className='space-y-16 justify-between lg:flex'>
                    {/* title */}
                    <div>

                        <SectionHeader
                            className='md:grid-cols-1'
                            heading={<>Common <br className="hidden md:block" /> Inquiries</>}
                            description='Everything you need to know about our operational methodology and service architecture.'
                            eyeBrow='_FAQs'
                            descriptionContainerClassName='md:items-start'
                            descriptionTextClassName='md:text-start'
                        />

                    </div>
                    <div className='lg:w-[50%]'>
                        <div className="border-t border-foreground!">
                            {faqList.map((faq, index) => (
                                <FAQItem
                                    key={faq.id}
                                    faq={faq}
                                    index={index + 1}
                                    isOpen={openIndex === index}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>

        </Section>
    )
}

export default FAQs
