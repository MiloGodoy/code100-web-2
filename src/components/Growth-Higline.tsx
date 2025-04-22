"use client"

import { useEffect, useState } from "react"

export default function GrowthTimeline() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const timelineEvents = [
    {
      year: "2015",
      title: "Fundación de la empresa",
      description:
        "Prestadores de Servicios de Certificación de Firma Digital, aprobados por el Ministerio de Industria y Comercio.",
    },
    {
      year: "2018",
      title: "Creación del Softwares",
      description:
        "Iniciamos el proyecto de la creación de FUTURA100, TALENTO100, DATAFLOW y CODESIGN soluciones con firma digital que ayudan a la despapelización.",
    },
    {
      year: "2019",
      title: "Inicio de pruebas de nuestras SOLUCIONES",
      description: "Iniciamos las pruebas internas como empresa de los Softwares con firma digital.",
    },
    {
      year: "2020",
      title: "Inicio en producción como facturadores electrónicos",
      description: "Empezamos a facturar electrónicamente con nuestro propio Software FUTURA100.",
    },
    {
      year: "2021",
      title: "Firma de Convenio con el MTESS",
      description:
        "Un convenio que une ambas instituciones para crear un proceso de Digitalización en Paraguay, por medio de una plataforma virtual de recepción de Documentos Electrónicos Laborales (DEL).",
    },
    {
      year: "2022",
      title: "Muchos proyectos logrados",
      description: "",
      bullets: [
        "Puesta en marcha de nuestro propio Data Center",
        "Creación de la Fundación Code100",
        "Formamos parte de Grupo Bepa ofreciendo Soluciones de 360°.",
      ],
    },
    {
      year: "2023",
      title: "Seguimos creciendo",
      description: "",
      bullets: [
        "El MIC nos constituye como PCSC",
        "Iniciamos emisiones de Certificados de Firma tipo f3",
        "Creación de nuevas soluciones tecnológicas.",
      ],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <div className="bg-[#4ECDC4] transform -rotate-1">
            <h2 className="text-3xl md:text-5xl font-bold text-center py-4 px-8">Crecemos constantemente</h2>
          </div>
        </div>

        {/* Mobile Timeline */}
        {isMobile && (
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="border-l-4 border-amber-400 pl-4 pb-6">
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-4 h-4 bg-amber-400 rounded-full"></div>
                  <div className="bg-amber-400 text-black font-medium px-3 py-1 rounded-full text-sm inline-block mb-2">
                    {event.year}
                  </div>
                </div>
                <h3 className="font-bold mt-2">{event.title}</h3>
                {event.description && <p className="text-sm text-gray-600 mt-1 text-justify">{event.description}</p>}
                {event.bullets && (
                  <ul className="text-sm text-gray-600 list-disc list-inside mt-1">
                    {event.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Desktop Timeline */}
        {!isMobile && (
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="hidden md:block absolute left-0 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 bg-amber-400 rounded-full"></div>

                  <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="bg-amber-400 text-black font-medium px-3 py-1 rounded-full text-sm inline-block mb-2">
                      {event.year}
                    </div>
                    <h3 className="font-bold">{event.title}</h3>
                    {event.description && <p className="text-sm text-gray-600 mt-1">{event.description}</p>}
                    {event.bullets && (
                      <ul className="text-sm text-gray-600 list-disc list-inside mt-1">
                        {event.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="md:flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

