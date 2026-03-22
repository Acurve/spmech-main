"use client"
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import SectionHeader from '@/components/shared/SectionHeader'
import useIsMobile from '@/hooks/useIsMobile'
import { cn } from '@/lib/utils'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import Fade from '@/components/animations/Fade'

const extractVideoIdFromYoutubeURL = (url: string) => {
    return url.split("=")[1]
}

type MachineVideoProps = {
    className?: string,
    url: string,
}

export const MachineVideo = ({ className = "", url }: MachineVideoProps) => {
    const videoContainerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: videoContainerRef,
        offset: ["start end", "start start"],
    });

    // Make the scale slightly more dramatic on desktop
    const scale = useTransform(scrollYProgress, [0, 0.7], [0.55, 1]);

    // Animate border radius from pills to sharp
    const borderRadius = useTransform(scrollYProgress, [0, 0.7], ["4rem", "1rem"]);

    // Cinematic overlay that fades out as the video focuses
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.6, 0]);

    const isMobile = useIsMobile()

    return (
        <div className='relative w-full flex justify-center'>
            <motion.div
                ref={videoContainerRef}
                style={{
                    scale: isMobile ? 1 : scale,
                    borderRadius: isMobile ? "1rem" : borderRadius,
                }}
                className={cn("h-[70vh] md:h-[80vh] lg:h-[90dvh] w-full relative overflow-hidden shadow-2xl origin-bottom", className)}
            >
                {/* Cinematic Dark Overlay */}
                {!isMobile && (
                    <motion.div
                        style={{ opacity: overlayOpacity }}
                        className="absolute inset-0 bg-gray-900 pointer-events-none z-10"
                    />
                )}

                <iframe
                    className='absolute inset-0 h-full w-full object-cover'
                    src={`https://www.youtube.com/embed/${extractVideoIdFromYoutubeURL(url)}?modestbranding=1&rel=0&iv_load_policy=3&color=white`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </motion.div>
        </div>
    );
};

type MachineInActionProps = {
    videoUrl: string
}

const MachineInAction = ({ videoUrl }: MachineInActionProps) => {
    return (
        <Section id='machine-video' className="py-16 lg:py-24 bg-white">
            <Container>
                <div className='space-y-4 lg:space-y-8'>
                    <Fade triggerOnce from='down'>

                        <SectionHeader heading="Machine In Action" className="mb-0" />

                    </Fade>

                    <MachineVideo url={videoUrl} />
                </div>
            </Container>
        </Section>
    )
}

export default MachineInAction
