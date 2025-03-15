import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

export default async function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
      }}
    >
      <img
        src="https://code100-web.vercel.app/code100_icon.png" // Asegúrate de que esta URL sea correcta
        alt="Code100 Icon"
        width={24}
        height={24}
      />
    </div>,
    {
      ...size,
    },
  )
}

