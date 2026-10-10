import React, { useState } from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';
export function AboutPartnersBrands18() {
  const [open, setOpen] = useState(false);
  return (
    <section className="w-full py-16 px-4 bg-slate-950 text-white text-center">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase"><Sparkles className="w-3.5 h-3.5 inline mr-2"/> CASE STUDY DRAWER #18 • ANIMATION: SLIDE-OUT CASE STUDY MODAL REVEAL</span>
        <h2 className="text-3xl font-black">Interactive Case Study Drawer Modal</h2>
        <button onClick={() => setOpen(!open)} className="px-6 py-3 rounded-2xl bg-amber-500 text-slate-950 font-bold text-sm">
          {open ? 'Close Case Study Drawer' : 'Preview Case Study Drawer Modal'}
        </button>
        {open && (
          <div className="p-8 rounded-3xl bg-slate-900 border border-amber-500/40 text-left max-w-xl mx-auto space-y-3">
            <h3 className="text-xl font-bold">NVIDIA & Cloud Alliance Case Study</h3>
            <p className="text-xs font-mono text-slate-400">METRICS: +450% Processing Throughput | 99.999% SLA</p>
          </div>
        )}
      </div>
    </section>
  );
}
