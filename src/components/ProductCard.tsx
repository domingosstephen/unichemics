import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block bg-white border border-gray-200 rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg hover:border-blue-600">
      <div className="relative h-44 bg-slate-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-sm mb-1">{product.name}</h3>
        <p className="text-xs text-slate-400 mb-2">CAS: {product.cas} | {product.formula}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {product.apps.slice(0, 3).map((app) => (
            <span key={app} className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-medium">{app}</span>
          ))}
        </div>
        <span className="block text-center py-2 bg-slate-50 text-blue-600 font-semibold text-xs rounded-md group-hover:bg-blue-600 group-hover:text-white transition-colors">
          View Details →
        </span>
      </div>
    </Link>
  );
}
