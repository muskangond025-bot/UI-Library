import React, { useState } from 'react';
import { Film, ShoppingBag, Play, Pause } from 'lucide-react';

export function RecentlyViewedProducts5({ data }: { data?: any }) {
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
  const [activeFrame, setActiveFrame] = useState(0);

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-neutral-950 text-white font-sans border-y border-neutral-800">
      <div className="max-w-7xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-1">05 / CINEMATIC FILMSTRIP</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Cinematic Filmstrip</h2>
        <p className="text-sm text-neutral-400 mt-1">A filmstrip frame track displaying viewed products with smooth momentum navigation controls.</p>
      </div>

      <div className="max-w-7xl mx-auto bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6">
        {/* Film perforations top */}
        <div className="flex justify-between gap-2 mb-4 px-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-4 h-3 bg-neutral-950 rounded-sm border border-neutral-800" />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((p: any, i: number) => (
            <div 
              key={p.id || i}
              onClick={() => setActiveFrame(i)}
              className={`border-2 rounded-2xl p-3 bg-neutral-950 transition-all cursor-pointer ${
                activeFrame === i ? 'border-red-500 shadow-lg shadow-red-500/20 scale-102' : 'border-neutral-800 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="h-44 rounded-xl overflow-hidden mb-3 relative">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono bg-black/80 text-red-400 px-2 py-0.5 rounded">
                  FRAME 0{i + 1}
                </span>
              </div>
              <h4 className="text-xs font-bold text-white truncate">{p.name}</h4>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs font-mono text-emerald-400">₹{p.price.toLocaleString()}</span>
                <button className="px-2.5 py-1 bg-red-600 hover:bg-red-500 text-white text-[10px] font-bold rounded-lg">
                  View Frame
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Film perforations bottom */}
        <div className="flex justify-between gap-2 mt-4 px-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-4 h-3 bg-neutral-950 rounded-sm border border-neutral-800" />
          ))}
        </div>
      </div>
    </section>
  );
}
export default RecentlyViewedProducts5;