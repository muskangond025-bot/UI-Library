import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

export default function RecommendedProducts17({ data }: { data?: any }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      name: "Monolith Studio Headphones",
      badge: "YOU MAY ALSO LIKE",
      price: "$299",
      img1: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      img2: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Ultralight Carbon Headset",
      badge: "STYLE PAIR",
      price: "$310",
      img1: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80",
      img2: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Studio Reference 90",
      badge: "TOP MATCH",
      price: "$349",
      img1: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      img2: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="w-full min-h-[620px] bg-slate-950 text-white p-6 md:p-10 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded text-xs font-mono font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 w-fit">
            <Sparkles size={14} /> YOU MAY ALSO LIKE
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Image Swap Recommendation Rail</h2>
        </div>
        <p className="text-xs text-slate-400 max-w-xs">
          Hover cards to swap product angle images with floating glass CTA pills.
        </p>
      </div>

      {/* Grid of Image Swap Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 font-sans">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -6 }}
            className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-5 flex flex-col justify-between shadow-2xl group transition-all"
          >
            <div>
              {/* Image Swap Container */}
              <div className="relative w-full h-56 rounded-xl overflow-hidden bg-slate-950 mb-4">
                <img
                  src={item.img1}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500 absolute inset-0"
                />
                <img
                  src={item.img2}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0"
                />
                <span className="absolute top-2.5 left-2.5 bg-cyan-950/90 text-cyan-400 border border-cyan-500/30 text-[10px] font-bold px-2.5 py-1 rounded">
                  {item.badge}
                </span>
              </div>

              <h3 className="font-extrabold text-base text-white">{item.name}</h3>
              <span className="text-xl font-black text-cyan-400 mt-1 block">{item.price}</span>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  setSelectedId(item.id);
                  setTimeout(() => setSelectedId(null), 1800);
                }}
                className="w-full py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
              >
                {selectedId === item.id ? (
                  <span className="flex items-center gap-1 font-bold">
                    <Check size={16} /> ADDED!
                  </span>
                ) : (
                  <>
                    <span>SELECT ITEM</span>
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-xs text-slate-500 font-mono border-t border-slate-800 pt-4 text-center">
        Product image swap on hover with floating CTA pills
      </div>
    </section>
  );
}
