import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, QrCode, Wallet, ChevronUp, Lock, ShieldCheck, Check } from 'lucide-react';

export function PaymentOptions17({ data }: { data?: any }) {
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState('card');

  const methods = [
    { id: 'card', name: 'Credit / Debit Card', desc: 'Visa, Mastercard, Amex', icon: CreditCard },
    { id: 'upi', name: 'Instant UPI', desc: 'Google Pay, PhonePe, Paytm', icon: QrCode },
    { id: 'wallet', name: 'Digital Wallet', desc: 'PayPal, Apple Pay', icon: Wallet },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative">
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-semibold block mb-1">
              17 — MOBILE SHEET INTERACTION
            </span>
            <h2 className="text-2xl font-bold text-white">Payment Panel</h2>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl flex items-center gap-2 transition"
          >
            <span>{isOpen ? 'Close Drawer' : 'Select Method'}</span>
            <ChevronUp className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-2xl"
            >
              <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-4" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {methods.map((m) => {
                  const Icon = m.icon;
                  const isSel = selected === m.id;
                  return (
                    <div
                      key={m.id}
                      onClick={() => setSelected(m.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isSel ? 'bg-indigo-950/60 border-indigo-500 text-white' : 'bg-slate-950/60 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-indigo-400" />
                        <div>
                          <h4 className="text-xs font-bold text-white">{m.name}</h4>
                          <p className="text-[10px] text-slate-400">{m.desc}</p>
                        </div>
                      </div>
                      {isSel && <Check className="w-4 h-4 text-indigo-400" />}
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <input type="text" placeholder="Card Number / VPA Handle" className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500 font-mono" />
                <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-lg">
                  Confirm & Authorize Payment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default PaymentOptions17;
