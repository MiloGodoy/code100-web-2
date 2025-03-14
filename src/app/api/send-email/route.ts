import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { subject, ...formData } = body

    // Crear un HTML más estructurado y asegurarnos de que los campos coincidan
    const emailContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #333;">${subject}</h2>
        
        ${formData.nombres ? `<p><strong>Nombres:</strong> ${formData.nombres}</p>` : ""}
        ${formData.apellidos ? `<p><strong>Apellidos:</strong> ${formData.apellidos}</p>` : ""}
        ${formData.empresa ? `<p><strong>Empresa:</strong> ${formData.empresa}</p>` : ""}
        ${formData.correo ? `<p><strong>Correo:</strong> ${formData.correo}</p>` : ""}
        ${formData.telefono ? `<p><strong>Teléfono:</strong> ${formData.telefono}</p>` : ""}
        ${formData.producto ? `<p><strong>Producto:</strong> ${formData.producto}</p>` : ""}
        ${formData.mensaje ? `<p><strong>Mensaje:</strong> ${formData.mensaje}</p>` : ""}
        
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">Este correo fue enviado desde el formulario de contacto de Code100.</p>
        </div>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from: "Formulario Code100 <onboarding@resend.dev>",
      to: ["milogodoy@gmail.com"],
      subject: subject || "Nuevo Mensaje - Code100",
      html: emailContent,
      replyTo: formData.correo,
    })

    if (error) {
      console.error("Error sending email:", error)
      throw new Error(error.message)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Error sending email" }, { status: 500 })
  }
}

