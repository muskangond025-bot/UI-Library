import React from 'react';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';

export function RecentlyViewedProducts8({ data }: { data?: any }) {
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
    <section className="w-full py-12 px-6 lg:px-12 bg-neutral-950 text-white font-sans">
      <div className="max-w-7xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block mb-1">08 / ASYMMETRIC GALLERY</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Asymmetric Gallery</h2>
        <p className="text-sm text-neutral-400 mt-1">An editorial layout with variable card proportions and staggered directional entrances.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        {products.map((p: any, i: number) => {
          const colSpan = i % 3 === 0 ? 'md:col-span-8' : 'md:col-span-4';
          const height = i % 3 === 0 ? 'h-80' : 'h-80';

          return (
            <div key={p.id || i} className={`${colSpan} bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between hover:border-purple-500/50 transition-all group relative overflow-hidden`}>
              <div className={`${height} rounded-2xl overflow-hidden mb-4 relative bg-neutral-950`}>
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-3 left-3 text-[10px] font-mono bg-black/80 text-purple-300 border border-purple-500/30 px-2.5 py-1 rounded-full">
                  {p.category}
                </span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{p.name}</h3>
                  <span className="text-sm font-mono font-bold text-emerald-400">₹{p.price.toLocaleString()}</span>
                </div>
                <button className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default RecentlyViewedProducts8;