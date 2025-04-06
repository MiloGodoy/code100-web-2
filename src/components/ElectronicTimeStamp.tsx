import { Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function ElectronicTimestamp() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Regulations */}
          <Card className="p-6">
            <h3 className="font-medium mb-4">Normativas</h3>
            <p className="text-gray-600 mb-6">
              Leyes, decretos, reglamentos y resoluciones que rigen la actividad de la ICPP.
            </p>
            <Button className="bg-amber-400 hover:bg-amber-500 text-black w-full asChild">
              <Link href='/icp-paraguay' className="flex items-center justify-center">
                Consultar
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Card>

          {/* Electronic Time Stamp */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Sello Cualificado de tiempo Electrónico</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* SSTE Certificate */}
              <Card className="p-6">
                <h3 className="font-medium mb-4">Certificado del SSTE</h3>
                <p className="text-gray-600 mb-6">
                  Certificado que demuestra que los datos de una firma con sello de tiempo, existieron en un momento
                  específico y que no han sido alterados desde entonces.
                </p>
                <Button className="bg-amber-400 hover:bg-amber-500 text-black w-full">
                  Descargar
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </Card>

              {/* Time Stamps Count */}
              <Card className="p-6">
                <h3 className="font-medium mb-4">Cantidad de sellos de tiempo emitidos hasta ahora</h3>
                <p className="text-gray-500 italic">En construcción...</p>
              </Card>

              {/* Declaration of Practices */}
              <Card className="p-6">
                <h3 className="font-medium mb-4">
                  Declaración de prácticas de Sello Cualificado de tiempo electrónico
                </h3>
                <p className="text-gray-600 mb-6">
                  Documento que describe los procedimientos dados al servicio de sello de tiempo.
                </p>
                <Button className="bg-amber-400 hover:bg-amber-500 text-black w-full">
                  Descargar
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </Card>

              {/* Certification Policy */}
              <Card className="p-6">
                <h3 className="font-medium mb-4">
                  Política de Certificación de Sello Cualificado de tiempo electrónico
                </h3>
                <p className="text-gray-600 mb-6">
                  Documento que establece las reglas aplicables del servicio de sello de tiempo.
                </p>
                <Button className="bg-amber-400 hover:bg-amber-500 text-black w-full">
                  Descargar
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </div>

            {/* Service Message */}
            <p className="text-gray-600 my-8 text-center italic">
              ¡Gracias a este servicio, las plataformas de firma electrónica podrán certificar el momento exacto de sus
              documentos firmados!
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* API */}
              <Card className="p-6">
                <h3 className="font-medium mb-4">API de sello de tiempo</h3>
                <p className="text-gray-600 mb-6">
                  ¡Con esta API, tu plataforma puede utilizar nuestro servicio de sello de tiempo!
                </p>
                <Button className="bg-amber-400 hover:bg-amber-500 text-black">
                  Solicitar
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Card>

              {/* Resolution */}
              <Card className="p-6">
                <h3 className="font-medium mb-4">Resolución de habilitación</h3>
                <p className="text-gray-500 italic">En construcción...</p>
              </Card>
            </div>

            {/* Service Contract */}
            <Card className="p-6 mt-6">
              <h3 className="font-medium mb-4">
                Contrato de prestación de servicios de sello cualificado de tiempo electrónico
              </h3>
              <p className="text-gray-600 mb-6">
                En este contrato, se encuentra los derechos y obligaciones para acceder a este servicio.
              </p>
              <Button className="bg-amber-400 hover:bg-amber-500 text-black w-full">
                Descargar
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

