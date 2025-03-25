import Image from "next/image"
import type { StaticImageData } from "next/image"
import LogoBepa from "../../public/grupoBepa.png"
import LogoCode100 from "../../public/code100_logo.png"
import DigitalLifeLogo from "../../public/DigitalLife-Logo.png"
import ResetLogo from "../../public/Reset-Logo.png"

interface CompanyGroupProps {
  title?: string
  subtitle?: string
  logoBepa?: string | StaticImageData
  logoCode100?: string | StaticImageData
  logoDigitalLife?: string | StaticImageData
  logoReset?: string | StaticImageData
}

export default function CompanyGroup({
  title = "Somos parte del",
  subtitle = "Empresas del Grupo BEPA",
  logoBepa = LogoBepa,
  logoCode100 = LogoCode100,
  logoDigitalLife = DigitalLifeLogo,
  logoReset = ResetLogo,
}: CompanyGroupProps) {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-lg md:text-xl font-medium">{title}</h2>
          <div className="w-full max-w-[200px] mx-auto">
            <Image
              src={logoBepa || "/placeholder.svg"}
              alt="Grupo BEPA"
              className="w-full h-auto"
              priority
              width={200}
              height={60}
            />
          </div>
          <p className="text-gray-600">{subtitle}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
            <Image
              src={logoCode100 || "/placeholder.svg"}
              alt="Code100"
              className="w-[120px] h-auto"
              priority
              width={120}
              height={40}
            />
            <Image
              src={logoDigitalLife || "/placeholder.svg"}
              alt="DigitalLife"
              className="w-[120px] h-auto"
              priority
              width={120}
              height={40}
            />
            <Image
              src={logoReset || "/placeholder.svg"}
              alt="Reset"
              className="w-[120px] h-auto"
              priority
              width={120}
              height={40}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

