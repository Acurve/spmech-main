"use client"
import { useHeroVideoState } from '@/contexts/heroVideoContext'
import { cn } from '@/lib/utils'
import { IconPlayerPause, IconPlayerPlay } from '@tabler/icons-react'
import { useEffect, useRef } from 'react'

type HeroVideoProps = {
    className?: string,
    pause?: boolean
}

const HeroVideo = ({ className = "", pause = false }: HeroVideoProps) => {
    const { isPlaying } = useHeroVideoState()
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (isPlaying) {
            videoRef.current?.play()
        }
        else {
            videoRef.current?.pause()
        }
    }, [isPlaying])
    return (
        <div className={cn("absolute w-full h-full top-[20%]! inset-0 -z-1", className)}>
            <video
                ref={videoRef}
                className='w-full h-full flex scale-200 sm:scale-100 sm:object-cover'
                src="heroVideo2.webm"
                itemType='video/webm'
                autoPlay
                muted
                loop
            />
        </div>
    )
}
export const HeroVideoPlayPauseBtn = () => {
    const { isPlaying, setIsPlaying } = useHeroVideoState()
    return (
        <button
            className='rounded-full border border-black h-13 aspect-square flex justify-center items-center'
            onClick={() => setIsPlaying(!isPlaying)}
        >
            <IconPlayerPlay className={`${isPlaying && "hidden"}`} />
            <IconPlayerPause className={`${!isPlaying && "hidden"}`} />
        </button>
    )
}
export default HeroVideo
