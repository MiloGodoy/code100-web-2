import { Card } from "@/components/ui/card"

interface Location {
  name: string
  address: string
  mapUrl: string
}

interface MapsSectionProps {
  locations?: Location[]
}

const defaultLocations = [
  {
    name: "CODE100 - Casa Central",
    address: "Brizuela Nº 750 c/ Eusebio Lillo - Villa Morra, Asunción",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5898776892847!2d-57.56234548498774!3d-25.290642883859843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da7b6b0b0b0b1%3A0x1b1b1b1b1b1b1b1b!2sCODE100!5e0!3m2!1ses!2spy!4v1621234567890!5m2!1ses!2spy",
  },
  {
    name: "CODE100 - Sucursal 2",
    address: "Benjamin Constant 973 – Edificio Arasa 2 Planta Baja, Oficina 12 - Asunción",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5898776892847!2d-57.56234548498774!3d-25.290642883859843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da7b6b0b0b0b1%3A0x1b1b1b1b1b1b1b1b!2sCODE100!5e0!3m2!1ses!2spy!4v1621234567890!5m2!1ses!2spy",
  },
  {
    name: "CODE100 - Sucursal 3",
    address: "Av. Sta. Teresa 2969, Asunción",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5898776892847!2d-57.56234548498774!3d-25.290642883859843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da7b6b0b0b0b1%3A0x1b1b1b1b1b1b1b1b!2sCODE100!5e0!3m2!1ses!2spy!4v1621234567890!5m2!1ses!2spy",
  },
]

export default function MapsSection({ locations = defaultLocations }: MapsSectionProps) {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Nuestras Ubicaciones</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <Card key={index} className="p-4">
              <h3 className="font-medium mb-2">{location.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{location.address}</p>
              <div className="relative w-full h-[180px] rounded-lg overflow-hidden">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

