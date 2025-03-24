"use client"

import { useRef } from "react"
import { motion, useTransform } from "framer-motion"
import { useScrollContext } from "./scroll-provider"

interface AnimatedLogoProps {
  className?: string
  large?: boolean
}

export function AnimatedLogo({ className = "", large = false }: AnimatedLogoProps) {
  const { scrollY } = useScrollContext()
  const anchorRef = useRef<SVGPathElement>(null)

  // Transform the anchor position based on scroll
  const anchorY = useTransform(
    scrollY,
    [0, 500],
    [0, large ? 40 : 20], // The anchor drops more when large
  )

  // Transform the anchor rotation for the "coiling" effect when scrolling up
  const anchorRotation = useTransform(
    scrollY,
    [0, 200],
    [0, large ? -20 : -10], // More rotation when large
  )

  // Determine size based on large prop
  const size = large ? "w-32 h-32 md:w-40 md:h-40" : className

  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={large ? size : className}
      xmlns="http://www.w3.org/2000/svg"
      initial={large ? { scale: 0.8 } : {}}
      animate={large ? { scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Cross */}
      <motion.path
        d="M50 10 L50 90 M30 30 L70 30"
        stroke="currentColor"
        strokeWidth={large ? "8" : "6"}
        strokeLinecap="round"
        fill="none"
      />

      {/* Anchor */}
      <motion.g
        style={{
          y: anchorY,
          rotate: anchorRotation,
          originY: 0.5,
          originX: 0.5,
        }}
        animate={
          large
            ? {
                y: [0, 10, 0],
                transition: {
                  y: { repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" },
                },
              }
            : {}
        }
      >
        <motion.path
          ref={anchorRef}
          d="M50 40 L50 70 M35 65 C35 80, 65 80, 65 65 M30 55 L70 55"
          stroke="currentColor"
          strokeWidth={large ? "8" : "6"}
          strokeLinecap="round"
          fill="none"
        />
        <motion.circle cx="50" cy="40" r={large ? "7" : "5"} fill="currentColor" />
      </motion.g>
    </motion.svg>
  )
}

