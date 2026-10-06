import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Award, Tag } from 'lucide-react';

const mockFeed = [
  { id: '1', title: 'Order Delivered (#DH-9941)', desc: 'Architectural Silk Trench delivered to Primary Residence', date: '10 MIN AGO', type: 'order', icon: ShoppingBag, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
  { id: '2', title: '5-Star Review Verified', desc: 'Published review for "Italian Calfskin Tote Bag"', date: '2 HOURS AGO', type: 'review', icon: Star, color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' },
  { id: '3', title: '500 Reward Points Credited', desc: 'Loyalty bonus points added to Alex Morgan balance', date: 'YESTERDAY', type: 'reward', icon: Award, color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30' },
  { id: '4', title: '$25 Exclusive Coupon Saved', desc: 'Autumn Private Collection discount voucher added to wallet', date: 'OCT 2, 2026', type: 'coupon', icon: Tag, color: 'text-rose-400 bg-rose-500/10 border-rose-500/30' },
];

export const AccountOverview15: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredFeed = filter === 'all' ? mockFeed : mockFeed.filter(item => item.type === filter);

  return (
    <div className="w-full bg-[#0a0d12] text-neutral-100 min-h-[750px] p-6 sm:p-10 font-sans border border-neutral-800 rounded-3xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-neutral-800 mb-8 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">LIVE ACTIVITY STREAM</span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">Real-Time Account Feed</h1>
        </div>

        <div className="flex gap-2">
          {['all', 'order', 'review', 'reward', 'coupon'].map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 py-1 rounded-full text-xs font-mono uppercase border transition-colors ${filter === c ? 'bg-white text-black border-white font-bold' : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700'}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto relative space-y-6">
        {/* Animated Connecting Path Line */}
        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-neutral-800 -z-0"></div>

        {filteredFeed.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * idx, duration: 0.5 }}
              className="flex items-start gap-6 relative z-10 group"
            >
              <div className={`p-3 rounded-full border ${item.color} shadow-lg shrink-0`}>
                <Icon className="w-5 h-5" />
              </div>

              <div className="flex-1 p-5 bg-neutral-900/90 border border-neutral-800 rounded-2xl hover:border-neutral-700 transition-all">
                <div className="flex justify-between items-center text-xs mb-1 font-mono">
                  <span className="text-neutral-400">{item.date}</span>
                  <span className="px-2 py-0.5 bg-neutral-950 text-neutral-300 rounded uppercase border border-neutral-800 text-[10px]">{item.type}</span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">{item.title}</h3>
                <p className="text-xs text-neutral-300 mt-1 font-sans">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
