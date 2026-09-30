import React from 'react';
import { motion } from 'framer-motion';

export default function ShippingDeliveryInformation10({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-900 flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Transparent Logistics</h2>
        <p className="text-neutral-400">Everything you need to know, printed clearly.</p>
      </div>

      <div className="relative">
        {/* Envelope Top */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-72 h-8 bg-neutral-800 rounded-t-xl z-20 border-b border-neutral-700" />
        
        {/* Animated Receipt */}
        <motion.div 
          className="w-64 bg-yellow-50 p-6 shadow-2xl relative z-10 mx-auto border-t-4 border-b-4 border-dashed border-neutral-300"
          initial={{ y: -100, scale: 0.9, opacity: 0 }}
          whileInView={{ y: 20, scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
          viewport={{ once: true, margin: "0px" }}
        >
          <div className="flex justify-between items-center border-b border-neutral-300 pb-4 mb-4">
            <span className="font-mono text-sm font-bold">PACKING SLIP</span>
            <span className="font-mono text-xs text-neutral-500">#ORD-992</span>
          </div>
          
          <div className="space-y-3 font-mono text-sm">
            <div className="flex justify-between">
              <span className="text-neutral-600">Handling</span>
              <span className="font-bold">0.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600">Standard</span>
              <span className="font-bold">4.99</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600">Express</span>
              <span className="font-bold">14.99</span>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-neutral-300">
            <div className="w-full h-8 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e9/UPC-A-036000291452.svg')] bg-contain bg-no-repeat bg-center opacity-50 mix-blend-multiply" />
          </div>
        </motion.div>
        
        {/* Envelope Bottom */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 h-32 bg-neutral-800 rounded-xl z-30 shadow-2xl flex items-center justify-center border border-neutral-700">
          <div className="w-12 h-12 rounded-full border-2 border-neutral-600 flex items-center justify-center rotate-12 opacity-50">
            <span className="text-xs font-bold text-neutral-500">SEAL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
