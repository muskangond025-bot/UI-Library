import React, { useState } from 'react';
import { Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';

export function RecentlyViewedProducts20({ data }: { data?: any }) {
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
  const [activeIdx, setActiveIdx] = useState(0);
  const current = products[activeIdx] || products[0];

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-gradient-to-br from-black via-slate-950 to-indigo-950 text-white font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto mb-10 border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-2">20 / AWARD-LEVEL EDITORIAL EXPERIENCE</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-500">
            PERSONAL HISTORY SUITE
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400">Cinematic Memory Matrix</span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="h-80 rounded-2xl overflow-hidden mb-6 relative">
            <img src={current.image} alt={current.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-xs font-mono text-indigo-300 font-bold bg-slate-950/80 backdrop-blur px-3 py-1 rounded-full border border-indigo-500/30">
              {current.category}
            </span>
          </div>
          <h3 className="text-2xl font-black text-white mb-2">{current.name}</h3>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-mono font-extrabold text-emerald-400">₹{current.price.toLocaleString()}</span>
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold rounded-xl text-xs flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" /> Direct Checkout
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-4">
          {products.map((item: any, idx: number) => (
            <div
              key={item.id || idx}
              onClick={() => setActiveIdx(idx)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center gap-4 ${
                activeIdx === idx ? 'bg-indigo-600/20 border-indigo-400 text-white' : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800'
              }`}
            >
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                <p className="text-xs text-emerald-400 font-mono mt-1">₹{item.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default RecentlyViewedProducts20;