import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter14({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto bg-slate-900/60 border border-blue-500/30 rounded-full p-8 sm:p-10 backdrop-blur-xl text-center space-y-4">
        <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold rounded-full">
          LIQUID CAPSULE BAR #14
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold text-white">{settings.sectionTitle}</h2>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3 rounded-full bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none" />
          <motion.button whileHover={{ scale: 1.04 }} className="px-6 py-3 rounded-full bg-blue-500 text-slate-950 font-bold text-xs uppercase">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}