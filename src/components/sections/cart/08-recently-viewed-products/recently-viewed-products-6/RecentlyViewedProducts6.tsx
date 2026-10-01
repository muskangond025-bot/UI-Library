import React, { useState } from 'react';
import { Eye, ShoppingBag, ChevronRight } from 'lucide-react';

export function RecentlyViewedProducts6({ data }: { data?: any }) {
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
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = products[selectedIdx] || products[0];

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">06 / FEATURED MEMORY HERO</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Featured Memory Hero</h2>
        <p className="text-sm text-slate-400 mt-1">Dominant hero view of the most recent item with secondary thumbnail switching and smooth crossfade.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center">
          <img src={current.image} alt={current.name} className="w-full md:w-1/2 h-80 rounded-2xl object-cover shadow-2xl" />
          <div className="flex-1">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">{current.category} • {current.viewedTime || 'Recently Viewed'}</span>
            <h3 className="text-2xl font-black text-white mb-3">{current.name}</h3>
            <p className="text-xs text-slate-400 mb-6">Return to your most recently inspected item with saved configuration and immediate checkout readiness.</p>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-mono font-extrabold text-emerald-400">₹{current.price.toLocaleString()}</span>
              <span className="text-sm text-slate-500 line-through">₹{current.originalPrice.toLocaleString()}</span>
            </div>
            <button className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-all">
              <ShoppingBag className="w-4 h-4" /> Move to Cart
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-3">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Other Recent Items</span>
          {products.map((item: any, idx: number) => (
            <button
              key={item.id || idx}
              onClick={() => setSelectedIdx(idx)}
              className={`flex items-center gap-4 p-3 rounded-2xl border text-left transition-all ${
                selectedIdx === idx ? 'bg-cyan-500/10 border-cyan-400 text-white' : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-800'
              }`}
            >
              <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold truncate text-white">{item.name}</p>
                <p className="text-[11px] text-emerald-400 font-mono">₹{item.price.toLocaleString()}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
export default RecentlyViewedProducts6;