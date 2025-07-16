import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
// import localFont from 'next/font/local'
import "./globals.css";
import Head from "next/head";
import { usePathname } from "next/navigation";

// const myFont = localFont({
//   src: "@/Decalotype-Regular.woff2",
// });

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: {
    default: "Messy Desk Studio",
    template: "%s - Messy Desk Studio",
  },
  description:
    "Messy Desk Studio is a remote-first creative studio crafting bold visual content across web, design, and storytelling. We help brands grow with purpose-driven design and fast, startup-friendly execution.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const canonicalUrl = `https://messydesk.vercel.app${
    pathname === "/" ? "" : pathname
  }`;
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
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
