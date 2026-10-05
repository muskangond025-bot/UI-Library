import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket } from 'lucide-react';

export function AccountLoyaltyRewards17() {
  const [tab, setTab] = useState('Available');

  const rewards = [
    { title: '$10 Off Storewide', code: 'WALLET10', status: 'Available', exp: 'Valid thru Oct 2026' },
    { title: 'Free Express Shipping', code: 'FREESHIP', status: 'Available', exp: 'Valid thru Nov 2026' },
    { title: '$5 Birthday Voucher', code: 'BDAY5', status: 'Used', exp: 'Redeemed Aug 2026' },
  ];

  const filtered = rewards.filter(r => r.status === tab);

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Pass Manager</span>
            <h2 className="text-3xl font-extrabold text-white">Reward Wallet Passes</h2>
          </div>

          <div className="flex gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
            {['Available', 'Used'].map((t) => (
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
              className="p-6 bg-slate-950 rounded-2xl border border-slate-800 flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <Ticket className="w-8 h-8 text-emerald-400" />
                <div>
                  <h4 className="font-bold text-white text-base">{item.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{item.exp}</p>
                </div>
              </div>
              <code className="text-xs font-mono font-bold text-emerald-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                {item.code}
              </code>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards17;
