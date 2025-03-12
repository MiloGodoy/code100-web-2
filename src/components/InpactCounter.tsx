"use client"

import { useState } from "react"
import { Recycle, Users, TreesIcon as Tree } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function ImpactCounter() {
  const [sheets, setSheets] = useState<string>("")
  const [results, setResults] = useState<{
    paper: number
    water: number
    trees: number
    energy: number
  } | null>(null)

  const calculateImpact = () => {
    const numSheets = Number.parseFloat(sheets)
    if (isNaN(numSheets)) return

    // Cálculos basados en la proporción dada por 1000 hojas
    const ratio = numSheets / 1000
    setResults({
      paper: 0.01 * ratio, // toneladas
      water: 2191.2 * ratio, // litros
      trees: 0.16 * ratio, // árboles
      energy: 37.87 * ratio, // kW
    })
  }

  return (
    <section className="bg-emerald-600 py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 pattern-grid-lg" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contador de Impacto Positivo</h2>
            <p className="mb-4">
              Un contador y una calculadora no solo suma cifras, sino que abraza historias detrás de cada gesto.
            </p>
            <p>
              Aquí registramos la cantidad de papel ahorrado, niños auxiliados y árboles plantados, brindando esperanza
              en el corazón de nuestra comunidad para las Generaciones Futuras.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-amber-400 text-center">
              <div className="flex justify-center mb-4">
                <Recycle className="w-12 h-12" />
              </div>
              <div className="text-2xl font-bold mb-2">165,488 Kgs.</div>
              <div className="text-sm">De Papel Ahorrado</div>
            </Card>

            <Card className="p-6 bg-amber-400 text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12" />
              </div>
              <div className="text-2xl font-bold mb-2">154 +</div>
              <div className="text-sm">Niños Asistidos</div>
            </Card>

            <Card className="p-6 bg-amber-400 text-center">
              <div className="flex justify-center mb-4">
                <Tree className="w-12 h-12" />
              </div>
              <div className="text-2xl font-bold mb-2">478</div>
              <div className="text-sm">Árboles Plantados</div>
            </Card>
          </div>

          {/* Calculator */}
          <Card className="p-6 bg-amber-400 max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4">Ingresá la cantidad de Hojas:</h3>
            <div className="space-y-4">
              <Input
                type="number"
                value={sheets}
                onChange={(e) => setSheets(e.target.value)}
                className="bg-white"
                placeholder="Ej: 1000"
              />
              <Button onClick={calculateImpact} className="w-full bg-emerald-700 hover:bg-emerald-800 text-white">
                Calcular Impacto
              </Button>

              {results && (
                <div className="space-y-2 pt-4">
                  <h4 className="font-bold">Resultados:</h4>
                  <p>Toneladas de papel: {results.paper.toFixed(2)} toneladas</p>
                  <p>Litros de agua: {results.water.toFixed(2)} litros</p>
                  <p>Árboles: {results.trees.toFixed(2)} árboles</p>
                  <p>KW de energía: {results.energy.toFixed(2)} KW</p>
                </div>
              )}
            </div>
          </Card>
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

