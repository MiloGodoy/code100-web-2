import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Logo from "../../public/Logos.png"
import logo2 from "../../public/8.png"
import logoTalento from "../../public/talento100.png"
import logoFutura from "../../public/futura100.png"
import logoDataFlow from "../../public/logoDataFlow.png"
import logoCodeSign from "../../public/logoCodeSign.png"
import Link from "next/link"

export default function Products() {
  return (
    <section className="py-24 px-4 container mx-auto">
      {/* Header with Logo and Title */}
      <div className="text-center mb-6 space-y-4">
        <Image src={Logo || "/placeholder.svg"} alt="Code100 Logo" width={80} height={80} className="mx-auto" />
        <h1 className="text-3xl md:text-4xl font-bold">Firma Digital y Soluciones innovadoras</h1>
      </div>

      {/* Featured Product */}
      <Card className="mb-12 bg-gradient-to-br from-[#f8fdfd] to-[#f0f9f9] border-none shadow-lg">
        <div className="p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Firmar documentos ahora es mucho más fácil</h2>
            <p className="text-gray-600 text-lg text-justify">
              Certificado Cualificado de Firma Electrónica, seguridad, validez legal, autenticidad, confiabilidad, y
              privacidad
            </p>
            <div className="pt-4">
              <Link href="/productos">
                <Button className="bg-amber-400 hover:bg-amber-500 text-black">
                  QUIERO SABER MÁS <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src={logo2 || "/placeholder.svg"}
              alt="Code100"
              width={300}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </Card>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Talento100 */}
        <Card className="bg-white flex flex-col h-full">
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex-grow">
              <h3 className="text-xl font-bold mb-6">
                Software de Gestión de Firma de Recibos Electrónicos de Salario Nº 1 en Paraguay.
              </h3>
            </div>
            <div className="mt-4">
              <Link href="/talento100-page">
                <Button className="bg-amber-400 hover:bg-amber-500 text-black">
                  QUIERO SABER MÁS <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="p-6 flex justify-center items-center">
            <Image
              src={logoTalento || "/placeholder.svg"}
              alt="Talento100"
              width={200}
              height={60}
              className="object-contain"
            />
          </div>
        </Card>

        {/* Futura100 */}
        <Card className="bg-white flex flex-col h-full">
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex-grow">
              <h3 className="text-xl font-bold mb-6">
                La solución de Facturación Electrónica más completa del Paraguay.
              </h3>
            </div>
            <div className="mt-4">
              <Link href="/facturacion-electronica">
                <Button className="bg-amber-400 hover:bg-amber-500 text-black">
                  QUIERO SABER MÁS <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="p-6 flex justify-center items-center">
            <Image
              src={logoFutura || "/placeholder.svg"}
              alt="Futura100"
              width={200}
              height={60}
              className="object-contain"
            />
          </div>
        </Card>

        {/* DataFlow */}
        <Card className="bg-white flex flex-col h-full">
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex-grow">
              <h3 className="text-xl font-bold mb-4">Gestor de Firmas inteligente</h3>
              <p className="text-gray-600">
                que permite recolectar y administrar la trazabilidad de documentos digitales.
              </p>
            </div>
            <div className="mt-4">
              <Link href="https://dataflow.com.py/">
                <Button className="bg-amber-400 hover:bg-amber-500 text-black">
                  QUIERO SABER MÁS <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="p-6 flex justify-center items-center">
            <Image
              src={logoDataFlow || "/placeholder.svg"}
              alt="DataFlow"
              width={200}
              height={60}
              className="object-contain"
            />
          </div>
        </Card>

        {/* CodeSign */}
        <Card className="bg-white flex flex-col h-full">
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex-grow">
              <h3 className="text-xl font-bold mb-4">Software Firmador Masivo</h3>
              <p className="text-gray-600">
                que permite firmar múltiples documentos en segundos inclusive licitaciones.
              </p>
            </div>
            <div className="mt-4">
              <Link href="/codesign">
                <Button className="bg-amber-400 hover:bg-amber-500 text-black ">
                  QUIERO SABER MÁS <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="p-6 flex justify-center items-center">
            <Image
              src={logoCodeSign || "/placeholder.svg"}
              alt="CodeSign"
              width={200}
              height={60}
              className="object-contain"
            />
          </div>
        </Card>
      </div>
    </section>
  )
}

