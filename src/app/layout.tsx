import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DentureHope - Dental Implants & Free Consultations | Halcyon Dental PLLC",
  description: "Discover hope for denture discomfort. Halcyon Dental PLLC offers advanced dental implant solutions with free consultations. Take the first step toward a confident smile today.",
  keywords: "dental implants, dentures, free consultation, Halcyon Dental, implant options, tooth replacement",
  openGraph: {
    title: "DentureHope - Your Path to Dental Freedom",
    description: "Advanced dental implant solutions with free consultations. Halcyon Dental PLLC helps you reclaim your smile.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}