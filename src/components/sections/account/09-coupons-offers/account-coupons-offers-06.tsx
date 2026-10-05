import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy } from 'lucide-react';

export function AccountCouponsOffers6() {
  return (
    <section className="w-full min-h-[650px] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-indigo-300 border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest inline-block">
            Glass Offer Deck
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Glass Coupon Cards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { offer: '₹300 OFF', code: 'GLASS300', title: 'Welcome Voucher' },
            { offer: '15% OFF', code: 'GLASS15', title: 'Footwear Special' },
            { offer: 'FREE SHIP', code: 'GLASSSHIP', title: 'Express Freight' }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-2">
                <Sparkles className="w-6 h-6 text-indigo-300" />
                <h3 className="text-3xl font-black text-white mt-2">{card.offer}</h3>
                <p className="text-xs text-slate-400 font-medium">{card.title}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <code className="text-xs font-mono font-bold text-indigo-200">{card.code}</code>
                <button className="px-3.5 py-1.5 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200 border border-indigo-500/40 rounded-xl text-xs font-bold transition-all flex items-center gap-1">
                  <Copy className="w-3.5 h-3.5" /> Copy
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers6;
