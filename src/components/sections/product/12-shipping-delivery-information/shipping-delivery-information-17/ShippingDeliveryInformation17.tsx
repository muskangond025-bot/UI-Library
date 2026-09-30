import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ShippingDeliveryInformation17({ data }: { data: any }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsLoaded(prev => !prev);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-white flex flex-col items-center justify-center border border-slate-100 shadow-sm">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-slate-800">Dynamic Fetching</h2>
        <p className="text-slate-500">Skeleton loader morphs directly into layout.</p>
      </div>

      <div className="w-full max-w-md bg-slate-50 p-6 rounded-2xl border border-slate-200">
        <AnimatePresence mode="wait">
          {!isLoaded ? (
            <motion.div 
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-xl bg-slate-200 animate-pulse" />
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-4 bg-slate-200 rounded w-3/4 animate-pulse" />
                  <div className="h-4 bg-slate-200 rounded w-1/2 animate-pulse" />
                </div>
              </div>
              <div className="h-20 bg-slate-200 rounded-xl animate-pulse w-full" />
            </motion.div>
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl">
                  48h
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800">Expedited Fulfillment</h4>
                  <p className="text-sm text-slate-500">Guaranteed 2-day delivery</p>
                </div>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-xl flex justify-between items-center shadow-sm">
                <span className="text-slate-600 font-medium">Fulfillment Center</span>
                <span className="text-slate-900 font-bold">Ohio, USA</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
