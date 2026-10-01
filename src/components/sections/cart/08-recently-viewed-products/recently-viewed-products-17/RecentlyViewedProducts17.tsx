import React, { useState } from 'react';
import { Maximize2, ShoppingBag } from 'lucide-react';

export function RecentlyViewedProducts17({ data }: { data?: any }) {
  const products = data?.products || [
  {
    "id": "rv-1",
    "name": "Minimalist Leather Sneakers",
    "category": "Footwear",
    "price": 12900,
    "originalPrice": 15900,
    "viewedTime": "10 mins ago",
    "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
    "rating": 4.8,
    "badge": "Just Viewed"
  },
  {
    "id": "rv-2",
    "name": "Cashmere Knit Crewneck",
    "category": "Apparel",
    "price": 18500,
    "originalPrice": 22000,
    "viewedTime": "25 mins ago",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
    "rating": 4.9,
    "badge": "High Interest"
  },
  {
    "id": "rv-3",
    "name": "Waterproof Commuter Backpack",
    "category": "Accessories",
    "price": 14200,
    "originalPrice": 17500,
    "viewedTime": "1 hour ago",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    "rating": 4.7,
    "badge": "Low Stock"
  },
  {
    "id": "rv-4",
    "name": "Matte Ceramic Watch",
    "category": "Timepieces",
    "price": 32000,
    "originalPrice": 38000,
    "viewedTime": "2 hours ago",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    "rating": 4.9,
    "badge": "Trending"
  }
];
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-neutral-950 text-white font-sans">
      <div className="max-w-7xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">17 / HOVER MAGNIFICATION</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Hover Magnification</h2>
        <p className="text-sm text-neutral-400 mt-1">Dynamic focal grid where hovering magnifies the active card while compressing neighboring cards.</p>
      </div>

      <div className="max-w-7xl mx-auto flex gap-4 overflow-hidden py-4">
        {products.map((p: any, i: number) => {
          const isHovered = hoveredIdx === i;
          return (
            <div
              key={p.id || i}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`bg-neutral-900 border border-neutral-800 rounded-3xl p-4 transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between ${
                isHovered ? 'flex-[2] bg-indigo-950/40 border-indigo-500/80 shadow-2xl' : 'flex-[1] opacity-70'
              }`}
            >
              <div className="h-60 rounded-2xl overflow-hidden bg-neutral-950 mb-3">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white truncate">{p.name}</h4>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs font-mono text-emerald-400 font-bold">₹{p.price.toLocaleString()}</span>
                  {isHovered && (
                    <button className="px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold rounded-lg">
                      Add Item
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default RecentlyViewedProducts17;