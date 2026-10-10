import React, { useState } from 'react';
export function AboutCtaBanner18() {
  const [open, setOpen] = useState(false);
  return (
    <section className="w-full py-16 px-4 bg-slate-950 text-white text-center">
      <div className="max-w-4xl mx-auto space-y-6 p-10 rounded-3xl bg-slate-900 border border-amber-500/40">
        <span className="text-xs font-mono text-amber-400 font-bold uppercase">DRAWER MODAL #18 • ANIMATION: SLIDE-OUT CONSULTATION DRAWER REVEAL</span>
        <h2 className="text-3xl font-black">Interactive Consultation Booking Drawer</h2>
        <button onClick={() => setOpen(!open)} className="px-8 py-4 rounded-2xl bg-amber-500 text-slate-950 font-bold text-sm">
          {open ? 'Close Drawer' : 'Open Consultation Drawer'}
        </button>
        {open && (
          <div className="p-6 bg-slate-800 rounded-2xl border border-amber-400 text-left space-y-2 max-w-md mx-auto">
            <h3 className="font-bold">Book 1-on-1 Consultation</h3>
            <p className="text-xs text-slate-300">Schedule immediate 30-min strategy session.</p>
          </div>
        )}
      </div>
    </section>
  );
}
