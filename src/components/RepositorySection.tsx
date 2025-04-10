import { Search, FileCheck, XCircle } from "lucide-react"
import Link from "next/link"

export const RepositorySection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Repositorio Público</h1>
          <p className="text-gray-600">
            En este Repositorio encontrarás las políticas, lista de documentos y entidades vinculadas a CODE100, así
            como otras informaciones de acceso público.
          </p>
        </div>

        {/* Firma Electrónica Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Firma Electrónica Cualificada</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Panel */}
            <div className="bg-gradient-to-br from-yellow-400 via-yellow-300 to-green-400 rounded-2xl p-6 text-black shadow-lg">
              <div className="space-y-4">
                <FileCheck className="h-12 w-12" />
                <h3 className="text-xl font-semibold">Solicitar Nuevo Certificado de Firma Electrónica Cualificada</h3>
                <p className="text-sm">
                  Completa el formulario con tus informaciones. Luego nos pondremos en contacto contigo para confirmar
                  el trámite para la emisión del Certificado de Firma Electrónica.
                </p>
                <Link
                  href="/solicitar-certificado"
                  className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
                >
                  SOLICITAR
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Right Panels */}
            <div className="space-y-6">
              {/* Revocar Panel */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <XCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <p className="text-gray-600">
                      Aquí puedes suspender permanentemente la validez de tu certificado electrónico.
                    </p>
                    <Link
                      href="http://par.code100.com.py/revoke"
                      className="inline-flex items-center px-4 py-2 bg-yellow-400 rounded-full text-sm font-semibold hover:bg-yellow-500 transition-colors"
                    >
                      REVOCAR
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Consultar Panel */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Search className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <p className="text-gray-600">
                      Aquí puedes consultar la validez del certificado con el número de documento de identidad o RUC.
                    </p>
                    <Link
                      href="/consultar-certificados"
                      className="inline-flex items-center px-4 py-2 bg-yellow-400 rounded-full text-sm font-semibold hover:bg-yellow-500 transition-colors"
                    >
                      CONSULTAR
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

