import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export function BlogNewsletter1({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-14 backdrop-blur-2xl shadow-2xl relative z-10 text-center space-y-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
          <Sparkles className="w-3.5 h-3.5 animate-spin" /> GLASS HERO SUB #01
        </motion.div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">{settings.sectionTitle}</h2>
        <p className="text-slate-300 text-base max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm" />
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3.5 bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2">
            <span>{settings.buttonText}</span> <ArrowRight className="w-4 h-4" />
          </motion.button>
        </form>
        <p className="text-xs text-slate-500 font-mono">{settings.disclaimer}</p>
      </div>
    </div>
  );
}