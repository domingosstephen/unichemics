import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Sociedade Theoflor Chemi — Trusted Global Chemical Supplier",
  description: "Learn about Sociedade Theoflor Chemi — a global chemical distribution company delivering quality-assured industrial, agricultural, and specialty chemicals to 50+ countries.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Quality First", desc: "Every product undergoes rigorous quality control. We provide Certificates of Analysis, Safety Data Sheets, and full traceability documentation with every shipment." },
  { title: "Supply Chain Integrity", desc: "Direct manufacturer sourcing eliminates intermediaries, reducing cost and risk. Our vetted supplier network ensures consistent product availability year-round." },
  { title: "Regulatory Compliance", desc: "We navigate the complex landscape of chemical regulations — REACH, GHS, IMDG, ADR — so you can focus on your operations with full peace of mind." },
  { title: "Technical Expertise", desc: "Our sales team includes chemical engineers and industry specialists who can recommend the right grade, formulation, and packaging for your specific application." },
  { title: "Flexible Logistics", desc: "From single pallets to full container loads, we handle customs documentation, hazardous goods compliance, and last-mile delivery to your facility door." },
  { title: "Long-Term Partnerships", desc: "We believe in building relationships, not just processing orders. Many of our clients have been with us since day one." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sociedadeteoflorchemi.com/" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://sociedadeteoflorchemi.com/about/" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-slate-400 mb-4">
            <Link href="/" className="text-blue-400 hover:underline">Home</Link>
            <span className="mx-2">›</span> About Us
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">About Sociedade Theoflor Chemi</h1>
          <p className="text-slate-400 max-w-xl">Bridging the gap between chemical manufacturers and the industries that depend on them — with quality, reliability, and technical expertise at every step.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-2">Our Story</p>
              <h2 className="text-3xl font-extrabold mb-6">From Local Expertise to Global Reach</h2>
              <p className="text-slate-600 mb-4">Sociedade Theoflor Chemi was founded with a clear mission: make high-quality chemical sourcing simple, transparent, and reliable for businesses of every size. What started as a specialized supplier serving local manufacturers has grown into a comprehensive chemical distribution operation spanning multiple continents.</p>
              <p className="text-slate-600 mb-4">Today, we maintain direct relationships with certified manufacturers across Asia, Europe, and the Middle East — enabling us to offer competitive pricing on over 100 products without compromising on quality assurance or supply chain integrity.</p>
              <p className="text-slate-600">Our team combines deep chemical industry knowledge with modern supply chain management, providing clients with not just products, but genuine partnership in their procurement operations.</p>
            </div>
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
              <Image src="/images/mining/activated-carbon.jpg" alt="Chemical supply operations" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {values.map((v) => (
              <div key={v.title} className="p-6 border border-gray-200 rounded-xl">
                <h3 className="font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Partner With Us" subtitle="Whether you need a single product or a full procurement solution, we're ready to help." />
    </>
  );
}
