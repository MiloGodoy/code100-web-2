import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Code100 - Confianza y Seguridad Digital"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 48,
      }}
    >
      <img
        src="https://code100-web.vercel.app/code100_logo.png" // Asegúrate de que esta URL sea correcta
        alt="Code100 Logo"
        width={400}
        height={133}
        style={{ marginBottom: 48 }}
      />
      <div
        style={{
          fontSize: 48,
          fontWeight: 600,
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        Confianza y Seguridad Digital
      </div>
      <div
        style={{
          fontSize: 24,
          color: "#666",
          textAlign: "center",
        }}
      >
        Prestadores Cualificados de Servicios de Confianza en Paraguay desde 2015
      </div>
    </div>,
    {
      ...size,
    },
  )
}

