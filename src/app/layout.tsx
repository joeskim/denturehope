import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DentureHope — The last set of teeth you'll ever need. | Halcyon Dental",
  description:
    "The LeClerq-Martinez Implant Bridge at Halcyon Dental in Aurora, IL. A fixed, screw-retained restoration that replaces dentures permanently — $8,700 per arch, half the European price, 3-year warranty included.",
  keywords:
    "LeClerq-Martinez bridge, dental implants, LM bridge, full-arch restoration, Aurora IL dentist, implant dentures, Halcyon Dental",
  openGraph: {
    title: "DentureHope — The last set of teeth you'll ever need.",
    description:
      "Fixed, screw-retained implant bridge at half the European price. Free consultations at Halcyon Dental, Aurora IL.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <Navbar />
        <main style={{ paddingTop: 64 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
