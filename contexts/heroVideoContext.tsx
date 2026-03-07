"use client"

import { Category } from "@/constants/categories"
import { createContext, useContext, useState } from "react"



type HeroVideoContextType = {
    isPlaying: boolean,
    setIsPlaying: (value: boolean) => void,
    currentCategory: Category,
    setCurrentCategory: (value: Category) => void
}

const HeroVideoContext =
    createContext<HeroVideoContextType | null>(null)

export const HeroVideoContextProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [isPlaying, setIsPlaying] = useState(true)
    const [currentCategory, setCurrentCategory] = useState<Category>("cnc")

    return (
        <HeroVideoContext.Provider value={{ isPlaying, setIsPlaying, currentCategory, setCurrentCategory }}>
            {children}
        </HeroVideoContext.Provider>
    )
}

export const useHeroVideo = () => {
    const context = useContext(HeroVideoContext)

    if (!context) {
        throw new Error(
            "useHeroVideoState must be used within HeroVideoContextProvider"
        )
    }

    return context
}
