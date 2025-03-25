import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import TalentoLogo from "../../public/talento100.png"
import Imagen from "../../public/imagen3_certificado.jpeg"

export default function Talento100Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="flex flex-col h-full justify-between bg-white p-8 rounded-lg shadow-lg z-10">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Documentos Electrónicos Laborales con Firma Electrónica Cualificada
              </h1>
              <p className="text-gray-600 text-lg">
                Sumate al Software de gestión de firma de recibos de salarios Nº 1 en paraguay aprobado por el MTESS.
              </p>
              <div className="pt-4">
                <Link href="/solicitar-productos">
                  <Button className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-6">
                    SOLICITAR <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Logo positioned at bottom */}
            <div className="mt-8">
              <Image
                src={TalentoLogo || "/placeholder.svg"}
                alt="TALENTO100 Logo"
                width={250}
                height={60}
                className="w-[200px] h-auto"
              />
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[400px] md:h-[500px] flex items-center">
            <div className="w-full h-full rounded-lg overflow-hidden">
              <Image
                src={Imagen || "/placeholder.svg"}
                alt="Profesionales usando TALENTO100"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

