'use client'

import Image from "next/image"
import FundacionLogo from '../../public/FundacionLogo.png'

export default function FoundationHero() {
  return (
    <div className="relative min-h-[600px] bg-emerald-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 pattern-grid-lg" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src={FundacionLogo}
              alt="Fundación Code100"
              width={200}
              height={200}
              className="mx-auto w-auto h-auto"
              priority
            />
          </div>

          {/* Text */}
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Fundación CODE100</h1>
          <div className="text-white text-xl md:text-2xl space-y-2">
            <p>Salvando Futuras</p>
            <p>Generaciones</p>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <style jsx>{`
        .pattern-grid-lg {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  )
}

