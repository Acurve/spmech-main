import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local"
import Navbar from "@/components/layout/navbar/Navbar";
const budujSans = localFont({
  src: [
    {
      path: "../fonts/BudujSansTRIAL-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../fonts/BudujSansTRIAL-Medium.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../fonts/BudujSansTRIAL-Semibold.ttf",
      style: "normal",
      weight: "600",
    },
    {
      path: "../fonts/BudujSansTRIAL-Bold.ttf",
      style: "normal",
      weight: "700",
    },

  ],
})
export const metadata: Metadata = {
  title: "SP Mech | CNC & Special Purpose Machine Manufacturer in India",
  description: "SP Mech is a leading Indian manufacturer of CNC machines and special purpose machines for hinges, locks, and hardware industries. Precision engineering, global installations, and reliable after-sales support.",
  keywords: ["CNC machines", "hinge machines", "lock machines", "special purpose machines", "CNC manufacturer India", "SP Mech", "Jamnagar", "hardware manufacturing"],
  openGraph: {
    title: "SP Mech | CNC & Special Purpose Machine Manufacturer",
    description: "Precision CNC and special purpose machines for hinges, locks, and hardware industries. 200+ installations across 12 countries.",
    type: "website",
  },
};
import LenisProvider from "@/components/providers/LenisProvider";
import Footer from "@/components/layout/Footer";
import { HeroVideoContextProvider } from "@/contexts/heroVideoContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${budujSans.className} antialiased`}
      >
        <LenisProvider>
          <HeroVideoContextProvider>

            <Navbar />
            <div className="main" id="main">
              {children}
              <Footer />
            </div>
          </HeroVideoContextProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
