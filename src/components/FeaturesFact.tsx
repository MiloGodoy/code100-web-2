import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import FuturaImage from "../../public/futura100.jpeg"

export default function Futura100Features() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-amber-300 via-lime-200 to-emerald-200">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Futura100 es una plataforma de Facturación Electrónica en Paraguay
            </h2>
            <p className="text-gray-700">
              Se integra a cualquier necesidad de tu empresa, de forma segura, rápida y eficiente. Mejora los procesos
              de información y disminuye considerablemente los gastos de tu empresa.
            </p>
            <div className="pt-4">
              <Link href="/contacto">
                <Button variant="outline" className="bg-white hover:bg-gray-100 border-gray-300">
                  COTIZAR <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute text-6xl font-bold text-emerald-400/20 -top-10 right-0 md:text-8xl">FUTURA100</div>
            <div className="relative h-[400px] md:h-[450px] flex justify-center items-center">
              <Image
                src={FuturaImage || "/placeholder.svg"}
                alt="Laptop con Futura100"
                width={600}
                height={450}
                className="object-contain transform rotate-[-5deg] drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

