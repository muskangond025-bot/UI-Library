"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Lock, CheckCircle2, Sparkles } from 'lucide-react';

export function GlobalTrustCertification1() {
  const badges = [
    { icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />, title: 'SOC-2 Type II Certified', desc: 'Audited enterprise cloud infrastructure security' },
    { icon: <Award className="w-6 h-6 text-emerald-400" />, title: 'ISO 27001 Certified', desc: 'Global information security governance standards' },
    { icon: <Lock className="w-6 h-6 text-indigo-400" />, title: '256-Bit SSL Encryption', desc: 'Bank-grade quantum-resistant transport encryption' },
    { icon: <CheckCircle2 className="w-6 h-6 text-rose-400" />, title: 'GDPR & CCPA Compliant', desc: '100% verified consumer data protection compliance' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> SECURITY & COMPLIANCE MATRIX #1
          </div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight">Verified Trust Badges & Standards</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b, idx) => (
            <motion.div key={idx} whileHover={{ y: -6 }} className="bg-slate-900/60 rounded-3xl p-6 border border-slate-800 backdrop-blur-xl flex flex-col justify-between min-h-[220px] cursor-pointer group hover:border-cyan-500/50">
              <div className="w-12 h-12 rounded-2xl bg-slate-800/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {b.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{b.title}</h3>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}