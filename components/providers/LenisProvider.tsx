"use client"

import { ReactLenis } from 'lenis/react';
import type { LenisRef } from 'lenis/react';
import { cancelFrame, frame } from 'motion/react';
import { useEffect, useRef } from 'react';
import React from 'react'

const LenisProvider = ({children}:React.PropsWithChildren) => {
    const lenisRef = useRef<LenisRef>(null)

    useEffect(() => {
        function update(data: { timestamp: number }) {
            const time = data.timestamp
            lenisRef.current?.lenis?.raf(time)
        }

        frame.update(update, true)

        return () => cancelFrame(update)
    }, [])


    return (
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
            {children}
        </ReactLenis>
    )
}

export default LenisProvider

