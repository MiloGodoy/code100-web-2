import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroFact from '../../components/HeroFact'
import FeaturesFact from '../../components/FeaturesFact'
import Providers from '../../components/Providers'
import React from 'react'
import Futura100FeaturesSlider from '@/components/FeaturesSlider'

const FacturacionElectronicaPage = () => {
  return (
    <div>
      <Header />
      <HeroFact />
      <FeaturesFact />
      <Providers />
      <Futura100FeaturesSlider />
      <Footer />
    </div>
  )
}

export default FacturacionElectronicaPage
