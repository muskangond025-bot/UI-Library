import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export function BlogNewsletter3({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-black text-cyan-400 font-mono relative overflow-hidden">
      <motion.div className="absolute inset-x-0 h-0.5 bg-cyan-400/50 blur-sm pointer-events-none" animate={{ y: ['0%', '100%', '0%'] }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} />
      <div className="max-w-4xl mx-auto border border-cyan-500/40 p-8 sm:p-12 rounded-xl bg-slate-950 text-center space-y-6 relative z-10">
        <div className="flex justify-center items-center gap-2 text-xs text-cyan-400"><Terminal className="w-4 h-4 animate-pulse" /> [HOLO_CYBER_TERMINAL_SUB // 03]</div>
        <h2 className="text-3xl sm:text-5xl font-bold uppercase text-white">{settings.sectionTitle}</h2>
        <p className="text-cyan-200/70 text-xs sm:text-sm font-sans max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-4 py-3 bg-black border border-cyan-500/50 text-cyan-300 placeholder-cyan-700 text-xs focus:outline-none" />
          <motion.button whileHover={{ scale: 1.03 }} className="px-6 py-3 bg-cyan-500 text-black font-bold text-xs uppercase tracking-widest">
            EXECUTE_SUB()
          </motion.button>
        </div>
      </div>
    </div>
  );
}