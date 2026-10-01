import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check, ArrowRight, Sparkles } from 'lucide-react';

export default function RecommendedProducts16({ data }: { data?: any }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const items = [
    { id: 1, title: "Precision Wireless Keyboard", price: "$149", tag: "COMPLETE YOUR LOOK", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80" },
    { id: 2, title: "Ergonomic Sculpted Mouse", price: "$99", tag: "FREQUENTLY BOUGHT", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80" },
    { id: 3, title: "4K Monitor LED Light", price: "$129", tag: "RECOMMENDED PAIR", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80" },
    { id: 4, title: "Aluminum Stand Riser", price: "$79", tag: "TOP RATED", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80" }
  ];

  const handleScroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white p-6 md:p-10 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 z-10">
        <div>
          <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 w-fit">
            <Sparkles size={14} /> COMPLETE YOUR LOOK
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Elastic Interactive Carousel</h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleScroll('left')}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-all active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-all active:scale-95"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Elastic Carousel Track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-none py-6 my-auto scroll-smooth z-10"
        style={{ scrollbarWidth: 'none' }}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="min-w-[280px] max-w-[280px] bg-slate-950 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-4 flex flex-col justify-between group transition-all shadow-xl"
          >
            <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-900 mb-4">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-2.5 left-2.5 bg-indigo-950/90 border border-indigo-500/40 text-indigo-300 text-[10px] font-bold px-2.5 py-1 rounded">
                {item.tag}
              </span>
            </div>

            <div>
              <h3 className="font-bold text-sm text-slate-100 group-hover:text-indigo-400 transition-colors line-clamp-1">{item.title}</h3>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-800">
                <span className="text-lg font-black text-white">{item.price}</span>
                <button
                  onClick={() => {
                    setSelectedId(item.id);
                    setTimeout(() => setSelectedId(null), 1800);
                  }}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95"
                >
                  {selectedId === item.id ? (
                    <span className="flex items-center gap-1 text-emerald-300">
                      <Check size={14} /> Added
                    </span>
                  ) : (
                    <>
                      <span>Add Pick</span>
                      <ArrowRight size={13} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-800 pt-4 z-10">
        <span>Elastic carousel movement with drag spring physics</span>
        <span className="font-mono text-indigo-400">4 carousel cards</span>
      </div>
    </section>
  );
}
