import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Logo from '../../public/code100_logo.png'
import DigitalLifeLogo from '../../public/DigitalLife-Logo.png'
import Reset from '../../public/Reset-Logo.png'

export default function Futura100Providers() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">Enterate porque las empresas eligen FUTURA100</h2>
          <p className="text-3xl font-bold text-amber-500">Somos 3 proveedores en UNO.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* CODE100 */}
          <Card className="bg-blue-50 border-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <Image
                    src={Logo}
                    alt='logo code 100'
                    width={150}
                    height={60}
                    className="h-10 w-auto"
                  />
                </div>
                <div className="space-y-3 text-sm">
                  <p className="font-medium">
                    Emisión de Certificados de Firma Digital ahora denominada Firma Electrónica Cualificada.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Certificados de Firma Electrónica</li>
                    <li>• Software de Gestión de Facturas Electrónicas: FACTURA100</li>
                    <li>• Gestor de Firmas y documentos electrónicos: DATAFLOW</li>
                    <li>• Firmador Masivo de documentos: CODESIGN</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* DigitalLife */}
          <Card className="bg-yellow-50 border-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <Image
                    src={DigitalLifeLogo}
                    alt="DigitalLife Logo"
                    width={150}
                    height={60}
                    className="h-10 w-auto"
                  />
                </div>
                <div className="space-y-3 text-sm">
                  <p className="font-medium">
                    Es una empresa de Software dedicada al desarrollo y comercialización de soluciones informáticas
                    orientadas a empresas y organizaciones.
                  </p>
                  <p className="text-gray-600">Especialistas en Código SAP.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reset */}
          <Card className="bg-green-50 border-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <Image
                    src={Reset}
                    alt="Reset Logo"
                    width={150}
                    height={60}
                    className="h-10 w-auto"
                  />
                </div>
                <div className="space-y-3 text-sm">
                  <p className="font-medium">
                    Consultores y expertos especialistas que acompañan la transformación digital de las empresas
                    orientados a la habilitación.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

