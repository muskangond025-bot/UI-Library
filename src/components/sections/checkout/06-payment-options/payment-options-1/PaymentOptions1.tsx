import React from 'react';

export function PaymentOptions1({ data }: { data?: any }) {
  return (
    <div className="w-full py-16 px-6 bg-slate-900 border border-slate-800 rounded-2xl text-center font-sans text-white my-4">
      <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-2">
        PAYMENT OPTIONS // VARIANT 01
      </span>
      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
        Payment Options — Variant 01 Placeholder
      </h3>
      <p className="text-xs text-slate-400 max-w-md mx-auto">
        Placeholder for Payment Options variant 01. Premium interactive design will be inserted here.
      </p>
    </div>
  );
}

export default PaymentOptions1;
