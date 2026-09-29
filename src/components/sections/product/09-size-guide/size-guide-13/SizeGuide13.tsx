import React from 'react';
import { motion } from 'framer-motion';

export default function SizeGuide13({ data }: { data: any }) {
  const marks = [
    { label: 'XS', pos: 20 },
    { label: 'S', pos: 35 },
    { label: 'M', pos: 50 },
    { label: 'L', pos: 65 },
    { label: 'XL', pos: 80 },
  ];

  return (
    <section className="py-32 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full px-6 text-center">
        
        <h2 className="text-4xl font-light text-white tracking-[0.3em] uppercase mb-32">The Measuring Tape</h2>

        <div className="relative w-full h-32 bg-yellow-400 rounded-lg shadow-2xl flex items-center overflow-hidden border-y-4 border-yellow-500">
          
          {/* Tick marks generator */}
          <div className="absolute inset-0 flex justify-between px-2">
            {[...Array(50)].map((_, i) => (
              <div key={i} className={`w-[2px] bg-black/80 ${i % 5 === 0 ? 'h-8' : 'h-4'}`} />
            ))}
          </div>

          {/* Markers */}
          {marks.map((m, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, y: -50 }}
              whileInView={{ scale: 1, y: 0 }}
              transition={{ delay: i * 0.15, type: "spring", bounce: 0.5 }}
              viewport={{ once: true }}
              className="absolute flex flex-col items-center"
              style={{ left: `${m.pos}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-1 h-32 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)] z-10" />
              <div className="absolute -bottom-16 bg-red-600 text-white font-black text-xl px-4 py-2 rounded-full whitespace-nowrap">
                {m.label} = {m.pos}"
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
