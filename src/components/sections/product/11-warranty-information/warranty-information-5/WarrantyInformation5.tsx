import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Wrench, Truck } from 'lucide-react';

export default function WarrantyInformation5({ data }: { data: any }) {
  const steps = [
    { icon: <FileText size={32} />, title: "File Claim", desc: "Submit online form" },
    { icon: <Truck size={32} />, title: "Ship", desc: "Send it to our facility" },
    { icon: <Wrench size={32} />, title: "Repair", desc: "We fix or replace it" }
  ];

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-zinc-900 flex flex-col items-center justify-center text-white">
      <h2 className="text-2xl font-bold mb-16">The Repair Process</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-4xl relative">
        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-zinc-800 -z-10" />
        
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center bg-zinc-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="w-20 h-20 bg-zinc-800 border border-zinc-700 rounded-2xl flex items-center justify-center mb-6 text-zinc-300 relative group"
              whileHover={{ y: -5, borderColor: "#a1a1aa" }}
            >
              <motion.div 
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" 
              />
              {step.icon}
            </motion.div>
            <h3 className="font-bold text-lg mb-2">{step.title}</h3>
            <p className="text-zinc-500 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
