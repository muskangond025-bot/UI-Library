import React from 'react';
import { Check } from 'lucide-react';

export function PaymentOptions16({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white">
        <h2 className="text-2xl font-bold text-white mb-6">Payment Authorization Flow</h2>
        <div className="flex justify-between items-center relative border-b border-slate-800 pb-8">
          {['1. Select Method', '2. Authentication', '3. Confirm & Pay'].map((step, i) => (
            <div key={step} className="flex items-center gap-2 text-xs font-mono text-indigo-400">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-[10px]">{i+1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default PaymentOptions16;
