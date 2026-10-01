import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Check, Eye } from 'lucide-react';

export default function SimilarProducts3({ data }: { data?: any }) {
  const [addedId, setAddedId] = useState<number | null>(null);

  const items = [
    { id: 1, title: "Solstice Linen Blazer", price: "$240", tag: "Alternative Fit", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80" },
    { id: 2, title: "Minimalist Trench Coat", price: "$310", tag: "Waterproof Wool", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&auto=format&fit=crop&q=80" },
    { id: 3, title: "Structured Tailored Suit", price: "$290", tag: "Italian Cotton", image: "https://images.unsplash.com/photo-1497339100210-9e87df79c218?w=800&auto=format&fit=crop&q=80" }
  ];

  return (
    <section className="w-full min-h-[640px] bg-neutral-900 text-neutral-100 p-6 md:p-12 rounded-3xl border border-neutral-800 relative select-none flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800 pb-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-amber-400 font-mono mb-1 block">
            03 / Large Image Focus
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight font-serif text-neutral-100">
            Visual Alternatives
          </h2>
        </div>
        <p className="text-xs text-neutral-400 max-w-xs font-sans">
          Image-dominant selection highlighting subtle color shifts and tailored silhouettes.
        </p>
      </div>

      {/* Grid of 3 large portrait cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8 font-sans">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="group relative flex flex-col justify-between bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 hover:border-amber-500/40 transition-all shadow-2xl"
          >
            {/* Tall Image Canvas */}
            <div className="relative w-full h-[380px] overflow-hidden bg-neutral-900">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />

              <span className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-md px-3 py-1 text-xs font-mono text-amber-300 border border-neutral-800 rounded-md">
                {item.tag}
              </span>

              {/* Floating Circular Action Button on Hover */}
              <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <button
                  onClick={() => {
                    setAddedId(item.id);
                    setTimeout(() => setAddedId(null), 1800);
                  }}
                  className="w-14 h-14 rounded-full bg-amber-400 hover:bg-amber-300 text-neutral-950 flex items-center justify-center shadow-xl transition-all scale-90 group-hover:scale-100 active:scale-95 font-bold"
                  title="Quick Select"
                >
                  {addedId === item.id ? <Check size={24} className="stroke-[3]" /> : <Plus size={24} className="stroke-[3]" />}
                </button>
              </div>
            </div>

            {/* Minimal Metadata Bar at Bottom */}
            <div className="p-5 flex items-center justify-between border-t border-neutral-800/80 bg-neutral-950">
              <div>
                <h3 className="font-serif text-lg text-neutral-100 font-light group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs text-neutral-500 font-mono">Size 38–44</span>
              </div>
              <span className="text-xl font-light font-serif text-amber-400">{item.price}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center text-xs text-neutral-500 font-mono border-t border-neutral-800 pt-4">
        Hover image to trigger circular floating action controls
      </div>
    </section>
  );
}
