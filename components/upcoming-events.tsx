"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"

const events = [
  {
    id: 1,
    title: "Youth Conference 2023",
    date: "November 15-17, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "AFGHM Main Campus",
    description: "A three-day conference for youth to deepen their faith and connect with peers.",
    href: "/events/youth-conference",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: 2,
    title: "Family Retreat Weekend",
    date: "December 8-10, 2023",
    time: "All Day",
    location: "Bishoftu Retreat Center",
    description: "A weekend getaway for families to strengthen bonds and grow together in faith.",
    href: "/events/family-retreat",
    color: "from-emerald-500 to-green-500",
  },
  {
    id: 3,
    title: "Christmas Community Outreach",
    date: "December 23, 2023",
    time: "10:00 AM - 2:00 PM",
    location: "Various Community Locations",
    description: "Join us in spreading Christmas joy to underserved communities through gifts and meals.",
    href: "/events/christmas-outreach",
    color: "from-red-500 to-rose-500",
  },
]

export function UpcomingEvents() {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950 dark:via-emerald-950 dark:to-teal-950">
      <div className="container px-4 md:px-6">
        <motion.div
          className="space-y-4 text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1 text-sm font-medium text-white shadow-md mb-2">
            Join Us
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-emerald-800 dark:text-emerald-300">
            Upcoming Events
          </h2>
          <p className="mx-auto max-w-[700px] text-emerald-700 dark:text-emerald-300 md:text-lg">
            Join us for these upcoming opportunities to connect, serve, and grow.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col border-0 shadow-lg overflow-hidden">
                <div className={`h-2 w-full bg-gradient-to-r ${event.color}`}></div>
                <CardHeader>
                  <CardTitle className="text-emerald-800 dark:text-emerald-300">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2 text-sm text-emerald-700 dark:text-emerald-400">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-emerald-600 dark:text-emerald-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-emerald-600 dark:text-emerald-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-emerald-600 dark:text-emerald-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-emerald-600 dark:text-emerald-400">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className={`w-full bg-gradient-to-r ${event.color} hover:opacity-90 border-0`}>
                    <Link href={event.href}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            variant="outline"
            asChild
            className="border-emerald-500 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900"
          >
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

