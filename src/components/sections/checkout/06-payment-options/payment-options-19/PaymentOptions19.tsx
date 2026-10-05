import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, QrCode, Wallet, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function PaymentOptions19({ data }: { data?: any }) {
  const [selected, setSelected] = useState('card');

  const methods = [
    { id: 'card', num: '01', title: 'CREDIT / DEBIT CARD', desc: 'Instant authorization via Visa, Mastercard, Amex', icon: CreditCard },
    { id: 'upi', num: '02', title: 'INSTANT UPI PROTOCOL', desc: 'Direct VPA transfer via BHIM, GPay, PhonePe', icon: QrCode },
    { id: 'wallet', num: '03', title: 'DIGITAL ASSET WALLET', desc: 'One-click checkout via Apple Pay & PayPal', icon: Wallet },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 text-stone-100 shadow-2xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 pb-6 border-b border-stone-800 gap-4">
          <div>
            <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold block mb-1">
              19 — LUXURY EDITORIAL GRID
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light tracking-tight text-white">
              Payment Dispatch
            </h2>
          </div>
          <span className="text-xs font-mono text-stone-400 uppercase tracking-widest">[ FINTECH EDITION 2026 ]</span>
        </div>

        <div className="space-y-4 mb-8">
          {methods.map((m) => {
            const Icon = m.icon;
            const isSel = selected === m.id;
            return (
              <motion.div
                key={m.id}
                whileHover={{ x: 6 }}
                onClick={() => setSelected(m.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  isSel ? 'bg-stone-950 border-amber-400/80 shadow-xl' : 'bg-stone-950/40 border-stone-800 hover:border-stone-700'
                }`}
              >
                <div className="flex items-center gap-6">
                  <span className="text-sm font-mono text-amber-400 font-bold">{m.num}</span>
                  <div>
                    <h3 className="text-base font-serif font-medium text-white tracking-wide flex items-center gap-2">
                      {m.title}
                      {isSel && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                    </h3>
                    <p className="text-xs text-stone-400 mt-1">{m.desc}</p>
                  </div>
                </div>
                <div className={`p-3 rounded-xl ${isSel ? 'bg-amber-400 text-stone-950' : 'bg-stone-800 text-stone-400'}`}>
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="p-6 bg-stone-950 border border-stone-800 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-stone-400">
            Selected Channel: <span className="font-mono text-amber-400 uppercase font-bold">{selected}</span>
          </div>
          <button className="w-full sm:w-auto px-8 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs rounded-xl tracking-wider uppercase transition">
            Proceed to Final Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentOptions19;
