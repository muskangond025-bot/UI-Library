import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const accordionArticles = [
  { id: 1, title: 'THE RISE OF NEURAL INTERFACES', desc: 'Direct brain-computer links for real-time thought typing.', img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'SYNTHETIC BIOLOGY INSIGHTS', desc: 'Engineering DNA strands to store petabytes of archival code.', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'ZERO-GRAVITY MANUFACTURING', desc: 'Flawless fiber optics forged in low-Earth orbit facilities.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80' },
];

export function BlogHero16({ data, section }: { data?: any; section?: any }) {
  const [active, setActive] = useState(1);

  return (
    <div className="w-full bg-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
      <div className="space-y-6 max-w-6xl mx-auto">
        <div className="text-xs font-mono text-amber-400 uppercase tracking-widest">
          SLIDE ACCORDION HERO DISPATCHES
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-[380px]">
          {accordionArticles.map((art) => (
            <motion.div
              key={art.id}
              onClick={() => setActive(art.id)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer border p-6 flex flex-col justify-between transition-all duration-500 ${
                active === art.id
                  ? 'border-amber-400 bg-slate-900/90 shadow-xl shadow-amber-500/10'
                  : 'border-slate-800 bg-slate-950/60 opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={art.img}
                alt={art.title}
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="relative z-10 space-y-3">
                <span className="text-xs font-mono text-slate-400">0{art.id}</span>
                <h3 className="text-xl font-bold text-white leading-snug">{art.title}</h3>
                <p className="text-slate-300 text-xs">{art.desc}</p>
              </div>
              <div className="relative z-10 pt-4">
                <button className="px-4 py-2 bg-amber-400 text-slate-950 font-bold text-xs rounded-lg inline-flex items-center gap-2">
                  <span>READ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogHero16;
