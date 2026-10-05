const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../src/components/sections/account/10-notification-preferences');

const code17 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Sparkles, Shield, Smartphone } from 'lucide-react';

export function AccountNotificationPreferences17() {
  const [toggles, setToggles] = useState({ orders: true, promos: false, security: true });

  const toggle = (key: keyof typeof toggles) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const setSettings = setToggles;

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-2xl mx-auto text-center space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Interactive 3D Card</span>
          <h2 className="text-3xl font-extrabold">3D Notification Control Pass</h2>
        </div>

        {/* 3D Perspective Tilt Card */}
        <motion.div 
          whileHover={{ rotateY: 10, rotateX: -6 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="w-full bg-gradient-to-br from-indigo-900/60 via-slate-950 to-slate-950 border border-indigo-500/40 p-8 rounded-3xl shadow-2xl space-y-6 text-left transform-gpu relative overflow-hidden"
        >
          <div className="flex justify-between items-center pb-4 border-b border-indigo-500/20">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">VIP MEMBER DISPATCH</span>
              <h3 className="text-xl font-bold text-white mt-0.5">Notification Control Pass</h3>
            </div>
            <Smartphone className="w-6 h-6 text-indigo-400" />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-3.5 bg-slate-900/80 rounded-xl border border-slate-800">
              <div className="flex items-center gap-3">
                <Bell className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-bold text-white">Order Status Push</span>
              </div>
              <button onClick={() => toggle('orders')} className={'w-10 h-5 rounded-full p-0.5 transition-colors ' + (toggles.orders ? 'bg-indigo-600' : 'bg-slate-800')}>
                <div className={'w-4 h-4 bg-white rounded-full transition-transform ' + (toggles.orders ? 'translate-x-5' : 'translate-x-0')} />
              </button>
            </div>

            <div className="flex justify-between items-center p-3.5 bg-slate-900/80 rounded-xl border border-slate-800">
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-white">VIP Sales & Offers</span>
              </div>
              <button onClick={() => toggle('promos')} className={'w-10 h-5 rounded-full p-0.5 transition-colors ' + (toggles.promos ? 'bg-indigo-600' : 'bg-slate-800')}>
                <div className={'w-4 h-4 bg-white rounded-full transition-transform ' + (toggles.promos ? 'translate-x-5' : 'translate-x-0')} />
              </button>
            </div>

            <div className="flex justify-between items-center p-3.5 bg-slate-900/80 rounded-xl border border-slate-800">
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white">Security Alerts</span>
              </div>
              <button onClick={() => toggle('security')} className={'w-10 h-5 rounded-full p-0.5 transition-colors ' + (toggles.security ? 'bg-indigo-600' : 'bg-slate-800')}>
                <div className={'w-4 h-4 bg-white rounded-full transition-transform ' + (toggles.security ? 'translate-x-5' : 'translate-x-0')} />
              </button>
            </div>
          </div>

          <div className="pt-2 text-[10px] font-mono text-slate-400 flex justify-between">
            <span>PASS ID: #DISPATCH-992</span>
            <span className="text-indigo-400 font-bold">3D HOVER ACTIVE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences17;
`;

const code18 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function AccountNotificationPreferences18() {
  const [orders, setOrders] = useState(true);
  const [promos, setPromos] = useState(false);

  return (
    <section className="w-full min-h-[650px] bg-stone-950 text-stone-100 py-16 px-6 font-serif">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="border-b border-stone-800 pb-10 space-y-4"
        >
          <span className="font-sans text-xs uppercase tracking-widest text-amber-500 font-bold block">
            EST. 2026 SYSTEM DISPATCH
          </span>
          <h1 className="text-5xl sm:text-7xl font-light tracking-tight uppercase leading-none">
            CONTROL YOUR <br /><span className="italic font-normal text-amber-400">NOTIFICATIONS</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-sans">
          <div className="p-8 bg-stone-900 rounded-2xl border border-stone-800 space-y-6">
            <span className="text-xs uppercase tracking-widest text-stone-500 font-bold">TRANSACTIONAL DISPATCH</span>
            <h3 className="text-3xl font-serif text-white">Order & Logistics Alerts</h3>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Receive real-time mobile push notifications for order dispatch, carrier transit updates, and doorstep deliveries.
            </p>
            <button 
              onClick={() => setOrders(!orders)}
              className={'w-full py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors ' + (orders ? 'bg-amber-400 text-stone-950' : 'bg-stone-800 text-stone-400')}
            >
              {orders ? 'SUBSCRIPTION ACTIVE' : 'ENABLE ALERTS'}
            </button>
          </div>

          <div className="p-8 bg-stone-900 rounded-2xl border border-stone-800 space-y-6">
            <span className="text-xs uppercase tracking-widest text-stone-500 font-bold">EDITORIAL DISPATCH</span>
            <h3 className="text-3xl font-serif text-white">Seasonal Promotions</h3>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Curated digest detailing private sample sales, seasonal markdown events, and new arrival drops.
            </p>
            <button 
              onClick={() => setPromos(!promos)}
              className={'w-full py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors ' + (promos ? 'bg-amber-400 text-stone-950' : 'bg-stone-800 text-stone-400')}
            >
              {promos ? 'SUBSCRIPTION ACTIVE' : 'ENABLE DIGEST'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences18;
`;

const code19 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Bell, Tag, Shield } from 'lucide-react';

export function AccountNotificationPreferences19() {
  const [saved, setSaved] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [settings, setSettings] = useState({ orders: true, promos: false, security: true });

  const toggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    setDirty(true);
  };

  const handleSave = () => {
    setSaved(true);
    setDirty(false);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Interactive Workflow</span>
          <h2 className="text-3xl font-extrabold text-white">Save Changes Experience</h2>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-slate-950 rounded-xl border border-slate-800">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-indigo-400" />
                <span className="font-bold text-white text-sm">Order Alerts</span>
              </div>
              <button onClick={() => toggle('orders')} className={'w-12 h-6 rounded-full p-1 transition-colors ' + (settings.orders ? 'bg-indigo-600' : 'bg-slate-800')}>
                <div className={'w-4 h-4 bg-white rounded-full transition-transform ' + (settings.orders ? 'translate-x-6' : 'translate-x-0')} />
              </button>
            </div>

            <div className="flex justify-between items-center p-4 bg-slate-950 rounded-xl border border-slate-800">
              <div className="flex items-center gap-3">
                <Tag className="w-5 h-5 text-amber-400" />
                <span className="font-bold text-white text-sm">Promotions & Deals</span>
              </div>
              <button onClick={() => toggle('promos')} className={'w-12 h-6 rounded-full p-1 transition-colors ' + (settings.promos ? 'bg-indigo-600' : 'bg-slate-800')}>
                <div className={'w-4 h-4 bg-white rounded-full transition-transform ' + (settings.promos ? 'translate-x-6' : 'translate-x-0')} />
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
            <span className="text-xs text-slate-400">
              {dirty ? '• You have unsaved changes' : 'All preferences up to date'}
            </span>

            <button 
              onClick={handleSave} 
              className={'px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ' + (saved ? 'bg-emerald-500 text-slate-950' : 'bg-indigo-600 hover:bg-indigo-500 text-white')}
            >
              {saved ? <><Check className="w-4 h-4" /> PREFERENCES SAVED</> : 'SAVE CHANGES'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences19;
`;

fs.writeFileSync(path.join(targetDir, 'account-notification-preferences-17.tsx'), code17.trim() + '\n');
fs.writeFileSync(path.join(targetDir, 'account-notification-preferences-18.tsx'), code18.trim() + '\n');
fs.writeFileSync(path.join(targetDir, 'account-notification-preferences-19.tsx'), code19.trim() + '\n');
console.log('Upgraded variants 17, 18, 19');
