"use client"

import { createContext, useContext, useState } from "react"

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
