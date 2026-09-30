import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

export default function WarrantyInformation16({ data }: { data: any }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-slate-100 flex items-center justify-center">
      <div className="w-full max-w-sm">
        <AnimatePresence mode="popLayout">
          {!isDeleted && (
            <motion.div 
              className="rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden bg-red-500"
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background revealed when swiping */}
              <div className="absolute inset-0 flex items-center justify-end px-6 z-0">
                <span className="text-white font-bold">Cancel Claim</span>
              </div>

              {/* Draggable foreground */}
              <motion.div 
                className="relative z-10 bg-white p-6 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: -150, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -100) {
                    setIsDeleted(true);
                  }
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-slate-800">Claim #99284</h3>
                    <p className="text-sm text-slate-500">In Progress</p>
                  </div>
                  <button 
                    onClick={() => setIsDeleted(true)}
                    className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors pointer-events-auto"
                  >
                    <X size={16} />
                  </button>
                </div>
                
                <div className="flex items-center gap-2 mt-4 text-xs text-slate-400 font-medium">
                  <motion.div 
                    animate={{ x: [-5, 5, -5] }} 
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ← 
                  </motion.div>
                  Swipe left or click X to cancel
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {isDeleted && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 text-green-700 p-6 rounded-2xl flex flex-col items-center text-center border border-green-100"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check size={24} />
            </div>
            <h3 className="font-bold mb-2">Claim Cancelled</h3>
            <p className="text-sm opacity-80">You can start a new claim at any time from your dashboard.</p>
            <button onClick={() => { setIsDeleted(false); setIsDeleting(false); }} className="mt-4 text-sm font-bold underline">Undo</button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
