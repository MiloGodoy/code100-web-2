"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Los certificados son individuales para cada colaborador?",
    answer: "Sí, cada colaborador debe contar con su Certificado de Firma Electrónica Cualificada.",
  },
  {
    question: "¿La emisión de los Certificados pueden emitirse de forma virtual?",
    answer:
      "Sí, los certificados pueden emitirse de forma virtual siguiendo los procedimientos establecidos por la autoridad certificadora.",
  },
  {
    question: "¿Cómo iniciar la implementación?",
    answer:
      "Para iniciar la implementación, debe contactar con nuestro equipo comercial para una demostración y evaluación de sus necesidades específicas. Luego se procede con la configuración y capacitación.",
  },
  {
    question: "¿Cuáles son los pasos que debo seguir para comunicar los documentos de mi empresa al MTESS?",
    answer:
      "Los pasos incluyen: 1) Implementar TALENTO100, 2) Asegurar que todos los colaboradores cuenten con certificados de firma electrónica, 3) Configurar la comunicación con el MTESS desde la plataforma, 4) Generar y firmar los documentos, 5) Enviar los documentos al MTESS a través de la plataforma.",
  },
]

export default function Talento100FAQ() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

