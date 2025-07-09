import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import ContactForm from "@/components/contact/contactform";
import ContactInfo from "@/components/contact/contactinfo";
import FAQ from "@/components/contact/faq";
import Header from "@/components/contact/header";

export default function Contact() {
  return (
    <main>
      <Navbar />
      <Header />
      <ContactForm />
      <ContactInfo />
      <FAQ />
      <Footer />
    </main>
  );
}
