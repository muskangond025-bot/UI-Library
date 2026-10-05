import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, QrCode, Building2, Wallet, Banknote, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function PaymentOptions1({ data }: { data?: any }) {
  const [activeMethod, setActiveMethod] = useState('card');

  const methods = [
    { id: 'card', name: 'Credit / Debit Card', icon: CreditCard, badge: 'Instant', desc: 'Visa, Mastercard, Amex, Discover' },
    { id: 'upi', name: 'Instant UPI Payment', icon: QrCode, badge: 'Zero Fee', desc: 'Google Pay, PhonePe, Paytm, BHIM' },
    { id: 'netbanking', name: 'Net Banking', icon: Building2, badge: 'All Banks', desc: 'HDFC, ICICI, SBI, Axis, Kotak' },
    { id: 'wallet', name: 'Digital Wallet', icon: Wallet, badge: 'Fast Pay', desc: 'Apple Pay, PayPal, Amazon Pay' },
    { id: 'cod', name: 'Cash on Delivery', icon: Banknote, badge: 'Verified', desc: 'Pay at your doorstep upon arrival' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-8 border-b border-slate-800/80 mb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-semibold block mb-1">
              01 — METHOD SELECTION CARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Choose Payment Method
            </h2>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium rounded-full">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span>256-Bit Encrypted Checkout</span>
          </div>
        </div>

        <div className="space-y-4">
          {methods.map((method) => {
            const Icon = method.icon;
            const isSelected = activeMethod === method.id;
            return (
              <motion.div
                key={method.id}
                layout
                onClick={() => setActiveMethod(method.id)}
                className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                  isSelected ? 'bg-indigo-950/40 border-indigo-500 shadow-lg shadow-indigo-500/10' : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-white text-base sm:text-lg">{method.name}</h3>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          {method.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{method.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                      isSelected ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-slate-700 bg-slate-950'
                    }`}>
                      {isSelected && <CheckCircle2 className="w-4 h-4 fill-indigo-500 text-white" />}
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                      className="border-t border-indigo-900/40 px-5 py-6 bg-slate-950/80"
                    >
                      {method.id === 'card' && (
                        <div className="space-y-4 max-w-lg">
                          <div>
                            <label className="text-xs text-slate-400 block mb-1.5 font-medium">Card Number</label>
                            <input type="text" placeholder="4532 •••• •••• 8921" className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-xs text-slate-400 block mb-1.5 font-medium">Expiry Date</label>
                              <input type="text" placeholder="MM / YY" className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500" />
                            </div>
                            <div>
                              <label className="text-xs text-slate-400 block mb-1.5 font-medium">CVC / CVV</label>
                              <input type="password" placeholder="•••" className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500" />
                            </div>
                          </div>
                        </div>
                      )}
                      {method.id === 'upi' && (
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                          <div className="p-3 bg-white rounded-xl shadow-inner">
                            <QrCode className="w-24 h-24 text-slate-900" />
                          </div>
                          <div className="space-y-2 text-center sm:text-left">
                            <p className="text-sm font-medium text-white">Scan QR code with any UPI app</p>
                            <p className="text-xs text-slate-400">Or enter Virtual Payment Address (VPA)</p>
                            <div className="flex gap-2">
                              <input type="text" placeholder="user@upi" className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500" />
                              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl">Verify</button>
                            </div>
                          </div>
                        </div>
                      )}
                      {method.id !== 'card' && method.id !== 'upi' && (
                        <p className="text-xs text-slate-400">
                          You will be redirected to complete your authentication securely after reviewing order details.
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PaymentOptions1;