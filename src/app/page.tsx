import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import SecurityFeatures from "@/components/SecurityFeatures";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <SecurityFeatures />
      <AboutUs />
      <Footer />
    </>
  );
}
