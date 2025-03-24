import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ContactMap } from "@/components/contact-map"
import { ContactInfo } from "@/components/contact-info"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-3 py-1 text-sm font-medium text-white shadow-md mb-2">
                  Get in Touch
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800 dark:text-blue-300">
                  Contact Us
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-700 dark:text-blue-300 md:text-xl">
                  We'd love to hear from you. Reach out to us with any questions, comments, or prayer requests.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white dark:bg-background">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tighter text-blue-800 dark:text-blue-300">Find Us</h2>
              <p className="mx-auto max-w-[700px] text-blue-700 dark:text-blue-300">
                Visit our ministry center at the address below.
              </p>
            </div>

            <ContactMap />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

