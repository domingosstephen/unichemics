import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sociedadeteoflorchemi.com"),
  title: {
    template: "%s | Sociedade Teoflor Chemi",
    default: "Industrial & Specialty Chemical Supplier | Sociedade Teoflor Chemi",
  },
  description: "Trusted global supplier of 100+ industrial, agricultural, food-grade, mining, and specialty chemicals. Request a quote for bulk chemical supply with worldwide delivery.",
  keywords: [
    "chemical supplier",
    "industrial chemicals",
    "agricultural chemicals",
    "food additives",
    "mining chemicals",
    "water treatment chemicals",
    "bulk chemicals",
    "specialty chemicals",
    "pharmaceutical chemicals",
    "chemical distributor",
    "buy chemicals bulk",
    "industrial chemical supplier",
    "chemical export",
    "Sociedade Teoflor Chemi",
  ],
  authors: [{ name: "Sociedade Teoflor Chemi", url: "https://sociedadeteoflorchemi.com" }],
  creator: "Sociedade Teoflor Chemi",
  publisher: "Sociedade Teoflor Chemi",
  category: "chemicals",
  openGraph: {
    type: "website",
    siteName: "Sociedade Teoflor Chemi",
    url: "https://sociedadeteoflorchemi.com",
    images: [
      {
        url: "https://sociedadeteoflorchemi.com/images/industrial/hydrochloric-acid.jpg",
        width: 1200,
        height: 630,
        alt: "Sociedade Teoflor Chemi — Industrial Chemical Supplier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial & Specialty Chemical Supplier | Sociedade Teoflor Chemi",
    description: "Trusted global supplier of 100+ industrial, agricultural, food-grade, mining, and specialty chemicals. Worldwide delivery.",
    images: ["https://sociedadeteoflorchemi.com/images/industrial/hydrochloric-acid.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "https://sociedadeteoflorchemi.com/" },
  verification: {
    google: "google4eb14543200fea69",
  },
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
