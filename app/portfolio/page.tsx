import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import CTASection from "@/components/portfolio/cta";
import Header from "@/components/portfolio/header";
import Projects from "@/components/portfolio/projects";

export default function Portfolio() {
  return (
    <main>
      <Navbar />
      <Header />
      <Projects />
      <CTASection />
      <Footer />
    </main>
  );
}
