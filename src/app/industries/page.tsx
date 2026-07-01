import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Industries We Serve — Chemical Solutions by Sector",
  description: "Chemical supply solutions for agriculture, food & beverage, mining, water treatment, pharmaceutical, and manufacturing industries. Explore products by industry.",
  alternates: { canonical: "/industries/" },
};

const sections = [
  {
    id: "agriculture",
    label: "Agriculture & Farming",
    title: "Feeding the World with Better Chemistry",
    desc: "Modern agriculture depends on a reliable supply of fertilizers, crop protection chemicals, and soil amendments. We supply nitrogen, phosphorus, and potassium fertilizers alongside specialty micronutrients and herbicides that help farmers maximize yield while managing costs.",
    desc2: "Our agricultural chemical range includes urea, ammonium sulphate, NPK compounds, potassium chloride, diammonium phosphate, glyphosate, and calcium-based soil conditioners — all sourced from certified manufacturers.",
    image: "/images/agricultural/npk-fertilizer.jpg",
    link: "/category/agricultural-chemicals",
    bg: false,
  },
  {
    id: "food",
    label: "Food & Beverage Processing",
    title: "Safe Ingredients for a Global Food Supply",
    desc: "From acidulants and preservatives to thickeners and sweeteners, our food-grade chemicals meet the stringent quality standards required by food manufacturers worldwide. Every product is supplied with full documentation including FCC compliance and Certificates of Analysis.",
    desc2: "Key products include citric acid, ascorbic acid, sodium benzoate, sorbic acid, xanthan gum, guar gum, maltodextrine, and specialty gelling agents for plant-based food innovation.",
    image: "/images/food-feed/citric-acid.webp",
    link: "/category/food-feed-additives",
    bg: true,
  },
  {
    id: "mining",
    label: "Mining & Mineral Processing",
    title: "Essential Reagents for Resource Extraction",
    desc: "Gold cyanidation, froth flotation, and mineral beneficiation require reliable, high-purity chemical reagents delivered on schedule to remote mining operations. We specialize in the supply of sodium cyanide, xanthate collectors, activated carbon, MIBC frothers, and processing aids.",
    desc2: "Our mining chemical supply chain is built for the demands of the industry — hazmat-compliant logistics, bulk packaging options, and technical support for reagent optimization.",
    image: "/images/mining/activated-carbon.jpg",
    link: "/category/mining-chemicals",
    bg: false,
  },
  {
    id: "water",
    label: "Water & Wastewater Treatment",
    title: "Clean Water Through Proven Chemistry",
    desc: "Municipal water plants, industrial facilities, and swimming pools all rely on water treatment chemicals for disinfection, coagulation, and corrosion control. We supply calcium hypochlorite, aluminum sulfate, ferric chloride, hydrogen peroxide, and specialty corrosion inhibitors.",
    desc2: "Our water treatment range covers the full treatment chain — from raw water intake coagulation through disinfection to distribution system corrosion protection.",
    image: "/images/water-treatment/calcium-hypochlorite.jpg",
    link: "/category/water-treatment",
    bg: true,
  },
  {
    id: "pharma",
    label: "Pharmaceutical & Laboratory",
    title: "Precision-Grade Chemicals for Health Sciences",
    desc: "Pharmaceutical manufacturing and laboratory research demand the highest purity standards. We supply USP/EP-grade ethanol, phenol, folic acid, glycolic acid, and pharmaceutical excipients with complete regulatory documentation.",
    desc2: "Every pharmaceutical-grade product ships with batch-specific Certificates of Analysis and is sourced from GMP-certified manufacturing facilities.",
    image: "/images/pharma/ethanol.webp",
    link: "/category/pharma-chemicals",
    bg: false,
  },
  {
    id: "manufacturing",
    label: "General Manufacturing",
    title: "Raw Materials That Keep Production Moving",
    desc: "Manufacturing operations across plastics, coatings, detergents, construction, and metalworking depend on a steady supply of industrial chemicals. From caustic soda and sulfuric acid to PVC resins and surfactants, we provide the building blocks of modern manufacturing.",
    desc2: "Our industrial chemical range also includes solvents, glycols, metal compounds, and specialty intermediates for diverse processing applications.",
    image: "/images/industrial/caustic-soda-flakes.webp",
    link: "/category/industrial-chemicals",
    bg: true,
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sociedadeteoflorchemi.com/" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://sociedadeteoflorchemi.com/industries/" },
  ],
};

export default function IndustriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-slate-400 mb-4">
            <Link href="/" className="text-blue-400 hover:underline">Home</Link>
            <span className="mx-2">›</span> Industries
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Industries We Serve</h1>
          <p className="text-slate-400 max-w-xl">Tailored chemical supply solutions for every sector — from farm to factory, mine to municipality.</p>
        </div>
      </section>

      {sections.map((s, i) => (
        <section key={s.id} id={s.id} className={`py-20 ${s.bg ? "bg-slate-50" : ""}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[direction:rtl] md:[&>*]:[direction:ltr]" : ""}`}>
              <div>
                <p className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-2">{s.label}</p>
                <h2 className="text-3xl font-extrabold mb-6">{s.title}</h2>
                <p className="text-slate-600 mb-4">{s.desc}</p>
                <p className="text-slate-600 mb-6">{s.desc2}</p>
                <Link href={s.link} className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  View Products →
                </Link>
              </div>
              <div className="relative h-72 md:h-80 rounded-xl overflow-hidden">
                <Image src={s.image} alt={s.label} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTABanner title="Need Chemicals for Your Industry?" subtitle="Tell us your application and we'll recommend the right products, grades, and quantities." />
    </>
  );
}
