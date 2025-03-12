import AboutCode100 from "@/components/AboutCode100"
import ContractsCertificates from "@/components/ContractsCertificates"
import DocumentationSection from "@/components/DocumentationSection"
import ElectronicTimestamp from "@/components/ElectronicTimeStamp"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { RepositorySection } from "@/components/RepositorySection"

const page = () => {
  return (
    <div>
        <Header />
        <RepositorySection />
        <ContractsCertificates />
        <DocumentationSection />
        <AboutCode100 />
        <ElectronicTimestamp />
        <Footer />
    </div>
  )
}

export default page
