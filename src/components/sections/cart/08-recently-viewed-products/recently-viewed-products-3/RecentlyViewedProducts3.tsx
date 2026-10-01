import React from 'react';
import { Clock, CheckCircle2, ShoppingBag } from 'lucide-react';

export function RecentlyViewedProducts3({ data }: { data?: any }) {
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
      <div className="max-w-4xl mx-auto mb-10 text-center">
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">03 / VERTICAL HISTORY TIMELINE</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Vertical History Timeline</h2>
        <p className="text-sm text-slate-400 mt-1">Chronological visual timeline showing timestamped browsing history connected by an animated SVG path.</p>
      </div>

      <div className="max-w-3xl mx-auto relative border-l-2 border-slate-800 ml-4 sm:ml-auto pl-6 sm:pl-8 space-y-8">
        {products.map((item: any, i: number) => (
          <div key={item.id || i} className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-slate-900 border-2 border-emerald-400 flex items-center justify-center text-[10px] font-bold text-emerald-400 group-hover:bg-emerald-400 group-hover:text-slate-950 transition-all">
              {i + 1}
            </div>
            
            <div className="bg-slate-900 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-5 items-center transition-all duration-300">
              <img src={item.image} alt={item.name} className="w-full sm:w-28 h-28 rounded-xl object-cover" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[11px] font-mono text-slate-400">{item.viewedTime || 'Visited today'}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">{item.name}</h3>
                <p className="text-xs text-slate-400 mb-3">{item.category}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-emerald-400">₹{item.price.toLocaleString()}</span>
                  <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all">
                    <ShoppingBag className="w-3.5 h-3.5" /> Re-Add Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default RecentlyViewedProducts3;