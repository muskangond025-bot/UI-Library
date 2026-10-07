import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter20({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-14 px-4 bg-black text-white">
      <div className="max-w-5xl mx-auto bg-slate-950 border border-fuchsia-500/30 rounded-[3rem] p-10 sm:p-16 text-center space-y-8">
        <span className="px-5 py-2 bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-mono font-bold tracking-widest uppercase rounded-full">
          ULTRA STREAM FULL-BLEED #20
        </span>
        <h2 className="text-3xl sm:text-6xl font-black text-white">{settings.sectionTitle}</h2>
        <p className="text-slate-300 text-base max-w-2xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-6 py-4 rounded-2xl bg-black border border-slate-700 text-white text-sm focus:outline-none" />
          <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-fuchsia-500 text-black font-extrabold text-xs uppercase rounded-2xl">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}