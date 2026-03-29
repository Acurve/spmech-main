"use client"

import { useCategories } from "@/hooks/useCategories"
import { PropsWithChildren, useEffect, useState } from "react"
import { AnimatePresence } from "motion/react"
import FirstLoader from "../loaders/FirstLoader"

const CategoriesProvider = ({ children }: PropsWithChildren) => {

    const { isLoading } = useCategories()
    const [minTimePassed, setMinTimePassed] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setMinTimePassed(true)
        }, 4000)
        return () => clearTimeout(timer)
    }, [])

    const showLoader = isLoading || !minTimePassed

    return (
        <>
            <AnimatePresence>
                {showLoader && <FirstLoader />}
            </AnimatePresence>

            {!showLoader && children}
        </>
    )
}

export default CategoriesProvider