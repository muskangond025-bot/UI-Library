import React, { useState } from 'react';
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
