"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalFooter15() {
  return (
    <footer className="w-full py-20 px-6 bg-slate-50 text-slate-900 font-sans border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col lg:flex-row justify-between items-center pb-12 border-b border-slate-200 gap-6">
          <div>
            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">FOOTER STRIP #15</span>
            <h3 className="text-2xl font-extrabold text-slate-950 mt-2">Product & Engineering Suite</h3>
          </div>
          <div className="flex gap-8 text-sm font-bold text-slate-700">
            {['Products', 'Solutions', 'Enterprise', 'Pricing'].map((item, idx) => (
              <motion.span key={idx} whileHover={{ y: -2, color: '#4f46e5' }} className="cursor-pointer transition-all">
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 font-medium gap-4">
          <p>© 2026 Product Engineering Suite. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((item, idx) => (
              <motion.span key={idx} whileHover={{ color: '#4f46e5' }} className="cursor-pointer transition-colors">
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}