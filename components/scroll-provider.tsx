"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useScroll, type MotionValue } from "framer-motion"

interface ScrollContextType {
  scrollY: MotionValue<number>
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

export function ScrollProvider({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll()

  return <ScrollContext.Provider value={{ scrollY }}>{children}</ScrollContext.Provider>
}

export function useScrollContext() {
  const context = useContext(ScrollContext)

  if (context === undefined) {
    throw new Error("useScrollContext must be used within a ScrollProvider")
  }

  return context
}

