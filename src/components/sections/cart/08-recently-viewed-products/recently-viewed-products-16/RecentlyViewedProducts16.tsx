import React, { useState } from 'react';
import { Lock, Unlock, Eye } from 'lucide-react';

export function RecentlyViewedProducts16({ data }: { data?: any }) {
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
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const toggleReveal = (idx: number) => {
    setRevealed(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-7xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block mb-1">16 / CURTAIN REVEAL</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Curtain Reveal</h2>
        <p className="text-sm text-slate-400 mt-1">Product cards hidden behind visual curtains that open horizontally to reveal items.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p: any, i: number) => {
          const isOpen = revealed[i];
          return (
            <div key={p.id || i} className="bg-slate-900 border border-slate-800 rounded-3xl p-4 relative overflow-hidden group">
              <div className="h-56 rounded-2xl overflow-hidden relative bg-slate-950 mb-3">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <div 
                  className={`absolute inset-0 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center transition-transform duration-700 ease-in-out ${
                    isOpen ? '-translate-x-full' : 'translate-x-0'
                  }`}
                >
                  <Lock className="w-6 h-6 text-purple-400 mb-2" />
                  <button 
                    onClick={() => toggleReveal(i)} 
                    className="px-3 py-1.5 bg-purple-600 text-white rounded-lg text-xs font-bold"
                  >
                    Open Curtain
                  </button>
                </div>
              </div>
              <h4 className="text-xs font-bold text-white truncate">{p.name}</h4>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs font-mono text-emerald-400">₹{p.price.toLocaleString()}</span>
                <button onClick={() => toggleReveal(i)} className="text-[10px] text-purple-400 font-mono underline">
                  {isOpen ? 'Close Mask' : 'Reveal'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default RecentlyViewedProducts16;