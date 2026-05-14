"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/lib/data";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const matches = query.length >= 2
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.cas.toLowerCase().includes(query.toLowerCase()) ||
        p.formula.toLowerCase().includes(query.toLowerCase()) ||
        p.apps.some((a) => a.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 8)
    : [];

  return (
    <div className="relative max-w-xl mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by product name, CAS number, or application..."
        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all"
      />
      {matches.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white rounded-b-xl shadow-xl border border-gray-200 border-t-0 z-10">
          {matches.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="block px-5 py-3 text-sm hover:bg-slate-50 transition-colors"
              onClick={() => setQuery("")}
            >
              <strong>{p.name}</strong>
              <span className="text-slate-400 ml-2">— {p.cas}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
