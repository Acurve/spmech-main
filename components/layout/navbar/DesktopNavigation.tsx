"use client"
import LinkTag from '@/components/LinkTag'
import navigationLinks from '@/constants/navigationLinks'
import { cn } from '@/lib/utils'
import Container from '../Container'
import { motion } from "motion/react"
import { useState } from 'react'
import { Text } from '@/components/typography/Text'
import { DesktopNavigationProps } from './Navbar'


const DesktopNavigation = ({ className = "", categories }: { className?: string } & { categories: DesktopNavigationProps[] }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

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
                            className=''
                        >

                            <LinkTag
                                className='after:bg-brand'
                                href={link.href}
                                notLink={link.type === 'dropdown'}>
                                <Text as="span" size='sm' className='font-medium'>

                                    {link.name}
                                </Text>
                            </LinkTag>
                            {link.type === "dropdown" && (
                                <DesktopNavigationDropdown subLinks={categories} isOpen={isOpen} />
                            )}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

type DesktopNavigationDropdownProps = {
    className?: string,
    subLinks: DesktopNavigationProps[],
    isOpen: boolean
}

export const DesktopNavigationDropdown = ({
    className,
    subLinks,
    isOpen,
}: DesktopNavigationDropdownProps) => {
    const firstCategory = subLinks[0]

    const [currentCategory, setCurrentCategory] = useState<DesktopNavigationProps>(firstCategory)

    return (
        <motion.div
            className={cn(
                "bg-background absolute left-0 right-0 top-full w-full  overflow-hidden shadow-xl",
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
            <Container className="flex w-full py-8 mt-4">
                <div className='flex justify-center gap-16 w-full'>

                    <div className='space-y-8'>
                        <motion.div
                            className=' flex-nowrap shrink-0'
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
                            <Text as='span' size='xs' className='font-medium'>Machines</Text>
                        </motion.div>

                        <div className='flex flex-col gap-8 mb-8'>
                            {subLinks.map((cat, index) => (
                                <motion.div
                                    key={cat.id}
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
                                    <LinkTag href={cat.href}
                                        onMouseEnter={() => setCurrentCategory(cat)}
                                        variant='custom'
                                        className={cn(
                                            "text-foreground/70 hover:text-brand transition-colors duration-300",
                                            currentCategory.id === cat.id && "text-brand")}>

                                        <Text as='span' size='xl' className='font-medium'>{cat.name}</Text>
                                    </LinkTag>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <DesktopNavigationDropdownImageContainer
                        description={currentCategory.description}
                        image={currentCategory.image} />
                </div>
            </Container>


        </motion.div >
    )
}

type DesktopNavigationDropdownImageContainerProps = Pick<DesktopNavigationProps, "image" | "description">

const DesktopNavigationDropdownImageContainer = ({ image, description }: DesktopNavigationDropdownImageContainerProps) => {
    return (
        <div className='px-12 pb-4 border-l-2  border-foreground/60! max-w-xl space-y-4'>
            {/* image container */}
            <div className='py-4 border-b-2  border-foreground/40!'>
                <img src={image.outline} alt="" className='' />
            </div>


            <div>
                {description}
            </div>

        </div>
    )
}



export default DesktopNavigation