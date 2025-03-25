import Image from "next/image"
import { Phone, Mail, MapPin, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import ContactFormSection from "@/components/ContactForm"
import CompanyGroup from "@/components/CompanyGroup"
import Footer from "@/components/Footer"

const providers = [
  {
    name: "TEISA",
    phone: "+595 21 616 4000",
    email: "info@teisa.com.py",
    address: "Circulo De Silva 1001 esq. Federación Rusa Asunción - Paraguay",
    website: "teisa.com.py",
    mapUrl: "https://www.google.com/maps/search/teisa/@-25.2592616,-57.5890166,15.87z?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D",
    mapImage: "/maps/teisa-map.jpg",
  },
  {
    name: "LACUNA SOFTWARE",
    phone: "+55 (61) 3030-5700",
    email: "commercial@lacunasoftware.com",
    address: "CLN 110 Bloco A Sala 203, Asa Norte Brasília - DF, Brasil, 70753-510",
    website: "lacunasoftware.com",
    mapUrl: "https://www.google.com/maps/search/CLN+110+Bloco+A+Sala+203,+Asa+Norte+Bras%C3%ADlia+%E2%80%93+DF,+Brasil,+70753-510/@-15.7546697,-47.9111263,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D",
    mapImage: "/maps/lacuna-map.jpg",
  },
  {
    name: "DINAMO NETWORKS",
    phone: "+55 11 3277-8222",
    email: "contato@dinamonetworks.com",
    address: "Av. Nações Unidas, 14401 - 7º andar Tarumã - 04794-000 • São Paulo",
    website: "dinamonetworks.com",
    mapUrl: "https://www.google.com/maps/place/Av.+das+Na%C3%A7%C3%B5es+Unidas,+14401+-+Torre,+Tarum%C3%A3+-+SP,+04533-085,+Brazil/@-23.5925942,-46.6945511,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5738d98bcf21:0x249648bacd3b5553!8m2!3d-23.5925991!4d-46.6919762!16s%2Fg%2F11ts048vqy?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D",
    mapImage: "/maps/dinamo-map.jpg",
  },
  {
    name: "CODE100",
    phone: "+595 21 7296900",
    email: "info@code100.com.py",
    address: "Brizuela Nº 750, entre Mariscal Antonio José Sucre y Eusebio Lillo Robles",
    website: "code100.com.py",
    mapUrl: "Brizuela N.º 750, entre Mariscal Antonio José Sucre y Eusebio Lillo Robles.",
    mapImage: "/maps/code100-map.jpg",
  },
]

export default function ServiceProvidersSection() {
  return (
    <>
        <Header />
        <section className="py-16">
        {/* Gradient Background with Description */}
        <div className="bg-gradient-to-r from-amber-300 via-lime-200 to-emerald-200 py-12 mb-16">
            <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-gray-800">
                <p className="text-base md:text-lg leading-relaxed">
                Nuestro servicio de prestación de soporte técnico ofrece asistencia experta para resolver problemas
                informáticos de manera eficiente. Con un equipo altamente capacitado, estamos comprometidos en brindar
                soluciones rápidas y efectivas para garantizar el funcionamiento óptimo de tus sistemas y dispositivos. Ya
                sea que enfrentes problemas de hardware, software o redes, estamos aquí para ayudarte. Desde la
                instalación y configuración hasta la resolución de problemas y mantenimiento preventivo, nuestro equipo
                está disponible para satisfacer tus necesidades tecnológicas. Confía en nosotros para mantener tus
                sistemas funcionando sin problemas y maximizar tu productividad.
                </p>
            </div>
            </div>
        </div>

        {/* Service Providers Grid */}
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
            {providers.map((provider, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-md">
                <CardContent className="p-0">
                    <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-center">{provider.name}</h3>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                        <p>{provider.phone}</p>
                        </div>

                        <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                        <p className="break-all">{provider.email}</p>
                        </div>

                        <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                        <p>{provider.address}</p>
                        </div>

                        <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-amber-500 flex-shrink-0" />
                        <p>{provider.website}</p>
                        </div>
                    </div>
                    </div>

                    {/* Map Image */}
                    <div className="relative h-64 w-full">
                    <a href={provider.mapUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
                        <Image
                        src={provider.mapImage || "/placeholder.svg?height=300&width=500"}
                        alt={`Mapa de ubicación de ${provider.name}`}
                        fill
                        className="object-cover"
                        />
                        <div className="absolute bottom-4 right-4 bg-white rounded-md px-3 py-1 text-xs shadow-md">
                        Ampliar el mapa
                        </div>
                    </a>
                    </div>
                </CardContent>
                </Card>
            ))}
            </div>
        </div> 
      </section>
      <ContactFormSection />
      <CompanyGroup />
      <Footer />      
    </>
  )
}

