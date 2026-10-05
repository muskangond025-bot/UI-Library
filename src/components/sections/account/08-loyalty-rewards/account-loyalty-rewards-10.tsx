import React from 'react';
import { motion } from 'framer-motion';
import { Tag, ArrowRight } from 'lucide-react';

export function AccountLoyaltyRewards10() {
  const menuItems = [
    { title: '$10 Off Storewide', pts: '1,000 PTS', bg: 'from-purple-900/40 to-slate-900' },
    { title: 'Free Express Shipping', pts: '1,500 PTS', bg: 'from-blue-900/40 to-slate-900' },
    { title: 'VIP Exclusive Tote Bag', pts: '2,500 PTS', bg: 'from-amber-900/40 to-slate-900' },
    { title: '25% Off Footwear', pts: '3,000 PTS', bg: 'from-emerald-900/40 to-slate-900' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Interactive Navigation</span>
          <h2 className="text-3xl font-extrabold text-white">Infinite Reward Menu</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={'p-6 rounded-2xl bg-gradient-to-b ' + item.bg + ' border border-slate-800 space-y-6 flex flex-col justify-between cursor-pointer'}
            >
              <div className="flex justify-between items-center">
                <Tag className="w-5 h-5 text-purple-400" />
                <span className="text-xs font-bold text-white bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                  {item.pts}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 mt-2">Instant digital redemption</p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-purple-400">
                <span>REDEEM PERK</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards10;
