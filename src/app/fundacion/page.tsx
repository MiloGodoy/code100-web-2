import AboutFoundation from '@/components/AboutFundation'
import FoundationHero from '@/components/FundationHero'
import FoundationImpact from '@/components/FundationImpact'
import Header from '@/components/Header'
import ImpactCounter from '@/components/InpactCounter'
import VisionMissionValues from '@/components/Vision-Mission-Values'

const FundacionPage = () => {
  return (
    <div>
      <Header />
      <FoundationHero />
      <AboutFoundation />
      <FoundationImpact />
      <ImpactCounter />
      <VisionMissionValues />
    </div>
  )
}

export default FundacionPage
