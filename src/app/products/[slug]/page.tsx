import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products, getProductBySlug, getProductsByCategory, getCategoryById } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} Supplier — CAS ${product.cas} | Buy ${product.name}`,
    description: `Buy ${product.name} (CAS ${product.cas}, ${product.formula}) from a trusted supplier. Purity: ${product.purity}. Used in ${product.apps.slice(0, 3).join(", ")}. Request bulk pricing with worldwide delivery.`,
    alternates: { canonical: `/products/${slug}` },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug)!;
  const cat = getCategoryById(product.category)!;
  const related = getProductsByCategory(product.category).filter((p) => p.slug !== slug).slice(0, 4);

  const faqItems = [
    { question: `What is ${product.name} used for?`, answer: `${product.name} (CAS ${product.cas}) is widely used in ${product.apps.join(", ")}. ${product.desc}` },
    { question: `What is the CAS number of ${product.name}?`, answer: `The CAS registry number for ${product.name} is ${product.cas}. Its molecular formula is ${product.formula}.` },
    { question: `What purity grades are available?`, answer: `We supply ${product.name} at ${product.purity} purity. Packaging options include ${product.packaging}. Contact us for specific grade requirements including food-grade, pharma-grade, or technical-grade.` },
    { question: `How is ${product.name} packaged and shipped?`, answer: `${product.name} is available in ${product.packaging}. All shipments include Safety Data Sheets (SDS) and Certificates of Analysis (CoA). We ship globally under IMDG/ADR compliance.` },
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.desc,
    image: `https://sociedadeteoflorchemi.com${product.image}`,
    sku: product.cas,
    brand: { "@type": "Brand", name: "SociedadeTeoflorChemi" },
    category: cat.name,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      seller: { "@type": "Organization", name: "SociedadeTeoflorChemi" },
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "CAS Number", value: product.cas },
      { "@type": "PropertyValue", name: "Molecular Formula", value: product.formula },
      { "@type": "PropertyValue", name: "Purity", value: product.purity },
      { "@type": "PropertyValue", name: "Appearance", value: product.appearance },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sociedadeteoflorchemi.com/" },
      { "@type": "ListItem", position: 2, name: cat.name, item: `https://sociedadeteoflorchemi.com/category/${cat.id}` },
      { "@type": "ListItem", position: 3, name: product.name, item: `https://sociedadeteoflorchemi.com/products/${product.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="text-sm text-slate-500">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="mx-2">›</span>
          <Link href={`/category/${cat.id}`} className="text-blue-600 hover:underline">{cat.name}</Link>
          <span className="mx-2">›</span>
          {product.name}
        </nav>
      </div>

      {/* Product Detail */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h1 className="text-3xl font-extrabold mb-2">{product.name}</h1>
        <p className="text-slate-500 mb-6">CAS Number: {product.cas} &nbsp;|&nbsp; Formula: {product.formula}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative h-80 md:h-[420px] bg-slate-50 rounded-xl overflow-hidden">
            <Image src={product.image} alt={`${product.name} — CAS ${product.cas}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div>
            <p className="text-slate-700 leading-relaxed mb-8">{product.desc}</p>

            <h2 className="font-bold mb-3">Specifications</h2>
            <table className="w-full mb-8 text-sm">
              <tbody>
                {[
                  ["CAS Number", product.cas],
                  ["Molecular Formula", product.formula],
                  ["Purity / Grade", product.purity],
                  ["Appearance", product.appearance],
                  ["Packaging", product.packaging],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-gray-100">
                    <th className="py-2.5 pr-4 text-left font-semibold bg-slate-50 px-4 w-2/5">{label}</th>
                    <td className="py-2.5 px-4">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2 className="font-bold mb-3">Applications</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {product.apps.map((app) => (
                <span key={app} className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium">{app}</span>
              ))}
            </div>

            <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Request a Quote for {product.name} →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold mb-8">Frequently Asked Questions about {product.name}</h2>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-extrabold mb-8">Related {cat.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((r) => (
                <ProductCard key={r.slug} product={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner title={`Need ${product.name}?`} subtitle={`Get competitive pricing for ${product.packaging} quantities. Our team responds within 24 hours.`} />
    </>
  );
}
