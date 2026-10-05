import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Plus } from 'lucide-react';

export function OrderRecommendedProducts4() {
  const [added, setAdded] = useState(false);

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">Visual Pairing</span>
          <h2 className="text-2xl font-bold text-white">Pairs Well With Your Order</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
          {/* Purchased */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-xl"
          >
            <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 uppercase">
              PURCHASED ITEM
            </span>
            <div className="aspect-video rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600" alt="Purchased" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-white text-sm">Architectural Desk Organizer</h4>
          </motion.div>

          {/* Animated Node */}
          <div className="md:col-span-1 flex justify-center py-2 relative">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }} 
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="w-10 h-10 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center font-bold text-xl shadow-lg"
            >
              +
            </motion.div>
          </div>

          {/* Recommended Pair */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5 bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-xl"
          >
            <span className="text-[10px] font-mono bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded border border-indigo-500/20 uppercase">
              PERFECT MATCH
            </span>
            <div className="aspect-video rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600" alt="Pair" className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-bold text-white text-sm">Architectural Desk Lamp</h4>
                <span className="text-xs font-mono text-indigo-400">$120.00</span>
              </div>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={() => setAdded(!added)}
                className={`px-3 py-1.5 font-bold rounded-xl text-xs transition-colors flex items-center gap-1 ${
                  added ? 'bg-emerald-500 text-slate-950' : 'bg-indigo-500 hover:bg-indigo-400 text-slate-950'
                }`}
              >
                {added ? <Check className="w-4 h-4 stroke-[3]" /> : <Plus className="w-3.5 h-3.5" />}
                {added ? 'Added' : 'Add to Order'}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts4;
