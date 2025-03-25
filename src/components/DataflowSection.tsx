import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import ImageSign from "../../public/firma.svg"

export default function DataflowSection() {
  return (
    <section className="w-full">
      {/* Gradient Background */}
      <div className="w-full h-40 bg-gradient-to-r from-amber-400 via-lime-400 to-emerald-400"></div>

      {/* Certificate Query Buttons */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
          {/* First Certificate Button */}
          {/* <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <div className="bg-amber-400 p-2 rounded-full mr-3">
              <Search className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm text-gray-600">Certificados emitidos hasta el 30 de enero 2023.</span>
            <Link href="/consultar-certificados" target="_blank" rel="noopener noreferrer" className="ml-4">
              <Button className="bg-amber-400 hover:bg-amber-500 text-black text-xs px-3 py-1 h-auto">
                CONSULTAR →
              </Button>
            </Link>
          </div> */}

          {/* Second Certificate Button */}
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <div className="bg-amber-400 p-2 rounded-full mr-3">
              <Search className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm text-gray-600">Certificados emitidos desde el 31 de enero 2023.</span>
            <Link href="https://par.code100.com.py/search" target="_blank" rel="noopener noreferrer" className="ml-4">
              <Button className="bg-amber-400 hover:bg-amber-500 text-black text-xs px-3 py-1 h-auto">
                CONSULTAR →
              </Button>
            </Link>
          </div>
        </div>

        {/* Dataflow Promotion */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ahorra tiempo y recursos usando Dataflow</h2>
            <p className="text-gray-600">
              Tus clientes podrán firmar online desde su móvil cualquier documento de forma rápida, segura y con plena
              validez jurídica.
            </p>
            <Link href="/solicitar-productos">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white mt-7">SOLICITAR AHORA →</Button>
            </Link>
          </div>

          {/* Illustration */}
          <div className="relative h-[400px]">
            <Image
              src={ImageSign || "/placeholder.svg"}
              alt="Firma digital de contratos"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

