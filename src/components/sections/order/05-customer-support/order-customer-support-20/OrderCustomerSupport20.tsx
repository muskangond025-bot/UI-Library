import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Award, MessageSquare, Phone, HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';

export function OrderCustomerSupport20() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const faqs = [
    { q: 'Can I modify my shipping address?', a: 'Address edits are permitted within 2 hours of order placement directly through chat.' },
    { q: 'How do I start a return?', a: 'Returns can be initiated within 30 days of arrival using our instant self-service return portal.' },
  ];

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
                <Sparkles className="w-3 h-3" /> White-Glove Support
              </span>
              <h2 className="text-2xl font-serif font-bold text-white">Award Support Hub</h2>
            </div>
          </div>
          <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full">
            ORDER #849202 CARE
          </span>
        </motion.div>

        {/* Support Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-zinc-900/60 p-5 rounded-2xl border border-amber-500/20 space-y-3 shadow-xl"
          >
            <MessageSquare className="w-6 h-6 text-amber-400" />
            <h3 className="font-serif text-lg text-white">Live Concierge</h3>
            <p className="text-xs text-zinc-400">Instant agent messaging</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-zinc-900/60 p-5 rounded-2xl border border-amber-500/20 space-y-3 shadow-xl"
          >
            <Phone className="w-6 h-6 text-amber-400" />
            <h3 className="font-serif text-lg text-white">Priority Hotline</h3>
            <p className="text-xs text-zinc-400">+1 (800) 492-0192</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-zinc-900/60 p-5 rounded-2xl border border-amber-500/20 space-y-3 shadow-xl"
          >
            <HelpCircle className="w-6 h-6 text-amber-400" />
            <h3 className="font-serif text-lg text-white">Knowledge Base</h3>
            <p className="text-xs text-zinc-400">Self-service solutions</p>
          </motion.div>
        </div>

        {/* Accordion FAQs */}
        <div className="space-y-3 pt-4 border-t border-zinc-800">
          <h4 className="text-xs font-mono text-amber-400 uppercase">Frequent Questions</h4>
          {faqs.map((f, idx) => (
            <div key={idx} className="bg-zinc-900/40 rounded-xl border border-zinc-800 overflow-hidden">
              <button
                onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                className="w-full p-4 text-left font-semibold text-xs text-white flex justify-between items-center"
              >
                <span>{f.q}</span>
                <ChevronDown className="w-4 h-4 text-zinc-400" />
              </button>
              <AnimatePresence>
                {faqOpen === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-4 pb-4 text-xs text-zinc-400"
                  >
                    {f.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport20;
