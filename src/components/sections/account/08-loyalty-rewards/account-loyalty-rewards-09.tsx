import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';

export function AccountLoyaltyRewards9() {
  const history = [
    { type: 'Purchase #4920', pts: '+180 PTS', date: 'Sept 20, 2026', positive: true },
    { type: 'Product Review Bonus', pts: '+50 PTS', date: 'Sept 14, 2026', positive: true },
    { type: 'Redeemed $10 Voucher', pts: '-500 PTS', date: 'Sept 02, 2026', positive: false },
    { type: 'Birthday Bonus', pts: '+200 PTS', date: 'Aug 25, 2026', positive: true }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex justify-between items-center pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-1">Activity Log</span>
            <h2 className="text-3xl font-extrabold">Points Earning History</h2>
          </div>
          <Clock className="w-6 h-6 text-slate-500" />
        </div>

        <div className="space-y-4">
          {history.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="flex justify-between items-center p-5 bg-slate-900/60 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={'w-10 h-10 rounded-xl flex items-center justify-center ' + (item.positive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400')}>
                  {item.positive ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{item.type}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{item.date}</p>
                </div>
              </div>

              <span className={'font-mono font-bold text-sm ' + (item.positive ? 'text-emerald-400' : 'text-rose-400')}>
                {item.pts}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards9;
