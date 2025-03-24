"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { AnimatedLogo } from "@/components/animated-logo"

export function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-church-with-a-bright-light-inside-it-3212-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-indigo-900/80"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <AnimatedLogo large />
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="inline-block rounded-lg bg-gradient-to-r from-yellow-400 to-amber-600 px-3 py-1 text-sm font-medium text-white shadow-lg">
              Anchoring Faith Across Generations
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white drop-shadow-md">
              Anchor for Generations Holistic Ministry
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-xl drop-shadow">
              Anchoring faith, hope, and love across generations through holistic ministry.
            </p>
          </motion.div>
          <motion.div
            className="space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white border-none shadow-lg"
            >
              <Link href="/about">Learn More</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
            >
              <Link href="/donate">Support Our Mission</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

