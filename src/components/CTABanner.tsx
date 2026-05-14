import Link from "next/link";

export default function CTABanner({ title = "Ready to Source Your Chemicals?", subtitle = "Get competitive quotes with fast turnaround. Our team responds within 24 hours." }: { title?: string; subtitle?: string }) {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8">
        <div>
          <h2 className="text-2xl font-extrabold mb-2">{title}</h2>
          <p className="text-blue-200">{subtitle}</p>
        </div>
        <Link href="/contact" className="bg-white text-blue-600 px-8 py-3.5 rounded-lg font-bold hover:bg-slate-50 transition-colors">
          Request a Quote →
        </Link>
      </div>
    </section>
  );
}
