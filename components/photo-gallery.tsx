"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

// Sample gallery data
const photos = [
  {
    id: 1,
    title: "Youth Conference 2023",
    src: "/placeholder.svg?height=600&width=800",
    category: "events",
  },
  {
    id: 2,
    title: "Community Outreach Program",
    src: "/placeholder.svg?height=600&width=800",
    category: "outreach",
  },
  {
    id: 3,
    title: "Sunday Worship Service",
    src: "/placeholder.svg?height=600&width=800",
    category: "worship",
  },
  {
    id: 4,
    title: "Children's Ministry",
    src: "/placeholder.svg?height=600&width=800",
    category: "children",
  },
  {
    id: 5,
    title: "Family Retreat",
    src: "/placeholder.svg?height=600&width=800",
    category: "events",
  },
  {
    id: 6,
    title: "Leadership Training",
    src: "/placeholder.svg?height=600&width=800",
    category: "training",
  },
  {
    id: 7,
    title: "Christmas Celebration",
    src: "/placeholder.svg?height=600&width=800",
    category: "events",
  },
  {
    id: 8,
    title: "Food Distribution",
    src: "/placeholder.svg?height=600&width=800",
    category: "outreach",
  },
  {
    id: 9,
    title: "Bible Study Group",
    src: "/placeholder.svg?height=600&width=800",
    category: "worship",
  },
  {
    id: 10,
    title: "Youth Mentorship",
    src: "/placeholder.svg?height=600&width=800",
    category: "youth",
  },
  {
    id: 11,
    title: "Easter Service",
    src: "/placeholder.svg?height=600&width=800",
    category: "worship",
  },
  {
    id: 12,
    title: "Community Clean-up",
    src: "/placeholder.svg?height=600&width=800",
    category: "outreach",
  },
]

const categories = [
  { id: "all", name: "All" },
  { id: "events", name: "Events" },
  { id: "outreach", name: "Outreach" },
  { id: "worship", name: "Worship" },
  { id: "children", name: "Children" },
  { id: "youth", name: "Youth" },
  { id: "training", name: "Training" },
]

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(null)

  const filteredPhotos =
    selectedCategory === "all" ? photos : photos.filter((photo) => photo.category === selectedCategory)

  return (
    <div className="space-y-8">
      <div className="flex justify-center flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className={
              selectedCategory === category.id
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600"
                : ""
            }
          >
            {category.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card
              className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow border-0"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative aspect-square">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-2 text-center">
                <p className="text-sm font-medium">{photo.title}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 bg-black/50 text-white hover:bg-black/70"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="relative aspect-video">
              <Image
                src={selectedPhoto.src || "/placeholder.svg"}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-black/90 p-4 text-white text-center">
              <h3 className="text-xl font-bold">{selectedPhoto.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

