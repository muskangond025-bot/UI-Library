import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter16({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto border-l-2 border-orange-500 pl-6 sm:pl-10 space-y-6">
        <span className="text-xs font-mono text-orange-400 tracking-widest uppercase">ARCHITECTURAL HAIRLINE FORM #16</span>
        <h2 className="text-3xl sm:text-5xl font-light text-white">{settings.sectionTitle}</h2>
        <p className="text-slate-400 text-sm max-w-xl">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none" />
          <motion.button whileHover={{ x: 4 }} className="px-6 py-3 border border-orange-500 text-orange-400 hover:bg-orange-500/10 font-mono text-xs uppercase">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}