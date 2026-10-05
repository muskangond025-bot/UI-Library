import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck, QrCode, Wallet, Check, Lock, ArrowRight, Zap, Building } from 'lucide-react';

export function PaymentOptions6({ data }: { data?: any }) {
  const [selected, setSelected] = useState('card');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden"
      >
        <div className="flex justify-between items-center pb-6 border-b border-slate-800 mb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold block mb-1">
              PAYMENT VARIANT 06 — DARK FINTECH SECURITY UI
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Dark Fintech Security UI
            </h2>
          </div>
          <ShieldCheck className="w-7 h-7 text-cyan-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { id: 'card', name: 'Credit Card', icon: CreditCard, fee: 'Free' },
            { id: 'upi', name: 'Instant UPI', icon: QrCode, fee: 'Fast' },
            { id: 'wallet', name: 'Digital Wallet', icon: Wallet, fee: 'Bonus' },
          ].map((item) => {
            const Icon = item.icon;
            const isSel = selected === item.id;
            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelected(item.id)}
                className={`p-5 rounded-2xl border cursor-pointer flex flex-col justify-between transition-all ${
                  isSel ? 'bg-cyan-950/40 border-cyan-500 shadow-lg shadow-cyan-500/10' : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl ${isSel ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">{item.fee}</span>
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">{item.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">Encrypted direct transfer</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
          <p className="text-xs font-mono text-cyan-400 mb-4 flex items-center gap-2">
            <Lock className="w-3.5 h-3.5" /> SECURE GATEWAY CHECKOUT DETAILS
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Card / VPA Identifier" className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-500 focus:outline-none" />
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2">
              <span>Complete Payment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default PaymentOptions6;
