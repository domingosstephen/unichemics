"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/data";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top bar */}
      <div className="bg-slate-900 text-slate-400 text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <span className="hidden sm:inline">Poligon Industrial Mas Xirgu, Carrer Can Pau Birol, 101, 17005 Girona</span>
          <span>+34 631 390 443 &nbsp;|&nbsp; sales@globalchemsupply.com</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <Link href="/" className="text-lg sm:text-xl font-extrabold text-slate-900">
          Global<span className="text-blue-600">Chem</span> Supply
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Home</Link>

          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Products <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {/* pt-2 creates an invisible bridge so hover doesn't break crossing the gap */}
            <div className={`absolute top-full left-0 pt-2 ${dropdownOpen ? "block" : "hidden"}`}>
              <div className="bg-white border border-gray-200 rounded-lg shadow-xl py-2 min-w-[280px]">
                {categories.map((c) => (
                  <Link
                    key={c.id}
                    href={`/category/${c.id}`}
                    className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">About</Link>
          <Link href="/industries" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Industries</Link>
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors">Get a Quote</Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white px-4 sm:px-6 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          <Link href="/" className="block px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-slate-50" onClick={() => setMobileOpen(false)}>Home</Link>

          <div>
            <button
              className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-slate-50"
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
            >
              Products
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileProductsOpen && (
              <div className="ml-3 pl-3 border-l-2 border-blue-100 space-y-0.5 mt-1">
                {categories.map((c) => (
                  <Link
                    key={c.id}
                    href={`/category/${c.id}`}
                    className="block px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-slate-50 hover:text-blue-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="block px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-slate-50" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/industries" className="block px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-slate-50" onClick={() => setMobileOpen(false)}>Industries</Link>

          <div className="pt-2">
            <Link href="/contact" className="block bg-blue-600 text-white text-center py-3 rounded-lg text-sm font-semibold" onClick={() => setMobileOpen(false)}>Get a Quote</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
