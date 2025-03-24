import { DonationForm } from "@/components/donation-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function DonatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Support Our Ministry</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Your generous donations help us continue our mission of anchoring faith, hope, and love across
                  generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Why Donate?</h2>
                <p className="text-muted-foreground">
                  Your donations make a real difference in our community. Here's how your support helps:
                </p>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Fund community outreach programs</li>
                  <li>Support youth education initiatives</li>
                  <li>Provide resources for families in need</li>
                  <li>Maintain our ministry facilities</li>
                  <li>Enable us to expand our reach to more communities</li>
                </ul>

                <div className="p-6 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Our Promise</h3>
                  <p className="text-muted-foreground">
                    We are committed to transparency and accountability. 85% of all donations go directly to our
                    programs and services, with only 15% used for administrative costs.
                  </p>
                </div>
              </div>

              <DonationForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

