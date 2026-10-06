import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Award, Star, Layers } from 'lucide-react';

const mockCards = [
  {
    id: 'orders',
    title: 'Recent Orders Stack',
    subtitle: '3 Active Orders • #DH-9941 In Transit',
    icon: ShoppingBag,
    color: 'bg-slate-900 border-slate-700 text-slate-100',
    accent: 'bg-blue-500',
    stats: [
      { label: 'Total Purchases', val: '18 Orders' },
      { label: 'Latest Shipment', val: 'Silk Knit Trench' },
      { label: 'Status', val: 'Out for Delivery' }
    ]
  },
  {
    id: 'wishlist',
    title: 'Wishlist & Saved Items',
    subtitle: '14 Saved Products • 4 On Special Price Alert',
    icon: Heart,
    color: 'bg-stone-900 border-stone-700 text-stone-100',
    accent: 'bg-rose-500',
    stats: [
      { label: 'Saved Value', val: '$2,840' },
      { label: 'Price Drops', val: '3 Items' },
      { label: 'Top Item', val: 'Leather Tote' }
    ]
  },
  {
    id: 'rewards',
    title: 'Rewards & Platinum VIP',
    subtitle: '3,450 Points • $35 Redeemable Credit',
    icon: Award,
    color: 'bg-zinc-900 border-zinc-700 text-zinc-100',
    accent: 'bg-amber-500',
    stats: [
      { label: 'VIP Level', val: 'Platinum Elite' },
      { label: 'Perks', val: 'Free Express Shipping' },
      { label: 'Points to Next', val: '150 Pts' }
    ]
  },
  {
    id: 'reviews',
    title: 'Verified Customer Reviews',
    subtitle: '9 Reviews • 4.9 Star Rating',
    icon: Star,
    color: 'bg-neutral-900 border-neutral-700 text-neutral-100',
    accent: 'bg-purple-500',
    stats: [
      { label: 'Helpful Votes', val: '142' },
      { label: 'Latest Review', val: '5 Stars' },
      { label: 'Badge', val: 'Top Reviewer' }
    ]
  }
];

export const AccountOverview7: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string>('orders');
  const [isFanned, setIsFanned] = useState<boolean>(false);

  return (
    <div className="w-full bg-[#121214] text-neutral-100 min-h-[750px] p-6 sm:p-10 font-sans border border-neutral-800 rounded-3xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-neutral-800 mb-8 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">STACKED DECK INTERACTION</span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">Interactive Account Stack</h1>
          <p className="text-xs text-neutral-400 mt-1">Alex Morgan • Click any card to bring it to the active front view</p>
        </div>

        <button
          onClick={() => setIsFanned(!isFanned)}
          className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-xs font-mono rounded-full border border-neutral-700 flex items-center gap-2 transition-colors"
        >
          <Layers className="w-4 h-4 text-amber-400" />
          <span>{isFanned ? 'Collapse Stack' : 'Fan Out Deck'}</span>
        </button>
      </div>

      {/* Main Stack Area */}
      <div 
        onMouseEnter={() => setIsFanned(true)}
        onMouseLeave={() => setIsFanned(false)}
        className="max-w-3xl mx-auto my-6 relative min-h-[480px] flex items-center justify-center"
      >
        {mockCards.map((card, idx) => {
          const isActive = activeCardId === card.id;
          const Icon = card.icon;

          // Compute stack transforms when collapsed vs fanned
          const rotation = isFanned ? (idx - 1.5) * 6 : (idx - 1.5) * 2;
          const yOffset = isFanned ? idx * 24 : idx * 12;
          const scale = isActive ? 1.02 : 1 - idx * 0.03;

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
                  <div className={`p-3 rounded-2xl ${card.accent} text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{card.title}</h2>
                    <p className="text-xs text-neutral-400 mt-0.5">{card.subtitle}</p>
                  </div>
                </div>

                <span className="text-xs font-mono px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full">
                  {isActive ? 'ACTIVE CARD' : 'CLICK TO REVEAL'}
                </span>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800">
                {card.stats.map((s, i) => (
                  <div key={i} className="p-3 bg-neutral-950/60 rounded-xl border border-neutral-800">
                    <div className="text-[10px] text-neutral-400 uppercase font-mono">{s.label}</div>
                    <div className="text-sm font-bold text-white mt-1">{s.val}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
