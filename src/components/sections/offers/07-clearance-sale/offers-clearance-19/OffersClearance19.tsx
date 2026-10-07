import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ShoppingCart, Copy, Check, ShieldCheck, CheckSquare, Square } from 'lucide-react';

export function OffersClearance19() {
  const [selectedItems, setSelectedItems] = useState<number[]>([1, 2]);
  const [copied, setCopied] = useState(false);
  const couponCode = 'CALCMAX85';

  const items = [
    { id: 1, name: '4K Ultra Gaming Headset', price: 120, discountPct: 80 },
    { id: 2, name: 'Ergonomic Desk Chair', price: 250, discountPct: 85 },
    { id: 3, name: 'Mechanical RGB Keyboard', price: 80, discountPct: 75 },
  ];

  const toggleItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const totalPrice = selectedItems.reduce((sum, id) => {
    const item = items.find((i) => i.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const totalSavings = selectedItems.reduce((sum, id) => {
    const item = items.find((i) => i.id === id);
    return sum + (item ? (item.price * item.discountPct) / 100 : 0);
  }, 0);

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#080d19] text-white rounded-3xl border border-blue-900/50 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-sky-400/40 text-sky-300 text-xs font-mono font-bold tracking-widest uppercase shadow-md">
          <Calculator className="w-3.5 h-3.5 text-sky-400" />
          <span>INTERACTIVE CLEARANCE DISCOUNT CALCULATOR</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-blue-300 tracking-tight">
          Clearance Bundle Calculator
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
          Check items in your clearance bundle tray below to calculate total live dollar savings & unlock code.
        </p>
      </div>

      {/* Main Interactive Calculator Container */}
      <div className="w-full max-w-xl relative z-10">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-7 sm:p-9 border-2 border-sky-500/40 shadow-2xl space-y-6 text-left overflow-hidden">
          {/* Item Checklist Selection */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest block">
              SELECT CLEARANCE ITEMS (LIVE SAVINGS CALCULATOR)
            </span>

            {items.map((item) => {
              const isChecked = selectedItems.includes(item.id);
              const discounted = item.price - (item.price * item.discountPct) / 100;

              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                    isChecked
                      ? 'bg-sky-950/80 border-sky-400 shadow-md'
                      : 'bg-slate-950/60 border-slate-800 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-sky-400" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-500" />
                    )}
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.name}</h4>
                      <span className="text-xs font-mono text-sky-300 font-bold">
                        {item.discountPct}% OFF CLEARANCE
                      </span>
                    </div>
                  </div>

                  <div className="text-right font-mono">
                    <span className="text-xs text-slate-400 line-through block">${item.price}</span>
                    <span className="text-base font-black text-emerald-400">${discounted.toFixed(2)}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Calculator Totals Summary */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-sky-500/40 flex items-center justify-between font-mono">
            <div>
              <span className="text-[10px] text-slate-400 block uppercase font-bold">TOTAL SAVINGS</span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-400">
                -${totalSavings.toFixed(2)}
              </span>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">CALCULATED CODE</span>
              <span className="text-xl font-black text-white tracking-widest">{couponCode}</span>
            </div>
          </div>

          {/* Action Copy Button */}
          <div className="pt-1">
            <button
              onClick={copyCode}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:brightness-110 text-white font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-sky-600/30 active:scale-95 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'CALCULATED CODE COPIED!' : `COPY CODE: ${couponCode}`}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>Interactive Live Clearance Discount Calculation Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersClearance19;
