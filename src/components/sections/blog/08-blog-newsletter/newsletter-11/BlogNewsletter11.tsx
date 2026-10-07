import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter11({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-stone-900 text-stone-200">
      <div className="max-w-4xl mx-auto bg-stone-950 border border-stone-800 p-8 sm:p-12 rounded-2xl shadow-[8px_8px_0px_#1c1917] text-center space-y-6">
        <span className="px-4 py-1 bg-amber-500 text-stone-950 font-mono font-bold text-xs uppercase rounded">
          JOURNAL STAMP BOX #11
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">{settings.sectionTitle}</h2>
        <p className="text-stone-400 text-xs sm:text-sm font-sans max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-4 py-3 bg-stone-900 border border-stone-700 text-white text-xs font-sans focus:outline-none" />
          <motion.button whileHover={{ y: -2 }} className="px-6 py-3 bg-amber-500 text-stone-950 font-bold text-xs uppercase rounded font-mono">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}