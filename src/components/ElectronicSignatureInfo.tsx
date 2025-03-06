import Image from "next/image"
import { Check } from "lucide-react"
import CoLogo from '../../public/Logos.png'

export default function ElectronicSignatureInfo() {
  return (
    <section className="py-10 md:py-24 bg-white">
      <div className="container mx-auto px-4">

        <div className="container mx-auto px-4 py-2 text-center mb-20">
          <Image src={ CoLogo } alt="Code100 Logo" width={300} height={300} className="mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            La Firma Electronica Cualificada es
            <br />
            100% segura y Legal
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Según la Ley 6822/21 y anteriormente la Ley 4017/10, la Firma Electrónica tiene plena equivalencia funcional
            y jurídica en paraguay. El receptor de un documento digital puede tener la seguridad de que la firma es
            original y no ha sido adulterada.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-12 mb-32 max-w-5xl mx-auto">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-2">Firmá de forma</h3>
            <p className="text-gray-500">segura y confiable</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-2">15.000+</h3>
            <p className="text-gray-500">Certificados emitidos en Paraguay</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-2">90%</h3>
            <p className="text-gray-500">de las entidades públicas lo utilizan</p>
          </div>
        </div>

        {/* Requirements */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">
            Requisitos para obtener tu Certificado
            <br />
            de Firma Electrónica Cualificada
          </h2>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-emerald-500" />
              </div>
              <p className="text-gray-600 text-lg">
                Realizá la solicitud de forma virtual a través de nuestro formulario web y nos pondremos en contacto
                contigo.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-emerald-500" />
              </div>
              <p className="text-gray-600 text-lg">
                Una vez finalizado el procedimiento, agendaremos la emisión del certificado que deberá ser presencial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

