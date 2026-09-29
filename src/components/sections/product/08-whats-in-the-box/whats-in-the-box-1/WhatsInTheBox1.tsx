import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Device", qty: 1, icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
  { name: "USB-C Cable", qty: 1, icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { name: "Power Adapter", qty: 1, icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
  { name: "Documentation", qty: 3, icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }
];

export default function WhatsInTheBox1({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">What's in the box.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 group">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-neutral-50 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:!opacity-100 group-hover:opacity-40 cursor-default shadow-sm border border-neutral-200"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={item.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-1">{item.name}</h3>
              <p className="text-sm font-bold text-neutral-400">x{item.qty}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
