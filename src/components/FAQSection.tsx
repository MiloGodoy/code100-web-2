import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "¿Qué es un Certificado Cualificado de Firma Electrónica?",
      answer: `El Certificado Cualificado de Firma Electrónica permite firmar digitalmente documentos en Paraguay. Es un certificado que tiene validez legal equiparable a la firma manuscrita, el cual sirve para firmar cualquier tipo de documento electrónico.

      Un documento electrónico firmado con un Certificado Cualificado de Firma Electrónica tiene plena validez jurídica y funcional. Además, el autor de la firma electrónica no podrá negar la autoría de esta firma.`,
    },
    {
      question: "¿La Firma Electrónica Cualificada es legal?",
      answer:
        "La Firma Electrónica tiene plena equivalencia funcional y jurídica con la firma manuscrita. Se puede aplicar a todo tipo de trámite administrativo y comercial. Está avalada por la Ley 6822/21 y anteriormente por la Ley 4017/10.",
    },
    {
      question: "¿Qué tipos de documentos se pueden firmar de manera electrónica?",
      answer:
        "La Firma Electrónica Cualificada es válida para firmar cualquier tipo de documento digital como acuerdos comerciales, facturas electrónicas, documentos administrativos y de gestión de personal, documentos del sector público.",
    },
    {
      question: "¿Cómo sé si una Firma Electrónica es válida?",
      answer: `No existe un método único de cómo validar una firma electrónica cualificada.

      Para validar documentos comunes en los formatos PDF, WORD y EXCEL, puedes consultar nuestro [Vídeo tutorial de validación de documentos firmados]

      Documentos generados por sistemas independientes (como por ejemplo: plataformas de la aduana, senacsa, y similares) podrían tener diferentes formas de ser validados dentro del mismo sistema.`,
    },
    {
      question: "¿Quién puede usar un Certificado Cualificado de Firma Electrónica?",
      answer:
        "El certificado cualificado de Firma Electrónica debe ser utilizado solo por la persona física titular del mismo.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>

          <Accordion type="single" collapsible className="mb-16">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600 whitespace-pre-line text-justify">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Newsletter Subscription */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-600 mb-6 text-justify">Inscribite para recibir todas las novedades y noticias sobre Code100</p>
            <div className="flex flex-col md:flex-row gap-4">
              <Input type="text" placeholder="Nombre" className="flex-1" />
              <Input type="email" placeholder="Correo Electrónico" className="flex-1" />
              <Button className="bg-gray-700 hover:bg-gray-800 text-white">INSCRIBIRSE →</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

