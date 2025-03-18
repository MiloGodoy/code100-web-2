import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import WomenImage from '../../public/mujer2.jpeg'

export default function Futura100Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              La solución de Facturación Electrónica más completa del Paraguay.
            </h1>
            <p className="text-gray-600">
              Somos los primeros facturadores electrónicos del país operando desde el 2019.
            </p>
            <div className="pt-4">
              <Link href="/solicitar-productos">
                <Button className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-6">
                  SOLICITE AHORA <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[300px] md:h-[300px]">
            <Image
              src={WomenImage}
              alt="Mujer sonriendo usando Futura100"
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

