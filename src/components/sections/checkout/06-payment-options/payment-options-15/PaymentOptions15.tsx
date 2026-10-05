import React from 'react';

export function PaymentOptions15({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white">
        <h2 className="text-2xl font-bold text-white mb-6">Mobile Digital Wallet</h2>
        <div className="space-y-3">
          {['Apple Pay Express', 'Google Pay Direct', 'PayPal One Touch'].map((w) => (
            <div key={w} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center text-xs font-semibold text-white">
              <span>{w}</span>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Select</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default PaymentOptions15;
