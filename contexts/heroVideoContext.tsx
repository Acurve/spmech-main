"use client"

import { CategoryShaped } from "@/types/category"
import { createContext, useContext, useState } from "react"



type HeroVideoContextType = {
    isPlaying: boolean,
    setIsPlaying: (value: boolean) => void,
    currentCategory: CategoryShaped,
    setCurrentCategory: (value: CategoryShaped) => void,
    categories: CategoryShaped[]
}

const HeroVideoContext =
    createContext<HeroVideoContextType | null>(null)

export const HeroVideoContextProvider = ({
    children,
    categories
}: {
    children: React.ReactNode,
    categories: CategoryShaped[]
}) => {
    const [isPlaying, setIsPlaying] = useState(true)
    const [currentCategory, setCurrentCategory] = useState<CategoryShaped>(categories[0])

    return (
        <HeroVideoContext.Provider value={{ isPlaying, setIsPlaying, categories, currentCategory, setCurrentCategory }}>
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
