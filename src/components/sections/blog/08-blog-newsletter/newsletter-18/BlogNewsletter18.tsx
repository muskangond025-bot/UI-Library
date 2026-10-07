import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter18({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-2xl border-2 border-cyan-400/40 rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <span className="px-4 py-1.5 bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold uppercase rounded-full">
          PRISMATIC REFRACTION BOX #18
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white">{settings.sectionTitle}</h2>
        <p className="text-cyan-100/70 text-sm max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3 rounded-xl bg-slate-950/80 border border-cyan-400/30 text-white text-sm focus:outline-none" />
          <motion.button whileHover={{ scale: 1.04, filter: 'hue-rotate(90deg)' }} className="px-6 py-3 bg-cyan-400 text-slate-950 font-bold text-xs uppercase rounded-xl">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}