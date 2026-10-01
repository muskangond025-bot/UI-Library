import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap } from 'lucide-react';

export default function RecommendedProducts3({ data }: { data?: any }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      name: "Ergonomic Mesh Task Chair Ultra",
      badge: "STYLE MATCH 99%",
      price: "$450",
      desc: "Synchronous tilt mechanism with 4D adjustable armrests and lumbar support.",
      image: "https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Minimalist Floating Wooden Shelf",
      badge: "POPULAR ADD-ON",
      price: "$120",
      desc: "Solid oak wall mounting.",
      image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Architectural LED Desk Lamp",
      badge: "COLOR COMPLEMENT",
      price: "$180",
      desc: "Dimmable touch bar.",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="w-full min-h-[620px] bg-slate-950 text-white p-6 md:p-10 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 w-fit">
            <Sparkles size={14} /> BASED ON YOUR STYLE
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Asymmetric Recommendation Grid</h2>
        </div>
        <p className="text-xs text-slate-400 max-w-xs">
          Directional entrance animations with staggered bento layout positioning.
        </p>
      </div>

      {/* Asymmetric Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6">
        {/* Left Hero Bento (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          className="lg:col-span-7 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col justify-between relative group shadow-xl"
        >
          <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden bg-slate-950 mb-6">
            <img src={items[0].image} alt={items[0].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <span className="absolute top-3 left-3 bg-cyan-950/90 border border-cyan-500/40 text-cyan-400 text-xs font-bold px-3 py-1 rounded-md">
              {items[0].badge}
            </span>
          </div>

          <div>
            <h3 className="font-extrabold text-xl md:text-2xl text-white group-hover:text-cyan-400 transition-colors">
              {items[0].name}
            </h3>
            <p className="text-xs text-slate-400 mt-1">{items[0].desc}</p>
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800">
              <span className="text-2xl font-black text-cyan-400">{items[0].price}</span>
              <button
                onClick={() => {
                  setSelectedId(items[0].id);
                  setTimeout(() => setSelectedId(null), 1800);
                }}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95 shadow-lg"
              >
                {selectedId === items[0].id ? <Check size={16} /> : <Zap size={16} />}
                {selectedId === items[0].id ? "ADDED TO CART!" : "ADD HERO PICK"}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Stack (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {items.slice(1).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-5 flex flex-col justify-between relative group shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-slate-950 shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30 mb-1 inline-block">
                    {item.badge}
                  </span>
                  <h3 className="font-bold text-base text-white line-clamp-1 group-hover:text-cyan-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                <span className="text-lg font-bold text-white">{item.price}</span>
                <button
                  onClick={() => {
                    setSelectedId(item.id);
                    setTimeout(() => setSelectedId(null), 1800);
                  }}
                  className="px-4 py-2 bg-slate-800 hover:bg-cyan-500 text-white hover:text-slate-950 rounded-lg text-xs font-bold transition-all"
                >
                  {selectedId === item.id ? "Done!" : "Add Pick"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-xs text-slate-500 border-t border-slate-800 pt-4 flex justify-between">
        <span>Asymmetric bento grid layout with directional entrance animations</span>
        <span className="font-mono">3 personalized matches</span>
      </div>
    </section>
  );
}
