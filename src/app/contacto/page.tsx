"use client"

import { Toaster } from "sonner"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ContactFormSection from "@/components/ContactForm"
import MapsSection from "@/components/MapsSection"
import CompanyGroup from "@/components/CompanyGroup"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ContactFormSection />
        <MapsSection />
        <CompanyGroup />
      </main>
      <Footer />
      <Toaster />
    </>
  )
}

