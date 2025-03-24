import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TeamMember } from "@/components/team-member"
import { teamMembers } from "@/lib/data"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About AFGHM</h1>
                <p className="text-muted-foreground md:text-xl">
                  Anchor for Generations Holistic Ministry (AFGHM) was founded in 2010 with a vision to provide
                  spiritual, emotional, and physical support to communities across generations.
                </p>
                <p className="text-muted-foreground">
                  Our name symbolizes our commitment to being a steadfast anchor of faith and support, just as Christ is
                  our anchor. We believe in a holistic approach to ministry that addresses the needs of the whole person
                  - body, mind, and spirit.
                </p>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="AFGHM Community Gathering"
                  width={1280}
                  height={720}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white dark:bg-background">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">Our Mission & Vision</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Guided by faith, driven by purpose, anchored in Christ.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              <div className="p-6 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To anchor communities in faith by providing holistic ministry that addresses spiritual, emotional, and
                  physical needs across all generations.
                </p>
              </div>

              <div className="p-6 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  A world where every generation is anchored in faith, hope, and love, creating resilient communities
                  that reflect Christ's love.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">Our Core Values</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                These principles guide everything we do at AFGHM.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 bg-white dark:bg-card rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Faith</h3>
                <p className="text-muted-foreground">
                  Anchoring all we do in unwavering faith in Christ, our ultimate anchor.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-card rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Holistic Care</h3>
                <p className="text-muted-foreground">
                  Addressing the needs of the whole person - spiritual, emotional, and physical.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-card rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Generational Impact</h3>
                <p className="text-muted-foreground">Creating lasting change that spans across generations.</p>
              </div>

              <div className="p-6 bg-white dark:bg-card rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  Building strong, supportive communities rooted in Christ's love.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-card rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Compassion</h3>
                <p className="text-muted-foreground">
                  Extending Christ's compassion to all, especially the vulnerable.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-card rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Stewardship</h3>
                <p className="text-muted-foreground">Responsibly managing all resources entrusted to us.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-blue-50 dark:bg-blue-950">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">Our Team</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Meet the dedicated individuals who lead our ministry.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <TeamMember key={member.id} {...member} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

