import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube, Linkedin, Phone, Mail, MapPin } from "lucide-react"
import Code100Logo from "../../public/code100_logo.png"
import FundacionLogo from "../../public/FundacionLogo.png"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Section */}
          <div className="space-y-8">
            <Image
              src={Code100Logo || "/placeholder.svg"}
              alt="Code100"
              width={240}
              height={80}
              className="w-auto h-20"
            />
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Youtube className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Products and Support */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">PRODUCTOS</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Certificado de Firma Electrónica
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Facturación Electrónica
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Documentos Laborales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Firma masiva de documentos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">SOPORTE</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Manuales y Drivers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Repositorio de Documentos
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Company and Help */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">EMPRESA</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Sobre la empresa
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Políticas
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">AYUDA</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Consultas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Solicitar Productos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Soporte Técnico
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">CONTACTO</h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2" />
                <span>+595 21 729 6900</span>
              </p>
              <p className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2" />
                <span>contacto@code100.com.py</span>
              </p>
              <div className="flex items-start text-gray-600">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <p>Brizuela Nº 750 c/ Eusebio Lillo - Villa Morra, Asunción</p>
                  <p>Benjamin Constant 973 – Edificio Arasa 2 Planta Baja, Oficina 12 - Asunción</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Code100. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

