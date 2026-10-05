import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Lock, CheckCircle2, ShieldAlert, Key, FileText, Award, 
  Sparkles, RefreshCw, Zap, Check, Layers, Activity, Fingerprint, 
  ChevronDown, ChevronUp, ArrowRight, Eye, CheckCircle, Server, CreditCard
} from 'lucide-react';

export function CheckoutSecurityTrust7({ data }: { data?: any }) {
  const [selected, setSelected] = useState(0);
  const badges = [
    { title: 'SSL ENCRYPTED', desc: '256-Bit Security' },
    { title: 'BUYER PROTECTION', desc: '100% Refund Guarantee' },
    { title: 'PCI LEVEL 1', desc: 'Certified Gateway' },
    { title: 'FRAUD GUARD AI', desc: 'Real-time Monitoring' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" /> Security Badges Carousel
        </h3>
        <span className="text-xs text-slate-400">Tap to inspect</span>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
        {badges.map((b, idx) => {
          const isActive = selected === idx;
          return (
            <motion.div
              key={idx}
              onClick={() => setSelected(idx)}
              className={`flex-shrink-0 w-52 p-4 rounded-2xl border cursor-pointer transition-all bg-slate-800/60 ${isActive ? 'border-emerald-400 bg-slate-800 shadow-lg shadow-emerald-500/20 ring-1 ring-emerald-400' : 'border-slate-700/60'}`}
            >
              <ShieldCheck className="w-6 h-6 text-emerald-400 mb-2" />
              <h4 className="text-xs font-extrabold text-white mb-1 font-mono">{b.title}</h4>
              <p className="text-[11px] text-slate-400">{b.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
export default CheckoutSecurityTrust7;
