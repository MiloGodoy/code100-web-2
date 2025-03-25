
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"


const CertificateActions = () => {
  return (
    <section className="container py-8">
      <h2 className="text-2xl font-bold mb-6">Documentos Importantes</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Manuales</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="font-medium mb-4">Manual de Usuario</h3>
            <a
              href="https://drive.google.com/file/d/1j3C-cK9m-wPY-K-Yt-jR-k6iu-wG-9wJ/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-amber-400 hover:bg-amber-500 text-black">VER PDF</Button>
            </a>
          </Card>
          <Card className="p-6">
            <h3 className="font-medium mb-4">Manual de Suscriptor</h3>
            <a
              href="https://drive.google.com/file/d/1j3C-cK9m-wPY-K-Yt-jR-k6iu-wG-9wJ/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-amber-400 hover:bg-amber-500 text-black">VER PDF</Button>
            </a>
          </Card>
          <Card className="p-6">
            <h3 className="font-medium mb-4">Manual de Políticas y Procedimientos</h3>
            <a
              href="https://drive.google.com/file/d/1j3C-cK9m-wPY-K-Yt-jR-k6iu-wG-9wJ/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-amber-400 hover:bg-amber-500 text-black">VER PDF</Button>
            </a>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Contratos</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="font-medium mb-4">Contrato de prestación de servicios de confianza F1</h3>
            <a
              href="https://drive.google.com/file/d/18B_VCB9RnMXYpGOomH9uQFyARcveAu4m/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-amber-400 hover:bg-amber-500 text-black">VER PDF</Button>
            </a>
          </Card>
          <Card className="p-6">
            <h3 className="font-medium mb-4">Contrato de prestación de servicios de confianza F2</h3>
            <a
              href="https://drive.google.com/file/d/1GymHrFMX-CarvB2Ukz6YisZy9q15GgCp/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-amber-400 hover:bg-amber-500 text-black">VER PDF</Button>
            </a>
          </Card>
          <Card className="p-6">
            <h3 className="font-medium mb-4">Contrato de prestación de servicios de confianza F3</h3>
            <a
              href="https://drive.google.com/file/d/1xMtC_A4oUS_r8KzuRljJ6K47HCdEdXKz/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-amber-400 hover:bg-amber-500 text-black">VER PDF</Button>
            </a>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default CertificateActions

