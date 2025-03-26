import { AboutSection } from "@/components/AboutSection"
import DownloadsSection from "@/components/DownloadSection"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ManualSection from "@/components/ManualSection"

const SoportePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ManualSection />
        <DownloadsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}

export default SoportePage

