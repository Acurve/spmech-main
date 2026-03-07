"use client"
import { cn } from '@/lib/utils'
import Container from '../Container'
import { useTabletNavigation } from '@/contexts/tabletNavigationContext'
import { motion } from 'motion/react'
import LinkTag from '@/components/LinkTag'
import navigationLinks, { DropdownNavigationItems } from '@/constants/navigationLinks'
import { useEffect, useRef, useState } from 'react'
import { useLenis } from 'lenis/react'
import { Text } from '@/components/typography/Text'
import { CallToActionText } from '@/constants/callToAction'




type TabletNavigation = {
  className?: string,
}

const TabletNavigation = ({ className = "" }: TabletNavigation) => {
  const { isOpen } = useTabletNavigation()

  const [isTabletNavigationDropdownOpen, setIsTabletNavigationDropdownOpen] = useState(false)

  const lenis = useLenis()

  const scrollYRef = useRef(0)

  useEffect(() => {
    if (!lenis) return
    const main = document.getElementById("main")
    if (!main) return

    if (isOpen) {
      // ✅ store scroll position persistently
      scrollYRef.current = window.scrollY

      lenis.stop()

      main.style.height = "100dvh"
      main.style.overflow = "hidden"
    } else {
      main.style.height = ""
      main.style.overflow = ""

      window.scrollTo(0, scrollYRef.current)

      lenis.start()
    }

    return () => {
      lenis.start()
    }
  }, [isOpen, lenis])

  return (
    <motion.div
      data-lenis-prevent
      className={cn("h-[calc(100dvh-84px)] mt-21 overflow-y-scroll touch-pan-y fixed bg-background inset-0",
        isOpen ? "z-100 pointer-events-auto" : "-z-100 pointer-events-none",
        className)}
      initial={false}
      animate={{
        opacity: isOpen ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Container className='flex w-full'>

        <div className="w-full flex flex-col py-6">
          <ul className='space-y-8 w-full'>

            {
              navigationLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    y: isOpen ? 0 : 20,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: isOpen ? index * 0.1 : 0,
                    ease: "easeInOut"
                  }}
                >

                  <LinkTag
                    href={link.href}
                    onClick={() => link.type === "dropdown" ? setIsTabletNavigationDropdownOpen(!isTabletNavigationDropdownOpen) : null}
                    className='flex items-center w-full text-muted-foreground  hover:text-black'
                    variant='custom'
                    notLink={link.type === 'dropdown'}
                  >
                    <Text as='span' size='2xl' className='capitalize font-medium'>

                      {link.name}
                    </Text>
                    {/* plus and minus sign */}
                    {link.type === "dropdown" && (
                      <div className='relative ml-auto mr-6'>
                        <span className='w-4 sm:w-6 h-0.5 bg-muted-foreground absolute' />
                        <span className={`w-4 sm:w-6 h-0.5 bg-muted-foreground absolute ${isTabletNavigationDropdownOpen ? "" : "rotate-90"} transition-transform duration-300`} />
                      </div>
                    )}

                  </LinkTag>
                  {link.type === "dropdown" && (
                    <TabletNavigationDropdown subLinks={link.subLinks} isOpen={isTabletNavigationDropdownOpen} />
                  )}
                </motion.li>
              ))
            }
          </ul>

          {/* get in touch button */}
          <motion.div
            className='mt-auto flex sm:hidden'
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : 20,
            }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              ease: "easeInOut"
            }}
          >

            <LinkTag variant="button-brand" className="w-full! justify-center">
              <Text as='span' size='base' className="font-medium">{CallToActionText}</Text>
            </LinkTag>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  )
}


type DropdownSubLinks = DropdownNavigationItems["subLinks"][number]
type TabletNavigationDropdownProps = {
  className?: string,
  subLinks: DropdownSubLinks[],
  isOpen: boolean
}

export const TabletNavigationDropdown = ({
  className,
  subLinks,
  isOpen,
}: TabletNavigationDropdownProps) => {
  return (
    <motion.div
      className={cn(
        "bg-primary-lighter  overflow-hidden",
        className
      )}
      initial={false}
      animate={{
        maxHeight: isOpen ? "50vh" : 0,
      }}

      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Container className="flex w-full">

        <div className='space-y-6 mb-16 pt-6'>
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
              <LinkTag href={link.href} variant="custom" className='text-muted-foreground hover:text-black'>
                <div className='sm:flex hidden'>
                  <Text as='span' size='xl' className='font-medium'>{link.name}</Text>
                </div>

              </LinkTag>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.div>
  )
}

export default TabletNavigation


