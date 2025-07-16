import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Messy Desk Studio",
    template: "%s - Messy Desk Studio",
  },
  description:
    "Messy Desk Studio is a remote-first creative studio crafting bold visual content across web, design, and storytelling. We help brands grow with purpose-driven design and fast, startup-friendly execution.",
  alternates: {
    canonical: "https://messydesk.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "jQY8RqkMhrbLDozMeONI08IsGXkMQaXI8UcFGbmQXdo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Messy Desk Studio",
              url: "https://messydesk.vercel.app",
              logo: "https://messydesk.vercel.app/favicon.ico",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "9886738037",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["en", "Tamil", "Kannada", "Hindi"],
              },
              sameAs: "http://www.linkedin.com/in/messy-desk-studio-746b24372",
              description:
                "A remote-first creative studio specializing in design, branding, and storytelling.",
            }),
          }}
        />
      </Head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
