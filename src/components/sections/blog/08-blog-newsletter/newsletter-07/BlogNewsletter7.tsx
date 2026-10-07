import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter7({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-black text-slate-200">
      <div className="max-w-4xl mx-auto p-[1px] bg-gradient-to-r from-slate-600 via-slate-200 to-slate-700 rounded-3xl relative overflow-hidden group">
        <div className="bg-slate-950 rounded-[23px] p-8 sm:p-14 text-center space-y-6 relative z-10">
          <span className="px-3 py-1 bg-slate-800 border border-slate-600 rounded-full text-slate-300 text-xs font-mono uppercase">
            CHROME METALLIC SHEEN #07
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">{settings.sectionTitle}</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">{settings.sectionSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none" />
            <motion.button whileHover={{ scale: 1.03 }} className="px-6 py-3 bg-gradient-to-r from-slate-200 to-slate-400 text-slate-950 font-bold text-xs uppercase rounded-xl">
              {settings.buttonText}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}