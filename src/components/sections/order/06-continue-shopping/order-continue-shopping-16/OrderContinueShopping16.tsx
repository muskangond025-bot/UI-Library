import React from 'react';
import { motion } from 'framer-motion';

export function OrderContinueShopping16() {
  const brands = ['STUDIO NORDIC', 'ARCHITECTURAL LAB', 'MINIMALIST KNITS'];

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase">Brand Directory</span>
          <h2 className="text-2xl font-bold text-white">Explore Partner Brands</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {brands.map((b, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-center cursor-pointer">
              <h4 className="font-bold text-sm text-white font-mono">{b}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping16;
