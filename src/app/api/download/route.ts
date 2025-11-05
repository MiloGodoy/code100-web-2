import { NextResponse } from "next/server"

export async function GET() {
  const fileUrl = "http://pca1.code100.com.py/crls/ca-code100-sa.crl"

  try {
    const response = await fetch(fileUrl)
    const buffer = await response.arrayBuffer()

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": 'attachment; filename="ca-code100-sa.crl"',
      },
    })
  } catch (err) {
    return NextResponse.json({ error: "No se pudo descargar el archivo" }, { status: 500 })
  }
}
