import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { id: "ITEM-001", name: "Premium Device", qty: 1 },
  { id: "ITEM-002", name: "Woven Charge Cable (1m)", qty: 1 },
  { id: "ITEM-003", name: "Power Adapter (20W)", qty: 1 },
  { id: "ITEM-004", name: "Documentation", qty: 1 }
];

export default function WhatsInTheBox5({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          viewport={{ once: true }}
          className="bg-neutral-50 border border-neutral-200 p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rounded-lg font-mono relative overflow-hidden"
        >
          {/* Jagged receipt edge effect */}
          <div className="absolute top-0 left-0 right-0 flex justify-between -mt-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-white rotate-45 transform -translate-y-2" />
            ))}
          </div>

          <div className="text-center mb-12 border-b-2 border-dashed border-neutral-300 pb-8 mt-4">
            <h2 className="text-2xl font-bold uppercase tracking-widest">Packing Slip</h2>
            <p className="text-neutral-500 mt-2">ORDER #8923-ABC</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex justify-between text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
              <span>Item</span>
              <span>Qty</span>
            </div>
            
            {items.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-between items-center border-b border-dotted border-neutral-300 pb-4 last:border-0"
              >
                <div>
                  <p className="font-bold text-black text-lg">{item.name}</p>
                  <p className="text-xs text-neutral-500">{item.id}</p>
                </div>
                <span className="text-xl font-bold">{item.qty}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-neutral-400 uppercase tracking-widest">
            <p>Thank you for your purchase.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
