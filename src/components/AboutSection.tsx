import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Logo from '../../public/8.png'

export const AboutSection = () => {
  return (
    <section className="relative w-full min-h-[600px] bg-gradient-to-r from-yellow-400 via-yellow-300 to-green-400">
      <div className="absolute inset-0 bg-white/90">
        <div className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-3xl shadow-xl p-12 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image src={Logo} alt="Code100 Logo" width={300} height={100} className="object-contain" />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">Quienes somos</h2>
                <p className="text-gray-600 leading-relaxed">
                  En nuestra amplia gama de servicios, ofrecemos certificación, reconocimiento e identificación
                  electrónica, meticulosamente diseñados para impulsar tu empresa hacia el éxito. Al eliminar la
                  dependencia del papel en la gestión operativa, liberamos el potencial de tus colaboradores,
                  permitiéndoles concentrarse en actividades que generan valor para tus clientes. Nuestras soluciones no
                  solo optimizan los procesos empresariales, sino que también brindan una experiencia sin igual,
                  impulsando la eficiencia y la competitividad de tu negocio a niveles extraordinarios.
                </p>
                <Link
                  href="/nosotros"
                  className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-colors"
                >
                  CONOCE CODE100
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

