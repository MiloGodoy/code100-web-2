import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Talento100Hero from '@/components/Talento100Hero'
import React from 'react'
import Description from '@/components/Description'
import FeaturesTalento from '@/components/FeaturesTalento'
import Talento100Clients from '@/components/TalentoClients'
import BenefitsTalento from '@/components/BenefitsTalento'
import FAQ from '@/components/FAQ'

const Talento100Page = () => {
  return (
    <div>
      <Header />
      <Talento100Hero />
      <Description />
      <FeaturesTalento />
      <Talento100Clients />
      <BenefitsTalento />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Talento100Page