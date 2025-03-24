"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "AFGHM has been a true anchor for my family during difficult times. Their holistic approach to ministry has helped us grow spiritually, emotionally, and as a community.",
    author: "Sarah Johnson",
    role: "Community Member",
    avatar: "/placeholder-user.jpg",
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: 2,
    content:
      "The youth programs at AFGHM have transformed my teenager's life. They've found purpose, community, and a deeper faith through their involvement.",
    author: "Michael Thompson",
    role: "Parent",
    avatar: "/placeholder-user.jpg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    content:
      "As a senior citizen, I've found a new sense of purpose through AFGHM's intergenerational programs. They truly care about every stage of life.",
    author: "Elizabeth Mekonnen",
    role: "Senior Member",
    avatar: "/placeholder-user.jpg",
    color: "from-purple-500 to-pink-500",
  },
]

export function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950 dark:via-yellow-950 dark:to-orange-950">
      <div className="container px-4 md:px-6">
        <motion.div
          className="space-y-4 text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-sm font-medium text-white shadow-md mb-2">
            Voices of Impact
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-amber-800 dark:text-amber-300">Testimonials</h2>
          <p className="mx-auto max-w-[700px] text-amber-700 dark:text-amber-300 md:text-lg">
            Hear from those whose lives have been impacted by our ministry.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg overflow-hidden">
                <div className={`h-2 w-full bg-gradient-to-r ${testimonial.color}`}></div>
                <CardContent className="pt-6">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center bg-gradient-to-r ${testimonial.color} mb-4 shadow-md`}
                  >
                    <Quote className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-amber-700 dark:text-amber-300">{testimonial.content}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-4">
                    <Avatar className={`border-2 border-transparent bg-gradient-to-r ${testimonial.color} p-[2px]`}>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback className="bg-amber-100 text-amber-800">
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-amber-800 dark:text-amber-200">{testimonial.author}</p>
                      <p className="text-xs text-amber-600 dark:text-amber-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

