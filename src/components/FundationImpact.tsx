'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import NiñosJugando from '../../public/niños_jugando.jpeg'
import NiñosPlantando from '../../public/niños_plantando.jpeg'

export default function FoundationImpact() {
  return (
    <section className="bg-emerald-600 py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 pattern-grid-lg" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Saving Future Generations */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-amber-400 p-8 md:p-12 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Salvando Futuras Generaciones</h2>
              <div className="space-y-4 text-black">
                <p>
                  Unite a Fundación Code100 y sé parte de cambiar la vida de niños en situaciones difíciles. Queremos
                  sembrar esperanza y crecimiento para un futuro sostenible donde la ecología y el bienestar infantil se
                  entrelazan.
                </p>
                <p className="font-medium">¡Con tu ayuda, forjemos un futuro lleno de oportunidades para cada niño!</p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src={NiñosJugando} alt="Niños felices sonriendo" fill className="object-cover" />
            </div>
          </div>

          {/* Building Smiles */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src={NiñosPlantando} alt="Niños plantando árboles" fill className="object-cover" />
            </div>
            <div className="bg-amber-400 p-8 md:p-12 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Construyendo Sonrisas</h2>
              <p className="text-black mb-8">
                ¡Haz la diferencia en la vida de un niño hoy! Dona para brindar esperanza, educación y oportunidades.
                Cada contribución cuenta y ayuda a construir un futuro más brillante para nuestros pequeños. ¡Únete a
                nosotros en el viaje de hacer sonreír a los corazones más jóvenes!
              </p>
              <Button className="bg-emerald-700 hover:bg-emerald-800 text-white" size="lg">
                Ayuda a Construir Sonrisas
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pattern-grid-lg {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  )
}

