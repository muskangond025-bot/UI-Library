import React, { useState } from 'react';
import { Globe, ShieldCheck, Plane, CheckCircle2 } from 'lucide-react';

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: Record<string, any>;
    styles?: Record<string, any>;
  };
}

export function OffersFreeShipping12({ section }: SectionProps) {
  const [activeRegion, setActiveRegion] = useState('na');

  const regionsData: Record<string, { title: string; threshold: string; time: string; carrier: string; customs: string }> = {
    na: { title: 'North America (US & CA)', threshold: '$50 USD', time: '2-3 Business Days', carrier: 'FedEx Express', customs: 'Direct Domestic Fulfillment' },
    eu: { title: 'European Union & UK', threshold: '€60 EUR', time: '3-4 Business Days', carrier: 'DHL Worldwide Express', customs: 'Duties & VAT Pre-Paid' },
    asia: { title: 'Asia Pacific & Aus', threshold: '$80 USD', time: '4-5 Business Days', carrier: 'SF Express / Postal', customs: 'Guaranteed Customs Clearance' },
  };

  const current = regionsData[activeRegion];

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-mono text-cyan-400 border-y border-cyan-900/40 relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-widest">
            GLOBAL REGION MAP CALCULATOR
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase font-sans">
            International Zero-Fee Freight Matrix
          </h2>
          <p className="text-slate-400 text-xs font-sans">
            Select your global destination zone to view localized currency thresholds and courier fulfillment rules.
          </p>
        </div>

        {/* Region Tab Selectors */}
        <div className="flex justify-center gap-3">
          {[
            { id: 'na', label: 'North America' },
            { id: 'eu', label: 'Europe & UK' },
            { id: 'asia', label: 'Asia-Pacific' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveRegion(tab.id)}
              className={`px-5 py-2.5 rounded-xl border text-xs font-bold uppercase transition-all ${
                activeRegion === tab.id
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                  : 'bg-slate-900 text-cyan-400 border-cyan-900/60 hover:border-cyan-500/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Display Command Panel */}
        <div className="bg-slate-900/80 rounded-3xl border border-cyan-500/30 p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-cyan-900/60 pb-4 gap-2">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-bold text-white font-sans">{current.title}</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40 text-xs font-bold">
              FREE OVER {current.threshold}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
            <div className="bg-slate-950 p-4 rounded-xl border border-cyan-900/40 space-y-1">
              <span className="text-slate-400 block font-mono text-[10px] uppercase">ESTIMATED TRANSIT TIME</span>
              <span className="text-white font-bold text-base block">{current.time}</span>
              <span className="text-cyan-400 text-[11px] font-mono">Air Freight Courier</span>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-cyan-900/40 space-y-1">
              <span className="text-slate-400 block font-mono text-[10px] uppercase">FULFILLMENT PARTNER</span>
              <span className="text-white font-bold text-base block">{current.carrier}</span>
              <span className="text-cyan-400 text-[11px] font-mono">Door-to-door GPS Tracking</span>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-cyan-900/40 space-y-1">
              <span className="text-slate-400 block font-mono text-[10px] uppercase">CUSTOMS & DUTIES STATUS</span>
              <span className="text-emerald-400 font-bold text-base flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Pre-Cleared
              </span>
              <span className="text-slate-400 text-[11px] font-mono">{current.customs}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default OffersFreeShipping12;
