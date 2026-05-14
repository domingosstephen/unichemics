"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top bar */}
      <div className="bg-slate-900 text-slate-400 text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span>Global Chemical Supply — Serving Industries Worldwide</span>
          <span className="hidden sm:inline">sales@globalchemsupply.com</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-extrabold text-slate-900">
          Global<span className="text-blue-600">Chem</span> Supply
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Home</Link>

          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Products ▾
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl py-2 min-w-[280px] z-50">
                {categories.map((c) => (
                  <Link key={c.id} href={`/category/${c.id}`} className="block px-5 py-2 text-sm text-gray-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">About</Link>
          <Link href="/industries" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Industries</Link>
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors">Get a Quote</Link>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-2xl" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">☰</button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-3">
          <Link href="/" className="block text-sm font-medium text-gray-700" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/about" className="block text-sm font-medium text-gray-700" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/industries" className="block text-sm font-medium text-gray-700" onClick={() => setMobileOpen(false)}>Industries</Link>
          <div className="pl-2 space-y-2 border-l-2 border-blue-100">
            {categories.map((c) => (
              <Link key={c.id} href={`/category/${c.id}`} className="block text-sm text-gray-600" onClick={() => setMobileOpen(false)}>{c.name}</Link>
            ))}
          </div>
          <Link href="/contact" className="block bg-blue-600 text-white text-center py-2.5 rounded-md text-sm font-semibold" onClick={() => setMobileOpen(false)}>Get a Quote</Link>
        </nav>
      )}
    </header>
  );
}
