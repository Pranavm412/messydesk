import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
// import localFont from 'next/font/local'
import "./globals.css";

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
  title: "Messy Desk Studio",
  description: "Messy Desk Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
