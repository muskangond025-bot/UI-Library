import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Repeat, Check, ArrowRight } from 'lucide-react';

export default function SimilarProducts2({ data }: { data?: any }) {
  const [switchedId, setSwitchedId] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const items = [
    { id: 1, title: "Precision Wireless Mouse Pro", price: "$129", tag: "Same Ergonomics", rating: "4.9", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80" },
    { id: 2, title: "Ultra-Lightweight Mesh Edition", price: "$109", tag: "-40g Lighter", rating: "4.8", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80" },
    { id: 3, title: "Silent Click Workspace Mouse", price: "$89", tag: "Near Silent", rating: "4.7", image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&auto=format&fit=crop&q=80" },
    { id: 4, title: "Dual Wireless Bluetooth Mouse", price: "$149", tag: "3 Device Sync", rating: "4.9", image: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=800&auto=format&fit=crop&q=80" },
    { id: 5, title: "Vertical Ergonomic Sculpt", price: "$139", tag: "Wrist Relief", rating: "4.8", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80" }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white p-6 md:p-10 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Header with Navigation controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 z-10">
        <div>
          <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
            02 / Horizontal Rail
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Similar Product Rail</h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleScroll('left')}
            className="w-11 h-11 rounded-full bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-all shadow-md active:scale-95"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="w-11 h-11 rounded-full bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-all shadow-md active:scale-95"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Scrollable Rail Track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-none py-6 my-auto scroll-smooth z-10"
        style={{ scrollbarWidth: 'none' }}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -6 }}
            className="min-w-[280px] max-w-[280px] bg-slate-950/80 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-4 flex flex-col justify-between group transition-all shadow-lg"
          >
            <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-900 mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2.5 left-2.5 bg-indigo-950/90 border border-indigo-500/40 text-indigo-300 text-[10px] font-bold px-2.5 py-1 rounded-md backdrop-blur-md">
                {item.tag}
              </span>
            </div>

            <div>
              <h3 className="font-bold text-sm text-slate-100 group-hover:text-indigo-400 transition-colors line-clamp-1">
                {item.title}
              </h3>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-800/80">
                <span className="text-lg font-black text-white">{item.price}</span>

                <button
                  onClick={() => {
                    setSwitchedId(item.id);
                    setTimeout(() => setSwitchedId(null), 1800);
                  }}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-xs font-bold flex items-center gap-1.5 transition-all shadow-md active:scale-95 group/btn"
                >
                  {switchedId === item.id ? (
                    <span className="flex items-center gap-1 text-emerald-300">
                      <Check size={14} /> Switched
                    </span>
                  ) : (
                    <>
                      <span>Quick Switch</span>
                      <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-800 pt-4 z-10">
        <span>Swipe or scroll horizontally to explore more models</span>
        <span className="font-mono text-indigo-400">5 items available</span>
      </div>
    </section>
  );
}
