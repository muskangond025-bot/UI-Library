import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, Zap } from 'lucide-react';

export default function RecommendedProducts13({ data }: { data?: any }) {
  const [activeId, setActiveId] = useState<number>(1);

  const items = [
    {
      id: 1,
      name: "Monolith Arc Studio Desk",
      price: "$1,499",
      badge: "99% MATCH",
      desc: "Architect-grade motorized standing desk crafted from sustainably harvested walnut timber.",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Minimalist Bamboo Workstation",
      price: "$980",
      badge: "STYLE PAIR",
      desc: "Eco-friendly natural bamboo top with quiet dual-motor lift mechanism.",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Industrial Executive Desk",
      price: "$1,250",
      badge: "TOP ADD-ON",
      desc: "Reinforced steel frame with integrated power strip and cable management channels.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop&q=80"
    }
  ];

  const featured = items.find((i) => i.id === activeId) || items[0];

  return (
    <section className="w-full min-h-[640px] bg-slate-950 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/15 blur-[160px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center z-10 max-w-xl mx-auto">
        <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 w-fit mx-auto">
          <Sparkles size={14} /> RECOMMENDED FOCUS
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">Radial Showcase Recommendations</h2>
        <p className="text-xs text-slate-400 mt-1">Tap orbiting items below to bring them to the central recommendation stage.</p>
      </div>

      {/* Radial Central Focal Showcase */}
      <div className="my-8 z-10 max-w-2xl mx-auto w-full">
        <motion.div
          key={featured.id}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-2xl"
        >
          <div className="w-full md:w-1/2 h-56 rounded-2xl overflow-hidden bg-slate-950">
            <img src={featured.image} alt={featured.name} className="w-full h-full object-cover" />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
            <div>
              <span className="px-3 py-1 bg-cyan-950 text-cyan-400 border border-cyan-500/40 text-[10px] font-mono font-bold rounded-full inline-block mb-2">
                {featured.badge}
              </span>
              <h3 className="font-extrabold text-xl text-white">{featured.name}</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{featured.desc}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-2xl font-black text-cyan-400">{featured.price}</span>
              <button className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95 shadow-md">
                <Zap size={15} /> Select Pick
              </button>
            </div>
          </div>
        </motion.div>

        {/* Orbiting Selector Pills */}
        <div className="flex justify-center gap-4 mt-6">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all border ${
                item.id === activeId
                  ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-lg'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
              }`}
            >
              {item.name.split(' ')[0]} ({item.price})
            </button>
          ))}
        </div>
      </div>

      <div className="text-xs text-slate-500 font-mono border-t border-slate-800 pt-4 text-center z-10">
        Image zoom transition with central focal focus
      </div>
    </section>
  );
}
