import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export function OrderCustomerSupport2() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    { q: 'How do I change my shipping address after placing an order?', a: 'Address changes can be requested within 2 hours of placing your order. Click "Modify Address" in your order dashboard or contact live chat.' },
    { q: 'Can I add or remove items from this order?', a: 'Once an order is confirmed, items cannot be edited directly, but our support team can assist with additions prior to warehouse processing.' },
    { q: 'What should I do if my tracking status is not updating?', a: 'Tracking updates can take up to 24 hours to register with the carrier. If no updates appear after 48 hours, reach out to priority support.' },
  ];

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex justify-between items-center border-b border-slate-800 pb-4"
        >
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">Self Help Center</span>
            <h2 className="text-2xl font-bold text-white">Post-Purchase FAQs</h2>
          </div>
          <HelpCircle className="w-6 h-6 text-cyan-400" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-lg"
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full p-5 text-left font-semibold text-sm sm:text-base text-white flex justify-between items-center gap-4 hover:text-cyan-400 transition-colors"
              >
                <span>{faq.q}</span>
                <motion.div animate={{ rotate: open === idx ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-400 border-t border-slate-800/60 font-light leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport2;
