import React, { useState } from 'react';
import { Eye, ShoppingBag } from 'lucide-react';

export function RecentlyViewedProducts15({ data }: { data?: any }) {
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
  const [selected, setSelected] = useState(0);
  const item = products[selected] || products[0];

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-neutral-950 text-white font-sans">
      <div className="max-w-7xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-1">15 / SPLIT VIEW</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Split View</h2>
        <p className="text-sm text-neutral-400 mt-1">Split screen layout featuring a large live preview on the left and a selectable list on the right.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 bg-neutral-900 border border-neutral-800 rounded-3xl p-6">
        <div className="lg:col-span-7 bg-neutral-950 rounded-2xl p-6 flex flex-col justify-between">
          <img src={item.image} alt={item.name} className="w-full h-72 rounded-xl object-cover mb-4" />
          <div>
            <span className="text-xs text-teal-400 font-mono block mb-1">{item.category}</span>
            <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-mono text-emerald-400 font-extrabold">₹{item.price.toLocaleString()}</span>
              <button className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-neutral-950 font-bold rounded-xl text-xs flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" /> Move to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-3">
          {products.map((p: any, i: number) => (
            <div 
              key={p.id || i} 
              onClick={() => setSelected(i)}
              className={`flex items-center gap-4 p-3 rounded-2xl border cursor-pointer transition-all ${
                selected === i ? 'bg-teal-500/10 border-teal-400 text-white' : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:bg-neutral-800'
              }`}
            >
              <img src={p.image} alt={p.name} className="w-14 h-14 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-white truncate">{p.name}</p>
                <p className="text-[11px] text-teal-400 font-mono">₹{p.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default RecentlyViewedProducts15;