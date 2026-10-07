import React from 'react';
import { Truck, ShieldCheck, Leaf, RotateCcw, ArrowUpRight } from 'lucide-react';

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: Record<string, any>;
    styles?: Record<string, any>;
  };
}

export function OffersFreeShipping9({ section }: SectionProps) {
  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-800">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono font-bold uppercase tracking-wider">
            BENTO GRID ADVANTAGE BOX
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Comprehensive Free Delivery Guarantee
          </h2>
          <p className="text-slate-400 text-sm">
            Four core shipping commitments engineered to make your shopping experience completely frictionless.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Main Large Card */}
          <div className="md:col-span-2 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-8 rounded-3xl border border-indigo-500/30 shadow-xl flex flex-col justify-between space-y-6 hover:border-indigo-400/60 transition-colors">
            <div className="flex justify-between items-start">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 flex items-center justify-center">
                <Truck className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-mono font-bold">
                STOREWIDE BENEFIT
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Zero Delivery Fee On All Domestic Orders Over $49
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-lg leading-relaxed">
                Enjoy automated zero-cost standard ground courier delivery straight to your doorstep across all 50 states.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-indigo-300">
              <span>✓ Auto-Applied At Checkout</span>
              <span>•</span>
              <span>✓ Live GPS Package Tracking</span>
            </div>
          </div>

          {/* Card 2: Carbon Neutral */}
          <div className="bg-slate-900 p-7 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between space-y-6 hover:border-emerald-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-bold text-white">100% Carbon-Neutral Transit</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Every free shipping order is paired with verified carbon offset credits at no extra fee to you.
              </p>
            </div>
          </div>

          {/* Card 3: Free Return Labels */}
          <div className="bg-slate-900 p-7 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between space-y-6 hover:border-blue-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-400/30 text-blue-400 flex items-center justify-center">
              <RotateCcw className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-bold text-white">Pre-Paid Free Returns</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Need to swap sizes? Every shipment contains a zero-cost pre-printed return courier label.
              </p>
            </div>
          </div>

          {/* Card 4: VIP Insurance */}
          <div className="md:col-span-2 bg-slate-900 p-7 rounded-3xl border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-purple-500/40 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-400/30 text-purple-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white">Guaranteed Safe Delivery Insurance</h4>
                <p className="text-slate-400 text-xs">Full replacement warranty on packages damaged or delayed in transit.</p>
              </div>
            </div>

            <button className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-bold uppercase shrink-0 flex items-center gap-1.5 border border-slate-700">
              <span>Read Shipping FAQ</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default OffersFreeShipping9;
