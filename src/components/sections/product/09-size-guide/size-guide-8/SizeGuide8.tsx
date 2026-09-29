import React from 'react';
import { motion } from 'framer-motion';

const sizes = [
  { size: 'XS', chest: 34, length: 26 },
  { size: 'S', chest: 36, length: 27 },
  { size: 'M', chest: 38, length: 28 },
  { size: 'L', chest: 40, length: 29 },
  { size: 'XL', chest: 42, length: 30 }
];

export default function SizeGuide8({ data }: { data: any }) {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" } }
  };

  return (
    <section className="py-32 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black text-black">Dimensions.</h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {sizes.map((row) => (
            <motion.div 
              key={row.size}
              variants={itemVariants}
              className="bg-neutral-50 rounded-3xl p-6 text-center border border-neutral-100 hover:shadow-xl transition-shadow cursor-default group"
            >
              <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center text-2xl font-black text-black shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {row.size}
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-neutral-400 font-bold uppercase">Chest</div>
                  <div className="text-xl font-medium text-black">{row.chest}"</div>
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-bold uppercase">Length</div>
                  <div className="text-xl font-medium text-black">{row.length}"</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
