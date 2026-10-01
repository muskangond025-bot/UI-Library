import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';

export default function SimilarProducts18({ data }: { data?: any }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = [
    { id: 1, title: "Grand Complication Rose Gold", code: "REF. 5980/1R", price: "$48,500", diff: "Rose Gold / Self-Winding", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80" },
    { id: 2, title: "Nautilus Platinum Blue Dial", code: "REF. 5711/1P", price: "$52,000", diff: "Platinum Case / Diamond Bezel", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80" },
    { id: 3, title: "Aquanaut Travel Time Steel", code: "REF. 5164A-001", price: "$39,000", diff: "Dual Timezone / Rubber Strap", image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&auto=format&fit=crop&q=80" },
    { id: 4, title: "Calatrava Officer Case White Gold", code: "REF. 5227G-010", price: "$41,200", diff: "Hinged Dust Cover", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80" }
  ];

  return (
    <section className="w-full min-h-[620px] bg-neutral-950 text-neutral-100 p-8 md:p-14 rounded-3xl border border-neutral-800 font-serif select-none flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-6 gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-amber-400 block mb-1">
            18 / Compact Luxury List
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white italic">
            Luxury Timepiece Catalog
          </h2>
        </div>
        <p className="text-xs text-neutral-400 font-sans max-w-xs">
          High-density row presentation for ultra-luxury watches & high-jewelry alternatives.
        </p>
      </div>

      {/* List Rows */}
      <div className="my-6 space-y-3 font-sans">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ x: 6 }}
            className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-amber-500/40 flex items-center justify-between transition-all group"
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-neutral-950 shrink-0 border border-neutral-800">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-amber-400 block mb-0.5">{item.code} • {item.diff}</span>
                <h3 className="font-serif text-lg font-normal text-white group-hover:text-amber-300 transition-colors">{item.title}</h3>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="font-serif text-xl font-light text-amber-400">{item.price}</span>
              <button
                onClick={() => {
                  setSelectedId(item.id);
                  setTimeout(() => setSelectedId(null), 1800);
                }}
                className="group/btn relative text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white flex items-center gap-1.5 py-1"
              >
                {selectedId === item.id ? (
                  <span className="text-emerald-400 flex items-center gap-1 font-bold">
                    <Check size={14} /> Selected
                  </span>
                ) : (
                  <>
                    <span>Select Model</span>
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-400 group-hover/btn:w-full transition-all duration-300" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-neutral-800 pt-4 flex justify-between items-center text-xs font-mono text-neutral-500">
        <span>HAUTE HORLOGERIE COLLECTION</span>
        <span>4 PIECES MATCHING ACTIVE SPEC</span>
      </div>
    </section>
  );
}
