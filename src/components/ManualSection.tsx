import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const tutorials = [
  {
    title: "Tutorial de firma en Adobe formato token",
    icon: "pdf",
    href: "https://www.youtube.com/watch?v=EwsBusZfBXU",
  },
  {
    title: "Tutorial de Firma básica en excel formato token",
    icon: "excel",
    href: "https://www.youtube.com/watch?v=A99MBsiQgu8",
  },
  {
    title: "Tutorial de Firma avanzada en excel formato token",
    icon: "excel",
    href: "https://www.youtube.com/watch?v=gJgV4GCTo_o",
  },
  {
    title: "Tutorial de Firma básica en Word formato token",
    icon: "word",
    href: "https://www.youtube.com/watch?v=IyAmRdNrXSw",
  },
  {
    title: "Tutorial de Firma avanzada en Word formato token",
    icon: "word",
    href: "https://www.youtube.com/watch?v=7x-v1FEb0-g",
  },
]

export default function ManualSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Manuales CODE100</h2>
            <p className="text-gray-600 text-lg text-justify">
              En nuestra completa sección «Manuales code100», encontrarás manuales de configuración diseñados para que
              puedas firmar digitalmente con total facilidad y seguridad. Estas detalladas guías te proporcionarán paso
              a paso las instrucciones necesarias para garantizar un uso correcto y eficiente de tu firma digital,
              permitiéndote agilizar y optimizar tus procesos digitales con plena confianza.
            </p>
          </div>

          {/* Tutorials List */}
          <div className="space-y-4">
            {tutorials.map((tutorial, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-emerald-400 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-medium">{tutorial.title}</h3>
                </div>
                <Button className="bg-amber-400 hover:bg-amber-500 text-black" asChild>
                  <a href={tutorial.href}>
                    Ver vídeo
                    <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  )
}

