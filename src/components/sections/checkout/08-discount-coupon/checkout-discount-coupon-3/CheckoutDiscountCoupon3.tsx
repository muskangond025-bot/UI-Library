import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, Percent, Sparkles, Check, Copy, X, Gift, Truck, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Zap, Award, Star, Flame, Lock, HelpCircle
} from 'lucide-react';

export function CheckoutDiscountCoupon3({ data }: { data?: any }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-6 bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="text-center mb-6">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">PROMOTIONAL TICKET STUB</span>
        <h2 className="text-xl font-bold text-white">Special Discount Voucher</h2>
      </div>

      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 rounded-2xl border border-amber-500/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
      >
        {/* Left Side Ticket */}
        <div className="flex items-center gap-4">
          <div className="p-3 bg-amber-500/20 text-amber-400 rounded-2xl border border-amber-500/30">
            <TicketIcon className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs font-mono text-amber-300 font-bold uppercase tracking-wider">SPRING PROMO</span>
            <h3 className="text-2xl font-extrabold text-white">$100 OFF VOUCHER</h3>
            <p className="text-xs text-amber-200/70">Valid on all orders above $500</p>
          </div>
        </div>

        {/* Perforation Line */}
        <div className="hidden sm:block h-16 w-px border-r-2 border-dashed border-amber-500/30" />

        {/* Right Side Action */}
        <div className="text-center sm:text-right">
          <span className="text-[10px] text-amber-300 font-mono block mb-1">COUPON CODE</span>
          <div className="px-4 py-2 bg-slate-950 rounded-xl border border-amber-500/30 text-amber-400 font-mono font-bold text-sm mb-2">
            SPRING2026
          </div>
          <button 
            onClick={handleCopy}
            className="flex items-center gap-1 text-xs font-bold text-amber-300 hover:text-white mx-auto sm:ml-auto"
          >
            {copied ? <><Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!</> : <><Copy className="w-3.5 h-3.5" /> Copy Code</>}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function TicketIcon(props: any) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>
  );
}

export default CheckoutDiscountCoupon3;
