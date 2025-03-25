import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import TalentoLogo from '../../public/talento100.png'
import { FaFileSignature } from "react-icons/fa";
import { BiReceipt } from "react-icons/bi";
import { MdOutlineSavings } from "react-icons/md";
import { TbDeviceIpadHorizontalSearch } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";

const benefits = [
  {
    id: 1,
    title: "Permite la firma desde cualquier dispositivo y lugar",
    description: "a través de la Firma Electrónica Cualificada.",
    icon: <FaFileSignature />
  },
  {
    id: 2,
    title: "Agiliza la emisión de recibos salariales",
    description: "eliminando tareas y mejorando la eficiencia empresarial.",
    icon: <BiReceipt />
  },
  {
    id: 3,
    title: "Ahorra dinero",
    description: "eliminando procesos asociados a la impresión, envío, recepción y archivo de recibo de salarios.",
    icon: <MdOutlineSavings />
  },
  {
    id: 4,
    title: "Búsqueda rápida y Ágil.",
    description: "Encuentre sus documentos laborales de manera rápida y sencilla.",
    icon: <TbDeviceIpadHorizontalSearch />
  },
  {
    id: 5,
    title: "Plataforma Segura y Legal.",
    description: "Asegura los documentos y comunicaciones, cumpliendo con las normativas del MIC y MTESS.",
    icon: <MdOutlineSecurity />
  },
]

export default function Talento100Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <Image
            src={TalentoLogo}
            alt="TALENTO100 Logo"
            width={200}
            height={50}
            className="h-10 w-auto mx-auto mb-4"
          />
          <p className="text-gray-700">
            Confía en la plataforma de Documentos Laborales Electrónicos más utilizada en Paraguay
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <Card key={benefit.id} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-start">
                  <div className="bg-amber-100 p-2 rounded-lg mb-4">
                    {typeof benefit.icon === "string" ? (
                      <Image
                        src={benefit.icon || "/placeholder.svg"}
                        alt={benefit.title}
                        width={40}
                        height={40}
                        className="h-8 w-8"
                      />
                    ) : (
                      benefit.icon
                    )}
                  </div>
                  <h3 className="font-medium text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

