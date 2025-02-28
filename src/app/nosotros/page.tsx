import Image from "next/image"
import Header from "@/components/Header"
import Oficina1 from '../../../public/oficina_1.jpeg'
import MissionVisionValues from "@/components/MisionVisionValues"
import DigitalSolutions from "@/components/DigitalSolutions"
import Certifications from "@/components/Certifications"
import GrowthTimeline from "@/components/Growth-Higline"

export default function AboutUsPage() {
  return (
    <>
        <Header />
        <main className="min-h-screen">
        {/* Hero */}
        <section className="relative bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Texto */}
                <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Nuestra historia</h1>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                    Liderando desde el 2015 en el mercado paraguayo como Prestadores de Servicios de Certificación de
                    Firma Digital, aprobados por el Ministerio de Industria y Comercio, desde entonces participamos
                    activamente en la transformación digital del Paraguay brindando servicios de Certificación,
                    reconocimiento e identificación electrónica.
                    </p>

                    <p>
                    Nuestro equipo se especializa en implementar digitalización de procesos, es decir, soluciones capaces
                    de llevar a su empresa al siguiente nivel. Gracias a esta iniciativa contamos con la Fundación CODE100
                    la cual su premisa es promover la sostenibilidad de las empresas nacionales reduciendo el consumo de
                    papel.
                    </p>

                    <p>Somos emisores de Firma Digital hoy denominada Firma Electrónica Cualificada.</p>

                    <p>
                    En 2021 entró en vigencia de la nueva Ley Nº 6822/21 siendo homologados por el MIC (Ministerio de
                    Industria y Comercio) para la misma.
                    </p>
                </div>
                </div>

                {/* Imagen */}
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                <Image
                    src={ Oficina1 }
                    alt="Equipo de Code100 colaborando"
                    fill
                    className="object-cover rounded-lg"
                    priority
                />
                </div>
            </div>
            </div>
        </section>

        <MissionVisionValues />
        <DigitalSolutions />
        <Certifications />
        <GrowthTimeline />
        </main>
    </>
  )
}

