import React from 'react';
import { motion } from 'framer-motion';

export default function ReturnRefundInformation7({ data }: { data: any }) {
  const steps = [
    { num: "01", title: "Submit Request", desc: "Log in and select the items you wish to return." },
    { num: "02", title: "Print Label", desc: "We'll instantly email you a prepaid shipping label." },
    { num: "03", title: "Drop Off", desc: "Leave the package at any authorized carrier location." },
    { num: "04", title: "Get Refunded", desc: "Money is sent back the day we receive the item." }
  ];

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-white border border-neutral-200 flex items-center justify-center">
      <div className="w-full max-w-2xl relative">
        
        {/* Vertical Progress Line */}
        <motion.div 
          className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-neutral-900 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
        />

        {steps.map((step, i) => (
          <motion.div 
            key={i}
            className="flex items-start mb-16 last:mb-0 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            <div className="w-20 h-20 rounded-full bg-neutral-50 border-4 border-white shadow-xl flex items-center justify-center shrink-0 z-10 text-neutral-900 font-black text-xl font-mono">
              {step.num}
            </div>
            
            <div className="ml-8 pt-4">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">{step.title}</h3>
              <p className="text-neutral-500 text-lg leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
