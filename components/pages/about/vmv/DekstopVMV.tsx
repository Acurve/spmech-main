"use client"

import Fade from "@/components/animations/Fade"
import { Text } from "@/components/typography/Text"
import VMVDetails, { type VMV, type VMVDetail } from "@/constants/vmvDetails"
import { cn } from "@/lib/utils"
import { IconPoint } from "@tabler/icons-react"
import { motion, useMotionTemplate, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { useRef, useState } from "react"

const DesktopVMVCardsContainer = ({className=""}:{className?:string}) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    })

    const translateY1 = useTransform(scrollYProgress, [0, 0.4], [100, 0])
    const translateY2 = useTransform(scrollYProgress, [0.25, 0.4], [250, 0])
    const containerWidth = useTransform(scrollYProgress, [0.4, 0.9], [70, 100])
    const activeCardWidth = useTransform(scrollYProgress, [0.4, 0.9], [33, 60])
    const InActiveCardWidth = useTransform(scrollYProgress, [0.4, 0.9], [33, 20])
    const height = useTransform(scrollYProgress, [0.4, 0.9], [432, 600])
    const [shouldVisible, setShouldVisible] = useState<boolean>(false)

    const isAbove = useTransform(height, (v) => v > 520)

    useMotionValueEvent(isAbove, "change", (v) => {
        setShouldVisible(v)
    })

    const [currentVMV, setCurrentVMV] = useState<VMV>("mission")
    const [hovered, setHovered] = useState<boolean>(false)
    return (
        <div ref={containerRef} className={cn("",className)}>
            <motion.div
                style={{ maxWidth: useMotionTemplate`${containerWidth}%` }}
                className='flex gap-2  mx-auto  justify-between relative h-[200dvh]'>

                {Object.keys(VMVDetails).map((vmv, index) => {
                    return (
                        <motion.div
                            key={VMVDetails[vmv as VMV].id}
                            onMouseEnter={() => {
                                setCurrentVMV(vmv as VMV);
                                setHovered(true)
                            }}
                            onMouseLeave={() => setHovered(false)}
                            style={{
                                y: index === 1 ? translateY1 : translateY2,
                                width: useMotionTemplate`${currentVMV === vmv ? activeCardWidth : InActiveCardWidth}%`,
                                height
                            }}
                            className={cn('sticky top-[calc((100dvh-432px)/2)]- top-21  h-full flex w-full', hovered && "transition-all duration-500")}>

                            <div className='flex  text-background  justify-center items-center  rounded-2xl overflow-hidden w-full relative'>


                                <DesktopVMVCard VMV={VMVDetails[vmv as VMV]} isActive={(vmv === currentVMV) && shouldVisible} />
                            </div>
                        </motion.div>

                    )
                })}

            </motion.div>

        </div>
    )
}

const DesktopVMVCard = ({ VMV, isActive }: { VMV: VMVDetail, isActive: boolean }) => {

    return (
        <div className="relative h-full w-full flex items-center">
            <img src={VMV.imageSrc} className="absolute inset-0 -z-1 w-full h-full object-cover" />
            <div className="absolute bg-foreground/70 inset-0" />
            {/* <AnimatePresence mode='wait'> */}
            {!isActive &&

                <div className='w-24 h-24 flex items-center z-10 m-auto justify-center'>{<VMV.icon className='w-full h-full' />}</div>
            }
            {isActive &&

                <div className='flex flex-col px-16 pt-8 h-full z-10 w-full'>
                    <div className='space-y-4'>
                        <Fade from='down'>

                            <Text as='h3' size='xl' className='flex flex-col gap-2 items-center font-medium'>
                                {<VMV.icon size={48} />}
                                {VMV.title}
                            </Text>
                        </Fade>

                        {

                            typeof VMV.description === "string" ?
                                <Fade from='down' delay={0.4}>
                                    <Text size='base' className='font-medium text-center'>
                                        {VMV.description}
                                    </Text>
                                </Fade>
                                : <div>
                                    {VMV.description.map((vmvDesc, index) => (

                                        <Fade key={index} from='down' delay={0.5 * index}>
                                            <Text size='base' className='font-medium flex space-x-2 items-center'>
                                                <IconPoint /> {vmvDesc}
                                            </Text>
                                        </Fade>
                                    ))}
                                </div>
                        }


                    </div>
                </div>
            }
        </div>
    )
}

export default DesktopVMVCardsContainer;