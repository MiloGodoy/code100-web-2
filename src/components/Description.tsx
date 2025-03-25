import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { TbRobotFace } from "react-icons/tb";
import { Button } from "@/components/ui/button"
import TalentoLogo from '../../public/talento100.png'

export default function Talento100Description() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Platform Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={TalentoLogo}
                alt="TALENTO100 Logo"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
              <span className="text-lg font-medium">Es una plataforma Web</span>
            </div>
            <p className="text-gray-700">
              para la gestión del flujo de firmas de los Documentos Electrónicos Laborales en formato XML y PDF.
            </p>
            <div className="pt-4">
              <Link href="/contacto">
                <Button className="bg-amber-400 hover:bg-amber-500 text-black">
                  SOLICITAR COTIZACIÓN <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-lg">
              <TbRobotFace />
              </div>
              <div className="space-y-2">
                <p className="font-medium text-gray-800">
                  Permite la automatización y administración digital de los documentos laborales gestionados por el
                  departamento de Recursos Humanos en Paraguay
                </p>
                <p className="text-gray-600">
                  facilitando a tus colaboradores la firma desde cualquier dispositivo con Firma Electrónica
                  Cualificada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

