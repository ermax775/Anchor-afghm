"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { motion } from "framer-motion"

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300">Contact Information</h2>
      <p className="text-blue-700 dark:text-blue-400">
        We're here to help and answer any questions you might have. We look forward to hearing from you.
      </p>

      <div className="grid gap-4">
        <Card className="overflow-hidden border-0 shadow-md">
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
          <CardContent className="p-4 flex items-start gap-4">
            <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white shrink-0">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium text-blue-800 dark:text-blue-300">Address</h3>
              <p className="text-blue-700 dark:text-blue-400">123 Faith Street</p>
              <p className="text-blue-700 dark:text-blue-400">Addis Ababa, Ethiopia</p>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-0 shadow-md">
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
          <CardContent className="p-4 flex items-start gap-4">
            <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white shrink-0">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium text-blue-800 dark:text-blue-300">Phone</h3>
              <p className="text-blue-700 dark:text-blue-400">+251 912 345 678</p>
              <p className="text-blue-700 dark:text-blue-400">+251 911 234 567</p>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-0 shadow-md">
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
          <CardContent className="p-4 flex items-start gap-4">
            <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white shrink-0">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium text-blue-800 dark:text-blue-300">Email</h3>
              <p className="text-blue-700 dark:text-blue-400">info@afghm.org</p>
              <p className="text-blue-700 dark:text-blue-400">support@afghm.org</p>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-0 shadow-md">
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
          <CardContent className="p-4 flex items-start gap-4">
            <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white shrink-0">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium text-blue-800 dark:text-blue-300">Office Hours</h3>
              <p className="text-blue-700 dark:text-blue-400">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-blue-700 dark:text-blue-400">Saturday: 9:00 AM - 12:00 PM</p>
              <p className="text-blue-700 dark:text-blue-400">Sunday: Closed (Worship Services Only)</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

