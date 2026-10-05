import React from 'react';
import { motion, Variants } from 'framer-motion';
import { User, ShoppingBag, Heart, MapPin, Award, CreditCard, Shield, Settings } from 'lucide-react';

const cardVariants = [
  { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
  { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
  { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
  { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
];

export function AccountOverview13() {
  const hubCards = [
    { title: 'Customer Profile', stat: 'Alex Morgan', desc: 'Gold Tier • 80% Complete', icon: User, color: 'from-blue-600 to-indigo-600' },
    { title: 'Orders Hub', stat: '12 Orders', desc: 'Latest: #DH-28491', icon: ShoppingBag, color: 'from-cyan-600 to-blue-600' },
    { title: 'Saved Wishlist', stat: '8 Items', desc: 'Saved for later', icon: Heart, color: 'from-pink-600 to-rose-600' },
    { title: 'Saved Addresses', stat: '3 Hubs', desc: 'Primary: Home', icon: MapPin, color: 'from-emerald-600 to-teal-600' },
  ];

  return (
    <div className="w-full bg-slate-950 text-white p-6 md:p-12 min-h-[680px] flex items-center">
      <div className="max-w-6xl mx-auto w-full space-y-8">
        <div className="text-center space-y-2">
          <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-mono uppercase">
            DISTINCTIVE CARD HUB
          </span>
          <h1 className="text-3xl font-bold text-white">Account Function Hub</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hubCards.map((card, idx) => {
            const Icon = card.icon;
            const motionStyle = cardVariants[idx % cardVariants.length];
            return (
              <motion.div
                key={idx}
                initial={motionStyle.initial}
                animate={motionStyle.animate}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-900/90 rounded-3xl p-8 border border-slate-800 hover:border-slate-700 transition-all shadow-xl group relative overflow-hidden flex flex-col justify-between"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-10 rounded-bl-full`} />
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${card.color} text-white shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">MODULE 0{idx + 1}</span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{card.title}</span>
                  <h3 className="text-2xl font-bold text-white mt-1">{card.stat}</h3>
                  <p className="text-xs text-slate-400 mt-1">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AccountOverview13;
