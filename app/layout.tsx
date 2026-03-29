import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/navbar/Navbar";

import { Google_Sans_Flex } from "next/font/google"

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false
})



// const budujSans = localFont({
//   src: [
//     {
//       path: "../fonts/BudujSansTRIAL-Regular.ttf",
//       style: "normal",
//       weight: "400",
//     },
//     {
//       path: "../fonts/BudujSansTRIAL-Medium.ttf",
//       style: "normal",
//       weight: "500",
//     },
//     {
//       path: "../fonts/BudujSansTRIAL-Semibold.ttf",
//       style: "normal",
//       weight: "600",
//     },
//     {
//       path: "../fonts/BudujSansTRIAL-Bold.ttf",
//       style: "normal",
//       weight: "700",
//     },

//   ],
// })
export const metadata: Metadata = {
  metadataBase: new URL("https://spmechgroup.com"),
  title: "SP Mech Group",
  description: "SP Mech Group is a leading manufacturer of high-quality hinges, locks, and other hardware products. We offer a wide range of products for various applications, including architectural, industrial, and commercial. Our products are made from the finest materials and are designed to meet the highest standards of quality and performance.",
  keywords: ["hinges", "locks", "hardware", "architectural", "industrial", "commercial", "SP Mech Group", "hinges manufacturer", "lock manufacturer", "cnc manufacturer", "hinges machine", "lock machine", "cnc machine"],
  authors: [{ name: "SP Mech Group" }],
  creator: "SP Mech Group",
  publisher: "SP Mech Group",
  openGraph: {
    title: "SP Mech Group",
    description: "SP Mech Group is a leading manufacturer of high-quality hinges, locks, and other hardware products. We offer a wide range of products for various applications, including architectural, industrial, and commercial. Our products are made from the finest materials and are designed to meet the highest standards of quality and performance.",
    url: "https://spmechgroup.com",
    siteName: "SP Mech Group",
    images: [
      {
        url: "/BrandLogo.svg",
        width: 1200,
        height: 630,
        alt: "SP Mech Group",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SP Mech Group",
    description: "SP Mech Group is a leading manufacturer of high-quality hinges, locks, and other hardware products. We offer a wide range of products for various applications, including architectural, industrial, and commercial. Our products are made from the finest materials and are designed to meet the highest standards of quality and performance.",
    images: ["/BrandLogo.svg"],
  },
};
import LenisProvider from "@/components/providers/LenisProvider";
import Footer from "@/components/layout/Footer";
import QueryClientProviderFile from "@/components/providers/QueryClientProviderFile";
import CategoriesProvider from "@/components/providers/CategoriesProvider";
import { Toaster } from "sonner";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${googleSansFlex.className} antialiased`}
      >

        <QueryClientProviderFile>
          <CategoriesProvider>
            <LenisProvider>

              <Toaster position="top-center" richColors />
              <Navbar />
              <div className="main" id="main">
                {children}
                <Footer />
              </div>
            </LenisProvider>
          </CategoriesProvider>
        </QueryClientProviderFile>
      </body>
    </html>
  );
}
