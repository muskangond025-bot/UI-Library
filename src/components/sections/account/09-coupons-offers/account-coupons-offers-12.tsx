import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function AccountCouponsOffers12() {
  const [tab, setTab] = useState('Available');

  const offers = [
    { title: '₹500 OFF', code: 'SAVE500', status: 'Available' },
    { title: '20% OFF', code: 'USED20', status: 'Used' },
    { title: 'FREE SHIP', code: 'EXPIREDSHIP', status: 'Expired' }
  ];

  const filtered = offers.filter(o => o.status === tab);

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Offer Lifecycle</span>
            <h2 className="text-3xl font-extrabold text-white">Offer Status Center</h2>
          </div>

          <div className="flex gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
            {['Available', 'Used', 'Expired'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={'px-4 py-2 rounded-lg text-xs font-bold transition-all ' + (tab === t ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white')}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-slate-900 rounded-2xl border border-slate-800 flex justify-between items-center"
            >
              <h4 className="font-bold text-white text-lg">{item.title}</h4>
              <code className="text-xs font-mono font-bold text-emerald-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                {item.code}
              </code>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers12;
