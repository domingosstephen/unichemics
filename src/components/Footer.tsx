import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="text-xl font-extrabold text-white mb-3">
              Sociedade<span className="text-blue-400">TeoflorChemi</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">Your trusted partner for industrial, agricultural, and specialty chemical supply. Serving manufacturers, processors, and distributors across 50+ countries.</p>
            <p className="text-sm leading-relaxed">Poligon Industrial Mas Xirgu<br />Carrer Can Pau Birol, 101<br />17005 Girona, Spain</p>
            <p className="text-sm mt-2">Tel: <a href="tel:+34631390443" className="hover:text-blue-400 transition-colors">+34 631 390 443</a></p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Product Categories</h4>
            <div className="space-y-2">
              <Link href="/category/industrial-chemicals" className="block text-sm hover:text-blue-400 transition-colors">Industrial Chemicals</Link>
              <Link href="/category/agricultural-chemicals" className="block text-sm hover:text-blue-400 transition-colors">Agricultural Chemicals</Link>
              <Link href="/category/food-feed-additives" className="block text-sm hover:text-blue-400 transition-colors">Food & Feed Additives</Link>
              <Link href="/category/water-treatment" className="block text-sm hover:text-blue-400 transition-colors">Water Treatment</Link>
              <Link href="/category/mining-chemicals" className="block text-sm hover:text-blue-400 transition-colors">Mining Chemicals</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">More Categories</h4>
            <div className="space-y-2">
              <Link href="/category/pharma-chemicals" className="block text-sm hover:text-blue-400 transition-colors">Pharmaceutical & Lab</Link>
              <Link href="/category/inorganic-chemicals" className="block text-sm hover:text-blue-400 transition-colors">Inorganic & Metals</Link>
              <Link href="/category/solvents-glycols" className="block text-sm hover:text-blue-400 transition-colors">Solvents & Glycols</Link>
              <Link href="/category/paper-pulp-textile" className="block text-sm hover:text-blue-400 transition-colors">Paper, Pulp & Textile</Link>
              <Link href="/category/rubber-leather-specialty" className="block text-sm hover:text-blue-400 transition-colors">Rubber & Specialty</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm hover:text-blue-400 transition-colors">About Us</Link>
              <Link href="/industries" className="block text-sm hover:text-blue-400 transition-colors">Industries</Link>
              <Link href="/contact" className="block text-sm hover:text-blue-400 transition-colors">Contact / Get a Quote</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 py-5 flex flex-wrap justify-between items-center gap-3 text-xs">
          <span>&copy; 2026 SociedadeTeoflorChemi. All rights reserved.</span>
          <span>Committed to quality, safety, and global chemical supply excellence.</span>
        </div>
      </div>
    </footer>
  );
}
