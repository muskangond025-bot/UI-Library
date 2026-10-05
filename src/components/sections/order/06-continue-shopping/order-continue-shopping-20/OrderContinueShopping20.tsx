import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Award, ArrowRight, Tag, Copy, Check } from 'lucide-react';

export function OrderContinueShopping20() {
  const [copied, setCopied] = useState(false);
  const code = "THANKS15";

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-950 via-zinc-950 to-black text-white py-12 px-4 sm:px-6 lg:px-8 rounded-3xl border border-amber-500/30 my-4 shadow-2xl relative overflow-hidden">
      <motion.div 
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-800 pb-6"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 rounded-2xl shadow-lg shadow-amber-500/20">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                <Sparkles className="w-3 h-3" /> Post-Purchase Hub
              </span>
              <h2 className="text-2xl font-serif font-bold text-white">Award Navigation Portal</h2>
            </div>
          </div>
          
          <div className="bg-zinc-900/90 px-4 py-2 rounded-xl border border-zinc-800 flex items-center gap-3">
            <span className="text-xs text-zinc-400">Next Order Code:</span>
            <span className="font-mono text-xs font-bold text-amber-400">{code}</span>
            <button onClick={copy} className="text-zinc-400 hover:text-white">
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </motion.div>

        {/* Hero CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className="bg-zinc-900/60 p-8 rounded-3xl border border-amber-500/20 text-center space-y-4 shadow-xl"
        >
          <h1 className="text-3xl sm:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300">
            CONTINUE SHOPPING THE STUDIO
          </h1>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">Explore exclusive new drops, limited capsules, and member rewards.</p>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            Explore Catalog <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderContinueShopping20;
