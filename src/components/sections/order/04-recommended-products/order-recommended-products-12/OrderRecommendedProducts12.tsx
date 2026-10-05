import React from 'react';
import { motion } from 'framer-motion';

export function OrderRecommendedProducts12() {
  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-1">Visual Progression</span>
          <h2 className="text-2xl font-bold text-white">Post-Purchase Flow</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2 text-center shadow-xl"
          >
            <span className="text-[10px] font-mono text-slate-400 uppercase">STEP 1 / ORDERED</span>
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400" alt="1" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-xs text-white pt-1">Desk Organizer</h4>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-slate-900 p-5 rounded-2xl border border-teal-500/40 space-y-2 text-center ring-2 ring-teal-500/20 shadow-xl"
          >
            <span className="text-[10px] font-mono text-teal-400 uppercase">STEP 2 / COMPLEMENTARY</span>
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=400" alt="2" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-xs text-white pt-1">Desk Lamp ($120)</h4>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2 text-center shadow-xl"
          >
            <span className="text-[10px] font-mono text-slate-400 uppercase">STEP 3 / EXTENSION</span>
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400" alt="3" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-xs text-white pt-1">Ceramic Tumbler ($38)</h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts12;
