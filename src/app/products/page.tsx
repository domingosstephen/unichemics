import type { Metadata } from "next";
import Link from "next/link";
import { products, categories, getCategoryById } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import CTABanner from "@/components/CTABanner";
import SearchBar from "@/components/SearchBar";

export const metadata: Metadata = {
  title: "All Products — Complete Chemical Catalog",
  description: "Browse our complete catalog of 100+ industrial, agricultural, food-grade, mining, pharmaceutical, and specialty chemicals. Search by name, CAS number, or application.",
  alternates: { canonical: "/products" },
};

export default function AllProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "All Products — Sociedade Teoflor Chemi",
            description: "Complete catalog of industrial, agricultural, and specialty chemicals.",
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: products.length,
              itemListElement: products.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: p.name,
                url: `https://sociedadeteoflorchemi.com/products/${p.slug}`,
              })),
            },
          }),
        }}
      />

      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-slate-400 mb-4">
            <Link href="/" className="text-blue-400 hover:underline">Home</Link>
            <span className="mx-2">&rsaquo;</span> All Products
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Complete Chemical Catalog</h1>
          <p className="text-slate-400 max-w-xl">Browse all {products.length} products across {categories.length} categories. Search by product name, CAS number, or application.</p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <SearchBar />
        </div>
      </section>

      {categories.map((cat) => {
        const catProducts = products.filter((p) => p.category === cat.id);
        if (catProducts.length === 0) return null;
        return (
          <section key={cat.id} className="py-12 border-t border-gray-100 first:border-t-0">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-extrabold">{cat.name}</h2>
                  <p className="text-sm text-slate-500 mt-1">{catProducts.length} products</p>
                </div>
                <Link href={`/category/${cat.id}`} className="text-sm text-blue-600 font-semibold hover:underline">
                  View Category &rarr;
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {catProducts.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTABanner />
    </>
  );
}
