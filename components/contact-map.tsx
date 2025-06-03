"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function ContactMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden border-0 shadow-xl">
        <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
        <div className="aspect-video w-full">
          <div className="relative aspect-video w-full">
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?center=9.021271,38.748083&zoom=15&size=600x300&markers=color:red%7Clabel:A%7C9.021271,38.748083&key=YOUR_API_KEY"
              alt="AFGHM HQ Location"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white p-4 rounded-md shadow-lg">
                <h3 className="text-lg font-semibold">AFGHM HQ</h3>
                <p>Contact Person: Shifferaw Legesse</p>
                <p>Tel: +251910848053</p>
                <p>Email: afghm2023@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
