import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, Sparkles, Copy, Check, Gift } from 'lucide-react';

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: Record<string, any>;
    styles?: Record<string, any>;
  };
}

export function OffersFreeShipping13({ section }: SectionProps) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const code = 'FREESHIP100';

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-16 px-4 bg-amber-50 font-sans text-slate-900 border-y border-amber-200">
      <div className="max-w-3xl mx-auto space-y-8 text-center">
        
        <div className="space-y-2 max-w-md mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-amber-200 text-amber-900 font-bold text-xs uppercase tracking-wider">
            TAP-TO-REVEAL PROMO TICKET
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Claim Your Instant Free Shipping Voucher
          </h2>
          <p className="text-slate-600 text-sm">
            Tap the ticket below to scratch off and reveal your storewide zero delivery promo coupon.
          </p>
        </div>

        {/* Voucher Ticket */}
        <div className="bg-white rounded-3xl border-2 border-dashed border-amber-400 p-8 shadow-xl max-w-lg mx-auto relative overflow-hidden space-y-6">
          
          <div className="flex items-center justify-between border-b border-amber-100 pb-4">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider">
              <Gift className="w-4 h-4" />
              <span>OFFICIAL STORE PASS</span>
            </div>
            <span className="text-xs text-slate-400 font-mono">VAL-SHIP-2026</span>
          </div>

          <div className="space-y-1">
            <h3 className="text-2xl font-black text-slate-900">100% FREE EXPRESS DELIVERY</h3>
            <p className="text-xs text-slate-500">Valid on any cart order subtotal over $30.00</p>
          </div>

          {/* Reveal Box */}
          {!revealed ? (
            <button
              onClick={() => setRevealed(true)}
              className="w-full py-5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm uppercase tracking-wider border-2 border-slate-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>TAP TO REVEAL CODE</span>
            </button>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-4 rounded-2xl bg-slate-900 text-white flex items-center justify-between gap-4 font-mono"
            >
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">YOUR PROMO CODE</span>
                <span className="text-2xl font-black tracking-wider text-amber-400">{code}</span>
              </div>

              <button
                onClick={handleCopy}
                className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-sans font-bold text-xs uppercase flex items-center gap-1.5 shrink-0"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'COPIED!' : 'COPY CODE'}</span>
              </button>
            </motion.div>
          )}

          <div className="text-[11px] text-slate-400 font-medium">
            *Code auto-applies at checkout step once copied.
          </div>

        </div>

      </div>
    </section>
  );
}

export default OffersFreeShipping13;
