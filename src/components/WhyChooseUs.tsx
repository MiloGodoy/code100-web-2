import { Settings, Shield, Users, Code } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Logo from '../../public/Logos.png'

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">¿Por qué elegir a Code100?</h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* In House */}
          <Card className="p-8">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full flex items-center justify-center mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">In House</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>Software desarrollado por nuestro equipo</li>
              <li>Soporte de primera línea con nuestros propios desarrolladores</li>
              <li>Desarrollo a medida según requerimientos e integraciones con ERP</li>
              <li>
                Soluciones de 360° que cubren todas las necesidades de gestión documental de tu empresa con nuestros
                productos de software.
              </li>
              <li>Consultoría contable con Reset que también forma parte del Grupo Bepa</li>
            </ul>
          </Card>

          {/* Seguridad */}
          <Card className="p-8">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Seguridad</h3>
            </div>
            <p className="text-gray-600">
              Certificación de Seguridad física e informática otorgada por el MIC (Ministerio de Industria y Comercio)
              que protege la infraestructura tecnológica de accesos no autorizados y garantizan la continuidad de tus
              operaciones.
            </p>
          </Card>

          {/* Innovación */}
          <Card className="p-8">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full flex items-center justify-center mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Innovación</h3>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>Actualización permanente de nuevas plataformas digitales y tecnológicas.</p>
              <p>
                Desarrollamos Software y aplicaciones móviles para la gestión de documentos. Siempre a la vanguardia.
              </p>
            </div>
          </Card>

          {/* Compromiso social */}
          <Card className="p-8">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Compromiso social</h3>
            </div>
            <p className="text-gray-600">
              Siendo nuestra premisa la digitalización de documentos, ayudamos mediante la Fundación CODE100 a la
              eliminación paulatina del uso de papel tanto en el sector público como en el privado.
            </p>
          </Card>
        </div>

        {/* Logo */}
        <div className="container mx-auto px-4 py-2">
            <Image src={ Logo } alt="CO Logo" width={300} height={300} className="mx-auto mb-5" />
            <h4 className="text-3xl md:text-4xl lg:text-5xl max-w-4xl mx-auto leading-tight mb-10">
                Acercamos el futuro a personas y empresas con el compromiso de transformar el Paraguay.
            </h4>
        </div>
        
      </div>
    </section>
  )
}

