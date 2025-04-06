import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ContractsCertificates() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Trust Services Contracts Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-4">Contratos de prestación de servicios de confianza</h2>
            <p className="text-gray-600 mb-12">
              Proforma de contrato genérico a ser usado en el proceso de emisión de un certificado de firma electrónica
              cualificada y con el cual el suscriptor deberá estar de acuerdo.
            </p>

            {/* Qualified Certificates */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6">
                <h3 className="font-medium mb-6">Certificado Cualificado Tributario Tipo F1</h3>
                <Button className="bg-amber-400 hover:bg-amber-500 text-black w-full" asChild>
                  <a
                    href="https://drive.google.com/file/d/1Ntj8RsTWa7aWgYt5MXqDHnMYRx0_RYdr/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Descargar
                    <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="font-medium mb-6">Certificado Cualificado Tipo F2</h3>
                <Button className="bg-amber-400 hover:bg-amber-500 text-black w-full" asChild>
                  <a
                    href="https://drive.google.com/file/d/1gUR8azJwyFWi7maboRxPFn-rRQ9xAHtE/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Descargar
                    <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="font-medium mb-6">Certificado Cualificado Tipo F3</h3>
                <Button className="bg-amber-400 hover:bg-amber-500 text-black w-full" asChild>
                  <a
                    href="https://drive.google.com/file/d/1xMtC_A4oUS_r8KzuRljJ6K47HCdEdXKz/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Descargar
                    <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>
            </div>

            {/* Service Contracts */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Contrato de prestación de servicios de confianza S1",
                "Contrato de prestación de servicios de confianza S2",
                "Contrato de prestación de servicios de confianza S3",
              ].map((title) => (
                <Card key={title} className="p-6 bg-gray-50">
                  <h3 className="font-medium mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm">(en construcción)</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Trust Chain Section */}
          <div>
            <h2 className="text-3xl font-bold mb-12">Cadena de confianza y LCR</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Root CA Certificate */}
              <Card className="p-6 flex flex-col">
                <div className="flex-grow">
                  <h3 className="font-medium mb-4">Certificado de la AC Raíz del Paraguay</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Certificado en el cual comienza la cadena de confianza que compone la Infraestructura de Claves
                    Públicas del Paraguay
                  </p>
                </div>
                <Button className="bg-amber-400 hover:bg-amber-500 text-black w-full mt-auto">
                  <a 
                    href="https://drive.google.com/file/d/1PrImiZuhLa5v_tgi51u4WaFCl7ivFnLX/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full" // Asegura que el enlace ocupe todo el botón
                  >
                    Descargar
                    <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>

              {/* CODE100 AC Certificate (Until Jan 30) */}
              <Card className="p-6 flex flex-col">
                <div className="flex-grow">
                  <h3 className="font-medium mb-4">Certificado de la AC de CODE100</h3>
                  <p className="text-gray-500 text-sm mb-2">(Certificados emitidos hasta el 30 de enero 2023)</p>
                  <p className="text-gray-600 text-sm mb-6">
                    Certificado firmado por la AC Raiz, habilitado para firmar los certificados para usuarios finales.
                  </p>
                </div>
                <Button className="bg-amber-400 hover:bg-amber-500 text-black w-full mt-auto">
                  <a 
                    href="https://drive.google.com/file/d/1yfoD9-lyRatoM5vmZyWxj7hvj5bTV1sW/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full" // Asegura que el enlace ocupe todo el botón
                  >
                    Descargar
                    <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>

              {/* CODE100 AC Certificate (From Jan 30) */}
              <Card className="p-6 flex flex-col">
                <div className="flex-grow">
                  <h3 className="font-medium mb-4">Certificado de la AC de CODE100</h3>
                  <p className="text-gray-500 text-sm mb-2">(Certificados emitidos desde el 30 de enero 2023)</p>
                  <p className="text-gray-600 text-sm mb-6">
                    Certificado firmado por la AC Raiz, habilitado para firmar los certificados para usuarios finales.
                  </p>
                </div>
                <Button className="bg-amber-400 hover:bg-amber-500 text-black w-full mt-auto">
                  <a 
                    href="https://drive.google.com/file/d/1gRzLRQc_dGtHiPC4WgycjzGIG21SROA7/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full" // Asegura que el enlace ocupe todo el botón
                  >
                    Descargar
                    <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

