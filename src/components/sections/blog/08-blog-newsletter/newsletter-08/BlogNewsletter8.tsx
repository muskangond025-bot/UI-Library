import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter8({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white relative overflow-hidden">
      <motion.div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 rounded-full blur-[100px] opacity-30 pointer-events-none" animate={{ x: ['-50%', '-45%', '-55%', '-50%'], y: ['-50%', '-55%', '-45%', '-50%'] }} transition={{ duration: 10, repeat: Infinity }} />
      <div className="max-w-4xl mx-auto relative z-10 bg-slate-900/40 border border-white/10 backdrop-blur-3xl rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-2xl">
        <span className="px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold">
          AURORA MESH BOX #08
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white">{settings.sectionTitle}</h2>
        <p className="text-purple-100/80 text-sm max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3.5 rounded-2xl bg-slate-950/80 border border-white/20 text-white text-sm focus:outline-none" />
          <motion.button whileHover={{ scale: 1.04 }} className="px-7 py-3.5 bg-purple-500 text-white font-bold text-xs uppercase rounded-2xl">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}