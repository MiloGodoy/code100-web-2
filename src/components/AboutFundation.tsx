import Image from "next/image"
import FundacionImage from '../../public/fundacion_plantando.png'

export default function AboutFoundation() {
  return (
    <section className="py-16 md:py-5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src={FundacionImage} alt="Plantando un árbol" fill className="object-cover" priority />
          </div>

          {/* Content */}
          <div className="bg-amber-400 p-8 md:p-12 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Quienes somos?</h2>
            <p className="text-black leading-relaxed">
              En Fundación Code100, nos definimos con una misión dual: plantar árboles para preservar nuestro entorno y
              brindar apoyo integral a niños necesitados. A través de nuestros esfuerzos, contribuimos a conservar la
              biodiversidad y a mejorar la calidad de vida de niños desfavorecidos, ofreciéndoles oportunidades y
              recursos esenciales. No solo sembramos árboles; cultivamos un futuro donde la ecología y la solidaridad
              convergen para construir comunidades más fuertes y sostenibles.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

