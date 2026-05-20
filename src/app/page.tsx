import Image from "next/image";
import Link from "next/link";
import { categories, products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import { Microscope, Globe, DollarSign, Handshake, Sprout, Factory, Pickaxe, Droplets, Pill, Wrench } from "lucide-react";

const featuredSlugs = ["hydrochloric-acid", "citric-acid", "urea", "calcium-hypochlorite", "sodium-cyanide", "ascorbic-acid", "caustic-soda-flakes", "activated-carbon"];
const featuredProducts = products.filter((p) => featuredSlugs.includes(p.slug));

const faqItems = [
  { question: "What types of chemicals do you supply?", answer: "We supply over 100 chemicals across 10 categories: Industrial, Agricultural & Fertilizer, Food & Feed Additives, Water Treatment, Mining & Mineral Processing, Pharmaceutical & Lab, Inorganic & Metals, Solvents & Glycols, Paper/Pulp/Textile, and Rubber/Leather/Specialty Chemicals." },
  { question: "Do you ship chemicals internationally?", answer: "Yes. We maintain distribution hubs across Europe, Africa, and the Americas for reliable global delivery. All shipments comply with IMDG and ADR international chemical transport regulations." },
  { question: "What is the minimum order quantity?", answer: "MOQs vary by product and packaging. Most products are available from a single pallet (~1,000 kg) up to full container loads. Contact our sales team for specific MOQ details on any product." },
  { question: "Do you provide Safety Data Sheets (SDS)?", answer: "Yes. We provide GHS-compliant Safety Data Sheets and Certificates of Analysis for every product. These documents are available upon request and included with all shipments." },
  { question: "Can you supply food-grade and pharmaceutical-grade chemicals?", answer: "Absolutely. We supply multiple purity grades including technical, food-grade (FCC), pharmaceutical-grade (USP/EP), and reagent-grade (ACS). Each product page specifies available grades." },
];

const industryIcons: Record<string, React.ReactNode> = {
  Agriculture: <Sprout className="w-8 h-8" />,
  "Food & Beverage": <Factory className="w-8 h-8" />,
  Mining: <Pickaxe className="w-8 h-8" />,
  "Water Treatment": <Droplets className="w-8 h-8" />,
  Pharmaceutical: <Pill className="w-8 h-8" />,
  Manufacturing: <Wrench className="w-8 h-8" />,
};

const industries = [
  { name: "Agriculture", desc: "Fertilizers, crop protection & soil amendments", href: "/industries#agriculture" },
  { name: "Food & Beverage", desc: "Additives, preservatives & processing aids", href: "/industries#food" },
  { name: "Mining", desc: "Extraction, flotation & processing chemicals", href: "/industries#mining" },
  { name: "Water Treatment", desc: "Purification, disinfection & corrosion control", href: "/industries#water" },
  { name: "Pharmaceutical", desc: "APIs, excipients & lab-grade reagents", href: "/industries#pharma" },
  { name: "Manufacturing", desc: "Solvents, resins, surfactants & intermediates", href: "/industries#manufacturing" },
];

export default function Home() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Unichemics",
            description: "Trusted global supplier of industrial, agricultural, food-grade, mining, pharmaceutical, and specialty chemicals.",
            url: "https://unichemics.com",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/mining/activated-carbon.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl mb-5">
            Your Trusted Source for <span className="text-blue-400">Industrial & Specialty Chemicals</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mb-8">
            Over 100 products across 10 categories — from agricultural fertilizers to pharmaceutical-grade reagents. Reliable supply, competitive pricing, worldwide delivery.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#categories" className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Browse Products</Link>
            <Link href="/contact" className="border-2 border-slate-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-colors">Request a Quote</Link>
          </div>
          <div className="flex gap-10 mt-12">
            {[
              { num: "100+", label: "Products" },
              { num: "10", label: "Categories" },
              { num: "50+", label: "Countries Served" },
              { num: "24/7", label: "Support" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-blue-400">{s.num}</div>
                <div className="text-xs text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <SearchBar />
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-2">Product Categories</p>
            <h2 className="text-3xl font-extrabold mb-3">Comprehensive Chemical Solutions</h2>
            <p className="text-slate-500 max-w-xl mx-auto">From raw materials to specialty formulations — explore our complete catalog organized by industry application.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat) => {
              const count = products.filter((p) => p.category === cat.id).length;
              return (
                <Link key={cat.id} href={`/category/${cat.id}`} className="group block bg-white border border-gray-200 rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg hover:border-blue-600">
                  <div className="p-5 pb-3">
                    <h3 className="font-bold text-base mb-1">{cat.name}</h3>
                    <p className="text-xs text-slate-500 mb-2">{cat.desc}</p>
                    <span className="text-xs text-blue-600 font-semibold">{count} Products →</span>
                  </div>
                  <div className="relative h-48">
                    <Image src={cat.image} alt={cat.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-2">Featured Products</p>
            <h2 className="text-3xl font-extrabold mb-3">Most Requested Chemicals</h2>
            <p className="text-slate-500">High-demand products trusted by manufacturers, farmers, and processors worldwide.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-2">Why Unichemics</p>
            <h2 className="text-3xl font-extrabold mb-3">Built for Reliability at Scale</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Microscope className="w-7 h-7 text-blue-600" />, title: "Quality Assured", desc: "Every batch tested and certified. We supply technical, food, pharma, and reagent grades with full CoA and SDS documentation." },
              { icon: <Globe className="w-7 h-7 text-blue-600" />, title: "Global Distribution", desc: "Strategic hubs across Europe, Africa, and the Americas ensure fast delivery worldwide. FCL or LCL — we handle logistics." },
              { icon: <DollarSign className="w-7 h-7 text-blue-600" />, title: "Competitive Pricing", desc: "Direct manufacturer relationships and bulk purchasing power mean the best prices without compromising quality." },
              { icon: <Handshake className="w-7 h-7 text-blue-600" />, title: "Dedicated Support", desc: "Our technical sales team provides product recommendations, regulatory guidance, and customized supply agreements." },
            ].map((f) => (
              <div key={f.title} className="text-center p-8 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5">{f.icon}</div>
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-2">Industries We Serve</p>
            <h2 className="text-3xl font-extrabold">Chemicals for Every Sector</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {industries.map((ind) => (
              <Link key={ind.name} href={ind.href} className="bg-slate-900 text-white p-6 rounded-xl text-center hover:bg-slate-700 transition-all hover:-translate-y-1">
                <div className="flex justify-center mb-3">{industryIcons[ind.name]}</div>
                <h3 className="font-semibold text-sm mb-1">{ind.name}</h3>
                <p className="text-[11px] text-slate-400">{ind.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-2">FAQ</p>
            <h2 className="text-3xl font-extrabold">Frequently Asked Questions</h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
