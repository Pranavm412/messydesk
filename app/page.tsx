import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import AboutUs from "@/components/home/aboutus";
import CTA from "@/components/home/cta";
import Hero from "@/components/home/hero";
import Portfolio from "@/components/home/portfolio";
import Services from "@/components/home/services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <AboutUs />
      <CTA />
      <Footer />
    </main>
  );
}
