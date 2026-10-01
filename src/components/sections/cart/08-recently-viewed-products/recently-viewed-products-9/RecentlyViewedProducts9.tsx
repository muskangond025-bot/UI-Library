import React from 'react';
import { ShoppingBag } from 'lucide-react';

export function RecentlyViewedProducts9({ data }: { data?: any }) {
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
    <section className="w-full py-16 px-6 lg:px-12 bg-black text-white font-sans border-y border-neutral-900">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest block mb-2">09 / MINIMAL TYPOGRAPHIC</span>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-600 uppercase">
          YOU'VE SEEN THESE
        </h2>
        <p className="text-xs font-mono text-neutral-400 mt-2 tracking-widest uppercase">Curated history log • Instant checkout ready</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p: any, i: number) => (
          <div key={p.id || i} className="group cursor-pointer">
            <div className="h-64 rounded-none overflow-hidden bg-neutral-900 mb-4 border border-neutral-800 group-hover:border-white transition-all">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">0{i + 1} // {p.category}</span>
            <h4 className="text-sm font-bold text-white truncate mb-1">{p.name}</h4>
            <div className="flex items-center justify-between">
              <span className="text-sm font-mono text-emerald-400 font-bold">₹{p.price.toLocaleString()}</span>
              <button className="text-xs font-bold text-white underline underline-offset-4 hover:text-emerald-400 transition-colors">
                Quick Re-Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default RecentlyViewedProducts9;