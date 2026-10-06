import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const mockData = {
  magazineIssue: 'VOL. 24 — CLIENT PORTFOLIO',
  user: {
    name: 'ALEX MORGAN',
    title: 'COLLECTOR & PLATINUM VIP',
    since: 'EST. 2024',
    city: 'PARIS / NEW YORK',
  },
  sections: [
    {
      num: '01',
      tagline: 'CURATED PURCHASES & SHIPMENTS',
      title: 'Active Orders',
      highlight: '3 Items in Transit',
      desc: 'Architectural Silk Trenchcoat, Italian Calfskin Tote, Cashmere Scarf.',
      value: '$1,420.00'
    },
    {
      num: '02',
      tagline: 'PERSONAL REWARD ACCUMULATION',
      title: 'Loyalty & Credit',
      highlight: '3,450 Points Balance',
      desc: 'Tier status active. Unlocked complimentary global express courier delivery.',
      value: '$35.00 Credit'
    },
    {
      num: '03',
      tagline: 'SAVED SELECTIONS & WISHLIST',
      title: 'Private Vault',
      highlight: '14 Saved Products',
      desc: '4 rare archive pieces on price alert. 2 items back in limited stock.',
      value: '14 Items'
    }
  ]
};

export const AccountOverview8: React.FC = () => {
  return (
    <div className="w-full bg-[#111111] text-[#e5e5e5] min-h-[750px] p-6 sm:p-12 font-serif border border-neutral-800 rounded-3xl relative overflow-hidden">
      {/* Top Magazine Header */}
      <div className="flex justify-between items-baseline border-b border-neutral-800 pb-6 mb-10">
        <span className="text-xs font-mono tracking-[0.3em] uppercase text-neutral-400">{mockData.magazineIssue}</span>
        <span className="text-xs font-mono text-neutral-400">{mockData.user.city}</span>
      </div>

      {/* Main Magazine Hero Title */}
      <div className="mb-14">
        <div className="flex items-center gap-4 text-xs font-mono uppercase text-amber-300 tracking-widest mb-2">
          <Sparkles className="w-4 h-4" /> {mockData.user.title}
        </div>
        <h1 className="text-5xl sm:text-7xl font-normal uppercase tracking-tight text-white">
          {mockData.user.name}
        </h1>
        <p className="text-sm font-sans text-neutral-400 max-w-xl mt-3 font-light leading-relaxed">
          Exclusive client summary portal. Real-time updates on active acquisitions, private archive wishlists, and loyalty tier privileges.
        </p>
      </div>

      {/* 3 Asymmetric Magazine Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-neutral-800">
        {mockData.sections.map((sec, idx) => (
          <motion.div
            key={sec.num}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.15, duration: 0.7 }}
            className="p-6 bg-neutral-900/60 border border-neutral-800 rounded-2xl flex flex-col justify-between group hover:border-amber-400/40 transition-all"
          >
            <div>
              {/* Sliding Tagline */}
              <div className="overflow-hidden mb-3">
                <motion.div 
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                  className="text-[10px] font-mono tracking-widest text-amber-300 uppercase"
                >
                  {sec.tagline}
                </motion.div>
              </div>

              <div className="text-4xl font-serif text-neutral-400 group-hover:text-white transition-colors">{sec.num}</div>
              <h2 className="text-2xl font-normal text-white mt-2">{sec.title}</h2>
              <div className="text-xs font-mono text-emerald-400 mt-1">{sec.highlight}</div>
              <p className="text-xs font-sans text-neutral-400 mt-3 font-light leading-relaxed">{sec.desc}</p>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800 flex justify-between items-center">
              <span className="text-sm font-mono font-bold text-amber-200">{sec.value}</span>
              <button className="p-2 bg-neutral-800 hover:bg-amber-300 hover:text-black rounded-full transition-colors text-white">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
