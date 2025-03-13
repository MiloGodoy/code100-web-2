import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { subject, ...formData } = body

    const { data, error } = await resend.emails.send({
      from: 'Formulario Code100 <onboarding@resend.dev>',
      to: ['milogodoy@hotmail.com'],
      subject: 'Nueva Solicitud de Producto - Code100',
      html: `
        <h2>Nueva Solicitud de Producto</h2>
        <p><strong>Nombres:</strong> ${formData.nombres}</p>
        <p><strong>Apellidos:</strong> ${formData.apellidos}</p>
        <p><strong>Empresa:</strong> ${formData.empresa}</p>
        <p><strong>Correo:</strong> ${formData.correo}</p>
        <p><strong>Teléfono:</strong> ${formData.telefono}</p>
        <p><strong>Producto:</strong> ${formData.producto}</p>
        <p><strong>Mensaje:</strong> ${formData.mensaje || "No se proporcionó mensaje"}</p>
      `,
    })

    if (error) {
      throw new Error(error.message)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Error sending email' },
      { status: 500 }
    )
  }
}