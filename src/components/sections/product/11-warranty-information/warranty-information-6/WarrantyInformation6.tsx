import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function WarrantyInformation6({ data }: { data: any }) {
  const [openId, setOpenId] = useState<number | null>(0);
  
  const faqs = [
    { id: 0, q: "Is water damage covered?", a: "No, liquid damage is not covered under the standard warranty unless specifically stated for waterproof products." },
    { id: 1, q: "Do I need the original receipt?", a: "Yes, proof of purchase from an authorized retailer is required for all warranty claims." },
    { id: 2, q: "Does the warranty transfer?", a: "The warranty is only valid for the original purchaser and cannot be transferred to another person." }
  ];

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-slate-50 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Warranty FAQ</h2>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <motion.div 
              key={faq.id}
              className="border border-slate-200 rounded-2xl overflow-hidden"
              initial={false}
              animate={{ backgroundColor: openId === faq.id ? "#f8fafc" : "#ffffff" }}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <span className="font-semibold text-slate-800">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  className="text-slate-500"
                >
                  {openId === faq.id ? <Minus size={20} /> : <Plus size={20} />}
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
