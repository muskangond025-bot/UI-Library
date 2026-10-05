const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../src/components/sections/account/10-notification-preferences');

const code14 = `import React, { useState } from 'react';
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
`;

const code15 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Shield, Tag, ChevronRight } from 'lucide-react';

export function AccountNotificationPreferences15() {
  const [toggles, setToggles] = useState({ orders: true, promos: false, security: true });

  const toggle = (key: keyof typeof toggles) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Mobile Interface</span>
          <h2 className="text-2xl font-bold text-white">Mobile-First Settings</h2>
        </div>

        <div className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl divide-y divide-slate-900">
          <div className="p-4 bg-slate-900/60 text-xs font-bold uppercase tracking-widest text-slate-400">
            TRANSACTIONAL ALERTS
          </div>

          <div className="p-4 flex items-center justify-between hover:bg-slate-900/40 transition-colors">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-emerald-400" />
              <div>
                <h4 className="font-bold text-white text-sm">Order Push Notifications</h4>
                <p className="text-[11px] text-slate-400">Status & dispatch updates</p>
              </div>
            </div>
            <button onClick={() => toggle('orders')} className={'w-11 h-6 rounded-full p-1 transition-colors ' + (toggles.orders ? 'bg-emerald-500' : 'bg-slate-800')}>
              <div className={'w-4 h-4 bg-slate-950 rounded-full transition-transform ' + (toggles.orders ? 'translate-x-5' : 'translate-x-0')} />
            </button>
          </div>

          <div className="p-4 bg-slate-900/60 text-xs font-bold uppercase tracking-widest text-slate-400">
            MARKETING PREFERENCES
          </div>

          <div className="p-4 flex items-center justify-between hover:bg-slate-900/40 transition-colors">
            <div className="flex items-center gap-3">
              <Tag className="w-5 h-5 text-emerald-400" />
              <div>
                <h4 className="font-bold text-white text-sm">Promotional Emails</h4>
                <p className="text-[11px] text-slate-400">Exclusive sales & discounts</p>
              </div>
            </div>
            <button onClick={() => toggle('promos')} className={'w-11 h-6 rounded-full p-1 transition-colors ' + (toggles.promos ? 'bg-emerald-500' : 'bg-slate-800')}>
              <div className={'w-4 h-4 bg-slate-950 rounded-full transition-transform ' + (toggles.promos ? 'translate-x-5' : 'translate-x-0')} />
            </button>
          </div>

          <div className="p-4 flex items-center justify-between hover:bg-slate-900/40 transition-colors">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-emerald-400" />
              <div>
                <h4 className="font-bold text-white text-sm">Security Notifications</h4>
                <p className="text-[11px] text-slate-400">Login & password alerts</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences15;
`;

const code16 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bell, Gift } from 'lucide-react';

export function AccountNotificationPreferences16() {
  const [orders, setOrders] = useState(true);
  const [rewards, setRewards] = useState(true);

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Spatial Depth</span>
          <h2 className="text-3xl font-extrabold">Floating Settings Modules</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="p-8 rounded-3xl bg-slate-900 border border-cyan-500/30 shadow-xl space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <Bell className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">Order Alerts</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Real-time status dispatch and delivery alerts.</p>
            </div>
            <button onClick={() => setOrders(!orders)} className={'w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors ' + (orders ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400')}>
              {orders ? 'PUSH ACTIVE' : 'DISABLED'}
            </button>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="p-8 rounded-3xl bg-slate-900 border border-indigo-500/30 shadow-xl space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <Sparkles className="w-8 h-8 text-indigo-400" />
              <h3 className="text-2xl font-bold text-white">Promotions</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Flash sale and exclusive discount digests.</p>
            </div>
            <button className="w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-800 text-slate-400">
              EMAIL ONLY
            </button>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="p-8 rounded-3xl bg-slate-900 border border-purple-500/30 shadow-xl space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <Gift className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Loyalty Perks</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Points milestones and tier status rewards.</p>
            </div>
            <button onClick={() => setRewards(!rewards)} className={'w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors ' + (rewards ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-400')}>
              {rewards ? 'WHATSAPP ON' : 'DISABLED'}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences16;
`;

fs.writeFileSync(path.join(targetDir, 'account-notification-preferences-14.tsx'), code14.trim() + '\n');
fs.writeFileSync(path.join(targetDir, 'account-notification-preferences-15.tsx'), code15.trim() + '\n');
fs.writeFileSync(path.join(targetDir, 'account-notification-preferences-16.tsx'), code16.trim() + '\n');
console.log('Upgraded variants 14, 15, 16');
