import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReturnRefundInformation11({ data }: { data: any }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const reasons = [
    { id: 1, title: "Wrong Size", desc: "Doesn't fit? We'll swap it instantly." },
    { id: 2, title: "Changed Mind", desc: "No worries, returns are always free." },
    { id: 3, title: "Damaged", desc: "We'll replace it and cover all costs." },
    { id: 4, title: "Gift Return", desc: "Get store credit discreetly." }
  ];

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-100 flex flex-col items-center justify-center relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-neutral-900">Why returning?</h2>
        <p className="text-neutral-500">Click a reason to see your options.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl relative z-10">
        {reasons.map(reason => (
          <motion.div
            layoutId={`card-${reason.id}`}
            key={reason.id}
            className="bg-white p-6 rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition-shadow border border-neutral-200 flex flex-col items-center justify-center text-center h-32"
            onClick={() => setSelectedId(reason.id)}
          >
            <motion.h3 layoutId={`title-${reason.id}`} className="font-bold text-neutral-900">{reason.title}</motion.h3>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              className="absolute inset-0 bg-neutral-900/20 backdrop-blur-sm z-20 rounded-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            />
            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none p-8">
              <motion.div
                layoutId={`card-${selectedId}`}
                className="bg-white p-12 rounded-3xl shadow-2xl w-full max-w-lg pointer-events-auto flex flex-col items-center text-center relative"
              >
                <button 
                  className="absolute top-6 right-6 w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center font-bold text-neutral-500 hover:bg-neutral-200"
                  onClick={() => setSelectedId(null)}
                >
                  ✕
                </button>
                <motion.h3 layoutId={`title-${selectedId}`} className="text-3xl font-black text-neutral-900 mb-4">
                  {reasons.find(r => r.id === selectedId)?.title}
                </motion.h3>
                <motion.p 
                  className="text-neutral-500 text-lg mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {reasons.find(r => r.id === selectedId)?.desc}
                </motion.p>
                
                <motion.button 
                  className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Proceed with Return
                </motion.button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
