"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export default function DonationSuccessPage() {
  const searchParams = useSearchParams()
  const tx_ref = searchParams.get("tx_ref")

  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [paymentData, setPaymentData] = useState<any>(null)

  useEffect(() => {
    const verifyPayment = async () => {
      if (!tx_ref) {
        setStatus("error")
        return
      }

      try {
        const response = await fetch("/api/verify-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ tx_ref }),
        })

        const data = await response.json()

        if (response.ok && data.success) {
          setStatus("success")
          setPaymentData(data.data)
        } else {
          setStatus("error")
        }
      } catch (error) {
        console.error("Error verifying payment:", error)
        setStatus("error")
      }
    }

    verifyPayment()
  }, [tx_ref])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 md:py-24 bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900">
        <div className="container px-4 md:px-6 max-w-md">
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="h-2 w-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                Donation {status === "success" ? "Successful" : status === "loading" ? "Processing" : "Failed"}
              </CardTitle>
              <CardDescription>
                {status === "loading"
                  ? "We're verifying your donation..."
                  : status === "success"
                    ? "Thank you for your generous support!"
                    : "There was an issue with your donation."}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4 pt-6">
              {status === "loading" && (
                <div className="flex flex-col items-center space-y-4">
                  <Loader2 className="h-16 w-16 text-blue-500 animate-spin" />
                  <p className="text-center text-muted-foreground">Please wait while we verify your payment...</p>
                </div>
              )}

              {status === "success" && (
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-green-500/20 blur-lg"></div>
                    <CheckCircle className="h-16 w-16 text-green-500" />
                  </div>
                  <div className="text-center space-y-2">
                    <p className="font-medium">Your donation has been received!</p>
                    {paymentData && (
                      <div className="bg-muted p-4 rounded-lg text-sm text-left">
                        <p>
                          <span className="font-medium">Amount:</span> {paymentData.amount} {paymentData.currency}
                        </p>
                        <p>
                          <span className="font-medium">Reference:</span> {paymentData.tx_ref}
                        </p>
                        <p>
                          <span className="font-medium">Date:</span> {new Date(paymentData.created_at).toLocaleString()}
                        </p>
                      </div>
                    )}
                    <p className="text-muted-foreground">
                      A receipt has been sent to your email address. Your support helps us continue our mission.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="flex flex-col items-center space-y-4">
                  <AlertCircle className="h-16 w-16 text-red-500" />
                  <p className="text-center text-muted-foreground">
                    We couldn't verify your donation. If you believe this is an error, please contact us with your
                    transaction reference: {tx_ref || "Unknown"}
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-center pb-6">
              <div className="space-y-2 w-full">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                >
                  <Link href="/">Return to Home</Link>
                </Button>
                {status === "error" && (
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/donate">Try Again</Link>
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

