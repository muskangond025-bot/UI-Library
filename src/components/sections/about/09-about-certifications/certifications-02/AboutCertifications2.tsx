import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Sparkles, CheckCircle2, QrCode, ArrowUpRight } from 'lucide-react';

export function AboutCertifications2() {
  const certs = [
    { title: 'FIPS 140-3 Hardware Cryptography', hash: '0x8F92...A102', status: 'VALIDATED' },
    { title: 'Zero-Trust Architecture Clearance', hash: '0x3B14...E891', status: 'VERIFIED' },
    { title: 'PCI-DSS v4.0 Payment Shield', hash: '0x7C99...F440', status: 'AUDITED' },
    { title: 'FedRAMP High Security Authorization', hash: '0x1A88...D209', status: 'AUTHORIZED' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" /> OBSIDIAN SHIELD #02
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">
            Cryptographic Security Badges
          </h2>
          <p className="opacity-70 text-sm">Deep obsidian glass cards with cryptographic ledger hashes and QR verification.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-zinc-900/80 backdrop-blur-2xl border border-zinc-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between space-y-6 shadow-2xl relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Lock className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-mono font-bold">
                    {c.status}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white">{c.title}</h3>
              </div>

              <div className="pt-4 border-t border-zinc-800 space-y-2 text-xs font-mono">
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Ledger Hash:</span>
                  <span className="text-cyan-400 font-bold">{c.hash}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
