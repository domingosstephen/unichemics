import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sociedadeteoflorchemi.com"),
  title: {
    template: "%s | Sociedade Theoflor Chemi",
    default: "Industrial & Specialty Chemical Supplier | Sociedade Theoflor Chemi",
  },
  description: "Trusted global supplier of 100+ industrial, agricultural, food-grade, mining, and specialty chemicals. Request a quote for bulk chemical supply with worldwide delivery.",
  keywords: ["chemical supplier", "industrial chemicals", "agricultural chemicals", "food additives", "mining chemicals", "water treatment", "bulk chemicals"],
  openGraph: {
    type: "website",
    siteName: "Sociedade Theoflor Chemi",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
