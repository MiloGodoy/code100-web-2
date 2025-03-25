import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import TalentoLogo from '../../public/talento100.png'
import { TfiPencilAlt } from "react-icons/tfi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdOutlineNotificationsActive, MdOutlineSendToMobile } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import Link from "next/link";

const features = [
  {
    id: 1,
    title: "Gestión de firmas en línea.",
    icon: <TfiPencilAlt />
  },
  {
    id: 2,
    title: "Altas y bajas de tus colaboradores integradas con tu ERP (Software de Gestión)",
    icon: <FaRegCalendarCheck />
  },
  {
    id: 3,
    title: "Creación y gestión de notificaciones internas.",
    icon: <MdOutlineNotificationsActive />
  },
  {
    id: 4,
    title: "Solicitud, aprobación y gestión de permisos y vacaciones en línea",
    icon: <FaCalendarCheck />
  },
  {
    id: 5,
    title: "Posibilidad de comunicar al MTESS si el cliente desea.",
    icon: <MdOutlineSendToMobile />
  },
]

export default function Talento100Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <Image
            src={TalentoLogo}
            alt="TALENTO100 Logo"
            width={200}
            height={50}
            className="h-10 w-auto mx-auto mb-4"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.id} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-start">
                  <div className="bg-amber-100 p-2 rounded-lg mb-4">
                    {typeof feature.icon === "string" ? (
                      <Image
                        src={feature.icon || "/placeholder.svg"}
                        alt={feature.title}
                        width={40}
                        height={40}
                        className="h-8 w-8"
                      />
                    ) : (
                      feature.icon
                    )}
                  </div>
                  <h3 className="font-medium text-lg">{feature.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-amber-50">
            <CardContent className="p-6">
              <div className="flex flex-col items-start">
                <h3 className="font-medium text-lg mb-4">
                  Conozca otras funcionalidades de la plataforma más utilizada en Paraguay.
                </h3>
                <Link href='/contacto'>
                    <button className="bg-amber-400 hover:bg-amber-500 text-black px-4 py-2 rounded-md font-medium">
                    SOLICITAR
                    </button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-1 rounded-full mt-1">
              <div className="h-4 w-4 bg-green-500 rounded-full"></div>
            </div>
            <p className="text-gray-700">
              Pioneros en Recibo Electrónico de Salarios en Paraguay, lo que nos permitió construir la plataforma en
              virtud a los distintos casos de uso de nuestros clientes, que a largo de estos años nos ha dado un nivel
              de experiencia y base de conocimiento importante.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-1 rounded-full mt-1">
              <div className="h-4 w-4 bg-green-500 rounded-full"></div>
            </div>
            <p className="text-gray-700">
              Software 100% paraguayo con todos los registros de propiedad intelectual, adaptable a cualquier empresa
              con desarrollo y soporte técnico local.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-1 rounded-full mt-1">
              <div className="h-4 w-4 bg-green-500 rounded-full"></div>
            </div>
            <p className="text-gray-700">
              Facilita los procesos internos y el cumplimiento de los requerimientos técnicos y de procedimientos del
              MTESS.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

