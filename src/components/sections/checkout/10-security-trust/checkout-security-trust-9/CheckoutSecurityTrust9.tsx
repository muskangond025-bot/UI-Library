import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Lock, CheckCircle2, ShieldAlert, Key, FileText, Award, 
  Sparkles, RefreshCw, Zap, Check, Layers, Activity, Fingerprint, 
  ChevronDown, ChevronUp, ArrowRight, Eye, CheckCircle, Server, CreditCard
} from 'lucide-react';

export function CheckoutSecurityTrust9({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans perspective-1000">
      <div className="text-center mb-6">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">3D PERSPECTIVE VAULT</span>
        <h3 className="text-xl font-bold text-white">Security Certificate</h3>
      </div>

      <motion.div 
        whileHover={{ rotateX: -6, rotateY: 5, scale: 1.02 }}
        className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 border border-emerald-500/40 shadow-2xl flex items-center justify-between cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="flex items-center gap-4">
          <ShieldCheck className="w-10 h-10 text-emerald-400" />
          <div>
            <span className="text-xs font-mono font-bold text-emerald-300 block mb-1">CERTIFICATE #SSL-2026</span>
            <h4 className="text-lg font-extrabold text-white">Verified PCI Level 1 Compliant</h4>
          </div>
        </div>
        <span className="px-3 py-1.5 bg-emerald-500 text-black rounded-xl text-xs font-extrabold">Active</span>
      </motion.div>
    </div>
  );
}
export default CheckoutSecurityTrust9;
