import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function RequirementsCards() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Requisitos para obtener tu Certificado de Firma Electrónica Cualificada
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-emerald-500" />
              </div>
              <p className="text-gray-600">
                Realizá la solicitud de forma virtual a través de nuestro formulario web y nos pondremos en contacto
                contigo.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-emerald-500" />
              </div>
              <p className="text-gray-600">
                Una vez finalizado el procedimiento, agendaremos la emisión del certificado que deberá ser presencial.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {/* Personas Físicas */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Personas Físicas</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Cédula de Identidad Civil vigente o Pasaporte.</p>
              </div>
            </div>
          </Card>

          {/* Personas Jurídicas Card 1 */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Personas Jurídicas</h3>
            <p className="text-gray-600 text-sm mb-4">
              Si la entidad es privada o para personas físicas con datos de su empresa.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  Cédula de Identidad Civil vigente o Pasaporte del responsable del certificado.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Copia autenticada por escribanía del estatuto o documento de creación.</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  Copia autenticada por escribanía de acta de la última asamblea ordinaria y extraordinaria o del
                  documento equivalente que acredite la representación.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Prueba de la inscripción en el registro nacional de personas jurídicas.</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Cédula Tributaria.</p>
              </div>
            </div>
          </Card>

          {/* Personas Jurídicas Card 2 */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Personas Jurídicas</h3>
            <p className="text-gray-600 text-sm mb-4">
              Si la entidad es pública o para personas físicas con datos de su empresa.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  Cédula de Identidad Civil vigente o Pasaporte del responsable del certificado.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  Copia simple de la Ley o Carta Orgánica que crea o autoriza su creación.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  Documento (original o copia autenticada) que acredite la representación.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Cédula Tributaria</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Button */}
        <div className="text-center">
          <Button className="bg-amber-400 hover:bg-amber-500 text-black px-8">SOLICITAR</Button>
        </div>
      </div>
    </section>
  )
}

