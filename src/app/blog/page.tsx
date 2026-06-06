import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Chemical Industry Blog | Sociedade Theoflor Chemi",
  description: "Expert guides on industrial chemicals, safety handling, market trends, and chemical procurement.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-slate-400 mb-4"><Link href="/" className="text-blue-400 hover:underline">Home</Link><span className="mx-2">&rsaquo;</span> Blog</nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Chemical Industry Blog</h1>
          <p className="text-slate-400 max-w-xl">Expert guides on chemical specifications, safety handling, market trends, and procurement best practices.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center py-12">
          <p className="text-slate-500 text-lg">Our first articles are being prepared. Check back soon for expert chemical industry content.</p>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
