import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code100 - Confianza y Seguridad Digital",
  description: "Prestadores Cualificados de Servicios de Confianza en Paraguay desde 2015",
  metadataBase: new URL("https://code100-web.vercel.app"),
  openGraph: {
    title: "Code100 - Confianza y Seguridad Digital",
    description: "Prestadores Cualificados de Servicios de Confianza en Paraguay desde 2015",
    url: "https://code100-web.vercel.app",
    siteName: "Code100",
    images: [
      {
        url: "/opengraph-image.jpg", // Asegúrate de tener esta imagen en la carpeta public
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code100 - Confianza y Seguridad Digital",
    description: "Prestadores Cualificados de Servicios de Confianza en Paraguay desde 2015",
    images: ["/opengraph-image.jpg"], // La misma imagen que usamos para OpenGraph
  },
  icons: {
    icon: [{ url: "/8.png" }, { url: "/8.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
