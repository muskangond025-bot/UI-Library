"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalFooter12() {
  return (
    <footer className="w-full py-24 px-6 bg-stone-100 text-stone-900 font-serif border-t border-stone-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-900 bg-amber-200/60 px-4 py-1.5 rounded-full border border-amber-300">THE CHRONICLE GAZETTE • FOOTNOTE #12</span>
            <h2 className="text-4xl sm:text-6xl font-normal text-stone-950 mt-4 tracking-tight">Curated Cultural Architecture</h2>
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 rounded-xl bg-stone-950 hover:bg-amber-900 text-white font-sans text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
            INQUIRE ATELIER <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 border-b border-stone-300 font-sans text-xs">
          {[
            { title: 'PUBLICATIONS', links: ['Haute Couture Essays', 'Swiss Horology Archives', 'Brutalist Space Planning'] },
            { title: 'ATELIERS', links: ['Milan Studio', 'Geneva Workshop', 'Paris Showroom'] },
            { title: 'PATRONAGE', links: ['Print Membership', 'Private Salon Access', 'Heritage Grants'] },
            { title: 'DISPATCH', text: 'Weekly bespoke essays sent via first-class mail.' }
          ].map((col, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }}>
              <h5 className="font-serif font-bold text-stone-950 uppercase tracking-wider mb-4">{col.title}</h5>
              {col.links && col.links.map((link, lIdx) => (
                <motion.p key={lIdx} whileHover={{ x: 4, color: '#78350f' }} className="text-stone-600 mb-2 cursor-pointer transition-all">
                  {link}
                </motion.p>
              ))}
              {col.text && <p className="text-stone-600 leading-relaxed">{col.text}</p>}
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-sans text-stone-500">
          <p>© 2026 The Chronicle Gazette. Printed in Milan & Geneva.</p>
          <p className="font-mono text-[11px]">ALL RIGHTS RESERVED • VOL. XXVI</p>
        </motion.div>
      </div>
    </footer>
  );
}