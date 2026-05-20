import type { Metadata } from "next";
import { categories, products, getCategoryById, getProductsByCategory } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryById(slug);
  if (!cat) return {};
  const catProducts = getProductsByCategory(slug);
  return {
    title: `${cat.name} Supplier — Buy ${cat.name}`,
    description: `Buy ${cat.name.toLowerCase()} from a trusted global supplier. ${catProducts.length} products available including ${catProducts.slice(0, 3).map((p) => p.name).join(", ")}. Request bulk pricing today.`,
    alternates: { canonical: `/category/${slug}` },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = getCategoryById(slug)!;
  const catProducts = getProductsByCategory(slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${cat.name} — SociedadeTeoflorChemi`,
    description: cat.desc,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: catProducts.length,
      itemListElement: catProducts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        url: `https://sociedadeteoflorchemi.com/products/${p.slug}`,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-slate-400 mb-4">
            <Link href="/" className="text-blue-400 hover:underline">Home</Link>
            <span className="mx-2">›</span>
            Products
            <span className="mx-2">›</span>
            {cat.name}
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">{cat.name}</h1>
          <p className="text-slate-400 max-w-xl">{cat.desc}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm text-slate-500 mb-8">{catProducts.length} products</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {catProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner title={`Need ${cat.name}?`} subtitle="Get competitive bulk pricing with worldwide delivery. Our team responds within 24 hours." />
    </>
  );
}
