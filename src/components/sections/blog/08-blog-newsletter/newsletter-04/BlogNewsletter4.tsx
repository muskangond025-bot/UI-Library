import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter4({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-zinc-950 text-zinc-100">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl translate-x-3 translate-y-3 border border-emerald-500/20" />
        <div className="relative z-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-2xl">
          <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono rounded">
            DEPTH CARD BOX #04
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">{settings.sectionTitle}</h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">{settings.sectionSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3 rounded-lg bg-zinc-950 border border-zinc-700 text-white text-sm focus:outline-none" />
            <motion.button whileHover={{ y: -2 }} className="px-6 py-3 bg-emerald-500 text-zinc-950 font-bold text-xs uppercase rounded-lg">
              {settings.buttonText}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}