import Image from "next/image"
import { Card } from "@/components/ui/card"
import RustDeskLogo from "../../public/rustdesk-logo.jpeg"
import JavaLogo from '../../public/java-logo.jpeg'
import Winrar from '../../public/winrar-logo.jpeg'
import Adobe from '../../public/adobe-logo.jpeg'
import Anydesk from '../../public/anydesk.jpeg'
import Bit4IdWin from '../../public/bit4id-windows-logo.png'
import bit4IdLinux from '../../public/bit4idlinux.png'
import Bit4Id from '../../public/bit4id.png'


// Define the download items with their names and links
const downloads = [
  {
    name: "Rustdesk",
    href: "https://rustdesk.com/",
    icon: RustDeskLogo,
    isImage: true,
  },
  {
    name: "Java",
    href: "https://www.java.com/",
    icon: JavaLogo,
    isImage: true,
  },
  {
    name: "WinRAR",
    href: "https://www.win-rar.com/",
    icon: Winrar,
    isImage: true,
  },
  {
    name: "Adobe Reader",
    href: "https://get.adobe.com/reader/",
    icon: Adobe,
    isImage: true
  },
  {
    name: "AnyDesk",
    href: "https://anydesk.com/",
    icon: Anydesk,
    isImage: true,
  },
  {
    name: "bit4id Windows",
    href: "#",
    icon: Bit4IdWin,
    isImage: true,
  },
  {
    name: "bit4id Linux",
    href: "#",
    icon: bit4IdLinux,
    isImage: true,
  },
  {
    name: "bit4id MacOS",
    href: "#",
    icon: Bit4Id,
    isImage: true,
  },
  // {
  //   name: "bit4id Aduana Windows",
  //   href: "#",
  //   icon: "B",
  //   isImage: false,
  // },
  // {
  //   name: "Token Driver Windows",
  //   href: "#",
  //   icon: "T",
  //   isImage: false,
  // },
  // {
  //   name: "Token Admin Tool",
  //   href: "#",
  //   icon: "T",
  //   isImage: false,
  // },
  // {
  //   name: "Token Driver MacOS",
  //   href: "#",
  //   icon: "T",
  //   isImage: false,
  // },
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
                <Card className="p-0 overflow-hidden h-32">
                  <div className="flex flex-col h-full">
                    {download.isImage ? (
                      <div className="flex-grow flex items-center justify-center bg-white p-2">
                        <div className="relative w-full h-full">
                          <Image
                            src={download.icon || "/placeholder.svg"}
                            alt={`${download.name} logo`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex-grow flex items-center justify-center bg-gradient-to-br from-amber-400 to-emerald-400">
                        <span className="text-white text-4xl font-bold">
                          {typeof download.icon === "string" ? download.icon : ""}
                        </span>
                      </div>
                    )}
                    <div className="p-2 text-center bg-white border-t">
                      <p className="text-sm text-gray-600">{download.name}</p>
                    </div>
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

