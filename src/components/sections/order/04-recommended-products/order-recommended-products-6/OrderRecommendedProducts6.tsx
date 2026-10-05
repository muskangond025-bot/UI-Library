import React from 'react';
import { motion } from 'framer-motion';

export function OrderRecommendedProducts6() {
  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">Top Recommendation</span>
          <h2 className="text-2xl font-bold text-white">Post-Purchase Highlight</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Featured */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between shadow-2xl"
          >
            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-800 mb-4">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800" 
                alt="Featured" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">Spotlight</span>
                <h3 className="text-xl font-bold text-white mt-1">Architectural Desk Lamp</h3>
                <p className="text-xs text-slate-400">Precision machined matte aluminum finish</p>
              </div>
              <span className="text-lg font-bold text-amber-400">$120.00</span>
            </div>
          </motion.div>

          {/* Secondary Products */}
          <div className="md:col-span-5 space-y-4 flex flex-col justify-between">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 flex items-center gap-4 cursor-pointer"
            >
              <img src="https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=200" alt="Sub" className="w-20 h-20 rounded-xl object-cover" />
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-white">Minimalist Cardholder</h4>
                <p className="text-xs text-amber-400 font-mono mt-0.5">$45.00</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 flex items-center gap-4 cursor-pointer"
            >
              <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=200" alt="Sub" className="w-20 h-20 rounded-xl object-cover" />
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-white">Ceramic Tumbler</h4>
                <p className="text-xs text-amber-400 font-mono mt-0.5">$38.00</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts6;
