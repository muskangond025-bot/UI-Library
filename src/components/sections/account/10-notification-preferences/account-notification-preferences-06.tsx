import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Tag, Heart, Gift } from 'lucide-react';

export function AccountNotificationPreferences6() {
  const items = [
    { title: 'Order Updates', icon: Bell, active: true },
    { title: 'Offers & Sales', icon: Tag, active: false },
    { title: 'Wishlist Alerts', icon: Heart, active: true },
    { title: 'Loyalty Rewards', icon: Gift, active: true }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Visual Controls</span>
          <h2 className="text-3xl font-extrabold text-white">Icon-First Preferences</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div key={idx} whileHover={{ y: -4 }} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={'w-12 h-12 rounded-2xl flex items-center justify-center ' + (item.active ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-500')}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-base">{item.title}</h4>
                </div>
                <span className={'text-xs font-bold px-3 py-1 rounded-full ' + (item.active ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800 text-slate-500')}>
                  {item.active ? 'ON' : 'OFF'}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences6;
