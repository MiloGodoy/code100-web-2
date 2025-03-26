"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Newsletter from "@/components/NewsLetter"
import Code100Logo from "../../public/code100_logo.png"
import GrupoBepaLogo from "../../public/grupoBepa.png"
import Link from "next/link"

export default function AboutUs() {
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

            <div className="space-y-4 text-gray-600 text-justify">
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

              <p className="pb-5">
                Participamos activamente en el desarrollo de soluciones innovadoras que impulsan{" "}
                <span className="font-semibold text-gray-900">
                  la eficiencia y la seguridad en los procesos electrónicos
                </span>
                , contribuyendo así al avance continuo de la infraestructura digital en el país.
              </p>
            </div>
            <Link href='/nosotros'>
              <Button className="bg-orange-500 hover:bg-orange-600">
                CONOCÉ CODE100 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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

        {/* Newsletter Component */}
        <Newsletter />
      </div>
    </section>
  )
}

