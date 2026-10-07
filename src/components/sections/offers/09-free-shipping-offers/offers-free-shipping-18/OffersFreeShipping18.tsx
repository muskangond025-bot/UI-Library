import React, { useState } from 'react';
import { Store, Truck, Clock, Check, ArrowRight } from 'lucide-react';

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: Record<string, any>;
    styles?: Record<string, any>;
  };
}

export function OffersFreeShipping18({ section }: SectionProps) {
  const [option, setOption] = useState<'pickup' | 'delivery'>('delivery');

  return (
    <section className="w-full py-16 px-4 bg-slate-100 font-sans text-slate-900 border-y border-slate-200">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
            DELIVERY VS CURBSIDE PICKUP SPLIT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Select Your Preferred Zero-Cost Shipping Method
          </h2>
          <p className="text-slate-600 text-sm">
            Choose between instant local curbside store pickup or guaranteed zero-cost doorstep courier delivery.
          </p>
        </div>

        {/* Dual Option Switch Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Curbside Pickup */}
          <div
            onClick={() => setOption('pickup')}
            className={`p-7 rounded-3xl border-2 cursor-pointer transition-all space-y-6 flex flex-col justify-between ${
              option === 'pickup'
                ? 'bg-white border-blue-600 shadow-xl ring-2 ring-blue-600/20'
                : 'bg-white/60 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Store className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                  FREE ALWAYS
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900">Curbside Store Pickup</h3>
                <p className="text-xs text-slate-500">Ready for pickup in 2 hours at your nearest flagship store.</p>
              </div>
            </div>

            <div className="space-y-2 border-t border-slate-100 pt-4 text-xs font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Ready Today (Within 2 Hours)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Zero Minimum Spend Required</span>
              </div>
            </div>
          </div>

          {/* Doorstep Free Delivery */}
          <div
            onClick={() => setOption('delivery')}
            className={`p-7 rounded-3xl border-2 cursor-pointer transition-all space-y-6 flex flex-col justify-between ${
              option === 'delivery'
                ? 'bg-white border-blue-600 shadow-xl ring-2 ring-blue-600/20'
                : 'bg-white/60 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Truck className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">
                  FREE OVER $49
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900">Zero-Fee Home Courier Delivery</h3>
                <p className="text-xs text-slate-500">Tracked express shipment delivered straight to your home address.</p>
              </div>
            </div>

            <div className="space-y-2 border-t border-slate-100 pt-4 text-xs font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span>Arrives in 2-3 Business Days</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Pre-Paid Customs & GPS Tracking</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default OffersFreeShipping18;
