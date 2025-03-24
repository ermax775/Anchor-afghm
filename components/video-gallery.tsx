"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, X } from "lucide-react"

// Sample video data
const videos = [
  {
    id: 1,
    title: "Youth Conference Highlights",
    thumbnail: "/placeholder.svg?height=600&width=800",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-church-with-a-bright-light-inside-it-3212-large.mp4",
    category: "events",
  },
  {
    id: 2,
    title: "Community Outreach Documentary",
    thumbnail: "/placeholder.svg?height=600&width=800",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-church-with-a-bright-light-inside-it-3212-large.mp4",
    category: "outreach",
  },
  {
    id: 3,
    title: "Worship Service Live Stream",
    thumbnail: "/placeholder.svg?height=600&width=800",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-church-with-a-bright-light-inside-it-3212-large.mp4",
    category: "worship",
  },
  {
    id: 4,
    title: "Children's Ministry Showcase",
    thumbnail: "/placeholder.svg?height=600&width=800",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-church-with-a-bright-light-inside-it-3212-large.mp4",
    category: "children",
  },
  {
    id: 5,
    title: "Family Retreat Memories",
    thumbnail: "/placeholder.svg?height=600&width=800",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-church-with-a-bright-light-inside-it-3212-large.mp4",
    category: "events",
  },
  {
    id: 6,
    title: "Leadership Training Session",
    thumbnail: "/placeholder.svg?height=600&width=800",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-church-with-a-bright-light-inside-it-3212-large.mp4",
    category: "training",
  },
]

const categories = [
  { id: "all", name: "All" },
  { id: "events", name: "Events" },
  { id: "outreach", name: "Outreach" },
  { id: "worship", name: "Worship" },
  { id: "children", name: "Children" },
  { id: "training", name: "Training" },
]

export function VideoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null)

  const filteredVideos =
    selectedCategory === "all" ? videos : videos.filter((video) => video.category === selectedCategory)

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="relative aspect-video cursor-pointer" onClick={() => setSelectedVideo(video)}>
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/50 transition-colors">
                  <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium">{video.title}</h3>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 bg-black/50 text-white hover:bg-black/70"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="relative aspect-video">
              <video src={selectedVideo.videoUrl} controls autoPlay className="w-full h-full">
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="bg-black p-4 text-white">
              <h3 className="text-xl font-bold">{selectedVideo.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

