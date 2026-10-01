import React from 'react';
import { ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

export function RecentlyViewedProducts11({ data }: { data?: any }) {
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
      <div className="max-w-7xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">11 / SNAP CAROUSEL</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Snap Carousel</h2>
        <p className="text-sm text-slate-400 mt-1">Modern snap-scroll track with spring physics, indicator pills, and full keyboard navigation.</p>
      </div>

      <div className="max-w-7xl mx-auto flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4">
        {products.map((p: any, i: number) => (
          <div key={p.id || i} className="min-w-[260px] max-w-[260px] snap-center bg-slate-900 border border-slate-800 rounded-2xl p-4 flex-shrink-0 hover:border-indigo-500 transition-all">
            <div className="h-48 rounded-xl overflow-hidden bg-slate-950 mb-3">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
            </div>
            <h4 className="text-xs font-bold text-white truncate mb-1">{p.name}</h4>
            <p className="text-[10px] text-slate-400 mb-3">{p.category}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 font-bold">₹{p.price.toLocaleString()}</span>
              <button className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold rounded-lg">
                Re-Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default RecentlyViewedProducts11;