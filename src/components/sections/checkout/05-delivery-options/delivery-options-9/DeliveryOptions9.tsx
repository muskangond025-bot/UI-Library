import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Store, ArrowRight, CheckCircle2 } from 'lucide-react';

export function DeliveryOptions9({ data }: { data?: any }) {
  const [method, setMethod] = useState<'courier' | 'pickup'>('courier');

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-slate-100 space-y-6">
        <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-3">Delivery Type Selector</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            onClick={() => setMethod('courier')}
            className={`p-6 rounded-2xl border cursor-pointer transition flex flex-col justify-between h-36 ${
              method === 'courier' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-slate-950 border-slate-800 text-slate-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <Truck className="w-6 h-6" />
              {method === 'courier' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
            </div>
            <div>
              <span className="text-sm font-bold text-white block">Home Courier Dispatch</span>
              <span className="text-xs text-slate-400">Delivered directly to your door ($4.99)</span>
            </div>
          </div>

          <div
            onClick={() => setMethod('pickup')}
            className={`p-6 rounded-2xl border cursor-pointer transition flex flex-col justify-between h-36 ${
              method === 'pickup' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-slate-950 border-slate-800 text-slate-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <Store className="w-6 h-6" />
              {method === 'pickup' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
            </div>
            <div>
              <span className="text-sm font-bold text-white block">In-Store / Locker Pickup</span>
              <span className="text-xs text-slate-400">Ready in 2 hours at Downtown Hub (Free)</span>
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions9;