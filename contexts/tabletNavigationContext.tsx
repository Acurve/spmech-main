"use client"

import { usePathname } from "next/navigation"
import { createContext, useContext, useEffect, useState } from "react"

type TabletNavigationContextType = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const TabletNavigationContext =
  createContext<TabletNavigationContextType | null>(null)

export const TabletNavigationContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <TabletNavigationContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </TabletNavigationContext.Provider>
  )
}

export const useTabletNavigation = () => {
  const context = useContext(TabletNavigationContext)

  if (!context) {
    throw new Error(
      "useTabletNavigation must be used within TabletNavigationContextProvider"
    )
  }

  return context
}
