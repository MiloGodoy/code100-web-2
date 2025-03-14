"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function CloudSignatureFAQ() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Firma tus documentos con total seguridad y sin complicaciones.
            </h2>
            <p className="text-gray-600 mb-8">
              Descubre cómo el Certificado de Firma Electrónica en la Nube te permite firmar documentos de manera segura
              y sin complicaciones. Obtén más información sobre este servicio y comienza a disfrutar de sus beneficios.
            </p>
            <Button className="bg-amber-400 hover:bg-amber-500 text-black" asChild>
              <Link href="/solicitar-productos">
                Solicitar <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg p-2">
              <AccordionTrigger className="hover:no-underline">
                <span className="text-left font-medium">
                  ¿Qué es un Certificado Cualificado de Firma Electrónica en la Nube (F3)?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 px-2">
                <p className="text-gray-600">
                  El Certificado Cualificado de Firma Electrónica en la Nube F3 es un certificado de alto nivel de
                  seguridad, emitido a personas físicas, que permite realizar firmas electrónicas. Por estar en la nube,
                  documentos en formato digital, garantizando la autenticidad e integridad de los mismos.
                </p>
                <p className="text-gray-600 mt-4">
                  Este certificado cumple con los requisitos de seguridad establecidos por la ICPP (Infraestructura de
                  Clave Pública del Paraguay) y tiene plena validez jurídica, tal como las firmas manuscritas.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg p-2">
              <AccordionTrigger className="hover:no-underline">
                <span className="text-left font-medium">
                  ¿Qué es un HSM y cómo funciona, y cómo se relaciona con la utilización de certificados en la nube?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 px-2">
                <p className="text-gray-600">
                  Un HSM es un dispositivo de seguridad que se encarga de almacenar claves criptográficas. Su utilidad
                  está enfocada a la alta protección de datos sensibles, como las claves privadas de los certificados
                  digitales. Los HSM cuentan con mecanismos de control automático, anti-hack y que la firma electrónica
                  sea más segura y confiable. Los certificados que emite CODE100 están almacenados, protegidos y
                  regularizados, que cumplen con los requisitos de la firma electrónica.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg p-2">
              <AccordionTrigger className="hover:no-underline">
                <span className="text-left font-medium">
                  ¿Qué documentos se puede firmar con el Certificado Cualificado de Firma Electrónica en la Nube (F3)?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 px-2">
                <p className="text-gray-600">
                  Se pueden firmar todo tipo de documentos digitales que requieran validez legal. Algunos ejemplos
                  incluyen:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                  <li>Contratos y documentos comerciales</li>
                  <li>Documentos administrativos</li>
                  <li>Facturas electrónicas</li>
                  <li>Documentos laborales</li>
                  <li>Documentos académicos</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg p-2">
              <AccordionTrigger className="hover:no-underline">
                <span className="text-left font-medium">
                  ¿Cómo se utiliza un certificado cualificado de firma electrónica en la nube (F3) en la práctica?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 px-2">
                <p className="text-gray-600">
                  Para utilizar el certificado cualificado de firma electrónica en la nube F3, se recomienda contar con
                  una plataforma que permita la gestión de documentos. El certificado puede ser integrado con múltiples
                  plataformas y sistemas.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Requirements Section */}
            <AccordionItem value="item-5" className="border rounded-lg p-2">
              <AccordionTrigger className="hover:no-underline">
                <span className="text-left font-medium">
                  Requisitos para obtener tu Certificado Cualificado de Firma Electrónica en la Nube (F3)
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 px-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Realizar la solicitud de forma virtual a través de nuestro formulario web y nos pondremos en
                      contacto contigo.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Una vez finalizado el procedimiento, agendaremos la emisión del certificado que deberá ser
                      presencial.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium mb-4">Documentación</h4>
                    <p className="mb-10 font-bold">. Cédula de identidad</p>
                    <Button className="bg-amber-400 hover:bg-amber-500 text-black align-items-center" asChild>
                      <Link href="/solicitar-productos">Solicitar Certificado</Link>
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

