"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function MissionSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-3 py-1 text-sm font-medium text-white shadow-md mb-2">
              Our Purpose
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-blue-800 dark:text-blue-300">Our Mission</h2>
            <p className="text-indigo-700 dark:text-indigo-300 md:text-lg">
              At AFGHM, we believe in a holistic approach to ministry that addresses the needs of the whole person -
              body, mind, and spirit. Our mission is to anchor communities in faith by providing holistic ministry that
              addresses spiritual, emotional, and physical needs across all generations.
            </p>
            <p className="text-indigo-600 dark:text-indigo-400">
              Just as an anchor provides stability to a ship in turbulent waters, we aim to be a source of stability and
              hope in a rapidly changing world. Our programs are designed to support individuals and families at every
              stage of life, from children to seniors.
            </p>
          </motion.div>

          <motion.div
            className="relative aspect-video overflow-hidden rounded-xl shadow-2xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 z-10 rounded-xl"></div>
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="AFGHM Community Service"
              width={1280}
              height={720}
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

