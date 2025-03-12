import { AboutSection } from '@/components/AboutSection'
import DownloadsSection from '@/components/DownloadSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ManualSection from '@/components/ManualSection'




const page = () => {
  return (
    <div>
        <Header />
        <ManualSection />
        <DownloadsSection />
        <AboutSection />
        <Footer />
    </div>
  )
}

export default page
