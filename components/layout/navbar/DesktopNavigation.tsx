"use client"
import LinkTag from '@/components/LinkTag'
import { PX16, PX18, PX30 } from '@/components/typography/TextSize'
import navigationLinks, { DropdownNavigationItems } from '@/constants/navigationLinks'
import { cn } from '@/lib/utils'
import Container from '../Container'


import { motion } from "motion/react"
import { useState } from 'react'
import { useHeroVideoState } from '@/contexts/heroVideoContext'
const DesktopNavigation = ({ className = "" }: { className?: string }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { currentImg } = useHeroVideoState()

    return (
        <div className={cn("", className)}>
            <ul className='flex gap-8'>

                {
                    navigationLinks.map((link) => (
                        <li
                            key={link.id}
                            onMouseEnter={() => link.type === "dropdown" ? setIsOpen(true) : null}
                            onMouseLeave={() => link.type === "dropdown" ? setIsOpen(false) : null}
                            onClick={() => link.type === "dropdown" ? setIsOpen(!isOpen) : null}
                            className='relative'
                        >

                            <LinkTag
                                variant={currentImg ? "hover-underline-white" : "hover-underline"}
                                href={link.href}
                                notLink={link.type === 'dropdown'}>
                                <PX18 className='font-medium'>

                                    {link.name}
                                </PX18>
                            </LinkTag>
                            {link.type === "dropdown" && (
                                <DesktopNavigationDropdown subLinks={link.subLinks} isOpen={isOpen} />
                            )}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


type DropdownSubLinks = DropdownNavigationItems["subLinks"][number]
type DesktopNavigationDropdownProps = {
    className?: string,
    subLinks: DropdownSubLinks[],
    isOpen: boolean
}

export const DesktopNavigationDropdown = ({
    className,
    subLinks,
    isOpen,
}: DesktopNavigationDropdownProps) => {
    return (
        <motion.div
            className={cn(
                "bg-primary-lighter absolute left-0 right-0 top-full w-max overflow-hidden mt-4 rounded-xl shadow-2xl",
                className
            )}
            initial={false}
            animate={{
                maxHeight: isOpen ? "100vh" : 0,
                transition: {
                    maxHeight: {
                        duration: 0.5, ease: "easeInOut"
                    }
                }
            }}

        >
            <Container className="flex w-full">
                <div className='space-y-8'>
                    <motion.div
                        className='mt-8'
                        initial={{
                            y: -10,
                            opacity: 0,
                        }}
                        animate={{
                            opacity: isOpen ? 1 : 0,
                            y: isOpen ? 0 : -10,
                            transition: {
                                duration: 0.5,
                                ease: "easeInOut"
                            }
                        }}
                    >
                        <PX16 className='font-medium'>Products</PX16>
                    </motion.div>

                    <div className='flex flex-col gap-8 mb-8'>
                        {subLinks.map((link, index) => (
                            <motion.div
                                key={link.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{
                                    opacity: isOpen ? 1 : 0,
                                    y: isOpen ? 0 : 50,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: isOpen ? index * 0.1 : 0,
                                    ease: "easeInOut"
                                }}
                            >
                                <LinkTag href={link.href} variant='custom' className='text-muted-foreground hover:text-black transition-colors duration-300'>
                                    {/* <ImageContainer src={link.imageSrc} alt="" width={300} height={180} /> */}
                                    <PX30 className='font-medium'>{link.name}</PX30>
                                </LinkTag>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </motion.div >
    )
}



export default DesktopNavigation
