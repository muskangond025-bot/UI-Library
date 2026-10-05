import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, QrCode, Shield, Zap } from 'lucide-react';

export function PaymentOptions9({ data }: { data?: any }) {
  const [selected, setSelected] = useState('card');

  const cards = [
    { id: 'card', name: 'Credit Card', desc: 'Instant processing', icon: CreditCard },
    { id: 'upi', name: 'UPI Payment', desc: 'Scan & pay immediately', icon: QrCode },
    { id: 'express', name: 'Express Checkout', desc: '1-Click saved account', icon: Zap },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white shadow-2xl">
        <div className="mb-8">
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase font-semibold block mb-1">
            09 — FLOATING DEPTH CARDS
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-white">
            Floating Layer Payment
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {cards.map((card) => {
            const Icon = card.icon;
            const isSel = selected === card.id;
            return (
              <motion.div
                key={card.id}
                animate={{ y: isSel ? -8 : 0, scale: isSel ? 1.03 : 1 }}
                onClick={() => setSelected(card.id)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all shadow-xl flex flex-col justify-between h-44 ${
                  isSel ? 'bg-purple-950/40 border-purple-500 shadow-purple-500/10' : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSel ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">{card.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default PaymentOptions9;
