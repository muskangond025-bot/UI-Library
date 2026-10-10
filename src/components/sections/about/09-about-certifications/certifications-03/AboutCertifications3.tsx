import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, CheckCircle2, Ribbon } from 'lucide-react';

export function AboutCertifications3() {
  const certs = [
    { title: 'Executive Quality Excellence Medal', issuer: 'Global Excellence Board', year: '2026' },
    { title: 'Premier Enterprise Partner Distinction', issuer: 'World Technology Council', year: '2025' },
    { title: 'National Cyber Compliance Trophy', issuer: 'Security Federation', year: '2026' },
    { title: 'Global ESG Platinum Sustainability Award', issuer: 'Eco Standard Org', year: '2025' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-stone-900 text-amber-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" /> DIPLOMA FRAME #03
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-amber-200">
            Official Accreditations & Honors
          </h2>
          <p className="opacity-70 text-sm font-serif italic">Classic diploma frames featuring gold foil ribbon seals and parchment textures.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-stone-800 to-stone-900 border-2 border-amber-500/40 transition-all flex flex-col justify-between space-y-6 shadow-2xl relative"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="p-3 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40">
                    <Ribbon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-serif italic text-amber-400/80">{c.year}</span>
                </div>
                <h3 className="text-base font-serif font-bold text-amber-100">{c.title}</h3>
                <p className="text-xs font-serif opacity-75">{c.issuer}</p>
              </div>

              <div className="pt-4 border-t border-amber-500/20 text-[11px] font-mono text-amber-400 flex items-center justify-between">
                <span>SEAL VERIFIED</span>
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
