"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { LenisOptions } from "lenis";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { useEffect, useRef } from "react";
import React from "react";

const LenisProvider = ({ children }: React.PropsWithChildren) => {
    const lenisRef = useRef<LenisRef>(null);
    const isMobile = useIsMobile()

    useEffect(() => {
        function update(data: { timestamp: number }) {
            const time = data.timestamp;
            lenisRef.current?.lenis?.raf(time);
        }

        frame.update(update, true);

        return () => cancelFrame(update);
    }, []);

    const lenisOptions: LenisOptions = {
        duration: isMobile ? 1.0 : 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: isMobile ? 1 : 1,
        touchMultiplier: isMobile ? 1.5 : 2, // Important for mobile
        lerp: isMobile ? 0.1 : 0.075, // Faster on mobile for better responsiveness
        infinite: false,
        autoResize: true,
        autoRaf: false
    }

    return (
        <ReactLenis
            root
            ref={lenisRef}
            options={lenisOptions}
        >
            {children}
        </ReactLenis>
    );
};

export default LenisProvider;
