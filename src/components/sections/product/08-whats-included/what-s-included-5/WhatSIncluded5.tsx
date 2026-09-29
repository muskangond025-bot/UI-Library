import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { id: "ITEM-001", name: "Premium Device", qty: 1, img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=200&auto=format&fit=crop" },
  { id: "ITEM-002", name: "Charge Cable", qty: 1, img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=200&auto=format&fit=crop" },
  { id: "ITEM-003", name: "Power Adapter", qty: 1, img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=200&auto=format&fit=crop" }
];

export default function WhatSIncluded5({ data }: { data: any }) {
  return (
    <section className="py-24 bg-neutral-100 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 50, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ perspective: 1000 }}
          className="bg-[#faf9f6] border border-neutral-300 p-8 md:p-12 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] rounded-xl font-mono relative"
        >
          {/* Jagged top */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-repeat-x flex overflow-hidden -mt-2">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-neutral-100 rotate-45 transform -translate-y-2 flex-shrink-0" />
            ))}
          </div>

          <div className="text-center mb-12 border-b-2 border-dashed border-neutral-300 pb-8 mt-6">
            <h2 className="text-3xl font-black uppercase tracking-widest text-black">Packing Slip</h2>
            <p className="text-neutral-500 mt-2 text-sm">ORDER #8923-ABC</p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex justify-between text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
              <span>Item & Image</span>
              <span>Qty</span>
            </div>
            
            {items.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-between items-center border-b border-dotted border-neutral-300 pb-6 last:border-0"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-md overflow-hidden shadow-inner border border-neutral-200 grayscale">
                    <img src={item.img} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-black text-xl">{item.name}</p>
                    <p className="text-xs text-neutral-500 mt-1">{item.id}</p>
                  </div>
                </div>
                <span className="text-2xl font-black">{item.qty}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center text-xs text-neutral-400 uppercase tracking-widest border-t-2 border-dashed border-neutral-300 pt-8">
            <p>Thank you for your purchase.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
