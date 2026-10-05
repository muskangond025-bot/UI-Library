import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, Copy } from 'lucide-react';

export function AccountCouponsOffers2() {
  const tickets = [
    { discount: 'FLAT ₹1,000 OFF', code: 'FESTIVE1000', req: 'Min Spend: ₹4,999', exp: 'Valid until 15 Oct' },
    { discount: '15% SITEWIDE', code: 'EVERYONE15', req: 'No minimum order', exp: 'Valid until 31 Oct' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Voucher Passes</span>
          <h2 className="text-3xl font-extrabold">Coupon Ticket Design</h2>
        </div>

        <div className="space-y-6">
          {tickets.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden group shadow-2xl"
            >
              {/* Left Notch */}
              <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-900 rounded-full border border-slate-800" />
              {/* Right Notch */}
              <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-900 rounded-full border border-slate-800" />

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Ticket className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">{t.discount}</h3>
                  <p className="text-xs text-slate-400 mt-1">{t.req} • {t.exp}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-4 md:pt-0 border-slate-800">
                <code className="text-sm font-mono font-bold text-emerald-400 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
                  {t.code}
                </code>
                <button className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5">
                  <Copy className="w-4 h-4" /> Copy Code
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers2;
