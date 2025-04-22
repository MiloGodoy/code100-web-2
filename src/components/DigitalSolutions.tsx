import Image from "next/image"
import Logos from '../../public/Logos.png'

export default function DigitalSolutions() {
  return (
    <section className="bg-white">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-2 text-center">
        <Image src={ Logos } alt="CO Logo" width={300} height={300} className="mx-auto mb-5" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight mb-10">
          Digitalizamos tus operaciones con soluciones tecnológicas eficientes y sostenibles.
        </h2>
      </div>

      {/* Gradient Section */}
      <div className="bg-[#4ECDC4]">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-4xl lg:text-5xl text-white leading-tight">
                Somos una Autoridad Certificadora desde el 2015
              </h3>
            </div>
            <div className="text-right">
              <p className="text-xl md:text-2xl text-white leading-relaxed text-justify">
                Hace más de 7 años trabajamos en la validación y verificación de la identidad de las personas y
                resguardamos la documentación probatoria de las mismas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

