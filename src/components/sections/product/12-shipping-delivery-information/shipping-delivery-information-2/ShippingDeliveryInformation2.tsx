import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ShippingDeliveryInformation2({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-100 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Portal Hero Effect */}
      <motion.div 
        className="absolute inset-0 z-0 bg-neutral-900"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isOpen ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "bottom" }}
      >
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        
        <div className="h-full flex flex-col items-center justify-center text-white p-12">
          <motion.h3 
            className="text-4xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isOpen ? 0 : 20, opacity: isOpen ? 1 : 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Express Delivery
          </motion.h3>
          <motion.div 
            className="grid grid-cols-2 gap-8 text-center max-w-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isOpen ? 0 : 20, opacity: isOpen ? 1 : 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div>
              <div className="text-3xl font-black text-emerald-400 mb-1">24h</div>
              <div className="text-neutral-400 text-sm uppercase tracking-widest">Dispatch</div>
            </div>
            <div>
              <div className="text-3xl font-black text-emerald-400 mb-1">Next Day</div>
              <div className="text-neutral-400 text-sm uppercase tracking-widest">Arrival</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold text-neutral-900 mb-8">Shipping Options</h2>
        <motion.button 
          onClick={() => setIsOpen(!isOpen)}
          className={`px-8 py-4 rounded-full font-bold tracking-wide transition-colors ${isOpen ? 'bg-white text-neutral-900' : 'bg-neutral-900 text-white'}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? 'Close Details' : 'Reveal Express Shipping'}
        </motion.button>
      </div>
    </div>
  );
}
