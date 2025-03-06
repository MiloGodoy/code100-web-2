import { Card } from "@/components/ui/card"

// Define the download items with their names and links
const downloads = [
  {
    name: "Rustdesk",
    href: "https://rustdesk.com/",
    icon: "R",
  },
  {
    name: "Java",
    href: "https://www.java.com/",
    icon: "J",
  },
  {
    name: "WinRAR",
    href: "https://www.win-rar.com/",
    icon: "W",
  },
  {
    name: "Adobe Reader",
    href: "https://get.adobe.com/reader/",
    icon: "A",
  },
  {
    name: "AnyDesk",
    href: "https://anydesk.com/",
    icon: "A",
  },
  {
    name: "bit4id Windows",
    href: "#",
    icon: "B",
  },
  {
    name: "bit4id Linux",
    href: "#",
    icon: "B",
  },
  {
    name: "bit4id MacOS",
    href: "#",
    icon: "B",
  },
  {
    name: "bit4id Aduana Windows",
    href: "#",
    icon: "B",
  },
  {
    name: "Token Driver Windows",
    href: "#",
    icon: "T",
  },
  {
    name: "Token Admin Tool",
    href: "#",
    icon: "T",
  },
  {
    name: "Token Driver MacOS",
    href: "#",
    icon: "T",
  },
]

export default function DownloadsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Descargas útiles</h2>
            <p className="text-gray-600 text-lg">
              Te presentamos las aplicaciones imprescindibles que aseguran el óptimo desempeño de la Firma Digital y los
              Certificados emitidos por CODE100. Estas herramientas garantizan una experiencia fluida y segura,
              facilitando la gestión de documentos y transacciones digitales con total confianza y eficacia.
            </p>
          </div>

          {/* Downloads Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloads.map((download) => (
              <a
                key={download.name}
                href={download.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:-translate-y-1"
                aria-label={`Descargar ${download.name}`}
              >
                <Card className="p-6 h-32 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-amber-400 to-emerald-400 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                      {download.icon}
                    </div>
                    <p className="text-sm text-gray-600">{download.name}</p>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

