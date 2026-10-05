import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingDown, PackageCheck, Heart } from 'lucide-react';

export function AccountNotificationPreferences14() {
  const [alerts, setAlerts] = useState({
    recs: true,
    price: true,
    stock: false,
    wishlist: true
  });

  const toggle = (key: keyof typeof alerts) => {
    setAlerts(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const list = [
    { id: 'recs', title: 'Smart Recommendations', desc: 'AI-curated products based on your shopping behavior', icon: Sparkles },
    { id: 'price', title: 'Instant Price Drops', desc: 'Alerts when saved items go on discount or sale', icon: TrendingDown },
    { id: 'stock', title: 'Back-in-Stock Alerts', desc: 'Notification when sold-out sizes/items return', icon: PackageCheck },
    { id: 'wishlist', title: 'Wishlist Markdown Alerts', desc: 'Special promotion notifications on saved items', icon: Heart }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Personalized Engine</span>
          <h2 className="text-3xl font-extrabold text-white">Personalization Control</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {list.map((item, idx) => {
            const Icon = item.icon;
            const active = alerts[item.id as keyof typeof alerts];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col justify-between space-y-6 shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-400">{active ? 'Status: Active' : 'Status: Disabled'}</span>
                  <button
                    onClick={() => toggle(item.id as keyof typeof alerts)}
                    className={'w-12 h-6 rounded-full p-1 transition-colors ' + (active ? 'bg-indigo-600' : 'bg-slate-800')}
                  >
                    <div className={'w-4 h-4 bg-white rounded-full transition-transform ' + (active ? 'translate-x-6' : 'translate-x-0')} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences14;
