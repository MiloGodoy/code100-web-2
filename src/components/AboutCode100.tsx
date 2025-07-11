"use client"

import { useState } from "react"
import { ExternalLink, Download, ArrowRight, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ReCAPTCHA from "react-google-recaptcha"

export default function AboutCode100() {
  const [captchaVerified, setCaptchaVerified] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token)
    setCaptchaVerified(!!token)
  }

  const handleDownload = (url: string) => {
    if (captchaVerified) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Más sobre CODE100</h2>

          {/* Captcha Section - Added at top */}
          <div className="mb-12 p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
            <h3 className="text-lg font-semibold mb-4 text-blue-900">Verificación requerida para descargas</h3>
            <p className="text-blue-700 mb-4">
              Por favor, complete la verificación para habilitar las descargas de documentos.
            </p>
            <div className="flex justify-center">
              <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""} onChange={handleCaptchaChange} />
            </div>
            {captchaVerified && (
              <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded-md">
                <p className="text-green-700 text-center font-medium">
                  ✓ Verificación completada. Ahora puede descargar los documentos.
                </p>
              </div>
            )}
          </div>

          {/* Registration Authorities */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Autoridades de registro</h3>
            <p className="text-gray-600 mb-6">
              Las autoridades de registro son las habilitadas por el AC Raíz Py, en donde los clientes pueden acercarse
              a solicitar sus certificados cualificados de firma electrónica.
            </p>
            <div className="space-y-8">
              {/* Main Registry Authority */}
              <Card className="p-6">
                <h4 className="font-medium mb-4">Autoridad de Registro propia de CODE100</h4>
                <p className="text-gray-600 mb-6">
                  Los agentes de registro son considerados Autoridades de Registro ya que brindan el servicio de AR
                  oficial para comunicar los documentos de CODE100 en que pueden realizar el trámite de certificados en
                  zona céntrica y corporativa.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span>Dirección General de Firma Digital y Comercio Electrónico</span>
                    <Button className="bg-amber-400 hover:bg-amber-500 text-black" asChild>
                      <a
                        href="https://www.acraiz.gov.py/html/Agentesderegistroscode100.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Consultar
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Delegated Authorities */}
              <Card className="p-6">
                <h4 className="font-medium mb-4">Autoridades de Registro Delegadas</h4>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span>PARADATA (en proceso de rescisión)</span>
                  <Button
                    className={`${
                      captchaVerified
                        ? "bg-amber-400 hover:bg-amber-500 text-black"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={!captchaVerified}
                    onClick={() =>
                      handleDownload("https://code100.com.py/wp-content/uploads/2021/08/contrato-paradata.pdf")
                    }
                  >
                    {captchaVerified ? (
                      <>
                        Consultar
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Verificar captcha
                        <Lock className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </Card>

              {/* Revoked Authorities */}
              <Card className="p-6">
                <h4 className="font-medium mb-4">Autoridades de Registro Revocadas</h4>
                <p className="text-gray-500">N/A</p>
              </Card>
            </div>
          </div>

          {/* Other Sections */}
          <div className="space-y-8">
            {/* Support Service Providers */}
            <Card className="p-6">
              <h3 className="font-medium mb-4">Prestadores de servicio de soporte</h3>
              <p className="text-gray-600 mb-4">
                Los prestadores de servicio de soporte a CODE100 para las infraestructuras y desarrollo de sistemas.
              </p>
              <Button className="bg-amber-400 hover:bg-amber-500 text-black" asChild>
                <a href="/prestadores-de-servicios" target="_blank" rel="noopener noreferrer">
                  Consultar <ArrowRight />
                </a>
              </Button>
            </Card>

            {/* Audits */}
            <Card className="p-6">
              <h3 className="font-medium mb-4">Auditorías</h3>
              <p className="text-gray-600 mb-4">
                Resultados de auditorías que forman parte de las inspecciones anuales que realiza la Dirección General
                de Comercio Electrónico (DGF), los estándares de requisitos y CRITERIOS WEBTRUST.
              </p>
            </Card>

            {/* ICPP Enablement */}
            <Card className="p-6">
              <h3 className="font-medium mb-4">Habilitación como parte de la ICPP</h3>
              <p className="text-gray-600 mb-6">
                Resolución la cual habilita a CODE100 para la emisión de certificados.
              </p>
              <Button
                className={`w-full ${
                  captchaVerified
                    ? "bg-amber-400 hover:bg-amber-500 text-black"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!captchaVerified}
                onClick={() =>
                  handleDownload(
                    "https://www.acraiz.gov.py/adjunt/Resoluciones/Res_CODE100_N_187-15_Habilitacion_de_PSC.PDF",
                  )
                }
              >
                {captchaVerified ? (
                  <>
                    Descargar
                    <Download className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Verificar captcha
                    <Lock className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </Card>

            {/* Manuals and Downloads */}
            <Card className="p-6">
              <h3 className="font-medium mb-4">Manuales y descargas</h3>
              <p className="text-gray-600">
                Manuales y descargas para la configuración de la PC del suscriptor de un Certificado Digital.
              </p>
              <Button className="bg-amber-400 hover:bg-amber-500 text-black w-full" asChild>
                <a href="/soporte" target="_blank" rel="noopener noreferrer">
                  Descargar
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Card>

            {/* Electronic Signature Service */}
            <Card className="p-6">
              <h3 className="font-medium mb-4">
                Servicio de Generación y Gestión de datos de creación de Firma Electrónica
              </h3>
              <p className="text-gray-600 mb-4">Estos servicios comprenden:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Custodia y centralización de datos privados en HSM</li>
                <li>Generación de datos de creación del certificado (key F3) y SSL</li>
                <li>Verificación de firma cualificada</li>
              </ul>
              <p className="text-gray-600 mt-4">Gracias a nuestro HSM</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
