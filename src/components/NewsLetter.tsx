"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"

interface NewsletterProps {
  title?: string
  buttonText?: string
  className?: string
  cardClassName?: string
}

export default function Newsletter({
  title = "Inscribite para recibir todas las novedades y noticias sobre Code100",
  buttonText = "Inscribirse",
  className = "max-w-2xl mx-auto text-center",
  cardClassName = "bg-gray-50",
}: NewsletterProps) {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  interface FormData {
    subject: string
    nombre: string
    correo: string
    mensaje: string
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "Nueva suscripción al boletín de noticias",
          nombre: nombre,
          correo: email,
          mensaje: `Nombre: ${nombre}\nEmail: ${email}\n\nEsta persona desea recibir novedades y noticias sobre Code100`,
        } as FormData),
      })

      if (response.ok) {
        toast.success("¡Gracias por suscribirte! Recibirás nuestras novedades en tu correo.", {
          duration: 5000,
        })
        setNombre("")
        setEmail("")
      } else {
        throw new Error("Error al enviar el formulario")
      }
    } catch {
      toast.error("Hubo un error al procesar tu suscripción. Por favor, intenta nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={className}>
      <Card className={cardClassName}>
        <CardContent className="p-6">
          <p className="text-gray-600 mb-6">{title}</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 grid grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Nombre"
                className="bg-white"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Correo Electrónico"
                className="bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="bg-orange-500 hover:bg-orange-600 whitespace-nowrap" disabled={isLoading}>
              {isLoading ? "Enviando..." : buttonText}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

