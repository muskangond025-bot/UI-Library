import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, ArchiveRestore } from 'lucide-react';

export default function ReturnRefundInformation13({ data }: { data: any }) {
  const [isReturned, setIsReturned] = useState(false);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-orange-50 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-16 relative z-20">
        <h2 className="text-4xl font-black text-orange-900 uppercase">Drag to Return</h2>
        <p className="text-orange-600 font-bold">Drop the item into the warehouse box.</p>
      </div>

      <div className="w-full max-w-3xl flex justify-between items-center relative z-20 px-12">
        
        {/* Draggable Item */}
        <AnimatePresence>
          {!isReturned && (
            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.8}
              onDragEnd={(e, info) => {
                if (info.offset.x > 300) {
                  setIsReturned(true);
                }
              }}
              className="w-32 h-32 bg-white rounded-2xl shadow-xl border-4 border-orange-200 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing hover:scale-105 z-30"
              exit={{ scale: 0, opacity: 0, rotate: 180 }}
            >
              <Package size={48} className="text-orange-500" />
              <span className="font-bold text-orange-900 mt-2">Item</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Drop Zone */}
        <div className="w-48 h-48 border-4 border-dashed border-orange-300 rounded-3xl flex flex-col items-center justify-center text-orange-400 bg-orange-100/50">
          <ArchiveRestore size={48} className="mb-2" />
          <span className="font-bold uppercase tracking-widest text-sm">Drop Here</span>
        </div>
      </div>

      {/* Success Reveal */}
      <AnimatePresence>
        {isReturned && (
          <motion.div
            className="absolute inset-0 bg-emerald-500 z-40 flex flex-col items-center justify-center text-white p-8"
            initial={{ clipPath: "circle(0% at 75% 50%)" }}
            animate={{ clipPath: "circle(150% at 75% 50%)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h2 className="text-5xl font-black mb-4">Refund Processing!</h2>
            <p className="text-xl mb-8 font-medium">Your funds will appear in 3-5 business days.</p>
            <button 
              className="px-8 py-3 bg-white text-emerald-600 rounded-full font-bold shadow-lg hover:scale-105 transition"
              onClick={() => setIsReturned(false)}
            >
              Reset Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
