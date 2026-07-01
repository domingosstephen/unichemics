import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { Mail, Phone, Clock, Truck, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Get a Quote — Sociedade Teoflor Chemi",
  description: "Request a quote for bulk chemical supply. Contact Sociedade Teoflor Chemi for pricing, product availability, and technical support. Response within 24 hours.",
  alternates: { canonical: "/contact/" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sociedade Teoflor Chemi",
  description: "Trusted global supplier of industrial, agricultural, food-grade, mining, pharmaceutical, and specialty chemicals.",
  url: "https://sociedadeteoflorchemi.com",
  telephone: "+34631390443",
  email: "contact@sociedadeteoflorchemi.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Poligon Industrial Mas Xirgu, Carrer Can Pau Birol, 101",
    addressLocality: "Girona",
    postalCode: "17005",
    addressCountry: "ES",
  },
  openingHours: "Mo-Fr 08:00-18:00",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sociedadeteoflorchemi.com/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://sociedadeteoflorchemi.com/contact/" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-slate-400 mb-4">
            <Link href="/" className="text-blue-400 hover:underline">Home</Link>
            <span className="mx-2">›</span> Contact
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Get a Quote</h1>
          <p className="text-slate-400 max-w-xl">Tell us what you need and our team will respond with pricing, availability, and shipping options within 24 hours.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-8 rounded-xl">
              <h2 className="text-xl font-bold mb-6">Request a Quote</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-xl font-bold mb-6">Contact Information</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-blue-600" /></div>
                  <div>
                    <h4 className="font-bold text-sm">Email</h4>
                    <a href="mailto:contact@sociedadeteoflorchemi.com" className="text-sm text-blue-600 hover:underline">contact@sociedadeteoflorchemi.com</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-blue-600" /></div>
                  <div>
                    <h4 className="font-bold text-sm">WhatsApp / Phone</h4>
                    <a href="https://wa.me/34631390443" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">+34 631 390 443</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-blue-600" /></div>
                  <div>
                    <h4 className="font-bold text-sm">Business Hours</h4>
                    <p className="text-sm text-slate-500 whitespace-pre-line">{"Monday — Friday: 8:00 AM — 6:00 PM (EST)\nEmergency support available 24/7"}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0"><Truck className="w-5 h-5 text-blue-600" /></div>
                  <div>
                    <h4 className="font-bold text-sm">Shipping</h4>
                    <p className="text-sm text-slate-500 whitespace-pre-line">{"FOB, CIF, CFR, and DDP terms available.\nWe ship to 50+ countries worldwide."}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-blue-600" /></div>
                  <div>
                    <h4 className="font-bold text-sm">Address</h4>
                    <p className="text-sm text-slate-500 whitespace-pre-line">{"Poligon Industrial Mas Xirgu\nCarrer Can Pau Birol, 101\n17005 Girona, Spain"}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-bold mb-2">What happens next?</h3>
                <ol className="list-decimal pl-5 text-sm text-slate-600 space-y-1">
                  <li>Our team reviews your request within 4 hours</li>
                  <li>We confirm product availability and pricing</li>
                  <li>You receive a formal quotation within 24 hours</li>
                  <li>Upon acceptance, we arrange production and logistics</li>
                  <li>Your order ships with full documentation (CoA, SDS, B/L)</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
