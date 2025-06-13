"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import AutoPlay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import Imagen1 from "../../public/doc_elect1.jpeg"
import Imagen2 from "../../public/homologacion.jpeg"
import Imagen3 from '../../public/imagen3_certificado.jpeg'

const slides = [
  {
    id: 1,
    image: Imagen1,
    title: "Documentos Electrónicos Laborales con Firma Electrónica Cualificada",
    description:
      "Optimiza documentos laborales con firma electrónica líder en Paraguay. Agiliza y garantiza validez legal. Transforma tu gestión eficientemente con innovación.",
    primaryButton: {
      text: "SOLICITE AHORA",
      href: "/solicitar-productos",
    },
    secondaryButton: {
      text: "MÁS INFO",
      href: "/facturacion-electronica",
    },
  },
  {
    id: 2,
    image: Imagen2,
    title: "Certificado Cualificado de Firma Electrónica en la Nube",
    description:
      "Descubre cómo este certificado puede simplificar y agilizar tus procesos de firma electrónica, asegurando la confidencialidad, seguridad y validez de tus documentos.",
    primaryButton: {
      text: "CONOCER MÁS",
      href: "/certificado-cualificado",
    },
  },
  {
    id: 3,
    image: Imagen3,
    title: "La solución de Facturación Electrónica más completa del Paraguay.",
    description:
      "Solución integral que optimiza las operaciones de facturación de tu empresa. Simplifica la generación, envío y almacenamiento de facturas electrónicas, garantizando cumplimiento legal, agilidad administrativa y mayor control financiero.",
    primaryButton: {
      text: "SOLICITE AHORA",
      href: "/solicitar",
    },
    secondaryButton: {
      text: "MÁS INFO",
      href: "/info-facturacion",
    },
  },
]

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [AutoPlay()])
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
                  <div className="container h-full flex items-center">
                    <div className="max-w-2xl text-white space-y-4">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{slide.title}</h2>
                      <p className="text-sm md:text-base lg:text-lg text-gray-200 text-justify">{slide.description}</p>
                      <div className="flex gap-4 pt-4">
                        <Button asChild size="lg" className="bg-amber-400 hover:bg-amber-500 text-black">
                          <Link href={slide.primaryButton.href}>{slide.primaryButton.text}</Link>
                        </Button>
                        {slide.secondaryButton && (
                          <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-white text-gray-600 hover:bg-white hover:text-black"
                          >
                            <Link href={slide.secondaryButton.href}>{slide.secondaryButton.text}</Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/40 hover:text-white"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/40 hover:text-white"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}