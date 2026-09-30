import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCare2({ data }) {
  const words = "Handle with Care".split(" ");
  
  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-zinc-100 flex flex-col items-center justify-center overflow-hidden">
      <div className="flex gap-4 mb-12">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2, type: "spring" }}
            viewport={{ once: true }}
          >
            {word}
          </motion.span>
        ))}
      </div>
      
      <motion.div 
        className="w-full max-w-3xl h-1 bg-zinc-300 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="h-full bg-zinc-900"
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        />
      </motion.div>
      
      <motion.div 
        className="mt-12 grid grid-cols-3 gap-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        viewport={{ once: true }}
      >
        <div>
          <h4 className="font-bold text-zinc-900 mb-2">Wash</h4>
          <p className="text-sm text-zinc-500">Machine wash cold, gentle cycle.</p>
        </div>
        <div>
          <h4 className="font-bold text-zinc-900 mb-2">Dry</h4>
          <p className="text-sm text-zinc-500">Tumble dry low or hang to dry.</p>
        </div>
        <div>
          <h4 className="font-bold text-zinc-900 mb-2">Iron</h4>
          <p className="text-sm text-zinc-500">Cool iron if necessary.</p>
        </div>
      </motion.div>
    </div>
  );
}
