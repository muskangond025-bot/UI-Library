import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, Copy, Check, Clock } from 'lucide-react';

export function AccountCouponsOffers1() {
  const [copied, setCopied] = useState<string | null>(null);

  const coupons = [
    { id: 'c1', discount: '₹500 OFF', code: 'SAVE500', minOrder: 'Min. Order: ₹2,999', exp: 'Expires 30 Sep 2026', title: 'Festive Season Savings' },
    { id: 'c2', discount: '20% OFF', code: 'FASHION20', minOrder: 'Max discount: ₹1,000', exp: 'Expires 15 Oct 2026', title: 'Apparel Category Special' },
    { id: 'c3', discount: 'FREE SHIPPING', code: 'FREESHIPVIP', minOrder: 'Valid on all orders', exp: 'Expires 31 Oct 2026', title: 'VIP Express Delivery Pass' }
  ];

  const handleCopy = (code: string) => {
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-800 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 block mb-1">PROMOTIONAL CATALOG</span>
            <h2 className="text-3xl font-extrabold text-white">Premium Coupon Collection</h2>
          </div>
          <span className="px-3.5 py-1.5 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 rounded-full text-xs font-semibold">
            3 Active Coupons
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coupons.map((coupon, idx) => (
            <motion.div
              key={coupon.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-indigo-500/50 transition-all shadow-xl group"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-1 bg-indigo-600 text-white font-black text-xs rounded-lg uppercase tracking-wide">
                    {coupon.discount}
                  </span>
                  <Tag className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                </div>
                <h3 className="font-bold text-white text-lg">{coupon.title}</h3>
                <p className="text-xs text-slate-400">{coupon.minOrder}</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-500" /> {coupon.exp}
                </div>

                <div className="flex justify-between items-center bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <code className="font-mono text-xs font-bold text-indigo-300 px-2">{coupon.code}</code>
                  <button
                    onClick={() => handleCopy(coupon.code)}
                    className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-lg transition-colors flex items-center gap-1"
                  >
                    {copied === coupon.code ? <><Check className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers1;
