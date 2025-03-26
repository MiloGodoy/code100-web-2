import Image from "next/image"
import { Leaf, Globe, Sprout } from "lucide-react"
import Fundacion from '../../public/FundacionLogo.png'

export default function EnvironmentalCommitment() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Logos */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <Image src={ Fundacion } alt="Fundación Code100" width={200} height={100} className="w-auto h-24" />
          <div className="bg-green-50 rounded-2xl px-6 py-3">
            <p className="text-2xl">
              <span className="text-gray-600">hoja por </span>
              <span className="text-green-500 font-bold">HOJAS</span>
            </p>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 max-w-4xl mx-auto">
          Nuestro compromiso es también con el medioambiente.
        </h2>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Electronic Signature */}
          <div className="flex items-start gap-8">
            <div className="w-16 h-16 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-green-500" />
              </div>
            </div>
            <p className="text-gray-600 text-lg text-justify">
              Promovemos la utilización de la Firma Electrónica Cualificada no sólo por la digitalización del Paraguay,
              sino también para incentivar una importante reducción en el uso de papel en las empresas.
            </p>
          </div>

          {/* Paperless Initiative */}
          <div className="flex items-start gap-8">
            <div className="w-16 h-16 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <Globe className="w-8 h-8 text-green-500" />
              </div>
            </div>
            <p className="text-gray-600 text-lg text-justify">
              La apuesta de Code100 a la despapelización en función de la sustentabilidad y cuidado del medio ambiente
              es más que una obligación, es una responsabilidad y una necesidad.
            </p>
          </div>

          {/* Innovation */}
          <div className="flex items-start gap-8">
            <div className="w-16 h-16 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <Sprout className="w-8 h-8 text-green-500" />
              </div>
            </div>
            <p className="text-gray-600 text-lg text-justify">
              Buscamos combinar la innovación y transformación cultural para una concienciación masiva de las
              consecuencias de la crisis climática que estamos viviendo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

