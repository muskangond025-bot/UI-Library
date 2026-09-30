import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, X } from 'lucide-react';

export default function ShippingDeliveryInformation14({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-blue-50 flex items-center justify-center relative overflow-hidden">
      <h2 className="text-3xl font-bold text-blue-900 absolute top-12">Click the widget</h2>
      
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            layoutId="shipping-widget"
            className="w-20 h-20 bg-blue-600 rounded-full shadow-2xl flex items-center justify-center text-white cursor-pointer relative z-20"
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Package size={32} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              layoutId="shipping-widget"
              className="w-full max-w-sm bg-white rounded-3xl shadow-2xl p-8 relative z-20 overflow-hidden"
              initial={{ borderRadius: 100 }}
              animate={{ borderRadius: 24 }}
              exit={{ borderRadius: 100, opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 bg-slate-100 rounded-full p-2"
              >
                <X size={20} />
              </button>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Package size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Shipping Policy</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  We process all orders within 24 hours. Weekend orders are dispatched on Monday morning.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="font-semibold text-slate-700">Standard</span>
                    <span className="text-blue-600 font-bold">Free</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="font-semibold text-slate-700">Next Day</span>
                    <span className="text-slate-900 font-bold">$15.00</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
