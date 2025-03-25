"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { toast } from "sonner"

interface ContactDetails {
  phones?: string[]
  email?: string
  addresses?: string[]
}

interface ContactFormSectionProps {
  title?: string
  subtitle?: string
  submitButtonText?: string
  loadingText?: string
  successMessage?: string
  errorMessage?: string
  contactDetails?: ContactDetails
  apiEndpoint?: string
  emailSubject?: string
}

const defaultContactDetails: ContactDetails = {
  phones: ["+595 21 729 6900", "+595 21 728 5324"],
  email: "contacto@code100.com.py",
  addresses: [
    "CODE100 Villa Morra, Brizuela N°750, entre Eusebio Lillo y Mcal. López",
    "Benjamin Constant 973 – Edificio Arasa 2 Planta Baja, Oficina 12 - Asunción",
  ],
}

export default function ContactFormSection({
  title = "Contáctanos",
  subtitle = "Completa el formulario y nos pondremos en contacto contigo",
  submitButtonText = "Enviar",
  loadingText = "Enviando...",
  successMessage = "Su mensaje fue enviado con éxito, nos comunicaremos con usted en la brevedad posible.",
  errorMessage = "Hubo un error al enviar su mensaje. Por favor, intente nuevamente.",
  contactDetails = defaultContactDetails,
  apiEndpoint = "/api/send-email",
  emailSubject = "Nuevo Mensaje de Contacto - Code100",
}: ContactFormSectionProps) {
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
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: emailSubject,
          ...formData,
        }),
      })

      if (response.ok) {
        toast.success(successMessage, {
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
    } catch {
      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{title}</h2>
            <p className="text-gray-600 mb-6 md:mb-8">{subtitle}</p>

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
              <Button type="submit" className="w-full bg-amber-400 hover:bg-amber-500 text-black" disabled={isLoading}>
                {isLoading ? loadingText : submitButtonText}
              </Button>
            </form>
          </div>

          {/* Contact Details */}
          <Card className="p-4 md:p-6 h-fit">
            <h2 className="font-bold mb-4 md:mb-6">Detalles de contacto</h2>
            <div className="space-y-4">
              {contactDetails.phones && contactDetails.phones.length > 0 && (
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                  <div>
                    {contactDetails.phones.map((phone, index) => (
                      <p key={index}>{phone}</p>
                    ))}
                  </div>
                </div>
              )}

              {contactDetails.email && (
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                  <p className="break-all">{contactDetails.email}</p>
                </div>
              )}

              {contactDetails.addresses && contactDetails.addresses.length > 0 && (
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
                  <div className="space-y-2">
                    {contactDetails.addresses.map((address, index) => (
                      <p key={index}>{address}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

