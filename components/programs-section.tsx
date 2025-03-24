"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, BookOpen, Home, Headphones } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    id: 1,
    title: "Youth Ministry",
    description: "Empowering the next generation with faith-based guidance and mentorship.",
    icon: Users,
    href: "/programs/youth",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 2,
    title: "Family Support",
    description: "Strengthening families through counseling, resources, and community.",
    icon: Home,
    href: "/programs/family",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Community Outreach",
    description: "Extending Christ's love through service to our local and global communities.",
    icon: Heart,
    href: "/programs/community",
    color: "from-purple-500 to-violet-500",
  },
  {
    id: 4,
    title: "Education Initiatives",
    description: "Providing access to quality education and biblical teaching for all ages.",
    icon: BookOpen,
    href: "/programs/education",
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: 5,
    title: "Counseling Services",
    description: "Professional faith-based counseling for individuals and families.",
    icon: Headphones,
    href: "/programs/counseling",
    color: "from-emerald-500 to-green-500",
  },
]

export function ProgramsSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
      <div className="container px-4 md:px-6">
        <motion.div
          className="space-y-4 text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-lg bg-gradient-to-r from-indigo-400 to-purple-400 px-3 py-1 text-sm font-medium text-white shadow-md mb-2">
            Our Work
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-white">Our Programs</h2>
          <p className="mx-auto max-w-[700px] text-blue-100 md:text-lg">
            Discover how we're anchoring faith across generations through our diverse ministry programs.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={program.href} className="block h-full">
                <Card className="h-full transition-all hover:shadow-xl overflow-hidden border-0 bg-white/10 backdrop-blur-sm">
                  <div className={`h-2 w-full bg-gradient-to-r ${program.color}`}></div>
                  <CardHeader>
                    <div
                      className={`h-12 w-12 rounded-full flex items-center justify-center bg-gradient-to-r ${program.color} mb-2 shadow-lg`}
                    >
                      <program.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{program.title}</CardTitle>
                    <CardDescription className="text-blue-100">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-blue-200">
                      Learn more about our {program.title.toLowerCase()} initiatives and how you can get involved.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

