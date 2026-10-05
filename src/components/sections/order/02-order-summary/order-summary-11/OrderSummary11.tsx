import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function OrderSummary11({ data }: { data?: any }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-6 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 font-sans text-xs">
      <div 
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center cursor-pointer py-1"
      >
        <span className="font-bold flex items-center gap-2">
          ORDER SUMMARY ({open ? 'Collapse' : 'Expand 2 items'})
          <ChevronDown className={"w-4 h-4 transition-transform " + (open ? "rotate-180" : "")} />
        </span>
        <span className="font-mono text-emerald-400 font-bold text-sm">₹3,999</span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden pt-4 border-t border-slate-800 mt-4 font-mono text-slate-300 space-y-2"
          >
            <div className="flex justify-between"><span>1x Leather Wallet</span><span>₹2,499</span></div>
            <div className="flex justify-between"><span>1x Key Organizer</span><span>₹1,500</span></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default OrderSummary11;