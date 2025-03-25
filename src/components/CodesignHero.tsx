import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import CodeSignLogo from '../../public/logoCodeSign.png'
import DigitalSign from '../../public/digital-sign.jpg'

export default function CodeSignHero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6 z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Firmador Masivo</h1>

            <div className="w-[250px] h-auto mb-6">
              <Image
                src={CodeSignLogo}
                alt="CodeSign Logo"
                width={250}
                height={100}
                className="w-full h-auto"
              />
            </div>

            <div className="pt-4">
              <Link href="/solicitar-productos">
                <Button className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-6">
                  SOLICITAR <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <p className="text-gray-600 text-lg max-w-lg">
              Firma múltiples documentos en segundos con Codesign, una solución líder que maximiza la eficiencia y la
              seguridad en tus procesos de firma digital. Con garantía de cumplimiento normativo, confianza y fiabilidad
              empresarial.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src={DigitalSign}
              alt="Firma digital con CodeSign"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

