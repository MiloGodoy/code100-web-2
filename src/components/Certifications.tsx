'use client'

import { LockIcon as LockCheckIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function Certifications() {

  const router = useRouter()
  const handleClick = () => {
    router.push('https://drive.google.com/file/d/1Lv3PuOONEBNOhaTHDPx-WF8Mzw3sMknA/view?usp=share_link')
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Habilitaciones Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Habilitaciones</h2>
          <p className="text-gray-600 text-lg mb-8 text-justify">
            La Resolución 187/15 del Ministerio de Industria y Comercio dispone la habilitación de CODE100 S.A. como
            Prestador de Servicios de Certificación de la Infraestructura de Clave Pública del Paraguay.
          </p>
          <Button variant="default" className="bg-amber-400 hover:bg-amber-500 text-black font-semibold" onClick={handleClick}>
            VER HABILITACIÓN
          </Button>
        </div>

        {/* Trust and Security Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-center gap-4 mb-8">
            <LockCheckIcon className="w-8 h-8" />
            <h3 className="text-2xl md:text-3xl font-bold">Confianza y seguridad digital del</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Statistics Card */}
            <Card className="p-8 bg-amber-400 text-black">
              <div className="space-y-4">
                <p className="text-6xl font-bold">90%</p>
                <p className="text-xl text-justify">
                  de las Gobernaciones, Municipios y Entidades Públicas confían en nuestros servicios profesionales.
                </p>
              </div>
            </Card>

            {/* Response Time Card */}
            <Card className="p-8 bg-teal-400 text-white">
              <div className="flex items-center h-full">
                <p className="text-xl">Respuesta rápida y personalizada en todo el territorio paraguayo.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

