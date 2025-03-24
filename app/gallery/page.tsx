import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PhotoGallery } from "@/components/photo-gallery"
import { VideoGallery } from "@/components/video-gallery"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-indigo-100 dark:from-purple-950 dark:to-indigo-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 px-3 py-1 text-sm font-medium text-white shadow-md mb-2">
                  Our Memories
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-800 dark:text-purple-300">
                  Gallery
                </h1>
                <p className="mx-auto max-w-[700px] text-purple-700 dark:text-purple-300 md:text-xl">
                  Explore photos and videos from our ministry events, programs, and community outreach.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="photos" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="photos" className="text-lg">
                    Photos
                  </TabsTrigger>
                  <TabsTrigger value="videos" className="text-lg">
                    Videos
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="photos" className="mt-0">
                <PhotoGallery />
              </TabsContent>

              <TabsContent value="videos" className="mt-0">
                <VideoGallery />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

