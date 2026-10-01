import React from 'react';
import { ShoppingBag, Eye, Trash2 } from 'lucide-react';

export function RecentlyViewedProducts7({ data }: { data?: any }) {
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

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-4xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">07 / COMPACT HISTORY LIST</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Compact History List</h2>
        <p className="text-sm text-slate-400 mt-1">A sleek vertical list with quick-add actions and sequential lateral reveal animations.</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-3">
        {products.map((p: any, i: number) => (
          <div key={p.id || i} className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-2xl transition-all group">
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-slate-500 font-bold w-6">0{i + 1}</span>
              <img src={p.image} alt={p.name} className="w-14 h-14 rounded-xl object-cover" />
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">{p.name}</h4>
                <p className="text-xs text-slate-400">{p.category} • <span className="text-slate-500">{p.viewedTime || '2h ago'}</span></p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-sm font-mono font-bold text-emerald-400">₹{p.price.toLocaleString()}</span>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all">
                <ShoppingBag className="w-3.5 h-3.5" /> Re-Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default RecentlyViewedProducts7;