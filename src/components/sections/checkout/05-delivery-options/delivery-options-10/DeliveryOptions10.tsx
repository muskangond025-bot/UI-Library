import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Truck } from 'lucide-react';

export function DeliveryOptions10({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-slate-100 space-y-6">
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase block">FULFILLMENT TIMELINE</span>
              <span className="text-xs font-bold text-white">Estimated Arrival Window</span>
            </div>
          </div>
          <span className="text-[11px] text-amber-400 font-mono font-semibold">SCHEDULE CONFIRMED</span>
        </div>

        <div className="space-y-4">
          <div
            onClick={() => setSelected('standard')}
            className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between ${
              selected === 'standard' ? 'bg-amber-400/10 border-amber-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
            }`}
          >
            <span className="text-xs font-bold">Standard Ground (Thursday, Oct 5)</span>
            <span className="text-xs font-bold text-amber-400">Free</span>
          </div>

          <div
            onClick={() => setSelected('express')}
            className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between ${
              selected === 'express' ? 'bg-amber-400/10 border-amber-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
            }`}
          >
            <span className="text-xs font-bold">Express Air (Tomorrow, Oct 3)</span>
            <span className="text-xs font-bold text-amber-400">$14.99</span>
          </div>

          <div className="pt-4 flex justify-end">
            <button className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              <span>Confirm Date</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions10;