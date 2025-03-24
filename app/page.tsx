import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedLogo } from "@/components/animated-logo"
import { MissionSection } from "@/components/mission-section"
import { ProgramsSection } from "@/components/programs-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { UpcomingEvents } from "@/components/upcoming-events"
import { DonateSection } from "@/components/donate-section"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <AnimatedLogo className="h-10 w-10" />
            <span className="text-xl font-bold">AFGHM</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/programs" className="text-sm font-medium transition-colors hover:text-primary">
              Programs
            </Link>
            <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <MissionSection />
        <ProgramsSection />
        <TestimonialsSection />
        <UpcomingEvents />
        <DonateSection />
      </main>
      <Footer />
    </div>
  )
}

