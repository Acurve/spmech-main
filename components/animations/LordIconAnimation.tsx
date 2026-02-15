"use client";

import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";

type LordiconAnimationProps = {
    delay: number;     // ms before first play
    interval: number;  // ms between plays
    icon: any;
};

const LordiconAnimation = ({
    delay,
    interval,
    icon,
}: LordiconAnimationProps) => {
    const playerRef = useRef<Player>(null);

    useEffect(() => {
        let intervalId: NodeJS.Timeout | null = null;

        const timeoutId = setTimeout(() => {
            playerRef.current?.playFromBeginning();

            intervalId = setInterval(() => {
                playerRef.current?.playFromBeginning();
            }, interval);
        }, delay);

        return () => {
            clearTimeout(timeoutId);
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [delay, interval]);

    return <Player ref={playerRef} icon={icon} size={56} />;
}

export default LordiconAnimation;