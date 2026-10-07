import React, { useState } from 'react';
import { Search, MapPin, CheckCircle2, AlertCircle, ArrowRight, Package } from 'lucide-react';

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: Record<string, any>;
    styles?: Record<string, any>;
  };
}

export function OffersFreeShipping3({ section }: SectionProps) {
  const [zip, setZip] = useState('');
  const [status, setStatus] = useState<'idle' | 'eligible' | 'partial' | 'invalid'>('idle');
  const [resultMessage, setResultMessage] = useState('');

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zip.trim();
    
    if (!cleanZip || cleanZip.length < 4) {
      setStatus('invalid');
      setResultMessage('Please enter a valid 5-digit postal code.');
      return;
    }

    // Mock zip checking logic
    const firstDigit = cleanZip.charAt(0);
    if (['9', '1', '0'].includes(firstDigit)) {
      setStatus('eligible');
      setResultMessage('Great news! Zip code ' + cleanZip + ' qualifies for ZERO-COST Express Shipping with no minimum order!');
    } else if (['3', '5', '7'].includes(firstDigit)) {
      setStatus('partial');
      setResultMessage('Zip code ' + cleanZip + ' qualifies for FREE Shipping on orders over $35!');
    } else {
      setStatus('eligible');
      setResultMessage('Standard FREE Ground Shipping available for zip code ' + cleanZip + ' on orders over $49.');
    }
  };

  return (
    <section className="w-full py-14 px-4 bg-slate-50 font-sans text-slate-900 border-y border-slate-200">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Main Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl space-y-8">
          
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider border border-slate-200">
              POSTAL CODE CHECKER TOOL
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Check Your Local Free Shipping Status
            </h2>
            <p className="text-slate-600 text-sm">
              Enter your zip/postal code to instantly reveal localized delivery speeds, warehouse fulfillment origins, and minimum thresholds.
            </p>
          </div>

          {/* Form Control */}
          <form onSubmit={handleCheck} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <MapPin className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Enter Zip Code (e.g. 90210)"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all shrink-0"
            >
              <span>Verify Zip</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Dynamic Status Output Card */}
          {status !== 'idle' && (
            <div className={`p-5 rounded-2xl border ${
              status === 'eligible' ? 'bg-emerald-50 border-emerald-200 text-emerald-950' :
              status === 'partial' ? 'bg-amber-50 border-amber-200 text-amber-950' :
              'bg-rose-50 border-rose-200 text-rose-950'
            }`}>
              <div className="flex items-start gap-3">
                {status === 'eligible' && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />}
                {status === 'partial' && <Package className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />}
                {status === 'invalid' && <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />}
                
                <div className="space-y-1">
                  <h4 className="font-bold text-sm">
                    {status === 'eligible' ? 'Free Shipping Available!' : status === 'partial' ? 'Threshold Qualified!' : 'Notice'}
                  </h4>
                  <p className="text-xs font-medium leading-relaxed">
                    {resultMessage}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Quick Perks Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-100 pt-6 text-center text-xs text-slate-500 font-medium">
            <div>🚀 Same-Day Regional Dispatch</div>
            <div>📦 Real-Time GPS Tracking</div>
            <div>🛡️ Loss & Damage Protection</div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default OffersFreeShipping3;
