import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import CTASection from "@/components/services/cta";
import FAQ from "@/components/services/faq";
import Header from "@/components/services/header";
import ServicesStack from "@/components/services/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  alternates: {
    canonical: "https://messydesk.vercel.app/services",
  },
};

export default function Services() {
  return (
    <main>
      <Navbar />
      <Header />
      <ServicesStack />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
