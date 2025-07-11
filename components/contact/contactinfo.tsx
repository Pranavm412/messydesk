import { Mail, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
// import { SiWhatsapp } from "react-icons/si";

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
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-[#c97f4e] transition"
          >
            {/* <img src="/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" /> */}
            {/* <SiWhatsapp size={23} /> */}
            <span className="text-lg font-medium">WhatsApp Us</span>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-10 text-[#092327]">
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="w-6 h-6 hover:text-[#c97f4e] transition" />
          </a>
          <a
            href="https://facebook.com/yourhandle"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook className="w-6 h-6 hover:text-[#c97f4e] transition" />
          </a>
          <a
            href="https://linkedin.com/company/yourcompany"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="w-6 h-6 hover:text-[#c97f4e] transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
