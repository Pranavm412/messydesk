import CTASection from "@/components/about/cta";
import Header from "@/components/about/header";
import MeetTheTeam from "@/components/about/meettheteam";
import OurMission from "@/components/about/mission";
import OurStory from "@/components/about/ourstory";
import WhyWorkWithUs from "@/components/about/whyworkwithus";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  alternates: {
    canonical: "https://messydesk.vercel.app/about",
  },
};

export default function About() {
  return (
    <main>
      <Navbar />
      <Header />
      <OurStory />
      <OurMission />
      <MeetTheTeam />
      <WhyWorkWithUs />
      <CTASection />
      <Footer />
    </main>
  );
}
