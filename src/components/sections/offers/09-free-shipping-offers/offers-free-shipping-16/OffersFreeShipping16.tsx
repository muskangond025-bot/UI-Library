import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight, Check, Plus } from 'lucide-react';

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: Record<string, any>;
    styles?: Record<string, any>;
  };
}

export function OffersFreeShipping16({ section }: SectionProps) {
  const [val, setVal] = useState(65);
  const target = 100;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(100, Math.round((val / target) * 100));
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <section className="w-full py-14 px-4 bg-slate-950 font-sans text-white border-y border-slate-800">
      <div className="max-w-md mx-auto bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-2xl space-y-6">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px] font-mono font-bold uppercase">
            RADIAL GAUGE CART WIDGET
          </span>
          <span className="text-xs font-mono text-purple-400 font-bold">SIDEBAR DRAWER</span>
        </div>

        {/* Circular Radial Gauge Display */}
        <div className="flex items-center gap-5">
          <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r={radius}
                className="stroke-slate-800"
                strokeWidth="8"
                fill="transparent"
              />
              <motion.circle
                cx="48"
                cy="48"
                r={radius}
                className="stroke-purple-500"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={circumference}
                animate={{ strokeDashoffset }}
                transition={{ duration: 0.5 }}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-sm font-black font-mono text-white">{progress}%</span>
          </div>

          <div className="space-y-1">
            <h4 className="font-bold text-base text-white">
              {progress >= 100 ? '🎉 Free Shipping Unlocked!' : `$${target - val} Away From Free Shipping`}
            </h4>
            <p className="text-xs text-slate-400">
              Subtotal: <span className="font-mono text-purple-300 font-bold">${val}.00</span> / ${target}.00
            </p>
          </div>
        </div>

        {/* Quick Simulation Slider */}
        <div className="space-y-2 bg-slate-950 p-4 rounded-2xl border border-slate-800">
          <div className="flex justify-between text-xs font-mono text-slate-400">
            <span>Simulate Cart Total:</span>
            <span className="text-white font-bold">${val}</span>
          </div>
          <input
            type="range"
            min="0"
            max="120"
            value={val}
            onChange={(e) => setVal(Number(e.target.value))}
            className="w-full accent-purple-500 cursor-pointer"
          />
        </div>

        <button className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono font-bold text-xs uppercase flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30">
          <span>PROCEED TO CHECKOUT</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </section>
  );
}

export default OffersFreeShipping16;
