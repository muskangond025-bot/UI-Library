import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Zap, Gift, Headphones, ShieldCheck, Heart } from 'lucide-react';

export function AccountLoyaltyRewards8() {
  const benefits = [
    { title: 'Free Express Shipping', desc: 'Complimentary shipping on all orders over $50', icon: Truck, active: true },
    { title: 'Early Sale Access', desc: 'Shop VIP private sales 24 hours before launch', icon: Zap, active: true },
    { title: '$50 Birthday Reward', desc: 'Exclusive gift code credited on your birthday', icon: Gift, active: true },
    { title: 'Dedicated Concierge', desc: '24/7 priority customer support channel', icon: Headphones, active: false },
    { title: 'Extended 60-Day Returns', desc: 'Hassle-free return policy extension', icon: ShieldCheck, active: false },
    { title: 'Anniversary Gift', desc: 'Special loyalty gift every membership year', icon: Heart, active: false },
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Membership Privileges</span>
          <h2 className="text-3xl font-extrabold text-white">Silver Tier Benefits Showcase</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className={'p-6 rounded-2xl border space-y-4 flex flex-col justify-between ' + (b.active ? 'bg-slate-950 border-slate-800' : 'bg-slate-950/40 border-slate-900 opacity-50')}
              >
                <div className="space-y-3">
                  <div className={'w-10 h-10 rounded-xl flex items-center justify-center ' + (b.active ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800 text-slate-600')}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">{b.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
                </div>

                <span className={'text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md w-max ' + (b.active ? 'bg-indigo-500/20 text-indigo-300' : 'bg-slate-800 text-slate-500')}>
                  {b.active ? 'UNLOCKED' : 'GOLD REQUIRED'}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards8;
