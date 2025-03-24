"use client";

import type React from "react";
import { useState } from "react";
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: string;
  message: string;
}

export function DonationForm() {
  const [amount, setAmount] = useState<string>("100");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Calculate final amount
      const finalAmount = amount === "custom" ? customAmount : amount;

      if (!finalAmount || isNaN(Number(finalAmount)) || Number(finalAmount) <= 0) {
        toast({
          title: "Invalid Amount",
          description: "Please enter a valid donation amount.",
          variant: "destructive"
        });
        setLoading(false);
        return;
      }

      // Generate unique transaction reference
      const tx_ref = `chewatatest-${Date.now()}`;

      const options = {
        method: 'POST',
        url: 'https://api.chapa.co/v1/transaction/initialize',
        headers: {
          'Authorization': 'Bearer CHASECK_TEST-VKJ0TDe05xNYaxy3eIpzkSXmQ4omWAPU',
          'Content-Type': 'application/json'
        },
        data: {
          amount: finalAmount,
          currency: "ETB",
          email: formData.email,
          first_name: formData.first_name,
          last_name: formData.last_name,
          phone_number: formData.phone_number || undefined,
          tx_ref: tx_ref,
          callback_url: "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
          return_url: "https://www.google.com/",
          customization: {
            title: "Payment for my favourite ministry",
            description: "I love online payments"
          },
          meta: {
            hide_receipt: "true"
          }
        }
      };

      axios({
        url: '/api/chapa-proxy',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        data: options.data,
      })
        .then((response: any) => {
          if (response?.data?.status === "success") {
            window.location.href = response?.data?.data?.checkout_url as string;
          } else {
            console.error("Payment error:", response?.data);
            toast({
              title: "Error",
              description: response?.data?.message || "There was an error processing your donation. Please try again.",
              variant: "destructive"
            });
            setLoading(false);
            return;
          }
        })
        .catch((error: any) => {
          console.error("Payment error:", error);
          toast({
            title: "Error",
            description: "There was an error processing your donation. Please try again.",
            variant: "destructive"
          });
          setLoading(false);
        });
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "There was an error processing your donation. Please try again.",
        variant: "destructive"
      });
      setLoading(false);
    }
  };

  return (
    <Card className="overflow-hidden border-0 shadow-xl">
      <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-indigo-500" />
      <CardHeader>
        <CardTitle>Make a Donation</CardTitle>
        <CardDescription>Support our ministry with a one-time or recurring donation.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="one-time" onValueChange={(value) => setDonationType(value as "one-time" | "monthly")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="one-time">One-time</TabsTrigger>
            <TabsTrigger value="monthly" id="monthly">
              Monthly
            </TabsTrigger>
          </TabsList>
          <TabsContent value="one-time">
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              <div className="space-y-2">
                <Label>Select Amount</Label>
                <RadioGroup
                  defaultValue="100"
                  value={amount}
                  onValueChange={(value) => {
                    setAmount(value)
                    if (value !== "custom") setCustomAmount("")
                  }}
                  className="grid grid-cols-3 gap-4">
                  <div>
                    <RadioGroupItem value="50" id="amount-50" className="sr-only" />
                    <Label
                      htmlFor="amount-50"
                      className={`flex h-14 items-center justify-center rounded-md border border-primary text-sm font-medium ${amount === "50" ? "bg-primary text-primary-foreground" : ""
                      } hover:bg-primary/10 cursor-pointer`}
                    >
                      ETB 50
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="100" id="amount-100" className="sr-only" />
                    <Label
                      htmlFor="amount-100"
                      className={`flex h-14 items-center justify-center rounded-md border border-primary text-sm font-medium ${
                        amount === "100" ? "bg-primary text-primary-foreground" : ""
                      } hover:bg-primary/10 cursor-pointer`}
                    >
                      ETB 100
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="250" id="amount-250" className="sr-only" />
                    <Label
                      htmlFor="amount-250"
                      className={`flex h-14 items-center justify-center rounded-md border border-primary text-sm font-medium ${
                        amount === "250" ? "bg-primary text-primary-foreground" : ""
                      } hover:bg-primary/10 cursor-pointer`}
                    >
                      ETB 250
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="500" id="amount-500" className="sr-only" />
                    <Label
                      htmlFor="amount-500"
                      className={`flex h-14 items-center justify-center rounded-md border border-primary text-sm font-medium ${
                        amount === "500" ? "bg-primary text-primary-foreground" : ""
                      } hover:bg-primary/10 cursor-pointer`}
                    >
                      ETB 500
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="1000" id="amount-1000" className="sr-only" />
                    <Label
                      htmlFor="amount-1000"
                      className={`flex h-14 items-center justify-center rounded-md border border-primary text-sm font-medium ${
                        amount === "1000" ? "bg-primary text-primary-foreground" : ""
                      } hover:bg-primary/10 cursor-pointer`}
                    >
                      ETB 1,000
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="custom" id="amount-custom" className="sr-only" />
                    <Label
                      htmlFor="amount-custom"
                      className={`flex h-14 items-center justify-center rounded-md border border-primary text-sm font-medium ${
                        amount === "custom" ? "bg-primary text-primary-foreground" : ""
                      } hover:bg-primary/10 cursor-pointer`}
                    >
                      Custom
                    </Label>
                  </div>
                </RadioGroup>

                {amount === "custom" && (
                  <div className="mt-4">
                    <Label htmlFor="custom-amount">Custom Amount (ETB)</Label>
                    <div className="relative mt-1">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span className="text-muted-foreground">ETB</span>
                      </div>
                      <Input
                        id="custom-amount"
                        type="number"
                        min="1"
                        step="1"
                        placeholder="Enter amount"
                        className="pl-12"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        required={amount === "custom"}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first_name">First Name*</Label>
                  <Input id="first_name" value={formData.first_name} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last_name">Last Name*</Label>
                  <Input id="last_name" value={formData.last_name} onChange={handleInputChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email*</Label>
                <Input id="email" type="email" value={formData.email} onChange={handleInputChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone_number">Phone Number</Label>
                <Input
                  id="phone_number"
                  type="tel"
                  placeholder="e.g., 0911234567"
                  value={formData.phone_number}
                  onChange={handleInputChange} required
                />
                <p className="text-xs text-muted-foreground">Format: 09XXXXXXXX or 07XXXXXXXX (10 digits)</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Share why you're donating or any specific programs you'd like to support"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Donate Now with Chapa"
                )}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <div className="flex items-center justify-center w-full mb-4">
          <img src="https://chapa.co/asset/images/chapa_swirl.svg" alt="Chapa Payment" className="h-8 mr-2" />
          <p className="text-sm text-muted-foreground">Payments are securely processed through Chapa.</p>
        </div>
        <p className="text-xs text-muted-foreground">
          Your information is encrypted and never stored on our servers. By proceeding, you agree to our terms of
          service and privacy policy.
        </p>
      </CardFooter>
    </Card>
  )
}
