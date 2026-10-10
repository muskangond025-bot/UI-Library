import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Sparkles } from 'lucide-react';

export function AboutCertifications15() {
  const [open, setOpen] = useState(false);
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-8 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
          <Sparkles className="w-3.5 h-3.5" /> VERIFICATION DRAWER MODAL #15 • ANIMATION: SLIDE-OUT AUDIT DRAWER REVEAL
        </span>
        <h2 className="text-3xl font-black">Interactive Certificate Verification Drawer</h2>
        <button onClick={() => setOpen(!open)} className="px-6 py-3 rounded-2xl bg-amber-500 text-slate-950 font-bold text-sm">
          {open ? 'Close Verification Drawer' : 'Preview Interactive Drawer Modal'}
        </button>
        {open && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="p-8 rounded-3xl bg-slate-900 border border-amber-500/40 text-left max-w-xl mx-auto space-y-4">
            <FileText className="w-8 h-8 text-amber-400" />
            <h3 className="text-xl font-bold">Verified Audit Drawer Protocol</h3>
            <p className="text-xs text-slate-400 font-mono">HASH: 0x99A82103BF91022 | ISSUER: Global Trust Authority</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
