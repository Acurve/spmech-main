"use client"
import Section from '../layout/Section'
import Container from '../layout/Container'
import { CallToActionSectionText, CallToActionText as CallToActionLinkText } from '@/constants/callToAction'
import { cn } from '@/lib/utils'
import LinkTag from '../LinkTag'
import { Text } from '../typography/Text'
import { useEffect, useRef, useState } from 'react'

import useIsMobile from '@/hooks/useIsMobile'
import { motion, useScroll, useTransform } from 'motion/react'
import BackgroundVideo from './BackgroundVideo'
import { IconPlayerPauseFilled, IconPlayerPlayFilled } from '@tabler/icons-react'


type CallToActionProps = {
    className?: string,
    text?: string,
    linkText?: string,
    reverse?: boolean,
    linkHref?: string,
}

export const CallToActionSideVideo = ({
    className = "",
    text = CallToActionSectionText,
    linkText = CallToActionLinkText,
    reverse = false,
    linkHref = "/contact"

}: CallToActionProps) => {

    const videoSrc = "https://robojob-usa.com/media/documents/19791092-uhd_3840_2160_60fps_processed_0TGr4LR_ENUQU21.webm"

    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(true)

    useEffect(() => {
        if (isPlaying) videoRef.current?.play()
        else videoRef.current?.pause()
    }, [isPlaying])

    return (
        <Section className={cn(" min-h-max", className)}>
            <Container className='flex items-center'>
                <div className='grid md:grid-cols-2 gap-10'>
                    <div className='rounded-2xl overflow-hidden relative'>
                        <video ref={videoRef} autoPlay muted loop>
                            <source src={videoSrc} />
                        </video>
                        <div className="absolute flex p-4 inset-0">

                            <button
                                className="bg-background text-foreground mt-auto ml-auto w-10 aspect-square flex justify-center items-center rounded-full"
                                onClick={() => setIsPlaying(!isPlaying)}
                                aria-label={isPlaying ? "Pause video" : "Play video"}
                            >
                                {isPlaying ? <IconPlayerPauseFilled size={20} className="fill-current" /> : <IconPlayerPlayFilled size={20} className="fill-current" />}
                            </button>
                        </div>
                    </div>
                    <div className={` flex items-center  ${reverse && "col-start-2"}`}>
                        <div className='space-y-8 w-full md:pr-10 xl:px-16'>
                            <Text as='h2' size='xl' className='font-medium leading-[1.1]'>{text}</Text>
                            <LinkTag href={linkHref} variant='button-brand' className='w-full! md:w-max! '>
                                <Text as='span' size='base' className='text-center font-medium w-full'>
                                    {linkText}
                                </Text>
                            </LinkTag>
                        </div>
                    </div>

                </div>
            </Container>
        </Section>

    )
}

type CallToActionBackgroundVideoProps = {
    text?: string,
    linkText?: string,
    linkHref?: string,
    VideoSrC?: string,
}




export const CallToActionBackgroundVideo = ({
    text = CallToActionSectionText,
    linkText = CallToActionLinkText,
    linkHref = "/contact",
    VideoSrC: videoSrc = "https://robojob-usa.com/media/documents/19791092-uhd_3840_2160_60fps_processed_0TGr4LR_ENUQU21.webm"

}: CallToActionBackgroundVideoProps) => {



    const containerRef = useRef<HTMLDivElement>(null)


    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const radius = useTransform(scrollYProgress, [0, 1], [96, 0]);
    const isMobile = useIsMobile()



    return (
        <Section>
            <div className='h-[110dvh]'>

                <motion.div
                    ref={containerRef}
                    style={{
                        scale: isMobile ? 1 : scale,
                        borderRadius: radius
                    }}
                    className={cn("h-dvh overflow-hidden top-0 sticky")}
                >
                    <BackgroundVideo videoSrc={videoSrc} withOverLay withPlayPauseBtn />

                    <div className='absolute z-1 inset-0 flex justify-center items-center'>

                        <div className='sm:w-2/3 xl:w-1/2 '>
                            <Container className='flex flex-col items-center gap-8'>
                                <Text as='h2' size='2xl' className='font-medium text-background leading-[1.1] text-center'>{text}</Text>
                                <LinkTag href={linkHref} variant='button-brand'>
                                    <Text as='span' size='base' className='text-center font-medium w-full'>
                                        {linkText}
                                    </Text>
                                </LinkTag>
                            </Container>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    )
}

