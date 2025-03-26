import Image from "next/image"
import { TelescopeIcon as Binoculars, Target, Heart } from "lucide-react"

export default function VisionMissionValues() {
  return (
    <section className="bg-amber-400 py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Vision Card */}
            <div className="relative rounded-lg overflow-hidden group">
              <div className="absolute inset-0">
                <Image src="/images/vision-bg.jpg" alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/60" />
              </div>
              <div className="relative p-6 text-white min-h-[400px] flex flex-col">
                <div className="bg-amber-400/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Binoculars className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Visión</h3>
                <p className="text-sm leading-relaxed">
                  Nos visualizamos como impulsores de un cambio duradero en el medio ambiente y la vida de niños en
                  entornos desfavorables. Trabajamos por un mundo sostenible donde la naturaleza florezca y cada niño
                  encuentre amor, apoyo y oportunidades para crecer. Buscamos un futuro donde ecología y bienestar
                  infantil se entrelacen, formando bases para comunidades fuertes y equitativas.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative rounded-lg overflow-hidden group">
              <div className="absolute inset-0">
                <Image src="/images/mission-bg.jpg" alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/60" />
              </div>
              <div className="relative p-6 text-white min-h-[400px] flex flex-col">
                <div className="bg-amber-400/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Misión</h3>
                <p className="text-sm leading-relaxed">
                  Ser agentes de cambio comprometidos con la sostenibilidad y la atención integral a la niñez. Nuestra
                  misión es ejecutar proyectos eco-innovadores mientras brindamos apoyo a los niños. Trabajamos para
                  construir un futuro donde ecología y bienestar se entrelacen, dejando una huella positiva en nuestras
                  comunidades.
                </p>
              </div>
            </div>

            {/* Values Card */}
            <div className="relative rounded-lg overflow-hidden group">
              <div className="absolute inset-0">
                <Image src="/images/values-bg.jpg" alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/60" />
              </div>
              <div className="relative p-6 text-white min-h-[400px] flex flex-col">
                <div className="bg-amber-400/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Valores</h3>
                <div className="space-y-4 text-sm">
                  <p>
                    <strong>Sostenibilidad:</strong> Compromiso con prácticas que preserven y regeneren el medio
                    ambiente a largo plazo.
                  </p>
                  <p>
                    <strong>Compasión:</strong> Trato compasivo y empático hacia los niños y sus necesidades, así como
                    hacia el mundo natural.
                  </p>
                  <p>
                    <strong>Responsabilidad:</strong> Reconocimiento de la responsabilidad de preservar el medio
                    ambiente y apoyar el bienestar de los niños.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

