import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Lock, CheckCircle2, ShieldAlert, Key, FileText, Award, 
  Sparkles, RefreshCw, Zap, Check, Layers, Activity, Fingerprint, 
  ChevronDown, ChevronUp, ArrowRight, Eye, CheckCircle, Server, CreditCard
} from 'lucide-react';

export function CheckoutSecurityTrust5({ data }: { data?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto my-6 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden font-sans">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center bg-slate-800/60 hover:bg-slate-800 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <div>
            <h3 className="text-sm font-bold text-white">How is your payment secured?</h3>
            <p className="text-xs text-slate-400">Click to inspect our encryption & compliance standards</p>
          </div>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="p-6 border-t border-slate-800 space-y-3 text-xs text-slate-300"
          >
            <p><strong>1. AES 256-Bit SSL:</strong> All traffic sent through this checkout form is encrypted using end-to-end socket security protocol.</p>
            <p><strong>2. PCI Level 1 Certified:</strong> We adhere to the highest international payment card industry compliance frameworks.</p>
            <p><strong>3. Zero Storage Policy:</strong> Full credit card numbers are tokenized and never stored on our local web servers.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default CheckoutSecurityTrust5;
