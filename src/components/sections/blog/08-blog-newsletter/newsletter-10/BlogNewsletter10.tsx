import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter10({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-zinc-950 text-zinc-100">
      <div className="max-w-4xl mx-auto bg-zinc-900 border border-violet-500/30 rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-[0_0_35px_rgba(139,92,246,0.15)]">
        <span className="px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-bold uppercase">
          DARK VELVET RADAR #10
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white">{settings.sectionTitle}</h2>
        <p className="text-zinc-400 text-sm max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-white text-sm focus:outline-none" />
          <motion.button whileHover={{ scale: 1.04 }} className="px-6 py-3 bg-violet-600 text-white font-bold text-xs uppercase rounded-xl">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}