import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

const mockCards = [
  {
    id: 'rolo-1',
    tab: 'RESIDENCE',
    title: 'Primary Residence Penthouse',
    recipient: 'Alex Morgan',
    street: '450 Fashion Avenue, Penthouse 14B',
    city: 'New York, NY 10001',
    color: 'bg-slate-900 border-slate-700 text-slate-100',
    accent: 'bg-indigo-500',
    isDefault: true,
  },
  {
    id: 'rolo-2',
    tab: 'STUDIO',
    title: 'Design Studio Workspace',
    recipient: 'Alex Morgan // Studio',
    street: '88 Wythe Avenue, Suite 402',
    city: 'Brooklyn, NY 11211',
    color: 'bg-stone-900 border-stone-700 text-stone-100',
    accent: 'bg-emerald-500',
    isDefault: false,
  },
  {
    id: 'rolo-3',
    tab: 'VILLA',
    title: 'East Hampton Villa',
    recipient: 'Alex Morgan',
    street: '142 Ocean Drive',
    city: 'East Hampton, NY 11937',
    color: 'bg-zinc-900 border-zinc-700 text-zinc-100',
    accent: 'bg-amber-500',
    isDefault: false,
  }
];

export const AccountAddressBook7: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string>('rolo-1');
  const [isFanned, setIsFanned] = useState<boolean>(false);

  return (
    <div className="w-full bg-[#121214] text-neutral-100 min-h-[750px] p-6 sm:p-10 font-sans border border-neutral-800 rounded-3xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-neutral-800 mb-8 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">PHYSICAL ROLODEX DECK</span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">Rolodex Address Deck</h1>
          <p className="text-xs text-neutral-400 mt-1">Click index tabs or hover deck to cycle saved delivery cards</p>
        </div>

        <button
          onClick={() => setIsFanned(!isFanned)}
          className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-xs font-mono rounded-full border border-neutral-700 flex items-center gap-2 transition-colors"
        >
          <Layers className="w-4 h-4 text-amber-400" />
          <span>{isFanned ? 'Collapse Rolodex' : 'Fan Out Rolodex'}</span>
        </button>
      </div>

      {/* Main Rolodex Stack Area */}
      <div 
        onMouseEnter={() => setIsFanned(true)}
        onMouseLeave={() => setIsFanned(false)}
        className="max-w-3xl mx-auto my-6 relative min-h-[460px] flex items-center justify-center"
      >
        {mockCards.map((card, idx) => {
          const isActive = activeCardId === card.id;
          const rotation = isFanned ? (idx - 1) * 8 : (idx - 1) * 3;
          const yOffset = isFanned ? idx * 30 : idx * 15;
          const scale = isActive ? 1.02 : 1 - idx * 0.04;

          return (
            <motion.div
              key={card.id}
              onClick={() => setActiveCardId(card.id)}
              animate={{
                rotate: rotation,
                y: yOffset,
                scale: scale,
                zIndex: isActive ? 40 : 10 - idx,
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className={`absolute w-full p-8 border-2 rounded-3xl cursor-pointer shadow-2xl transition-shadow ${card.color} ${isActive ? 'ring-2 ring-amber-400/80 shadow-amber-500/10' : 'hover:border-neutral-500'}`}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <div className={`px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase text-white ${card.accent}`}>
                    ROLODEX // {card.tab}
                  </div>
                  <h2 className="text-xl font-bold text-white">{card.title}</h2>
                </div>

                {card.isDefault && (
                  <span className="text-xs font-mono px-3 py-1 bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full font-bold">
                    DEFAULT ADDRESS
                  </span>
                )}
              </div>

              <div className="p-4 bg-neutral-950/70 rounded-2xl border border-neutral-800 text-xs font-mono space-y-1">
                <p className="text-white font-bold">{card.recipient}</p>
                <p className="text-neutral-300">{card.street}</p>
                <p className="text-neutral-400">{card.city}</p>
              </div>

              <div className="pt-6 border-t border-neutral-800 flex justify-between items-center text-xs font-mono mt-6">
                <span className="text-neutral-400">{isActive ? 'ACTIVE ROLODEX ITEM' : 'CLICK TO REVEAL'}</span>
                <button className="text-amber-300 font-bold hover:underline">Edit Rolodex Card →</button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
