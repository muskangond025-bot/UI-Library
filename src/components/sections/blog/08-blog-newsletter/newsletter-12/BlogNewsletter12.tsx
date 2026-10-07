import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export function BlogNewsletter12({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-black text-emerald-400 font-mono">
      <div className="max-w-4xl mx-auto border border-emerald-500/40 p-8 sm:p-12 rounded-lg bg-emerald-950/20 text-center space-y-6">
        <div className="flex justify-center items-center gap-2 text-xs text-emerald-400"><Terminal className="w-4 h-4 animate-pulse" /> [TELEMETRY_SUB_BOX // 12]</div>
        <h2 className="text-3xl sm:text-5xl font-bold uppercase text-white">{settings.sectionTitle}</h2>
        <p className="text-emerald-300/70 text-xs sm:text-sm font-sans max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-4 py-3 bg-black border border-emerald-500/50 text-emerald-300 text-xs focus:outline-none" />
          <motion.button whileHover={{ scale: 1.03 }} className="px-6 py-3 bg-emerald-500 text-black font-bold text-xs uppercase">
            EXECUTE_SUB()
          </motion.button>
        </div>
      </div>
    </div>
  );
}