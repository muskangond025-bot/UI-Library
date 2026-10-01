import React, { useState } from 'react';
import { Layers, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

export function RecentlyViewedProducts18({ data }: { data?: any }) {
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
  const [topIdx, setTopIdx] = useState(0);

  const nextCard = () => setTopIdx((topIdx + 1) % products.length);
  const prevCard = () => setTopIdx((topIdx - 1 + products.length) % products.length);

  const current = products[topIdx] || products[0];

  return (
    <section className="w-full py-14 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">18 / STACKED 3D DEPTH CARDS</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Stacked 3D Depth Cards</h2>
        <p className="text-sm text-slate-400 mt-1">Layered 3D card stack that cycles through Z-space depth when clicking next/prev controls.</p>
      </div>

      <div className="max-w-2xl mx-auto relative flex flex-col items-center min-h-[380px]">
        <div className="w-80 bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl z-20 text-center">
          <div className="h-48 rounded-2xl overflow-hidden bg-slate-950 mb-4">
            <img src={current.image} alt={current.name} className="w-full h-full object-cover" />
          </div>
          <span className="text-[10px] font-mono text-emerald-400 uppercase block mb-1">{current.category}</span>
          <h3 className="text-base font-bold text-white mb-2">{current.name}</h3>
          <span className="text-lg font-mono text-emerald-400 font-extrabold block mb-4">₹{current.price.toLocaleString()}</span>
          
          <div className="flex gap-2 justify-center">
            <button onClick={prevCard} className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-600">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={nextCard} className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-600">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default RecentlyViewedProducts18;