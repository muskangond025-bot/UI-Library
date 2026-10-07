import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter9({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-5xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">SPLIT CONTENT #09</span>
          <h2 className="text-3xl font-black text-white">{settings.sectionTitle}</h2>
          <p className="text-slate-400 text-xs">{settings.sectionSubtitle}</p>
        </div>
        <div className="space-y-3 bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <input type="email" placeholder={settings.inputPlaceholder} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none" />
          <motion.button whileHover={{ scale: 1.02 }} className="w-full py-3 bg-blue-500 text-slate-950 font-bold text-xs uppercase rounded-xl">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}