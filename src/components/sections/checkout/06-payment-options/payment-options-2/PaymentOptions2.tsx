import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function PaymentOptions2({ data }: { data?: any }) {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [cardNumber, setCardNumber] = useState('4532 8901 2345 6789');
  const [cardHolder, setCardHolder] = useState('ALEXANDER PIERCE');
  const [expiry, setExpiry] = useState('08/28');
  const [cvv, setCvv] = useState('782');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white shadow-2xl">
        <div className="mb-8">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold block mb-1">
            02 — INTERACTIVE CARD PREVIEW
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Credit Card Checkout
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              animate={{
                rotateY: focusedField === 'cvv' ? 180 : 0,
                scale: focusedField ? 1.02 : 1,
              }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
              className="w-full max-w-sm h-52 rounded-2xl bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950 border border-indigo-500/30 p-6 shadow-2xl relative flex flex-col justify-between"
            >
              <div className="flex flex-col justify-between h-full" style={{ backfaceVisibility: 'hidden' }}>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-bold tracking-widest text-indigo-400">PRIME CARD</span>
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-8 rounded bg-gradient-to-r from-amber-400 to-amber-200" />
                  <p className="font-mono text-lg tracking-wider text-white">
                    {cardNumber || '•••• •••• •••• ••••'}
                  </p>
                </div>
                <div className="flex justify-between items-end text-xs text-slate-300 font-mono">
                  <div>
                    <span className="text-[10px] text-slate-500 block">CARD HOLDER</span>
                    <span>{cardHolder || 'FULL NAME'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">EXPIRES</span>
                    <span>{expiry || 'MM/YY'}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div>
              <label className="text-xs text-slate-400 block mb-1">Card Number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                onFocus={() => setFocusedField('number')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 font-mono"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Cardholder Name</label>
              <input
                type="text"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-400 block mb-1">Expiry Date</label>
                <input
                  type="text"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  onFocus={() => setFocusedField('expiry')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 font-mono"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">CVV Security Code</label>
                <input
                  type="password"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  onFocus={() => setFocusedField('cvv')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 font-mono"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentOptions2;