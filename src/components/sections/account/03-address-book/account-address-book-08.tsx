import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const mockData = {
  manifestNo: 'MANIFEST NO. 99401-NY // VOL. 24',
  user: 'ALEX MORGAN',
  sections: [
    {
      num: '01',
      tagline: 'PRIMARY RESIDENTIAL MANIFEST',
      title: 'Fashion Ave Penthouse',
      recipient: 'Alex Morgan',
      street: '450 Fashion Avenue, Penthouse 14B',
      city: 'New York, NY 10001',
      badge: 'Default Dispatch'
    },
    {
      num: '02',
      tagline: 'COMMERCIAL STUDIO MANIFEST',
      title: 'Wythe Avenue Studio',
      recipient: 'Alex Morgan // Studio',
      street: '88 Wythe Avenue, Suite 402',
      city: 'Brooklyn, NY 11211',
      badge: 'Commercial Freight'
    },
    {
      num: '03',
      tagline: 'COASTAL RETREAT MANIFEST',
      title: 'East Hampton Residence',
      recipient: 'Alex Morgan',
      street: '142 Ocean Drive',
      city: 'East Hampton, NY 11937',
      badge: 'Seasonal Destination'
    }
  ]
};

export const AccountAddressBook8: React.FC = () => {
  return (
    <div className="w-full bg-[#111111] text-[#e5e5e5] min-h-[750px] p-6 sm:p-12 font-serif border border-neutral-800 rounded-3xl relative overflow-hidden">
      {/* Top Magazine Header */}
      <div className="flex justify-between items-baseline border-b border-neutral-800 pb-6 mb-10">
        <span className="text-xs font-mono tracking-[0.3em] uppercase text-neutral-400">{mockData.manifestNo}</span>
        <span className="text-xs font-mono text-neutral-400">NEW YORK / HAMPTONS</span>
      </div>

      {/* Main Magazine Hero Title */}
      <div className="mb-14">
        <div className="flex items-center gap-4 text-xs font-mono uppercase text-amber-300 tracking-widest mb-2">
          <Sparkles className="w-4 h-4" /> CLIENT SHIPPING MANIFEST DIRECTORY
        </div>
        <h1 className="text-5xl sm:text-7xl font-normal uppercase tracking-tight text-white">
          COURIER MANIFESTS
        </h1>
        <p className="text-sm font-sans text-neutral-400 max-w-xl mt-3 font-light leading-relaxed">
          Official shipping destinations and courier manifest specifications for client Alex Morgan.
        </p>
      </div>

      {/* 3 Asymmetric Columns */}
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
              <div className="text-xs font-mono text-emerald-400 mt-1">{sec.badge}</div>

              <div className="mt-4 p-4 bg-neutral-950/80 rounded-xl border border-neutral-800 text-xs font-mono space-y-1">
                <p className="text-white font-bold">{sec.recipient}</p>
                <p className="text-neutral-400">{sec.street}</p>
                <p className="text-neutral-400">{sec.city}</p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800 flex justify-between items-center">
              <span className="text-xs font-mono text-neutral-400">MANIFEST #{sec.num}</span>
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
