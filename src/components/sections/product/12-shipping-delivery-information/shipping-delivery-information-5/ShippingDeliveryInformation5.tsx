import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ShippingDeliveryInformation5({ data }: { data: any }) {
  const settings = data?.section?.settings || {};
  const freeShipping = settings.freeShipping || {
    enabled: true,
    threshold: "₹2,999",
    currentAmount: "₹1,850",
    progressPercentage: 62
  };

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-slate-950 text-white rounded-3xl overflow-hidden relative border border-slate-800">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            {settings.eyebrow || 'EXCLUSIVE SAVINGS'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {settings.title || 'Free Shipping Threshold'}
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            {settings.description || 'Unlock complimentary express shipping on all orders over ₹2,999.'}
          </p>
        </div>

        {/* Central Threshold Visualizer Box */}
        <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Threshold Milestone</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                Free Shipping over <span className="text-emerald-400">{freeShipping.threshold}</span>
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block mb-1">Current Cart Level</span>
              <span className="text-xl font-bold text-slate-200">{freeShipping.currentAmount} / {freeShipping.threshold}</span>
            </div>
          </div>

          {/* Progressive Progress Bar */}
          <div className="relative w-full h-4 bg-slate-950 rounded-full border border-slate-800 overflow-hidden mb-6">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${freeShipping.progressPercentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>₹0 (Standard ₹99)</span>
            <span className="text-emerald-400 font-semibold">{freeShipping.progressPercentage}% reached</span>
            <span>{freeShipping.threshold} (Free Express)</span>
          </div>

          {/* Applicable Shipping Tier Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-800/80">
            <div className="flex items-start gap-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Under Threshold</h4>
                <p className="text-xs text-slate-400">Flat ₹99 standard ground shipping across India.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Over Threshold</h4>
                <p className="text-xs text-slate-400">100% Free Priority Air Shipping automatically applied.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
