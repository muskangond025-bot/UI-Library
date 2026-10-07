import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Sparkles, ShieldCheck } from 'lucide-react';

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: Record<string, any>;
    styles?: Record<string, any>;
  };
}

export function OffersFreeShipping7({ section }: SectionProps) {
  const [ordersPerMonth, setOrdersPerMonth] = useState<number>(3);
  const avgShippingCostPerOrder = 9.99;
  const annualOrders = ordersPerMonth * 12;
  const annualShippingSpent = (annualOrders * avgShippingCostPerOrder).toFixed(2);

  return (
    <section className="w-full py-14 px-4 bg-slate-900 font-sans text-white border-y border-slate-800">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Metric Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-indigo-950 border border-indigo-500/40 text-indigo-300 text-xs font-mono font-bold uppercase tracking-widest">
            ANNUAL SAVINGS METRIC CALCULATOR
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            See How Much You Save With Zero Delivery Fees
          </h2>
          <p className="text-slate-400 text-sm">
            Calculate your cumulative 1-year shipping cost savings by combining zero minimum storewide free shipping perks.
          </p>
        </div>

        {/* Dashboard Box */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Controls */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider block">
                How often do you place online orders monthly?
              </label>
              
              <div className="flex items-center gap-3">
                {[1, 2, 3, 5, 8].map((num) => (
                  <button
                    key={num}
                    onClick={() => setOrdersPerMonth(num)}
                    className={`flex-1 py-3 rounded-xl border text-sm font-bold font-mono transition-all ${
                      ordersPerMonth === num
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/30'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {num}x / mo
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Standard Delivery Rate:</span>
                <span className="font-mono text-white">$9.99 / order</span>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>Total Annual Orders:</span>
                <span className="font-mono text-white">{annualOrders} Orders</span>
              </div>
            </div>
          </div>

          {/* Metric Result Box */}
          <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-8 rounded-3xl border border-indigo-500/40 text-center space-y-4 shadow-xl relative overflow-hidden">
            <div className="space-y-1">
              <span className="text-xs font-mono text-indigo-300 font-bold uppercase tracking-widest block">
                ESTIMATED ANNUAL SAVINGS
              </span>
              <div className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-400 font-mono tracking-tight">
                ${annualShippingSpent}
              </div>
              <span className="text-xs text-emerald-400 font-semibold flex items-center justify-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> 100% Retained In Your Wallet
              </span>
            </div>

            <p className="text-xs text-slate-400">
              Join 40,000+ happy shoppers enjoying $0 shipping fees on every single purchase.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default OffersFreeShipping7;
