"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Card } from "@/components/ui/card"

export default function RequestProductsForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    empresa: "",
    correo: "",
    telefono: "",
    producto: "",
    mensaje: "",
  })

  const productos = [
    "Certificado de Firma Electrónica",
    "Facturación Electrónica",
    "Documentos Laborales",
    "Firma masiva de documentos",
  ]

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
          subject: "Nueva Solicitud de Producto - Code100",
          ...formData,
        }),
      })

      if (response.ok) {
        toast.success("Su solicitud fue enviada con éxito, nos comunicaremos con usted en la brevedad posible.", {
          duration: 5000,
        })
        // Limpiar formulario
        setFormData({
          nombres: "",
          apellidos: "",
          empresa: "",
          correo: "",
          telefono: "",
          producto: "",
          mensaje: "",
        })
      } else {
        throw new Error("Error al enviar el formulario")
      }
    } catch {
      toast("Hubo un error al enviar su solicitud. Por favor, intente nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Solicitar Productos</h1>
            <p className="text-gray-600">Completa el formulario y un asesor comercial se pondrá en contacto.</p>
          </div>

          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Nombres <span className="text-red-500">*</span>
                  </label>
                  <Input
                    required
                    value={formData.nombres}
                    onChange={(e) => setFormData({ ...formData, nombres: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Apellidos <span className="text-red-500">*</span>
                  </label>
                  <Input
                    required
                    value={formData.apellidos}
                    onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Nombre de la Empresa <span className="text-red-500">*</span>
                </label>
                <Input
                  required
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Correo Electrónico <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  required
                  value={formData.correo}
                  onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  WhatsApp / Teléfono <span className="text-red-500">*</span>
                </label>
                <Input
                  required
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Producto a Solicitar <span className="text-red-500">*</span>
                </label>
                <Select
                  required
                  value={formData.producto}
                  onValueChange={(value) => setFormData({ ...formData, producto: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un producto" />
                  </SelectTrigger>
                  <SelectContent>
                    {productos.map((producto) => (
                      <SelectItem key={producto} value={producto}>
                        {producto}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Mensaje</label>
                <Textarea
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full bg-amber-400 hover:bg-amber-500 text-black" disabled={isLoading}>
                {isLoading ? "Enviando..." : "Enviar"}
              </Button>

              <div className="text-center mt-4">
                <a href="#" className="text-sm text-gray-500 hover:underline">
                  Reportar un abuso
                </a>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

