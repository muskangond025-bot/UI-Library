import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Sparkles } from 'lucide-react';

export function AccountNotificationPreferences5() {
  const [toggleVal, setToggleVal] = useState(true);

  return (
    <section className="w-full min-h-[650px] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-indigo-300 border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest inline-block">
            Glass Preference Deck
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Glass Notification Settings</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div whileHover={{ y: -5 }} className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl space-y-6">
            <Bell className="w-8 h-8 text-indigo-300" />
            <div>
              <h3 className="text-2xl font-bold text-white">Order Alerts</h3>
              <p className="text-xs text-slate-400 mt-1">Receive push notifications on order updates.</p>
            </div>
            <button onClick={() => setToggleVal(!toggleVal)} className={'px-4 py-2 rounded-xl text-xs font-bold border transition-all ' + (toggleVal ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' : 'bg-white/5 text-slate-400 border-white/10')}>
              {toggleVal ? 'Status: ON' : 'Status: OFF'}
            </button>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl space-y-6">
            <Sparkles className="w-8 h-8 text-indigo-300" />
            <div>
              <h3 className="text-2xl font-bold text-white">Promotional Emails</h3>
              <p className="text-xs text-slate-400 mt-1">Weekly digest of discounts & deals.</p>
            </div>
            <button className="px-4 py-2 rounded-xl text-xs font-bold border bg-white/5 text-slate-400 border-white/10">
              Status: OFF
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences5;
