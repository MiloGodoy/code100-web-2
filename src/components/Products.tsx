import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Logo from '../../public/Logos.png'
import logo2 from '../../public/8.png'
import logoTalento from '../../public/talento100.png'
import logoFutura from '../../public/futura100.png'
import logoDataFlow from '../../public/logoDataFlow.png'
import logoCodeSign from '../../public/logoCodeSign.png'

export default function Products() {
  return (
    <section className="py-24 px-4 container mx-auto">
      {/* Header with Logo and Title */}
      <div className="text-center mb-6 space-y-4">
        <Image src={ Logo } alt="Code100 Logo" width={80} height={80} className="mx-auto" />
        <h1 className="text-3xl md:text-4xl font-bold">Firma Digital y Soluciones innovadoras</h1>
      </div>

      {/* Featured Product */}
      <Card className="mb-12 bg-gradient-to-br from-[#f8fdfd] to-[#f0f9f9] border-none shadow-lg">
        <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Firmar documentos ahora es mucho más fácil</h2>
            <p className="text-gray-600 text-lg">
              Certificado Cualificado de Firma Electrónica, seguridad, validez legal, autenticidad, confiabilidad, y
              privacidad
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600">
              QUIERO SABER MÁS <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src={ logo2 } alt="Code100" width={300} height={100} className="object-contain" />
          </div>
        </CardContent>
      </Card>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Talento100 */}
        <Card className="bg-white">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-bold">
              Software de Gestión de Firma de Recibos Electrónicos de Salario Nº 1 en Paraguay.
            </h3>
            <Button className="bg-orange-500 hover:bg-orange-600">
              QUIERO SABER MÁS <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <div className="h-24 md:h-32 lg:h-40 relative mb-6">
              <Image src={ logoTalento } alt="Talento100" width={200} height={60} className="object-contain" />
            </div>
          </CardFooter>
        </Card>

        {/* Futura100 */}
        <Card className="bg-white">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-bold">La solución de Facturación Electrónica más completa del Paraguay.</h3>
            <Button className="bg-orange-500 hover:bg-orange-600">
              QUIERO SABER MÁS <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Image src={ logoFutura } alt="Futura100" width={200} height={60} className="object-contain" />
          </CardFooter>
        </Card>

        {/* DataFlow */}
        <Card className="bg-white">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-bold">Gestor de Firmas inteligente</h3>
            <p className="text-gray-600">
              que permite recolectar y administrar la trazabilidad de documentos digitales.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600">
              QUIERO SABER MÁS <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Image src={ logoDataFlow } alt="DataFlow" width={200} height={60} className="object-contain" />
          </CardFooter>
        </Card>

        {/* CodeSign */}
        <Card className="bg-white">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-bold">Software Firmador Masivo</h3>
            <p className="text-gray-600">que permite firmar múltiples documentos en segundos inclusive licitaciones.</p>
            <Button className="bg-orange-500 hover:bg-orange-600">
              QUIERO SABER MÁS <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Image src={ logoCodeSign } alt="CodeSign" width={200} height={60} className="object-contain" />
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

