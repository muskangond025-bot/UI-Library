import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Sparkles } from 'lucide-react';

export default function SimilarProducts5({ data }: { data?: any }) {
  const [activeId, setActiveId] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      name: "CyberDeck OLED Ultra Keyboard",
      tag: "FEATURED ALTERNATIVE",
      price: "$229",
      diff: "Hot-swappable Switches / Gasket Mount",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Compact Wireless 65% Board",
      tag: "COMPACT SIZE",
      price: "$179",
      diff: "-30% desk space required",
      image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Ergonomic Split Mechanical",
      tag: "POSTURE SPECIALIST",
      price: "$249",
      diff: "Adjustable tenting tilt angles",
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="w-full min-h-[620px] bg-slate-950 text-white p-6 md:p-10 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">
            05 / Asymmetric Bento Grid
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Asymmetric Recommendations</h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Sparkles size={16} className="text-cyan-400" />
          <span>Dynamic Spec Mapping</span>
        </div>
      </div>

      {/* Asymmetric Layout: 2 Cols, Left Hero, Right Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6">
        {/* Left Hero Card (7 Cols) */}
        <motion.div
          whileHover={{ y: -4 }}
          className="lg:col-span-7 bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group shadow-xl"
        >
          <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden bg-slate-950 mb-6">
            <img
              src={items[0].image}
              alt={items[0].name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <span className="absolute top-3 left-3 bg-cyan-950/90 border border-cyan-500/40 text-cyan-400 text-xs font-bold px-3 py-1 rounded-md backdrop-blur-md">
              {items[0].tag}
            </span>
          </div>

          <div>
            <span className="text-xs text-cyan-400 font-mono block mb-1">{items[0].diff}</span>
            <h3 className="font-extrabold text-xl md:text-2xl text-white group-hover:text-cyan-400 transition-colors">
              {items[0].name}
            </h3>
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800">
              <span className="text-2xl font-black text-cyan-400">{items[0].price}</span>
              <button
                onClick={() => {
                  setActiveId(items[0].id);
                  setTimeout(() => setActiveId(null), 1800);
                }}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg active:scale-95"
              >
                {activeId === items[0].id ? <Check size={16} /> : <Zap size={16} />}
                {activeId === items[0].id ? "Selected!" : "Swap Featured"}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Column Stack (5 Cols, 2 items) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {items.slice(1).map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              className="bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-5 flex flex-col justify-between relative group shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-slate-950 shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30 mb-1 inline-block">
                    {item.tag}
                  </span>
                  <h3 className="font-bold text-base text-white line-clamp-1 group-hover:text-cyan-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{item.diff}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                <span className="text-lg font-bold text-white">{item.price}</span>
                <button
                  onClick={() => {
                    setActiveId(item.id);
                    setTimeout(() => setActiveId(null), 1800);
                  }}
                  className="px-4 py-2 bg-slate-800 hover:bg-cyan-500 text-white hover:text-slate-950 rounded-lg text-xs font-bold transition-all border border-slate-700 hover:border-cyan-500"
                >
                  {activeId === item.id ? "Done!" : "Select"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-xs text-slate-500 border-t border-slate-800 pt-4 flex justify-between">
        <span>Asymmetric grid layout designed for visual hierarchy</span>
        <span className="font-mono">3 alternative models matching active query</span>
      </div>
    </section>
  );
}
