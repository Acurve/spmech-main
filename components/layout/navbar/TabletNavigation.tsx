"use client"
import { cn } from '@/lib/utils'
import Container from '../Container'
import { useTabletNavigation } from '@/contexts/tabletNavigationContext'
import { motion } from 'motion/react'
import LinkTag from '@/components/LinkTag'
import { PX18, PX30, PX50 } from '@/components/typography/TextSize'
import navigationLinks, { DropdownNavigationItems } from '@/constants/navigationLinks'
import { useEffect, useRef, useState } from 'react'
import { useLenis } from 'lenis/react'




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
      className={cn("lg:h-[calc(100dvh-128px)] lg:mt-32 h-[calc(100dvh-84px)] mt-21 overflow-y-scroll touch-pan-y fixed bg-primary-lighter inset-0",
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
                    <div className='sm:flex hidden'>
                      <PX50 tag='span' className='capitalize font-medium'>

                        {link.name}
                      </PX50>
                    </div>
                    <div className='flex sm:hidden'>
                      <PX30 tag='span' className='capitalize font-medium'>

                        {link.name}
                      </PX30>
                    </div>
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

            <LinkTag variant="button-black" className="w-full! justify-center">
              <PX18 className="font-medium">Get in touch</PX18>
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
                  <PX30 className='font-medium'>{link.name}</PX30>
                </div>
                <div className='sm:hidden flex'>
                  <PX18 className='font-medium'>{link.name}</PX18>
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


