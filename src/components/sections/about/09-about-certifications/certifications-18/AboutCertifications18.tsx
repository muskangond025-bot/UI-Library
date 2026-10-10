import React from 'react';
import { Sparkles, Calendar } from 'lucide-react';

export function AboutCertifications18() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-8 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase">
          <Sparkles className="w-3.5 h-3.5" /> TIMELINE CREDENTIALS #18
        </span>
        <h2 className="text-3xl font-black">Timeline Milestone Accreditation</h2>
        <div className="space-y-4 max-w-2xl mx-auto text-left">
          {['2024 - ISO 9001 Granted', '2025 - SOC 2 Type II Certified', '2026 - ISO 27001 Security Clearance'].map((t, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <span className="font-bold text-sm">{t}</span>
              <Calendar className="w-4 h-4 text-blue-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
