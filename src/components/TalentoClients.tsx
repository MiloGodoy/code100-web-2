import Image from "next/image"
import LdcLogo from '../../public/ldc-logo.png'
import ParesaLogo from '../../public/paresa-logo.jpeg'
import AtlasLogo from '../../public/atlas-logo.png'
import FundacionLogo from '../../public/fundacion-paraguaya-logo.png'
import HabitatLogo from '../../public/habitat-logo.png'

export default function Talento100Clients() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4">
        <h2 className="text-2xl font-bold text-center mb-12">TALENTO100</h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="w-32 md:w-40 h-20 relative">
            <Image
              src={LdcLogo}
              alt="LDC"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-32 md:w-40 h-20 relative">
            <Image
              src={ParesaLogo}
              alt="PARESA Paraguay"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-32 md:w-40 h-20 relative">
            <Image
              src={AtlasLogo}
              alt="Banco ATLAS"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-32 md:w-40 h-20 relative">
            <Image
              src={FundacionLogo}
              alt="Fundación Paraguaya"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-32 md:w-40 h-20 relative">
            <Image
              src={HabitatLogo}
              alt="Hábitat para la Humanidad Paraguay"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

