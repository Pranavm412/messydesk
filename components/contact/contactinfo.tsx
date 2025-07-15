import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import {
  SiWhatsapp,
  SiUpwork,
  SiFreelancer,
  SiGumroad,
  SiFiverr,
  SiLinkedin,
} from "react-icons/si";

export default function ContactInfo() {
  return (
    <section className="bg-[#f0ece1] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#092327] mb-8">
          Get in Touch
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-10 text-[#092327]">
          {/* Phone */}
          <Link
            href="tel:+919886738037"
            className="flex items-center gap-3 hover:text-[#c97f4e] transition"
          >
            <Phone />
            <span className="text-lg font-medium">+91 98867 38037</span>
          </Link>

          {/* Email */}
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=infomessydesk.digico@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-[#c97f4e] transition"
          >
            <Mail />
            <span className="text-lg font-medium">
              infomessydesk.digico@gmail.com
            </span>
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/9886738037"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-[#c97f4e] transition"
          >
            {/* <img src="/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" /> */}
            <SiWhatsapp size={23} />
            <span className="text-lg font-medium">WhatsApp Us</span>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-10 text-[#092327]">
          <Link
            href="https://gumroad.com/dashboard"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#c97f4e]"
          >
            <SiGumroad size={30} />
          </Link>
          <Link
            href="https://www.freelancer.com/u/messydesks09"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#c97f4e]"
          >
            <SiFreelancer size={30} />
          </Link>
          <Link
            href="https://www.fiverr.com/messydeskstudio/buying?source=avatar_menu_profile"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#c97f4e]"
          >
            <SiFiverr size={30} />
          </Link>
          <Link
            href="https://www.upwork.com/freelancers/~012baa97879989ad07?qpn-profile-completeness=employment"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#c97f4e]"
          >
            <SiUpwork size={30} />
          </Link>
          <Link
            href="http://www.linkedin.com/in/messy-desk-studio-746b24372"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#c97f4e]"
          >
            <SiLinkedin size={30} />
          </Link>
        </div>
      </div>
    </section>
  );
}
