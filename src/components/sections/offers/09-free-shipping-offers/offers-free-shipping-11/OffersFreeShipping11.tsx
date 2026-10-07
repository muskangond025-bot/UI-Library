import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, X, Globe, Shield, ArrowRight } from 'lucide-react';

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: Record<string, any>;
    styles?: Record<string, any>;
  };
}

export function OffersFreeShipping11({ section }: SectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full py-12 px-4 bg-slate-900 font-sans text-white relative border-y border-slate-800">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        
        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono font-bold uppercase tracking-wider">
            FLOATING MICRO-PILL BADGE
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Non-Intrusive Floating Shipping Notification
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Demonstrating bottom floating pill layout designed for persistent site-wide conversion boost.
          </p>
        </div>

        {/* Floating Pill Badge Preview */}
        <div className="pt-4 flex justify-center">
          <div className="bg-slate-950/90 border border-slate-700 backdrop-blur-xl p-2.5 pl-4 rounded-full shadow-2xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0">
              <Truck className="w-4 h-4" />
            </div>
            
            <div className="text-left text-xs">
              <span className="font-bold text-white block">Free Shipping On Orders $49+</span>
              <span className="text-[10px] text-slate-400">Automatic zero delivery fee applied</span>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="ml-2 px-3 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] uppercase tracking-wider shrink-0 transition-colors"
            >
              Details
            </button>
          </div>
        </div>

        {/* Expanded Modal Overlay */}
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 max-w-md w-full text-left space-y-6 shadow-2xl relative"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-400 flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Global Delivery Terms</h3>
                    <span className="text-xs text-slate-400">Zero hidden shipping surcharges</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1">
                    <span className="font-bold text-white block">Standard Free Shipping ($49 threshold)</span>
                    <p className="text-slate-400">Delivered within 3-5 business days via national courier network.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1">
                    <span className="font-bold text-white block">Express Courier Upgrade ($99 threshold)</span>
                    <p className="text-slate-400">Guaranteed 2-day air delivery with real-time SMS notifications.</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase flex items-center justify-center gap-2"
                >
                  <span>Got It, Continue Shopping</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

export default OffersFreeShipping11;
