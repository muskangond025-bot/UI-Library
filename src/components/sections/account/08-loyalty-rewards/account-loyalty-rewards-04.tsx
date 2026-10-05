import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, Copy } from 'lucide-react';

export function AccountLoyaltyRewards4() {
  const cards = [
    { title: '$15 Off Next Order', cost: '1,500 PTS', valid: 'Expires in 30 days', code: 'PERK15OFF' },
    { title: 'Free International Express Shipping', cost: '2,000 PTS', valid: 'Single use voucher', code: 'SHIPFREEVIP' },
    { title: '25% Off Apparel Collection', cost: '2,500 PTS', valid: 'Exclusive Silver perk', code: 'APPAREL25' },
    { title: 'Complimentary Gift Card ($50)', cost: '4,000 PTS', valid: 'Requires Gold Tier', code: 'GIFTCARD50' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex justify-between items-end border-b border-slate-800 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 block mb-1">Voucher Catalog</span>
            <h2 className="text-3xl font-extrabold text-white">Reward Card Collection</h2>
          </div>
          <span className="text-xs text-slate-400 font-semibold bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
            2,450 Points Available
          </span>
        </div>

        {/* Staggered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <Ticket className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 bg-indigo-600 text-white font-black text-xs rounded-full">
                  {card.cost}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{card.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{card.valid}</p>
              </div>

              <div className="pt-4 border-t border-slate-900 flex justify-between items-center">
                <code className="text-xs font-mono font-bold text-slate-300 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                  {card.code}
                </code>
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5">
                  <Copy className="w-3.5 h-3.5" /> Claim Reward
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards4;
