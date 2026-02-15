"use client"
import Section from '../../layout/Section'
import Container from '../../layout/Container'
import { cn } from '@/lib/utils'
import FAQItem, { type FAQ as FAQType } from './FAQItem'
import { useState } from 'react'
import { PX18, PX50, PXCustom } from '@/components/typography/TextSize'

type FAQsProps = {
    title?: string,
    className?: string,
    faqList: FAQType[]
}

const FAQs = ({ className = "", faqList }: FAQsProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    return (
        <Section className={cn("mt-20 md:mt-40", className)}>
            <Container>
                <div className='space-y-16'>
                    {/* title */}
                    <div className=" grid grid-cols-1 md:grid-cols-12 gap-8 " >
                        <div className="md:col-span-8">
                            <PXCustom tag='h2' className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] ">
                                Common <br className="hidden md:block" /> Inquiries
                            </PXCustom>
                        </div>
                        <div className="md:col-span-4 flex flex-col justify-end items-start md:items-end">
                            <PX18 className="font-medium leading-snug max-w-sm md:text-right">
                                Everything you need to know about our operational methodology and service architecture.
                            </PX18>
                        </div>
                    </div>
                    <div>
                        <div className="border-t border-primary-foreground">
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
