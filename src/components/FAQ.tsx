"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items, defaultOpen = 0 }: { items: FAQItem[]; defaultOpen?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-sm hover:bg-slate-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {item.question}
            <Plus className={`w-5 h-5 text-blue-600 transition-transform shrink-0 ${openIndex === i ? "rotate-45" : ""}`} />
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4">
              <p className="text-sm text-slate-500 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
