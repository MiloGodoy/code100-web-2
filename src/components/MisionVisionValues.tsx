import Image from "next/image"
import { Flag, Target, Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import Code100Logo from "../../public/code100_logo.png"

export default function MissionVisionValues() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="flex justify-center">
            {" "}
            {/* Añadido justify-end para mover el logo a la derecha */}
            <div>
              <Image
                src={Code100Logo || "/placeholder.svg"}
                alt="Code100 - Confianza y Seguridad Digital"
                width={350} // Aumentado de 300 a 350
                height={117} // Ajustado proporcionalmente
                className="w-auto h-20" // Aumentado de h-16 a h-20
              />
              <p className="text-gray-600 mt-2 text-right">
                {" "}
                {/* Añadido text-right para alinear el texto */}
                CONFIANZA Y SEGURIDAD DIGITAL
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-amber-400">Somos Prestadores Cualificados de Servicios de Confianza </span>
            </h2>
            <p className="text-gray-600 text-justify">
              Con la entrada en vigencia de la nueva Ley Nº 6822/21 del año 2021, cambiando la denominación de Firma
              Digital, a Firma Electrónica Cualificada.
            </p>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-amber-400 via-lime-400 to-emerald-400">
                <Flag className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Misión</h3>
            </div>
            <p className="text-gray-600 text-justify">
              Brindar servicios de certificación digital de alta calidad, garantizando la seguridad y confiabilidad en
              las transacciones electrónicas.
            </p>
          </Card>

          {/* Vision Card */}
          <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-amber-400 via-lime-400 to-emerald-400">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Visión</h3>
            </div>
            <p className="text-gray-600 text-justify">
              Ser líderes en la transformación digital del Paraguay, facilitando procesos seguros y eficientes para
              empresas y personas.
            </p>
          </Card>
        </div>

        {/* Values Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-lg bg-gradient-to-br from-amber-400 via-lime-400 to-emerald-400">
              <Star className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Valores</h3>
          </div>

          <div className="space-y-4">
            <Card className="p-6 bg-gray-50">
              <h4 className="font-semibold mb-2">Compromiso:</h4>
              <p className="text-gray-600 text-justify">
                Nuestros colaboradores se capacitan constantemente en nuevas tecnologías, para poder ofrecer servicios
                innovadores que hagan crecer a nuestros clientes.
              </p>
            </Card>

            <Card className="p-6 bg-gray-50">
              <h4 className="font-semibold mb-2">Integridad:</h4>
              <p className="text-gray-600 text-justify">
                Confiabilidad de los datos de nuestros clientes, ya que la seguridad es la base de nuestra
                responsabilidad, dando garantía a las empresas que confían en nosotros.
              </p>
            </Card>

            <Card className="p-6 bg-gray-50">
              <h4 className="font-semibold mb-2">Perfección:</h4>
              <p className="text-gray-600 text-justify">
                La premisa es tener un contacto fluido con nuestros clientes para cubrir todas las necesidades
                requeridas en la implementación.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

