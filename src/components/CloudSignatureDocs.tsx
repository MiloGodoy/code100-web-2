import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function CloudSignatureDocs() {
  return (
    <section className="py-8 md:py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Documents Section */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-8">
              Documentos Relacionados al Certificado Cualificado de Firma Electrónica en la Nube (F3)
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Declaration Document */}
              <div className="space-y-4">
                <h3 className="font-medium">Declaración de prácticas (DP)</h3>
                <Button className="bg-amber-400 hover:bg-amber-500 text-black w-full sm:w-auto" asChild>
                  <a
                    href="https://drive.google.com/file/d/1VVL2bh1px_MRPQaZgk3za8YFPsUT8T1_/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Descargar
                    <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Procedures Document */}
              <div className="space-y-4">
                <h3 className="font-medium">Procedimientos Operacionales</h3>
                <Button className="bg-amber-400 hover:bg-amber-500 text-black w-full sm:w-auto" asChild>
                  <a
                    href="https://drive.google.com/file/d/1zPyqrmNATIJkXwmvF8X2rXrZd1Nmvgyr/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Descargar
                    <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* Contract Section */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Contrato de prestación de servicios de confianza F3</h2>
            <p className="text-gray-600 mb-6">
              Este contrato establece los derechos, obligaciones y responsabilidades tanto de CODE100 como del cliente,
              el mismo será firmado en el momento de la emisión del Certificado.
            </p>
            <Button className="bg-amber-400 hover:bg-amber-500 text-black w-full sm:w-auto" asChild>
              <a
                href="https://drive.google.com/file/d/1xMtC_A4oUS_r8KzuRljJ6K47HCdEdXKz/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                VER PDF
              </a>
            </Button>
          </Card>

          {/* HSM Note */}
          <div className="text-center text-gray-600">
            <p>Gracias a nuestro HSM</p>
          </div>

          {/* Newsletter Subscription */}
          <Card className="p-6 bg-gray-50">
            <form className="space-y-6">
              <p className="text-gray-600">Inscribite para recibir todas las novedades y noticias sobre Code100</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input type="text" placeholder="Nombre" className="bg-white" />
                <Input type="email" placeholder="Correo Electrónico" className="bg-white" />
              </div>
              <Button type="submit" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-900 text-white">
                INSCRIBIRSE →
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

