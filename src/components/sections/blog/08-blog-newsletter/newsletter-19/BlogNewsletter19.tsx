import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter19({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-zinc-900 text-amber-100">
      <div className="max-w-4xl mx-auto bg-zinc-900 border border-amber-800/40 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-inner">
        <span className="px-3.5 py-1.5 bg-zinc-950 border border-amber-700/50 text-amber-400 text-xs font-mono font-bold rounded-lg">
          EMBOSSED VINTAGE RETRO #19
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-amber-50">{settings.sectionTitle}</h2>
        <p className="text-amber-200/70 text-xs sm:text-sm max-w-xl mx-auto font-sans">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3 rounded-xl bg-zinc-950 border border-amber-900/50 text-amber-100 text-xs font-sans focus:outline-none" />
          <motion.button whileTap={{ scale: 0.97 }} className="px-6 py-3 bg-amber-700 text-zinc-950 font-bold text-xs uppercase rounded-xl font-mono">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}