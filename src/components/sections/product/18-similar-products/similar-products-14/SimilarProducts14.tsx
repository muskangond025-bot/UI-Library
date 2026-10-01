import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Check } from 'lucide-react';

export default function SimilarProducts14({ data }: { data?: any }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = [
    { id: 1, title: "Artisan Ceramic Pour-Over", price: "$65", aspect: "aspect-[4/5]", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80" },
    { id: 2, title: "Precision Goose-Neck Kettle", price: "$120", aspect: "aspect-[4/3]", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80" },
    { id: 3, title: "Manual Burr Coffee Grinder", price: "$85", aspect: "aspect-[1/1]", image: "https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=800&auto=format&fit=crop&q=80" },
    { id: 4, title: "Insulated Double-Wall Server", price: "$45", aspect: "aspect-[4/5]", image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&auto=format&fit=crop&q=80" }
  ];

  return (
    <section className="w-full min-h-[640px] bg-stone-950 text-stone-100 p-6 md:p-12 rounded-3xl border border-stone-800 relative select-none flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-stone-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded text-xs font-mono font-bold uppercase tracking-wider mb-2 inline-block">
            14 / Masonry Layout
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-white">Masonry Alternatives</h2>
        </div>
        <p className="text-xs text-stone-400 max-w-xs font-sans">
          Varied aspect ratio gallery flow with corner-mounted quick action triggers.
        </p>
      </div>

      {/* Masonry Columns */}
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 my-8 space-y-6 font-sans">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -6 }}
            className="break-inside-avoid bg-stone-900 border border-stone-800 hover:border-amber-500/40 rounded-2xl p-4 relative group shadow-xl flex flex-col justify-between"
          >
            <div className={`relative w-full ${item.aspect} rounded-xl overflow-hidden bg-stone-950 mb-3`}>
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <button
                onClick={() => {
                  setSelectedId(item.id);
                  setTimeout(() => setSelectedId(null), 1800);
                }}
                className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 flex items-center justify-center font-bold shadow-lg transition-transform active:scale-95"
              >
                {selectedId === item.id ? <Check size={18} className="stroke-[3]" /> : <Plus size={18} className="stroke-[3]" />}
              </button>
            </div>

            <div>
              <h3 className="font-serif text-base text-white">{item.title}</h3>
              <span className="text-lg font-serif font-light text-amber-400 mt-1 block">{item.price}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-xs text-stone-500 font-mono border-t border-stone-800 pt-4 text-center">
        Asymmetrical masonry flow optimized for varied aspect ratio coffee gear
      </div>
    </section>
  );
}
