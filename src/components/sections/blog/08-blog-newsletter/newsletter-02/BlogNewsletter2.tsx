import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter2({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-900 shadow-[15px_15px_30px_#0b0f19,-15px_-15px_30px_#1b253b] border border-slate-800/80 text-center space-y-6">
        <span className="px-4 py-1.5 rounded-xl bg-slate-900 shadow-[inset_3px_3px_6px_#0b0f19,inset_-3px_-3px_6px_#1b253b] text-sky-400 text-xs font-bold uppercase">
          NEUMORPHIC DUAL-SHADOW BOX #02
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">{settings.sectionTitle}</h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3 rounded-xl bg-slate-900 shadow-[inset_4px_4px_8px_#0b0f19,inset_-4px_-4px_8px_#1b253b] text-white placeholder-slate-500 text-sm focus:outline-none" />
          <motion.button whileTap={{ scale: 0.96 }} className="px-6 py-3 rounded-xl bg-slate-900 shadow-[6px_6px_12px_#0b0f19,-6px_-6px_12px_#1b253b] active:shadow-[inset_3px_3px_6px_#0b0f19] text-sky-400 font-bold text-xs uppercase">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}