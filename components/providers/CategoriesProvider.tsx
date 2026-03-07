"use client"

import { useCategories } from "@/hooks/useCategories"
import { PropsWithChildren } from "react"
import { AnimatePresence } from "motion/react"
import FirstLoader from "../loaders/FirstLoader"

const CategoriesProvider = ({ children }: PropsWithChildren) => {

    const { isLoading } = useCategories()

    return (
        <>
            <AnimatePresence>
                {isLoading && <FirstLoader />}
            </AnimatePresence>

            {!isLoading && children}
        </>
    )
}

export default CategoriesProvider