"use client"

import { useState } from "react"
import { Download, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ReCAPTCHA from "react-google-recaptcha"
import RefundPolicyDialog from "./RefoundPolicyDialog"

export default function DocumentationSection() {
  const [captchaVerified, setCaptchaVerified] = useState(false)

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaVerified(!!token)
  }

  const handleDownload = (url: string) => {
    if (captchaVerified) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <section className="py-8 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-20">
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

          {/* Revoked Certificates List */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Before Jan 30 */}
            <Card className="p-6">
              <h3 className="font-medium mb-2">Lista de certificados revocados</h3>
              <p className="text-gray-500 text-sm mb-2">(Certificados emitidos hasta el 30 de enero 2023)</p>
              <p className="text-gray-600 text-sm mb-6">
                Certificado en el cual se consultan los certificados que fueron revocados y es actualizado a cada hora
                de forma automática.
              </p>
              <Button
                className={`w-full ${
                  captchaVerified
                    ? "bg-amber-400 hover:bg-amber-500 text-black"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!captchaVerified}
                onClick={() => handleDownload("api/download")}
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

            {/* After Jan 30 */}
            <Card className="p-6">
              <h3 className="font-medium mb-2">Lista de certificados revocados</h3>
              <p className="text-gray-500 text-sm mb-2">(Certificados emitidos desde el 30 de enero 2023)</p>
              <p className="text-gray-600 text-sm mb-6">
                Certificado en el cual se consultan los certificados que fueron revocados y es actualizado a cada hora
                de forma automática.
              </p>
              <Button
                className={`w-full ${
                  captchaVerified
                    ? "bg-amber-400 hover:bg-amber-500 text-black"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!captchaVerified}
                onClick={() => handleDownload("http://pca1.code100.com.py/crls/ca-code100-sa.crl")}
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
          </div>

          {/* CODE100 Policies */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Políticas y documentos de CODE100</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* DPC */}
              <Card className="p-6">
                <h3 className="font-medium mb-4">Declaración de Prácticas de certificación (DPC)</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Documento principal de CODE100, en el que se detallan todas las políticas aplicables (técnicas y no
                  técnicas) a emisión, procedimientos y manejo de certificados.
                </p>
                <Button
                  className={`w-full ${
                    captchaVerified
                      ? "bg-amber-400 hover:bg-amber-500 text-black"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!captchaVerified}
                  onClick={() =>
                    handleDownload("https://drive.google.com/file/d/15vx0f4FJ4aiT8T5Sxl6LTboENMmCWKd2/view")
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

              {/* PC */}
              <Card className="p-6">
                <h3 className="font-medium mb-4">Política de Certificación (PC)</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Política en donde son establecidos los diferentes formatos y requisitos de seguridad de los tipos de
                  certificados que CODE100 emite.
                </p>
                <Button
                  className={`w-full ${
                    captchaVerified
                      ? "bg-amber-400 hover:bg-amber-500 text-black"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!captchaVerified}
                  onClick={() =>
                    handleDownload("https://drive.google.com/file/d/1ma6HI_6CLRErqnthPzIAoSJC93IrCsmi/view")
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

              {/* Privacy Policy */}
              <Card className="p-6">
                <h3 className="font-medium mb-4">Política de privacidad (PP)</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Política de privacidad acerca del manejo de la información de los certificados emitidos por CODE100
                  S.A.
                </p>
                <Button
                  className={`w-full ${
                    captchaVerified
                      ? "bg-amber-400 hover:bg-amber-500 text-black"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!captchaVerified}
                  onClick={() =>
                    handleDownload("https://drive.google.com/file/d/1UXMzRYfiYNn-KAv4E9L-tFhr2SeRnYvb/view")
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

              {/* Refund Policy */}
              <Card className="p-6">
                <h3 className="font-medium mb-4">Política de reembolso</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Política y condiciones de reembolso aplicadas a los certificados emitidos por CODE100.
                </p>
                <RefundPolicyDialog />
              </Card>
            </div>
          </div>

          {/* F3 Certificate Documents */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Documentos Relacionados al Certificado Cualificado de Firma Electrónica Tipo F3
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-medium mb-6">Declaración de prácticas (DP)</h3>
                <Button
                  className={`w-full ${
                    captchaVerified
                      ? "bg-amber-400 hover:bg-amber-500 text-black"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!captchaVerified}
                  onClick={() =>
                    handleDownload("https://drive.google.com/file/d/1VVL2bh1px_MRPQaZgk3za8YFPsUT8T1_/view")
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

              <Card className="p-6">
                <h3 className="font-medium mb-6">Procedimientos Operacionales</h3>
                <Button
                  className={`w-full ${
                    captchaVerified
                      ? "bg-amber-400 hover:bg-amber-500 text-black"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!captchaVerified}
                  onClick={() =>
                    handleDownload("https://drive.google.com/file/d/1zPyqrmNATIJkXwmvF8X2rXrZd1Nmvgyr/view")
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
