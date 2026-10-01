import React, { useState } from 'react';
import { Pause, Play, ShoppingBag } from 'lucide-react';

export function RecentlyViewedProducts19({ data }: { data?: any }) {
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
  const [paused, setPaused] = useState(false);

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-neutral-950 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto mb-8 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">19 / CHRONOLOGICAL MARQUEE</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Chronological Marquee</h2>
          <p className="text-sm text-neutral-400 mt-1">Continuous marquee strip with hover-pause controls, keyboard accessibility, and reduced-motion support.</p>
        </div>
        <button 
          onClick={() => setPaused(!paused)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-amber-300"
        >
          {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          <span>{paused ? 'Resume Motion' : 'Pause Marquee'}</span>
        </button>
      </div>

      <div className="w-full overflow-hidden relative">
        <div 
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className={`flex gap-6 w-max ${paused ? '' : 'animate-marquee'}`}
        >
          {[...products, ...products].map((p: any, i: number) => (
            <div key={i} className="min-w-[240px] bg-neutral-900 border border-neutral-800 rounded-2xl p-4">
              <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded-xl mb-3" />
              <h4 className="text-xs font-bold text-white truncate">{p.name}</h4>
              <span className="text-xs font-mono text-emerald-400 font-bold block mt-1">₹{p.price.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default RecentlyViewedProducts19;