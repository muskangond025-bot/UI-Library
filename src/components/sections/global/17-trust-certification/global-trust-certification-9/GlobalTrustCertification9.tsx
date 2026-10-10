"use client";
import React from 'react';
import { ShieldCheck, Lock, Award, CheckCircle2 } from 'lucide-react';

export function GlobalTrustCertification9() {
  return (
    <section className="w-full py-24 px-6 bg-neutral-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-3 h-8 bg-rose-500 rounded-full"></div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Bento Trust & Compliance Grid #9</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'ISO 27001 Certified', icon: <Award className="w-6 h-6 text-rose-400" />, desc: 'Enterprise security management verification' },
            { title: 'PCI-DSS Level 1', icon: <Lock className="w-6 h-6 text-emerald-400" />, desc: 'Highest global credit card data standard' },
            { title: 'SOC-2 Type II Verified', icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />, desc: 'Continuous 24/7 security auditing' },
            { title: 'HIPAA & GDPR Ready', icon: <CheckCircle2 className="w-6 h-6 text-amber-400" />, desc: 'Full patient & consumer privacy shielding' },
          ].map((card, idx) => (
            <div key={idx} className="bg-neutral-900 rounded-3xl p-6 border border-white/10 flex flex-col justify-between min-h-[220px] hover:border-rose-500/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-neutral-800 flex items-center justify-center">
                {card.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mt-4">{card.title}</h3>
                <p className="text-neutral-400 text-xs mt-1">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}