import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, FileCheck, ExternalLink, Award } from 'lucide-react';

export function AboutCertifications1() {
  const certs = [
    { title: 'ISO 9001:2026 Quality Management', code: 'ISO-9001-2026', org: 'International Quality Org', date: '2026' },
    { title: 'ISO 27001 Information Security', code: 'ISO-27001-SEC', org: 'Global Cyber Security Board', date: '2025' },
    { title: 'SOC 2 Type II Enterprise Trust', code: 'SOC2-TYPE-2', org: 'AICPA Security Standards', date: '2026' },
    { title: 'GDPR Data Compliance Standard', code: 'GDPR-EU-COMP', org: 'European Data Authority', date: '2025' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" /> FROSTED GLASS #01
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Enterprise Standard Certifications</h2>
          <p className="opacity-70 text-sm">Frosted glassmorphism panels with ambient backglow and audit verification codes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-indigo-500/50 transition-all flex flex-col justify-between space-y-6 shadow-xl"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-indigo-400 uppercase font-bold block">{c.org}</span>
                  <h3 className="text-base font-bold text-white mt-1">{c.title}</h3>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>{c.code}</span>
                <span className="text-indigo-400 flex items-center gap-1 font-bold">Verify <ExternalLink className="w-3 h-3" /></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
