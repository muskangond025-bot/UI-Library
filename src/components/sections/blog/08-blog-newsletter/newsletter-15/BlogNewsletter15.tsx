import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter15({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl relative overflow-hidden">
        <div className="bg-slate-950 rounded-[22px] p-8 sm:p-12 text-center space-y-6">
          <span className="px-3 py-1 bg-pink-500/20 text-pink-400 border border-pink-500/40 text-xs font-mono font-bold rounded-full">
            NEON EDGE GLOW CARD #15
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">{settings.sectionTitle}</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">{settings.sectionSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none" />
            <motion.button whileHover={{ scale: 1.04 }} className="px-6 py-3 bg-pink-500 text-black font-bold text-xs uppercase rounded-xl">
              {settings.buttonText}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}