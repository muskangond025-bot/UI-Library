import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter5({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-indigo-950/40 text-indigo-100">
      <div className="max-w-4xl mx-auto bg-indigo-900/60 border border-indigo-400/30 rounded-[2.5rem] p-8 sm:p-14 backdrop-blur-xl text-center space-y-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_20px_40px_rgba(0,0,0,0.4)]">
        <span className="px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-300/30 text-indigo-200 text-xs font-extrabold uppercase">
          CLAYMORPHIC 3D FORM #05
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white">{settings.sectionTitle}</h2>
        <p className="text-indigo-200/80 text-sm max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-6 py-3.5 rounded-2xl bg-indigo-950/80 border border-indigo-400/30 text-white text-sm focus:outline-none" />
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="px-8 py-3.5 rounded-2xl bg-indigo-500 text-white font-black text-xs uppercase shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)]">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}