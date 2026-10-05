import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Shield, Tag } from 'lucide-react';

export function AccountNotificationPreferences1() {
  const [settings, setSettings] = useState({
    orders: true,
    promotions: false,
    security: true,
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="pb-6 border-b border-slate-800">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 block mb-1">PREFERENCES DASHBOARD</span>
          <h2 className="text-3xl font-extrabold text-white">Clean Settings Dashboard</h2>
        </div>

        <div className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Order & Delivery Updates</h4>
                <p className="text-xs text-slate-400 mt-0.5">Real-time status alerts for purchases</p>
              </div>
            </div>
            <button onClick={() => toggle('orders')} className={'w-12 h-6 rounded-full p-1 transition-colors ' + (settings.orders ? 'bg-indigo-600' : 'bg-slate-800')}>
              <div className={'w-4 h-4 bg-white rounded-full transition-transform ' + (settings.orders ? 'translate-x-6' : 'translate-x-0')} />
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Promotions & Discounts</h4>
                <p className="text-xs text-slate-400 mt-0.5">Seasonal sales and coupon announcements</p>
              </div>
            </div>
            <button onClick={() => toggle('promotions')} className={'w-12 h-6 rounded-full p-1 transition-colors ' + (settings.promotions ? 'bg-indigo-600' : 'bg-slate-800')}>
              <div className={'w-4 h-4 bg-white rounded-full transition-transform ' + (settings.promotions ? 'translate-x-6' : 'translate-x-0')} />
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Account & Security Alerts</h4>
                <p className="text-xs text-slate-400 mt-0.5">Login attempts and password changes</p>
              </div>
            </div>
            <button onClick={() => toggle('security')} className={'w-12 h-6 rounded-full p-1 transition-colors ' + (settings.security ? 'bg-indigo-600' : 'bg-slate-800')}>
              <div className={'w-4 h-4 bg-white rounded-full transition-transform ' + (settings.security ? 'translate-x-6' : 'translate-x-0')} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences1;
