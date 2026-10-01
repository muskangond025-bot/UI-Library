import React, { useState } from 'react';
import { Sparkles, ShoppingBag, Eye } from 'lucide-react';

export function RecentlyViewedProducts10({ data }: { data?: any }) {
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
  const active = products[activeIdx] || products[0];

  return (
    <section className="w-full py-14 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">10 / PRODUCT SPOTLIGHT</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Product Spotlight</h2>
        <p className="text-sm text-slate-400 mt-1">Spotlights one item centrally while secondary cards orbit with focus ring transitions.</p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center shadow-2xl relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <img src={active.image} alt={active.name} className="w-full md:w-1/2 h-72 rounded-2xl object-cover border border-slate-700" />
          <div className="flex-1">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase block mb-2">SPOTLIGHT RE-EXAMINATION</span>
            <h3 className="text-2xl font-extrabold text-white mb-2">{active.name}</h3>
            <p className="text-xs text-slate-400 mb-6">{active.category} • Viewed {active.viewedTime || 'recently'}</p>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-mono font-extrabold text-emerald-400">₹{active.price.toLocaleString()}</span>
              <span className="text-sm text-slate-500 line-through">₹{active.originalPrice.toLocaleString()}</span>
            </div>
            <button className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-all">
              <ShoppingBag className="w-4 h-4" /> Move to Cart Now
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {products.map((item: any, idx: number) => (
            <button
              key={item.id || idx}
              onClick={() => setActiveIdx(idx)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl border transition-all ${
                activeIdx === idx ? 'bg-amber-400/10 border-amber-400 text-amber-300 ring-2 ring-amber-400/30' : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
              }`}
            >
              <img src={item.image} alt={item.name} className="w-8 h-8 rounded-lg object-cover" />
              <span className="text-xs font-bold truncate max-w-[120px]">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
export default RecentlyViewedProducts10;