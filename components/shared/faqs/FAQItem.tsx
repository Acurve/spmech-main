"use client"
import Fade from '@/components/animations/Fade'
import { PX14, PX18 } from '@/components/typography/TextSize'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'motion/react'


export type FAQ = {
    id: string,
    question: string,
    answer: string,
}
export type FAQItemProps = {
    faq: FAQ
    className?: string,
    isOpen: boolean;
    index: number;
    onClick: () => void;
}

const FAQItem = ({
    faq,
    index,
    isOpen,
    onClick,
    className = ""
}: FAQItemProps) => {
    return (
        <Fade from='down'>
            <div className={cn("border-b border-primary-foreground group cursor-pointer", className)}>
                <button
                    onClick={onClick}
                    className="w-full py-8 flex items-start justify-between text-left focus:outline-none"
                >
                    <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                        <PX14 className="uppercase tracking-widest text-primary-orange group-hover:text-primary-orange transition-colors duration-300 w-12 my-auto shrink-0">
                            0{index}
                        </PX14>
                        <span className="text-xl md:text-3xl font-light tracking-tight group-hover:translate-x-2 transition-transform duration-500 ease-out text-primary-foreground">
                            {faq.question}
                        </span>
                    </div>
                    <div className="relative flex items-center justify-center w-8 h-8 shrink-0 ml-4">
                        <div className='relative ml-auto mr-6'>
                            <span className='w-4 sm:w-6 h-0.5 bg-primary-foreground absolute' />
                            <span className={`w-4 sm:w-6 h-0.5 bg-primary-foreground absolute ${isOpen ? "" : "rotate-90"} transition-transform duration-300`} />
                        </div>

                    </div>
                </button>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                            <div className="pb-10 md:pl-24 pr-4 md:pr-24">
                                <PX18 className="text-gray-600 leading-relaxed font-light">
                                    {faq.answer}
                                </PX18>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Fade>
    );
};

export default FAQItem
