import { Globe, CreditCard, XCircle, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CertificateActions() {
  return (
    <section className="py-10 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center">
              <Globe className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-medium mb-2">
            <span className="relative">
              Adiós a los papeles
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            CODE100 S.A mantiene su compromiso con el medio ambiente impulsando la transformación digital de las
            personas y empresas del Paraguay.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {/* Request Card */}
          <Card className="p-6 bg-gradient-to-br from-amber-400 via-lime-400 to-emerald-400 text-black">
            <div className="space-y-4">
              <CreditCard className="w-12 h-12" />
              <h3 className="text-xl font-bold">Solicitar Nuevo Certificado de Firma Electrónica Cualificada</h3>
              <p className="text-sm">
                Completa el formulario con tus informaciones. Luego nos pondremos en contacto contigo para confirmar el
                trámite para la emisión del Certificado de Firma Electrónica.
              </p>
              <Button variant="secondary" className="mt-4">
                SOLICITAR →
              </Button>
            </div>
          </Card>

          {/* Revoke Card */}
          <Card className="p-6">
            <div className="space-y-4">
              <XCircle className="w-12 h-12 text-gray-600" />
              <h3 className="text-xl font-bold">Revocar Certificado</h3>
              <p className="text-sm text-gray-600">
                Aquí puedes suspender permanentemente la validez de tu certificado electrónico.
              </p>
              <Button className="bg-amber-400 hover:bg-amber-500 text-black mt-4">REVOCAR →</Button>
            </div>
          </Card>

          {/* Verify Card */}
          <Card className="p-6">
            <div className="space-y-4">
              <Search className="w-12 h-12 text-gray-600" />
              <h3 className="text-xl font-bold">Consultar Validez</h3>
              <p className="text-sm text-gray-600">
                Aquí puedes consultar la validez del certificado con el número de documento de identidad o RUC.
              </p>
              <Button className="bg-amber-400 hover:bg-amber-500 text-black mt-4">CONSULTAR →</Button>
            </div>
          </Card>
        </div>

        {/* Contracts Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Contratos</h2>
          <p className="text-gray-600 mb-8">
            Estos contratos establecen los derechos, obligaciones y responsabilidades tanto de CODE100 como del cliente,
            el mismo será firmado en el momento de la emisión del Certificado.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {["F1", "F2", "F3"].map((type) => (
              <Card key={type} className="p-6">
                <h3 className="font-medium mb-4">Contrato de prestación de servicios de confianza {type}</h3>
                <Button className="bg-amber-400 hover:bg-amber-500 text-black">VER PDF</Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

