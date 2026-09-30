import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductCare14({ data }) {
  const [selectedId, setSelectedId] = useState(null);
  
  const rules = [
    { id: '1', title: 'Washing', subtitle: 'Machine wash guidelines', details: 'Turn inside out. Use cold water (30°C max). Gentle cycle only. Do not overfill the machine to prevent extreme creasing.' },
    { id: '2', title: 'Drying', subtitle: 'Best practices for drying', details: 'Air dry flat when possible. If using a machine, tumble dry on the lowest heat setting. Remove immediately.' },
    { id: '3', title: 'Ironing', subtitle: 'Temperature settings', details: 'Iron on low heat (110°C max) on the reverse side. Do not iron over prints, embroidery, or sensitive trims.' }
  ];

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-amber-50 flex items-center justify-center relative">
      <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {rules.map((rule) => (
          <motion.div
            layoutId={`card-${rule.id}`}
            key={rule.id}
            className="bg-white p-6 rounded-3xl shadow-sm border border-amber-100 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setSelectedId(rule.id)}
          >
            <motion.h3 layoutId={`title-${rule.id}`} className="font-bold text-amber-900 text-lg mb-1">{rule.title}</motion.h3>
            <motion.p layoutId={`sub-${rule.id}`} className="text-amber-600/70 text-sm">{rule.subtitle}</motion.p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-amber-900/20 backdrop-blur-sm flex items-center justify-center p-8 z-50 rounded-3xl"
            onClick={() => setSelectedId(null)}
          >
            {rules.filter(r => r.id === selectedId).map(rule => (
              <motion.div
                layoutId={`card-${rule.id}`}
                key={rule.id}
                className="bg-white w-full max-w-lg p-10 rounded-3xl shadow-2xl relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full -z-10 opacity-50" />
                <motion.h3 layoutId={`title-${rule.id}`} className="font-bold text-amber-900 text-3xl mb-2">{rule.title}</motion.h3>
                <motion.p layoutId={`sub-${rule.id}`} className="text-amber-600 font-medium mb-6">{rule.subtitle}</motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-slate-600 leading-relaxed"
                >
                  {rule.details}
                </motion.div>
                
                <motion.button 
                  className="mt-8 px-6 py-3 bg-amber-100 text-amber-900 rounded-xl font-bold hover:bg-amber-200 transition-colors"
                  onClick={() => setSelectedId(null)}
                >
                  Got it
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
