import React, { useState } from 'react';
import { QrCode, Sparkles } from 'lucide-react';

export function PaymentOptions14({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white text-center">
        <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold block mb-1">
          14 — INSTANT UPI GATEWAY
        </span>
        <h2 className="text-2xl font-bold text-white mb-6">Scan QR & Pay</h2>
        <div className="w-44 h-44 bg-white p-3 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
          <QrCode className="w-36 h-36 text-slate-900" />
        </div>
        <p className="text-xs text-slate-400 max-w-xs mx-auto">Supports Google Pay, PhonePe, Paytm, BHIM and all bank UPI apps.</p>
      </div>
    </div>
  );
}
export default PaymentOptions14;
