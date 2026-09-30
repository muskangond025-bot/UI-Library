import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCare7({ data }) {
  const steps = [
    { num: "01", text: "Unpack carefully" },
    { num: "02", text: "Assemble parts" },
    { num: "03", text: "Wipe down" },
    { num: "04", text: "Enjoy" }
  ];

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-black text-white flex flex-col justify-center overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 ml-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300">Quick</span> Start
      </h2>
      
      <div className="flex flex-wrap gap-4 px-4">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="flex-1 min-w-[200px] border-t border-gray-800 pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <div className="text-gray-500 font-mono text-sm mb-2">{step.num}</div>
            <div className="text-xl font-medium tracking-wide">{step.text}</div>
            <motion.div 
              className="h-0.5 bg-white mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: i * 0.15 + 0.3, duration: 0.8 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
