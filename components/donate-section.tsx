"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart } from "lucide-react"

export function DonateSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="max-w-[800px] mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-70 blur-lg"></div>
            <div className="relative h-16 w-16 mx-auto rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center shadow-lg">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Support Our Mission</h2>
          <p className="text-blue-200 md:text-xl">
            Your generous donations help us continue our work of anchoring faith, hope, and love across generations.
          </p>
          <div className="space-y-4">
            <p className="text-blue-200">
              We rely on the support of donors like you to fund our programs and services. Every contribution, no matter
              the size, makes a difference in the lives of those we serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 border-0 shadow-lg"
              >
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white"
              >
                <Link href="/donate#monthly">Become a Monthly Supporter</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

