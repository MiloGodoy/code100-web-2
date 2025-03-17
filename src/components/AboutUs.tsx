"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import Code100Logo from "../../public/code100_logo.png"
import GrupoBepaLogo from "../../public/grupoBepa.png"

export default function AboutUs() {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  interface FormData {
    subject: string;
    nombre: string;
    correo: string;
    mensaje: string;
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
    <section className="py-16 md:py-24">
      <div className="container px-4">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          {/* Logo Column */}
          <div className="flex justify-center md:justify-end">
            <Image
              src={Code100Logo || "/placeholder.svg"}
              alt="Code100 Logo"
              width={400}
              height={120}
              className="w-auto h-auto"
              priority
            />
          </div>

          {/* Text Content Column */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-amber-400">Quienes </span>
              <span className="text-green-500">somos</span>
            </h1>

            <div className="space-y-4 text-gray-600">
              <p>
                Desde el año 2015, nos hemos destacado como <span className="font-semibold text-gray-900">líderes</span>{" "}
                en el mercado paraguayo como Prestadores de Servicios de Certificación de Firma Electrónica, siendo
                debidamente aprobados por el{" "}
                <span className="font-semibold text-gray-900">Ministerio de Industria y Comercio</span>.
              </p>

              <p>
                Durante estos años, hemos desempeñado un papel fundamental en la transformación digital en Paraguay,
                ofreciendo servicios especializados de Certificación, reconocimiento e identificación electrónica.
              </p>

              <p>
                Nuestro compromiso se refleja en la constante adaptación a las exigencias del entorno digital,{" "}
                <span className="font-semibold text-gray-900">
                  garantizando la seguridad, validez legal y confiabilidad
                </span>{" "}
                de cada Certificado Cualificado de Firma Electrónica que expedimos.
              </p>

              <p>
                Participamos activamente en el desarrollo de soluciones innovadoras que impulsan{" "}
                <span className="font-semibold text-gray-900">
                  la eficiencia y la seguridad en los procesos electrónicos
                </span>
                , contribuyendo así al avance continuo de la infraestructura digital en el país.
              </p>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600">
              CONOCÉ CODE100 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Group Association */}
        <div className="flex justify-center items-center gap-4 mb-24">
          <span className="text-2xl font-light italic">Somos parte del</span>
          <Image
            src={GrupoBepaLogo || "/placeholder.svg"}
            alt="Grupo BEPA S.A."
            width={200}
            height={60}
            className="w-auto h-12"
          />
        </div>

        {/* Newsletter Subscription */}
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-gray-50">
            <CardContent className="p-6">
              <p className="text-gray-600 mb-6">Inscribite para recibir todas las novedades y noticias sobre Code100</p>
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
                <Button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 whitespace-nowrap"
                  disabled={isLoading}
                >
                  {isLoading ? "Enviando..." : "Inscribirse"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

