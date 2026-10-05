import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Lock, CheckCircle2, ShieldAlert, Key, FileText, Award, 
  Sparkles, RefreshCw, Zap, Check, Layers, Activity, Fingerprint, 
  ChevronDown, ChevronUp, ArrowRight, Eye, CheckCircle, Server, CreditCard
} from 'lucide-react';

export function CheckoutSecurityTrust2({ data }: { data?: any }) {
  const points = [
    { icon: Lock, title: '256-Bit SSL Encryption', desc: 'Bank-level encrypted payment pipeline', color: 'indigo', iconAnim: { rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] } },
    { icon: Award, title: 'Buyer Protection', desc: '100% money-back refund guarantee', color: 'emerald', iconAnim: { y: [0, -3, 0], scale: [1, 1.12, 1] } },
    { icon: RefreshCw, title: 'Instant Returns', desc: 'Hassle-free 30-day return policy', color: 'teal', iconAnim: { rotate: [0, 360] } },
    { icon: Zap, title: 'Fraud Monitoring', desc: 'Real-time AI threat detection', color: 'amber', iconAnim: { scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] } }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-6 p-6 sm:p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="text-center mb-8">
        <motion.span 
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-widest block mb-1"
        >
          ✨ GUARANTEED SAFE & SECURE
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400"
        >
          Why Your Purchase is 100% Safe
        </motion.h2>
      </div>

      <motion.div 
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {points.map((p, idx) => {
          const IconComp = p.icon;
          return (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mb-4 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-md"
                >
                  <motion.div
                    animate={p.iconAnim}
                    transition={{ duration: idx === 2 ? 6 : 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <IconComp className="w-6 h-6" />
                  </motion.div>
                </motion.div>
                <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors mb-1">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <motion.div 
                initial={{ opacity: 0.4 }}
                whileHover={{ opacity: 1 }}
                className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-indigo-400 font-medium"
              >
                <span>Verified</span>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
export default CheckoutSecurityTrust2;
