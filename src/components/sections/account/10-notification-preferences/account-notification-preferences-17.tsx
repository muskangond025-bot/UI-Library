import React, { useState } from 'react';
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
