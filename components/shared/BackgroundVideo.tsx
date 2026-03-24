"use client"

import { cn } from "@/lib/utils";
import { IconPlayerPauseFilled, IconPlayerPlayFilled } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";


type BackgroundVideoProps = {
    videoSrc: string;
    withOverLay?: boolean;
    overLayClassName?: string;
    withPlayPauseBtn?: boolean;
    className?: string;
}

type PlayPauseBtnProps = {
    isPlaying: boolean,
    setIsPlaying: (isPlaying: boolean) => void
}

const PlayPauseBtn = ({ isPlaying, setIsPlaying }: PlayPauseBtnProps) => {
    return (

        <button
            className="bg-background absolute z-10 text-foreground inset-0 right-8 bottom-8 mt-auto ml-auto w-10 aspect-square flex justify-center items-center rounded-full"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause video" : "Play video"}
        >
            {isPlaying ? <IconPlayerPauseFilled size={20} className="fill-current" /> : <IconPlayerPlayFilled size={20} className="fill-current" />}
        </button>
    )
}


const BackgroundVideo = (
    {
        videoSrc,
        withOverLay = false,
        overLayClassName = "",
        withPlayPauseBtn = false,
        className = ""
    }
        : BackgroundVideoProps
) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true)
    useEffect(() => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current?.play().catch((error) => {
                console.warn("Video playback was blocked or failed:", error);
            });
        } else {
            videoRef.current.pause();
        }
    }, [isPlaying]);
    return (
        <>
            <video ref={videoRef} className={cn('absolute inset-0 object-cover h-full w-full', className)} autoPlay loop muted playsInline>
                <source src={videoSrc} />
            </video>
            {withOverLay && <div className={cn("absolute bg-black/50 inset-0", overLayClassName)} />}
            {withPlayPauseBtn && <PlayPauseBtn isPlaying={isPlaying} setIsPlaying={setIsPlaying} />}
        </>
    )
}

export default BackgroundVideo