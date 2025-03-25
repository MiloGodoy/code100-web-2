"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Datos de documentos legales
const legalDocuments = {
  decretos: [
    {
      id: "1165-2014",
      title: "Decreto Reglamentario Nº 1165/2014",
      description: "Sobre Comercios Electrónicos",
      downloadUrl: "https://www.acraiz.gov.py/adjunt/Leyes%20y%20Decretos/decreto__1165_2014_ce0.pdf",
    },
    {
      id: "7369-1",
      title: "Decreto Nº 7369",
      description:
        'POR EL CUAL SE APRUEBA EL REGLAMENTO GENERAL DE LA LEY Nº 4017 "DE VALIDEZ JURÍDICA DE LA FIRMA ELECTRÓNICA, LA FIRMA DIGITAL, LOS MENSAJES DE DATOS Y EL EXPEDIENTE ELECTRÓNICO"',
      downloadUrl: "https://www.acraiz.gov.py/adjunt/Leyes%20y%20Decretos/DECRETO_MI_2063_2019.pdf",
    },
    {
      id: "7369-2",
      title: "Decreto Nº 7369",
      description:
        'POR EL CUAL SE APRUEBA EL REGLAMENTO GENERAL DE LA LEY Nº 4017 "DE VALIDEZ JURÍDICA DE LA FIRMA ELECTRÓNICA, LA FIRMA DIGITAL, LOS MENSAJES DE DATOS Y EL EXPEDIENTE ELECTRÓNICO"',
      downloadUrl: "https://www.acraiz.gov.py/adjunt/Leyes%20y%20Decretos/decreto7369reglamento.pdf",
    },
    {
      id: "2063-2019",
      title: "Decreto Nº 2063/2019",
      description: "POR EL CUAL SE AMPLIA EL DECRETO Nº 242/2018 Y EL DECRETO Nº 7369/2011",
      downloadUrl: "https://www.acraiz.gov.py/adjunt/Leyes%20y%20Decretos/DECRETO_MI_2063_2019.pdf",
    },
  ],
  leyes: [
    {
      id: "4868",
      title: "LEY Nº 4868",
      description: "Comercio Electrónico",
      downloadUrl: "https://www.bacn.gov.py/leyes-paraguayas/961/ley-n-4868-comercio-electronico",
    },
    {
      id: "4610",
      title: "Ley Nº 4610",
      description:
        'QUE MODIFICA Y AMPLIA LA LEY Nº 4017/10 "DE VALIDEZ JURÍDICA DE LA FIRMA ELECTRÓNICA, LA FIRMA DIGITAL, LOS MENSAJES DE DATOS Y EL EXPEDIENTE ELECTRÓNICO"',
      downloadUrl: "https://www.bacn.gov.py/leyes-paraguayas/216/ley-n-4610-modifica-y-amplia-la-ley-n-401710-de-validez-juridica-de-la-firma-electronica-la-firma-digital-los-mensajes-de-datos-y-el-expediente-electronico",
    },
    {
      id: "4017",
      title: "Ley Nº 4017",
      description:
        "DE VALIDEZ JURÍDICA DE LA FIRMA ELECTRÓNICA, LA FIRMA DIGITAL, LOS MENSAJES DE DATOS Y EL EXPEDIENTE ELECTRÓNICO",
      downloadUrl: "https://www.bacn.gov.py/leyes-paraguayas/3550/ley-n-4017-de-validez-juridica-de-la-firma-electronica-la-firma-digital-los-mensajes-de-datos-y-el-expediente-electronico",
    },
  ],
  resoluciones: [
    { id: "1399-2016", title: "Resolución Nº 1399/2016", downloadUrl: "https://www.acraiz.gov.py/adjunt/Resoluciones/RESOLUCION_N_1399_2016.pdf" },
    { id: "1400-2016", title: "Resolución Nº 1400/2016", downloadUrl: "https://www.acraiz.gov.py/adjunt/Resoluciones/RESOLUCION_N_1400_2016.pdf" },
    { id: "1401-2016", title: "Resolución Nº 1401/2016", downloadUrl: "https://www.acraiz.gov.py/adjunt/Resoluciones/RESOLUCION_N_1401_2016.pdf" },
    { id: "1430-2017", title: "Resolución Nº 1430/2017", downloadUrl: "https://www.acraiz.gov.py/adjunt/resolucion_1430_-2013.pdf" },
    { id: "117-2017", title: "Resolución Nº 117/2017", downloadUrl: "https://www.dnit.gov.py/web/portal-institucional/w/resolucion-general-n-117/17" },
    { id: "1561-2016", title: "Resolución Nº 1561/2016", downloadUrl: "https://www.acraiz.gov.py/adjunt/Resoluciones/RESOLUCION_N_1561_2016.pdf" },
    { id: "1562-2016", title: "Resolución Nº 1562/2016", downloadUrl: "https://www.acraiz.gov.py/adjunt/Resoluciones/RESOLUCION_N_1562_2016.pdf" },
    { id: "1563-2016", title: "Resolución Nº 1563/2016", downloadUrl: "https://www.acraiz.gov.py/adjunt/Resoluciones/RESOLUCION_N_1563_2016.pdf" },
    {
      id: "501-2016",
      title: "Resolución Nº 501/2016 Guía De Estándares Tecnológicos",
      downloadUrl: "https://www.acraiz.gov.py/adjunt/Resoluciones/RESOLUCION_N_501_2016_GUIA%20DE%20ESTANDARES%20TECNOLOGICOS.pdf",
    },
    { id: "1105-2015", title: "Resolución Nº 1105/2015", downloadUrl: "https://www.acraiz.gov.py/adjunt/Resoluciones/RESOLUCION_N_1105_2015.pdf" },
    { id: "292-2015", title: "Resolución Nº 292/2015", downloadUrl: "https://www.acraiz.gov.py/adjunt/Resoluc_292.pdf" },
    { id: "401-2014", title: "Resolución Nº 401/2014", downloadUrl: "https://www.acraiz.gov.py/adjunt/resol_401-2014_se_aprueba_la_dpc.pdf" },
    { id: "164-13", title: "Resolución Nº 164/13", downloadUrl: "https://www.acraiz.gov.py/adjunt/resolucin_n_164-13.pdf" },
    { id: "1430-2013", title: "Resolución Nº 1430/2013", downloadUrl: "https://www.acraiz.gov.py/adjunt/resolucion_1430_-2013.pdf" },
    {
      id: "1399-2016-anexo-1",
      title: "Resolución Nº 1399/2016 Anexo 1",
      downloadUrl: "https://www.acraiz.gov.py/adjunt/Resoluciones/RESOLUCION_N_1399_2016.pdf",
    },
    {
      id: "1399-2016-anexo-2",
      title: "Resolución Nº 1399/2016 Anexo 2",
      downloadUrl: "https://www.acraiz.gov.py/adjunt/Resoluciones/RESOLUCION_N_1399_2016.pdf",
    },
    {
      id: "1399-2016-anexo-3",
      title: "Resolución Nº 1399/2016 Anexo 3",
      downloadUrl: "https://www.acraiz.gov.py/adjunt/Resoluciones/1399_ANEXO/DOC_PKI_02_V4.0.pdf",
    },
    {
      id: "1400-2016-anexo-1",
      title: "Resolución Nº 1400/2016 Anexo 1",
      downloadUrl: "https://www.acraiz.gov.py/adjunt/Resoluciones/1400_ANEXO/03DOCPKI03CPSdirectivas.pdf",
    },
    {
      id: "1400-2016-anexo-2",
      title: "Resolución Nº 1400/2016 Anexo 2",
      downloadUrl: "https://www.digito.com.py/uploads/anexo-ii-de-la-resolucion-1400-2016-1534782398.pdf",
    },
    {
      id: "1400-2016-anexo-3",
      title: "Resolución Nº 1400/2016 Anexo 3",
      downloadUrl: "https://www.acraiz.gov.py/adjunt/Resoluciones/1400_ANEXO/DOC_PKI_06_V1.0.pdf",
    },
    { id: "115-2018", title: "Resolución Nº 115/2018", downloadUrl: "https://www.acraiz.gov.py/adjunt/Resoluciones/RESOLUCION_N_115_2018.pdf" },
    { id: "217-2019", title: "Resolución Nº 217/2019", downloadUrl: "https://www.acraiz.gov.py/adjunt/Resoluciones/RESOLUCION_N_217_2019.pdf" },
    { id: "917-2019", title: "Resolución Nº 917/2019", downloadUrl: "https://www.acraiz.gov.py/adjunt/Resoluciones/RESOLUCION_N_917_2019.pdf" },
    { id: "1431-2013", title: "Resolución Nº 1431/2013", downloadUrl: "https://www.acraiz.gov.py/adjunt/resolucion_1431_2013.pdf" },
    { id: "1434-2019", title: "Resolución Nº 1434/2019", downloadUrl: "https://www.acraiz.gov.py/adjunt/Resoluciones/RESOLUCION_N_1434_2019.pdf" },
    {
      id: "anexo-i",
      title: "Anexo I",
      description: "SE MODIFICAN PARCIALMENTE LOS ANEXOS I Y II DE LA RESOLUCIÓN Nº 1400",
      downloadUrl: "https://www.acraiz.gov.py/adjunt/Resoluciones/1434_ANEXO/Anexo_I_SE%20MODIFICAN%20PARCIALMENTE%20LOS%20ANEXOS%20I%20Y%20II%20DE%20LA%20RESOLUCI%C3%93N%20N%C2%BA%201400.pdf",
    },
    {
      id: "anexo-ii",
      title: "Anexo II",
      description: "SE MODIFICAN PARCIALMENTE LOS ANEXOS I Y II DE LA RESOLUCIÓN Nº 1400",
      downloadUrl: "https://www.acraiz.gov.py/adjunt/Resoluciones/1434_ANEXO/Anexo_II_SE%20MODIFICAN%20PARCIALMENTE%20LOS%20ANEXOS%20I%20Y%20II%20DE%20LA%20RESOLUCI%C3%93N%20N%C2%BA%201400.pdf",
    },
  ],
}

export default function LegalDocuments() {
  const [expandedSection, setExpandedSection] = useState<string | null>("decretos")

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">ICP Paraguay</h2>
          <p className="text-gray-600 mb-8">
            Leyes, decretos, reglamentos y resoluciones que rigen la actividad de la ICP Paraguay
          </p>

          <Accordion
            type="single"
            collapsible
            value={expandedSection || undefined}
            onValueChange={(value) => setExpandedSection(value)}
            className="space-y-4"
          >
            {/* Decretos */}
            <AccordionItem value="decretos" className="border rounded-md overflow-hidden bg-white">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 font-semibold">Decretos</AccordionTrigger>
              <AccordionContent className="px-0 pt-2 pb-0">
                <div className="grid md:grid-cols-2 gap-px bg-gray-200">
                  {legalDocuments.decretos.map((decreto) => (
                    <div key={decreto.id} className="bg-white p-6">
                      <h3 className="font-medium mb-2">{decreto.title}</h3>
                      {decreto.description && <p className="text-sm text-gray-700 mb-4">{decreto.description}</p>}
                      <Button className="bg-amber-400 hover:bg-amber-500 text-black" asChild>
                        <a href={decreto.downloadUrl} target="_blank" rel="noopener noreferrer">
                          Descargar <Download className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Leyes */}
            <AccordionItem value="leyes" className="border rounded-md overflow-hidden bg-white">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 font-semibold">Leyes</AccordionTrigger>
              <AccordionContent className="px-0 pt-2 pb-0">
                <div className="grid md:grid-cols-2 gap-px bg-gray-200">
                  {legalDocuments.leyes.map((ley) => (
                    <div key={ley.id} className="bg-white p-6">
                      <h3 className="font-medium mb-2">{ley.title}</h3>
                      {ley.description && <p className="text-sm text-gray-700 mb-4">{ley.description}</p>}
                      <Button className="bg-amber-400 hover:bg-amber-500 text-black" asChild>
                        <a href={ley.downloadUrl} target="_blank" rel="noopener noreferrer">
                          Descargar <Download className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Resoluciones */}
            <AccordionItem value="resoluciones" className="border rounded-md overflow-hidden bg-white">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 font-semibold">Resoluciones</AccordionTrigger>
              <AccordionContent className="px-0 pt-2 pb-0">
                <div className="grid md:grid-cols-2 gap-px bg-gray-200">
                  {legalDocuments.resoluciones.map((resolucion) => (
                    <div key={resolucion.id} className="bg-white p-6">
                      <h3 className="font-medium mb-2">{resolucion.title}</h3>
                      {resolucion.description && <p className="text-sm text-gray-700 mb-4">{resolucion.description}</p>}
                      <Button className="bg-amber-400 hover:bg-amber-500 text-black" asChild>
                        <a href={resolucion.downloadUrl} target="_blank" rel="noopener noreferrer">
                          Descargar <Download className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

