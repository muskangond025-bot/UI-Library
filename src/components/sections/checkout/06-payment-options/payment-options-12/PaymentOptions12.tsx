import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, QrCode, Wallet, Building2, Banknote, Shield } from 'lucide-react';

export function PaymentOptions12({ data }: { data?: any }) {
  const [selected, setSelected] = useState('card');

  const methods = [
    { id: 'card', name: 'Credit Card', icon: CreditCard },
    { id: 'upi', name: 'UPI Transfer', icon: QrCode },
    { id: 'wallet', name: 'Wallets', icon: Wallet },
    { id: 'netbank', name: 'Net Banking', icon: Building2 },
    { id: 'cod', name: 'Cash on Delivery', icon: Banknote },
    { id: 'bnpl', name: 'Pay in 4', icon: Shield },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white">
        <h2 className="text-2xl font-bold text-white mb-6">Payment Method Grid</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {methods.map((m) => {
            const Icon = m.icon;
            const isSel = selected === m.id;
            return (
              <motion.div
                key={m.id}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelected(m.id)}
                className={`p-5 rounded-2xl border cursor-pointer text-center flex flex-col items-center justify-center gap-3 h-32 ${
                  isSel ? 'bg-indigo-900/40 border-indigo-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-semibold">{m.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default PaymentOptions12;
