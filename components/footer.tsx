import Link from "next/link"
import { AnimatedLogo } from "@/components/animated-logo"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <AnimatedLogo className="h-8 w-8 text-white" />
              <span className="text-lg font-bold">AFGHM</span>
            </div>
            <p className="text-sm text-blue-200">
              Anchoring faith, hope, and love across generations through holistic ministry.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-blue-200 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-blue-200 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/programs" className="text-sm text-blue-200 hover:text-white transition-colors">
                Programs
              </Link>
              <Link href="/blog" className="text-sm text-blue-200 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-sm text-blue-200 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white">Programs</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/programs/youth" className="text-sm text-blue-200 hover:text-white transition-colors">
                Youth Ministry
              </Link>
              <Link href="/programs/family" className="text-sm text-blue-200 hover:text-white transition-colors">
                Family Support
              </Link>
              <Link href="/programs/community" className="text-sm text-blue-200 hover:text-white transition-colors">
                Community Outreach
              </Link>
              <Link href="/programs/education" className="text-sm text-blue-200 hover:text-white transition-colors">
                Education Initiatives
              </Link>
              <Link href="/programs/counseling" className="text-sm text-blue-200 hover:text-white transition-colors">
                Counseling Services
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white">Contact Us</h3>
            <div className="text-sm text-blue-200">
              <p>123 Faith Street</p>
              <p>Addis Ababa, Ethiopia</p>
              <p>info@afghm.org</p>
              <p>+251 912 345 678</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-blue-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-blue-300">
            &copy; {new Date().getFullYear()} Anchor for Generations Holistic Ministry. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-blue-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-blue-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

