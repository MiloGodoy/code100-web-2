"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Clientes from '../../public/clientes.jpeg'
import Mapa from '../../public/mapa.jpeg'
import Set from '../../public/set.jpeg'
import Experiencia from '../../public/experiencia.jpeg'


const slides = [
  {
    id: 1,
    title: "Clientes",
    image: Clientes,
    alt: "Nuestros clientes confían en FUTURA100",
  },
  {
    id: 2,
    title: "SET",
    image: Set,
    alt: "Certificados por la Subsecretaría de Estado de Tributación",
  },
  {
    id: 3,
    title: "Mapa",
    image: Mapa,
    alt: "Cobertura en todo Paraguay",
  },
  {
    id: 4,
    title: "Experiencia",
    image: Experiencia,
    alt: "Años de experiencia en el mercado",
  },
]

export default function Futura100FeaturesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const nextSlide = () => {
    setAutoplay(false) // Pause autoplay when manually navigating
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setAutoplay(false) // Pause autoplay when manually navigating
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4">
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md hover:bg-gray-100"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Anterior</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md hover:bg-gray-100"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Siguiente</span>
          </Button>

          {/* Slides */}
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out h-[300px] md:h-[400px] lg:h-[500px]"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="min-w-full relative">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={slide.id === 1}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold">{slide.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`h-3 rounded-full transition-all ${
                  currentSlide === index ? "w-8 bg-amber-500" : "w-3 bg-gray-300"
                }`}
                onClick={() => {
                  setAutoplay(false)
                  setCurrentSlide(index)
                }}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

