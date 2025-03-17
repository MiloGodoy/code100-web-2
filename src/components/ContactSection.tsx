"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin } from "lucide-react"
import { toast } from "sonner"
import LogoBepa from '../../public/grupoBepa.png'
import DigitalLife from '../../public/DigitalLife-Logo.png'
import Reset from '../../public/Reset-Logo.png'
import Code100Logo from '../../public/code100_logo.png'

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    correo: "",
    telefono: "",
    asunto: "",
    comentarios: "",
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
          subject: `Nuevo mensaje de contacto: ${formData.asunto}`,
          ...formData,
        }),
      })

      if (response.ok) {
        toast.success("Su mensaje fue enviado con éxito, nos comunicaremos con usted en la brevedad posible.", {
          duration: 5000,
        })
        // Limpiar formulario
        setFormData({
          nombres: "",
          apellidos: "",
          correo: "",
          telefono: "",
          asunto: "",
          comentarios: "",
        })
      } else {
        throw new Error("Error al enviar el formulario")
      }
    } catch {
      toast("Hubo un error al enviar su mensaje. Por favor, intente nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Contact Form and Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Contacto</h2>
            <p className="text-gray-600 mb-6">
              ¡Completa el formulario y en breve nos contactaremos contigo! Estaremos encantados de ayudarte.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombres" className="block text-sm mb-1">
                    Nombres <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="nombres"
                    value={formData.nombres}
                    onChange={(e) => setFormData({ ...formData, nombres: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="apellidos" className="block text-sm mb-1">
                    Apellidos <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="apellidos"
                    value={formData.apellidos}
                    onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="correo" className="block text-sm mb-1">
                  Correo Electrónico <span className="text-red-500">*</span>
                </label>
                <Input
                  id="correo"
                  type="email"
                  value={formData.correo}
                  onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm mb-1">
                  WhatsApp / Teléfono <span className="text-red-500">*</span>
                </label>
                <Input
                  id="telefono"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm mb-1">
                  ¿Por dónde prefieres que nos comuniquemos? <span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.asunto}
                  onValueChange={(value) => setFormData({ ...formData, asunto: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Asunto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="telefono">Teléfono</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    <SelectItem value="correo">Correo electrónico</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="comentarios" className="block text-sm mb-1">
                  Comentarios
                </label>
                <Textarea
                  id="comentarios"
                  rows={5}
                  value={formData.comentarios}
                  onChange={(e) => setFormData({ ...formData, comentarios: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 text-white" disabled={isLoading}>
                {isLoading ? "ENVIANDO..." : "ENVIAR FORMULARIO"}
              </Button>
            </form>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold mb-6">Detalles de contacto</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-amber-400 p-2 rounded-full">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p>+595 21 729900</p>
                  <p>+595 982 456 000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-amber-400 p-2 rounded-full">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p>Soporte: +595 991 731 836</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-amber-400 p-2 rounded-full">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <p>contacto@code100.com.py</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-amber-400 p-2 rounded-full mt-1">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p>CODE100 Villa Morra, Brizuela</p>
                  <p>N°750, entre Manuel</p>
                  <p>Avanza: José Suazo y Eusebio</p>
                  <p>Lillo Barrio.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CODE100 Maps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">CODE100</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5898776892847!2d-57.56234548498774!3d-25.290642883859843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da7b6b0b0b0b1%3A0x1b1b1b1b1b1b1b1b!2sCODE100!5e0!3m2!1ses!2spy!4v1621234567890!5m2!1ses!2spy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5898776892847!2d-57.56234548498774!3d-25.290642883859843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da7b6b0b0b0b1%3A0x1b1b1b1b1b1b1b1b!2sCODE100!5e0!3m2!1ses!2spy!4v1621234567890!5m2!1ses!2spy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5898776892847!2d-57.56234548498774!3d-25.290642883859843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da7b6b0b0b0b1%3A0x1b1b1b1b1b1b1b1b!2sCODE100!5e0!3m2!1ses!2spy!4v1621234567890!5m2!1ses!2spy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Grupo BEPA Section */}
        <div className="text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <p className="text-xl font-medium">Somos parte del</p>
            <Image src={LogoBepa} alt="Grupo BEPA S.A." width={200} height={60} className="h-10 w-auto" />
          </div>

          <p className="text-gray-600 mb-6">Empresas del Grupo BEPA</p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <Image src={Code100Logo} alt="Code100" width={150} height={50} className="h-10 w-auto" />
            <Image src={DigitalLife} alt="DigitalLife" width={150} height={50} className="h-10 w-auto" />
            <Image src={Reset} alt="Reset" width={150} height={50} className="h-10 w-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

