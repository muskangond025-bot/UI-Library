import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function PaymentOptions13({ data }: { data?: any }) {
  const [cardNo, setCardNo] = useState('');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 bg-gradient-to-tr from-purple-900 to-indigo-900 p-6 rounded-2xl h-48 flex flex-col justify-between shadow-xl">
          <span className="text-xs font-mono tracking-widest text-purple-300">PREMIUM CREDIT</span>
          <p className="font-mono text-base text-white tracking-widest">{cardNo || '•••• •••• •••• ••••'}</p>
          <span className="text-[10px] text-purple-200">VALUED CUSTOMER</span>
        </div>
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-lg font-bold text-white">Enter Card Information</h3>
          <input
            type="text"
            placeholder="Card Number"
            value={cardNo}
            onChange={(e) => setCardNo(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono"
          />
        </div>
      </div>
    </div>
  );
}
export default PaymentOptions13;
