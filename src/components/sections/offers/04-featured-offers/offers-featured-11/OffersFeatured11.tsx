import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export function OffersFeatured11() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const products = [
    { name: 'Ultra Noise Cancelling Max', price: '$199', orig: '$399', driver: '40mm Beryllium', noise: 'Active ANC Pro', weight: '240g', battery: '40 Hours' },
    { name: 'Spatial Audio Pods Studio', price: '$129', orig: '$249', driver: '12mm Titanium', noise: 'Passive Isolation', weight: '45g', battery: '30 Hours' }
  ];

  return (
    <div className="w-full bg-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5">
            PRODUCT SPEC COMPARISON DECK
          </span>
          <h2 className="text-3xl font-extrabold text-white">Compare Featured Hardware Specifications</h2>
        </div>

        {/* Spec Comparison Table */}
        <div className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((p, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                  selectedIdx === idx
                    ? 'bg-indigo-600/10 border-indigo-500 text-white shadow-xl'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono text-indigo-400 font-bold uppercase">FLAGSHIP MODEL #0{idx + 1}</span>
                  {selectedIdx === idx && <Check className="w-5 h-5 text-indigo-400" />}
                </div>
                <h3 className="font-extrabold text-xl text-white mb-4">{p.name}</h3>

                <div className="space-y-2 text-xs font-mono border-t border-slate-800 pt-4 text-slate-300">
                  <div className="flex justify-between"><span>DRIVER:</span> <span className="font-bold text-white">{p.driver}</span></div>
                  <div className="flex justify-between"><span>NOISE CANCELLING:</span> <span className="font-bold text-white">{p.noise}</span></div>
                  <div className="flex justify-between"><span>BATTERY LIFE:</span> <span className="font-bold text-white">{p.battery}</span></div>
                  <div className="flex justify-between"><span>WEIGHT:</span> <span className="font-bold text-white">{p.weight}</span></div>
                </div>

                <div className="flex justify-between items-baseline pt-4 border-t border-slate-800 mt-4">
                  <div>
                    <span className="text-2xl font-black text-indigo-400">{p.price}</span>
                    <span className="text-xs text-slate-500 line-through ml-2">{p.orig}</span>
                  </div>
                  <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-xs flex items-center gap-1">
                    Select <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default OffersFeatured11;
