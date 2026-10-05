import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
