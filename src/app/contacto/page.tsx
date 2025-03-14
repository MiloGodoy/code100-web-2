"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { toast } from "sonner"
import LogoBepa from "../../../public/grupoBepa.png"
import LogoCode100 from "../../../public/code100_logo.png"
import DigitalLifeLogo from "../../../public/DigitalLife-Logo.png"
import ResetLogo from "../../../public/Reset-Logo.png"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const locations = [
  {
    name: "CODE100 - Casa Central",
    address: "Brizuela Nº 750 c/ Eusebio Lillo - Villa Morra, Asunción",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5898776892847!2d-57.56234548498774!3d-25.290642883859843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da7b6b0b0b0b1%3A0x1b1b1b1b1b1b1b1b!2sCODE100!5e0!3m2!1ses!2spy!4v1621234567890!5m2!1ses!2spy",
  },
  {
    name: "CODE100 - Sucursal 2",
    address: "Benjamin Constant 973 – Edificio Arasa 2 Planta Baja, Oficina 12 - Asunción",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5898776892847!2d-57.56234548498774!3d-25.290642883859843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da7b6b0b0b0b1%3A0x1b1b1b1b1b1b1b1b!2sCODE100!5e0!3m2!1ses!2spy!4v1621234567890!5m2!1ses!2spy",
  },
  {
    name: "CODE100 - Sucursal 3",
    address: "Av. Sta. Teresa 2969, Asunción",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5898776892847!2d-57.56234548498774!3d-25.290642883859843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da7b6b0b0b0b1%3A0x1b1b1b1b1b1b1b1b!2sCODE100!5e0!3m2!1ses!2spy!4v1621234567890!5m2!1ses!2spy",
  },
]

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    empresa: "",
    correo: "",
    telefono: "",
    mensaje: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "Nuevo Mensaje de Contacto - Code100",
          ...formData,
        }),
      })

      if (response.ok) {
        toast.success("Su mensaje fue enviado con éxito, nos comunicaremos con usted en la brevedad posible.", {
          duration: 5000,
        })
        // Limpiar formulario
        setFormData({
          nombre: "",
          apellido: "",
          empresa: "",
          correo: "",
          telefono: "",
          mensaje: "",
        })
      } else {
        throw new Error("Error al enviar el formulario")
      }
    } catch (error) {
      toast.error("Hubo un error al enviar su mensaje. Por favor, intente nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Header />
      <div className="min-h-screen py-8 md:py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Contact Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-20">
              {/* Contact Form */}
              <div className="md:col-span-2">
                <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Contáctanos</h1>
                <p className="text-gray-600 mb-6 md:mb-8">Completa el formulario y nos pondremos en contacto contigo</p>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <Input
                      placeholder="Nombre*"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    />
                    <Input
                      placeholder="Apellido*"
                      required
                      value={formData.apellido}
                      onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                    />
                  </div>
                  <Input
                    placeholder="Nombre de la Empresa*"
                    required
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  />
                  <Input
                    placeholder="Correo Electrónico*"
                    type="email"
                    required
                    value={formData.correo}
                    onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                  />
                  <Input
                    placeholder="Teléfono / Celular*"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  />
                  <Textarea
                    placeholder="Mensaje"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="min-h-[120px] md:min-h-[150px]"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-amber-400 hover:bg-amber-500 text-black"
                    disabled={isLoading}
                  >
                    {isLoading ? "Enviando..." : "Enviar"}
                  </Button>
                </form>
              </div>

              {/* Contact Details */}
              <Card className="p-4 md:p-6 h-fit">
                <h2 className="font-bold mb-4 md:mb-6">Detalles de contacto</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <div>
                      <p>+595 21 729 6900</p>
                      <p>+595 21 728 5324</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <p className="break-all">contacto@code100.com.py</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
                    <div className="space-y-2">
                      <p>CODE100 Villa Morra, Brizuela N°750, entre Eusebio Lillo y Mcal. López</p>
                      <p>Benjamin Constant 973 – Edificio Arasa 2 Planta Baja, Oficina 12 - Asunción</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Maps Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 md:mb-20">
              {locations.map((location, index) => (
                <Card key={index} className="p-4">
                  <h3 className="font-medium mb-2">{location.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{location.address}</p>
                  <div className="relative w-full h-[180px] rounded-lg overflow-hidden">
                    <iframe
                      src={location.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </Card>
              ))}
            </div>

            {/* Company Group Section */}
            <div className="text-center space-y-6">
              <h2 className="text-lg md:text-xl font-medium">Somos parte del</h2>
              <div className="w-full max-w-[200px] mx-auto">
                <Image src={LogoBepa || "/placeholder.svg"} alt="Grupo BEPA" className="w-full h-auto" priority />
              </div>
              <p className="text-gray-600">Empresas del Grupo BEPA</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
                <Image src={LogoCode100 || "/placeholder.svg"} alt="Code100" className="w-[120px] h-auto" priority />
                <Image
                  src={DigitalLifeLogo || "/placeholder.svg"}
                  alt="DigitalLife"
                  className="w-[120px] h-auto"
                  priority
                />
                <Image src={ResetLogo || "/placeholder.svg"} alt="Reset" className="w-[120px] h-auto" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

