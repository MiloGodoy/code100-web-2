'use client'

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Office from '../../public/office.jpeg'
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function ProductHero() {

  const router = useRouter();

  const certificateTypes = [
    {
      type: "F1",
      color: "amber",
      title: "Certificado Cualificado Tributario",
      description:
        "de uso exclusivo para fines convencionales ante el Sistema Marangatú, Sistema Integrado de Facturación Electrónica Nacional, otros Sistemas de Información administrados por la Subsecretaría de Estado de Tributación (SET).",
    },
    {
      type: "F2",
      color: "teal",
      title: "Certificado Electrónico Cualificado",
      description:
        "alojado en un dispositivo USB criptográfico, denominado TOKEN que se utiliza para firmar documentos en una computadora.",
    },
    {
      type: "F3",
      color: "amber",
      title: "Certificado Electrónico Cualificado",
      description:
        "que puede ser utilizado de forma integrada a múltiples plataformas, aplicaciones o portales para firmar de forma remota sin necesidad de un dispositivo físico.",
      hasButton: true,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Firmar documentos ahora es mucho más fácil</h1>
              <p className="text-gray-600 text-lg">
                Con tu firma electrónica, tenes garantizada la autenticidad, integridad y validez jurídica de tus
                documentos firmados, estés donde estés
              </p>
              <Button className="bg-amber-400 hover:bg-amber-500 text-black" asChild>
                <Link href='/solicitar-productos'>
                  SOLICITAR <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Image */}
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src={ Office }
                alt="Personas firmando documentos digitalmente"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <p className="text-gray-600 text-lg text-center max-w-4xl mx-auto">
            El Certificado de Firma Electrónica Cualificada (antes conocida como Firma Digital) es un documento digital,
            emitido por CODE100 en Paraguay, con los datos necesarios para identificar a una persona. Se utiliza como
            una declaración electrónica que vincula los datos válidos de una firma con la persona física y confirma la
            identidad de esa persona.
          </p>
        </div>
      </section>

      {/* Certificate Types Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tipos de certificado</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {certificateTypes.map((cert) => (
              <Card key={cert.type} className="p-6">
                <div className={`bg-${cert.color}-400 text-black font-bold px-4 py-2 rounded-full inline-block mb-4 lg:text-3xl`}>
                  Tipo {cert.type}
                </div>
                <h3 className="font-bold mb-4 lg:text-xl">{cert.title}</h3>
                <p className="text-gray-600 mb-6">{cert.description}</p>
                {cert.hasButton && <Button className="bg-amber-400 hover:bg-amber-500 text-black">Conocer más</Button>}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

