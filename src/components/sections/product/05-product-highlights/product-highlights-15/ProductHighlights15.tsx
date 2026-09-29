import React from 'react';
import { motion } from 'framer-motion';

export default function ProductHighlights15({ data }: { data: any }) {
  const cards = [
    { title: "Dynamic Island", desc: "Bubbles up music, calls, and more." },
    { title: "Crash Detection", desc: "Calls for help when you can't." },
    { title: "SOS via Satellite", desc: "Peace of mind off the grid." }
  ];

  return (
    <section className="py-32 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative p-[2px] rounded-3xl overflow-hidden group"
            >
              {/* Spinning gradient border effect */}
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#3b82f6_360deg)] animate-[spin_3s_linear_infinite]" />
              
              <div className="relative bg-neutral-900 h-full rounded-[23px] p-10 flex flex-col justify-between">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-12">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-neutral-400">{card.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
