"use client"

import { createContext, useContext, useState } from "react"


type HeroVideoContextType = {
    isPlaying: boolean,
    setIsPlaying: (value: boolean) => void,
    currentImg: string | null,
    setCurrentImg: (value: string | null) => void
}

const HeroVideoContext =
    createContext<HeroVideoContextType | null>(null)

export const HeroVideoContextProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [isPlaying, setIsPlaying] = useState(true)
    const [currentImg, setCurrentImg] = useState<string | null>(null)

    return (
        <HeroVideoContext.Provider value={{ isPlaying, setIsPlaying, currentImg, setCurrentImg }}>
            {children}
        </HeroVideoContext.Provider>
    )
}

export const useHeroVideoState = () => {
    const context = useContext(HeroVideoContext)

    if (!context) {
        throw new Error(
            "useHeroVideoState must be used within HeroVideoContextProvider"
        )
    }

    return context
}
