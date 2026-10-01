import React from 'react';
import { History, ShoppingBag, X } from 'lucide-react';

export function RecentlyViewedProducts14({ data }: { data?: any }) {
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
    <section className="w-full py-8 px-6 lg:px-12 bg-slate-950 text-white font-sans border-y border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <History className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-mono font-bold text-indigo-300 uppercase">14 / PERSISTENT HISTORY STRIP</h3>
            <p className="text-xs text-slate-400">Recently Viewed Live Session Strip</p>
          </div>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto py-1">
          {products.map((p: any, i: number) => (
            <div key={p.id || i} className="flex items-center gap-2.5 bg-slate-950 border border-slate-800 rounded-xl p-2 min-w-[180px]">
              <img src={p.image} alt={p.name} className="w-8 h-8 rounded-lg object-cover" />
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-white truncate">{p.name}</p>
                <p className="text-[10px] text-emerald-400 font-mono">₹{p.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default RecentlyViewedProducts14;