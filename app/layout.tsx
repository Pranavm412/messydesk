import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Messy Desk Studio - Studio For All Your Creative Needs",
    template: "%s | Messy Desk Studio - For All Your Creative Needs",
  },
  description:
    "Messy Desk Studio is a creative studio crafting original, design-driven solutions, from branding to marketing, for brands that want to grow and stand out.",
  alternates: {
    canonical: "https://messydesk.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: {
      default: "Messy Desk Studio - Studio For All Your Creative Needs",
      template: "%s | Messy Desk Studio - For All Your Creative Needs",
    },
    description:
      "Messy Desk Studio is a creative studio crafting original, design-driven solutions, from branding to marketing, for brands that want to grow and stand out.",
    siteName: "Messy Desk Studio",
    url: "https://messydesk.vercel.app",
    type: "website",
    locale: "en_US",
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
      <head>
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
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
