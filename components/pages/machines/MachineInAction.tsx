"use client"
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import SectionHeader from '@/components/shared/SectionHeader'
import { Text } from '@/components/typography/Text'
import { Button } from '@/components/ui/button'
import useIsMobile from '@/hooks/useIsMobile'
import useIsXLDesktop from '@/hooks/useIsXLDesktop'
import { cn } from '@/lib/utils'
import { IconPlayerPauseFilled, IconPlayerPlayFilled } from '@tabler/icons-react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'



export const MachineVideo = ({ className = "" }) => {
    const videoContainerRef = useRef(null);


    const { scrollYProgress } = useScroll({
        target: videoContainerRef,
        offset: ["start end", "start start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);
    const radius = useTransform(scrollYProgress, [0, 0.5], [96, 24]);
    const isMobile = useIsMobile()
    const isXLDesktop = useIsXLDesktop()

    const videoRef = useRef<HTMLVideoElement>(null)
    const mouseX = useSpring(0, { stiffness: 120, damping: 25 });
    const mouseY = useSpring(0, { stiffness: 120, damping: 25 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false)

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isMobile) return;
        const rect = e.currentTarget.getBoundingClientRect();

        // Increased offset (40px) to ensure the button trails clearly away from the actual cursor
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const handleDesktopVideoPlay = () => {
        if (isXLDesktop) return;
        if (!videoRef.current) return
        setIsVideoPlaying(prev => !prev)
    }

    const handleMobileVideoPlay = () => {
        if (!videoRef.current) return
        setIsVideoPlaying(prev => !prev)
    }

    useEffect(() => {
        if (isVideoPlaying) videoRef.current?.play()
        else videoRef.current?.pause()
    }, [isVideoPlaying, setIsVideoPlaying])



    return (
        <div className=''>


            <motion.div
                ref={videoContainerRef}
                style={{
                    scale: isMobile ? 1 : scale,
                }}
                className={cn("sticky h-[90dvh] overflow-hidden top-0", className)}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={handleDesktopVideoPlay}
            >
                <div className="relative h-full">

                    <motion.video
                        ref={videoRef}
                        style={{
                            borderRadius: radius
                        }}
                        className=' inset-0 absolute h-full w-full object-cover'>
                        <source src='https://www.pexels.com/download/video/9033891/' />
                    </motion.video>



                    {!isXLDesktop && (
                        <motion.div
                            style={{
                                x: mouseX,
                                y: mouseY,
                                opacity: isHovering ? isVideoPlaying ? 0 : 1 : 0,
                                scale: isHovering ? 1 : 0.5,
                            }}
                            transition={{ opacity: { duration: 0.2 } }}
                            className='absolute top-0 left-0 z-20 pointer-events-none'
                        >
                            <div className=' transform -translate-x-1/2 -translate-y-1/2'>
                                <Button className='bg-background h-12 px-6! text-foreground flex items-center rounded-full'>
                                    <IconPlayerPlayFilled className='w-5 h-5 fill-current' />
                                    <Text as='span' size='base' className='font-medium capitalize'>play video</Text>
                                </Button>

                            </div>
                        </motion.div>
                    )}
                    {
                        isXLDesktop && (
                            <div
                                className='absolute bottom-8 right-8 z-10'
                                onClick={handleMobileVideoPlay}
                            >
                                <div className="relative text-background border border-background! flex items-center justify-center rounded-full p-6">

                                    <IconPlayerPlayFilled className={cn('absolute fill-current', isVideoPlaying && "hidden")} />
                                    <IconPlayerPauseFilled className={cn('absolute fill-current hidden', isVideoPlaying && "flex")} />
                                </div>
                            </div>
                        )
                    }
                </div>

            </motion.div>
        </div>
    );
};


const MachineInAction = () => {
    return (
        <Section id='machine-video'>
            <Container className=''>
                <div className='space-y-8'>
                    <SectionHeader heading="Machine in Action" />
                    <MachineVideo />
                </div>

            </Container>

        </Section>
    )
}

export default MachineInAction
