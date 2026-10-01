import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShoppingBag, Eye, Clock, Sparkles } from 'lucide-react';

export function RecentlyViewedProducts1({ data }: { data?: any }) {
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
  const [scrollIndex, setScrollIndex] = useState(0);

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-slate-900 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto mb-8 flex items-end justify-between border-b border-slate-800 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">01 / HORIZONTAL MEMORY RAIL</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Horizontal Memory Rail</h2>
          <p className="text-sm text-slate-400 mt-1">Recently viewed products appear in a horizontal memory rail as the user slides across browsing history.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setScrollIndex(Math.max(0, scrollIndex - 1))} 
            disabled={scrollIndex === 0}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 disabled:opacity-40 border border-slate-700 flex items-center justify-center transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setScrollIndex(Math.min(products.length - 1, scrollIndex + 1))}
            disabled={scrollIndex >= products.length - 1}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 disabled:opacity-40 border border-slate-700 flex items-center justify-center transition-all"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto overflow-hidden">
        <div 
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${scrollIndex * 300}px)` }}
        >
          {products.map((p: any, idx: number) => (
            <div key={p.id || idx} className="min-w-[280px] max-w-[280px] bg-slate-950/60 border border-slate-800 rounded-2xl p-4 hover:border-indigo-500/50 hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-52 rounded-xl overflow-hidden mb-4 bg-slate-900">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-2 left-2 text-[10px] font-mono font-bold bg-slate-900/90 border border-slate-700 px-2 py-0.5 rounded text-indigo-300">
                  {p.viewedTime || 'Viewed recently'}
                </span>
              </div>
              <h3 className="font-semibold text-sm truncate text-slate-100">{p.name}</h3>
              <p className="text-xs text-slate-400 mb-3">{p.category}</p>
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-emerald-400 text-sm">₹{p.price.toLocaleString()}</span>
                <button className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold flex items-center gap-1 transition-all">
                  <ShoppingBag className="w-3.5 h-3.5" /> Revisit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default RecentlyViewedProducts1;