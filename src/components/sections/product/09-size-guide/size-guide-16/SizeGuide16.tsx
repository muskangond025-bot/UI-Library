import React from 'react';
import { motion } from 'framer-motion';

export default function SizeGuide16({ data }: { data: any }) {
  return (
    <section className="py-32 bg-[#1a1a1a] min-h-screen flex items-center justify-center">
      
      <motion.div 
        initial={{ rotate: -5, y: 100, opacity: 0 }}
        whileInView={{ rotate: 2, y: 0, opacity: 1 }}
        whileHover={{ rotate: 0, scale: 1.02 }}
        transition={{ type: "spring", bounce: 0.4 }}
        viewport={{ once: true }}
        className="w-[400px] bg-[#f4f1ea] shadow-2xl relative"
        style={{ filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.5))" }}
      >
        {/* Jagged top */}
        <div className="absolute -top-3 left-0 right-0 h-4 bg-repeat-x flex">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-[#f4f1ea]" />
          ))}
        </div>

        <div className="p-10 pb-16 font-mono text-neutral-800 border-x-4 border-b-4 border-dashed border-neutral-300">
          <div className="text-center border-b-2 border-black pb-6 mb-6">
            <h2 className="text-2xl font-black uppercase tracking-widest">Receipt Guide</h2>
            <div className="text-sm mt-2 opacity-60"># 000492 - STANDARD FIT</div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between font-bold text-lg">
              <span>SIZE</span>
              <span>CHEST</span>
            </div>
            <div className="border-b border-dotted border-black/30" />
            
            <div className="flex justify-between">
              <span>X-SMALL</span>
              <span>34.00"</span>
            </div>
            <div className="flex justify-between">
              <span>SMALL</span>
              <span>36.00"</span>
            </div>
            <div className="flex justify-between">
              <span>MEDIUM</span>
              <span>38.00"</span>
            </div>
            <div className="flex justify-between">
              <span>LARGE</span>
              <span>40.00"</span>
            </div>
            <div className="flex justify-between">
              <span>X-LARGE</span>
              <span>42.00"</span>
            </div>
            
            <div className="border-b-2 border-black pt-4 mb-4" />
            <div className="text-center text-sm opacity-60">THANK YOU FOR SHOPPING</div>
            
            {/* Barcode */}
            <div className="mt-8 flex justify-center h-16 w-full">
              {[...Array(30)].map((_, i) => (
                <div key={i} className="bg-black h-full" style={{ width: Math.random() * 4 + 1 + 'px', marginRight: Math.random() * 4 + 1 + 'px' }} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
