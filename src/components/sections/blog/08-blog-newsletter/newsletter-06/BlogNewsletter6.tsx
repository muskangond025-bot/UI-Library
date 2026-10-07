import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter6({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 backdrop-blur-xl text-center space-y-6">
        <span className="px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold">
          FROSTED FLOATING CAPSULE #06
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold text-white">{settings.sectionTitle}</h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3 rounded-2xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none" />
          <motion.button whileHover={{ scale: 1.03 }} className="px-6 py-3 rounded-2xl bg-rose-500 text-white font-bold text-xs uppercase">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}