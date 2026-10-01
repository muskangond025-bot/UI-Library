import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';

export default function SimilarProducts13({ data }: { data?: any }) {
  const [activeId, setActiveId] = useState<number>(1);

  const items = [
    {
      id: 1,
      name: "Monolith Arc Ultra Studio Desk",
      price: "$1,499",
      rating: "4.9",
      diff: "Solid Walnut / Motorized Dual Lift",
      desc: "Architect-grade motorized standing desk crafted from sustainably harvested walnut timber.",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Minimalist Bamboo Standing Workstation",
      price: "$980",
      rating: "4.8",
      diff: "-$519 lower price",
      desc: "Eco-friendly natural bamboo top with quiet dual-motor lift mechanism.",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Industrial Steel Frame Executive Desk",
      price: "$1,250",
      rating: "4.7",
      diff: "Heavy Duty Load 150kg",
      desc: "Reinforced steel frame with integrated power strip and cable management channels.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop&q=80"
    }
  ];

  const featured = items.find((i) => i.id === activeId) || items[0];

  return (
    <section className="w-full min-h-[640px] bg-stone-950 text-white p-6 md:p-12 rounded-3xl border border-stone-800 relative select-none flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-stone-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded text-xs font-mono font-bold uppercase tracking-wider mb-2 inline-block">
            13 / Featured Showcase
          </span>
          <h2 className="text-2xl md:text-4xl font-light font-serif text-white">Large Featured Item Showcase</h2>
        </div>
        <p className="text-xs text-stone-400 max-w-xs font-sans">
          Click any alternative on the right to expand its full high-res preview and specifications on the left.
        </p>
      </div>

      {/* Split Showcase Layout: Left Hero (50%), Right List (50%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 font-sans">
        {/* Left Hero Featured Item */}
        <motion.div
          key={featured.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 bg-stone-900 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between shadow-2xl"
        >
          <div className="relative w-full h-72 rounded-xl overflow-hidden bg-stone-950 mb-6">
            <img src={featured.image} alt={featured.name} className="w-full h-full object-cover" />
            <span className="absolute top-3 left-3 bg-amber-400 text-stone-950 text-xs font-mono font-bold px-3 py-1 rounded">
              {featured.diff}
            </span>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl text-white font-light">{featured.name}</h3>
              <span className="text-2xl font-serif text-amber-400 font-bold">{featured.price}</span>
            </div>
            <p className="text-xs text-stone-400 mt-2 leading-relaxed">{featured.desc}</p>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
            <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
              <Star size={14} className="fill-amber-400" /> {featured.rating} Rating
            </div>
            <button className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-2">
              <Zap size={15} /> Select Featured Model
            </button>
          </div>
        </motion.div>

        {/* Right Stack List */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <span className="text-xs font-mono text-stone-400 uppercase tracking-widest block mb-1">
            SELECT ALTERNATIVE MODEL
          </span>
          {items.map((item) => {
            const isSelected = item.id === activeId;
            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                whileHover={{ x: 4 }}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center gap-4 ${
                  isSelected
                    ? 'bg-stone-900 border-amber-500/60 shadow-lg'
                    : 'bg-stone-950 border-stone-800 hover:border-stone-700'
                }`}
              >
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover shrink-0" />
                <div className="flex-1">
                  <span className="text-[10px] font-mono text-amber-400 block mb-0.5">{item.diff}</span>
                  <h4 className="font-serif text-sm text-white line-clamp-1">{item.name}</h4>
                  <span className="text-base font-bold text-amber-400 mt-1 block">{item.price}</span>
                </div>
                {isSelected && <Check size={20} className="text-amber-400 shrink-0" />}
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="text-xs text-stone-500 font-mono border-t border-stone-800 pt-4 text-center">
        Featured showcase selector with synchronized spec focus
      </div>
    </section>
  );
}
