import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { Mail, Phone, Clock, Truck, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — Get a Quote",
  description: "Request a quote for bulk chemical supply. Contact GlobalChem Supply for pricing, product availability, and technical support. Response within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
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
                {[
                  { icon: <Mail className="w-5 h-5 text-blue-600" />, title: "Email", text: "sales@globalchemsupply.com" },
                  { icon: <Phone className="w-5 h-5 text-blue-600" />, title: "Phone", text: "+34 631 390 443" },
                  { icon: <Clock className="w-5 h-5 text-blue-600" />, title: "Business Hours", text: "Monday — Friday: 8:00 AM — 6:00 PM (EST)\nEmergency support available 24/7" },
                  { icon: <Truck className="w-5 h-5 text-blue-600" />, title: "Shipping", text: "FOB, CIF, CFR, and DDP terms available.\nWe ship to 50+ countries worldwide." },
                  { icon: <MapPin className="w-5 h-5 text-blue-600" />, title: "Address", text: "Poligon Industrial Mas Xirgu
Carrer Can Pau Birol, 101
17005 Girona, Spain" },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <p className="text-sm text-slate-500 whitespace-pre-line">{item.text}</p>
                    </div>
                  </li>
                ))}
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
