"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalPromotionalCards6() {
  const [active, setActive] = useState(0);
  const cards = [
    { title: 'Luxury Apparel Pass', off: '30% OFF', code: 'LUXURY30', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop', desc: 'Exclusive VIP discount on all couture items.' },
    { title: 'Tech Hardware Pass', off: '25% OFF', code: 'TECH25', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', desc: 'Instant savings on next-gen electronics.' },
    { title: 'Jewelry Reserve Pass', off: '40% OFF', code: 'JEWEL40', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop', desc: 'Prestige access to diamond collections.' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-10">Expandable Promo Accordion</h2>

        <div className="flex flex-col lg:flex-row gap-4 h-[440px]">
          {cards.map((c, idx) => {
            const isSel = active === idx;
            return (
              <motion.div
                key={idx}
                onClick={() => setActive(idx)}
                layout
                className={`relative rounded-3xl overflow-hidden cursor-pointer p-6 flex flex-col justify-between transition-all duration-500 ${isSel ? 'lg:flex-[3] bg-indigo-950 border-2 border-indigo-500' : 'lg:flex-[1] bg-slate-800'}`}
              >
                <div className="absolute inset-0 z-0">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                </div>
                <div className="relative z-10 flex justify-between items-center">
                  <span className="text-xs font-mono font-bold px-3 py-1 bg-indigo-600 rounded-full text-white">{c.off}</span>
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
                <div className="relative z-10">
                  <span className="text-xs font-mono text-indigo-400">CODE: {c.code}</span>
                  <h3 className="text-2xl font-bold text-white">{c.title}</h3>
                  {isSel && <p className="text-sm text-slate-300 mt-2">{c.desc}</p>}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}