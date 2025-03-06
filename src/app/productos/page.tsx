import CertificateActions from "@/components/CertificateActions"
import ElectronicSignatureInfo from "@/components/ElectronicSignatureInfo"
import FAQSection from "@/components/FAQSection"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ProductHero from "@/components/ProductHero"
import RequirementsCards from "@/components/RequirementsCards"


const ProductPage = () => {
  return (
    <div>
      <Header />
      <ProductHero />
      <ElectronicSignatureInfo />
      <RequirementsCards />
      <CertificateActions />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default ProductPage
