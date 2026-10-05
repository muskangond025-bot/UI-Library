import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Share2 } from 'lucide-react';

export function AccountLoyaltyRewards19() {
  const steps = [
    { title: 'Shop & Earn', desc: '1 Point for every $1 spent online', icon: ShoppingBag },
    { title: 'Write Reviews', desc: '50 Points for verified product reviews', icon: Star },
    { title: 'Refer Friends', desc: '200 Points when a friend makes their first order', icon: Share2 }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Earning Matrix</span>
          <h2 className="text-3xl font-extrabold">How To Earn & Redeem Points</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="p-6 bg-slate-950 rounded-2xl border border-slate-800 text-center space-y-4"
              >
                <div className="w-12 h-12 mx-auto rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-white text-base">{s.title}</h4>
                <p className="text-xs text-slate-400">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards19;
