import React, { useState } from 'react';
import { motion } from 'framer-motion';

const sizes = [
  { size: 'XS', chest: '34-36', waist: '27-29', hips: '34-36' },
  { size: 'S', chest: '36-38', waist: '29-31', hips: '36-38' },
  { size: 'M', chest: '38-40', waist: '31-33', hips: '38-40' },
  { size: 'L', chest: '40-42', waist: '33-35', hips: '40-42' },
  { size: 'XL', chest: '42-44', waist: '35-37', hips: '42-44' },
];

export default function SizeGuide1({ data }: { data: any }) {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-black tracking-tight mb-4">Size Guide.</h2>
          <p className="text-xl text-neutral-500">Measurements in inches.</p>
        </motion.div>

        <div className="w-full border-t-2 border-black">
          <div className="grid grid-cols-4 py-6 border-b border-neutral-200">
            <span className="font-bold text-neutral-400">SIZE</span>
            <span className="font-bold text-neutral-400">CHEST</span>
            <span className="font-bold text-neutral-400">WAIST</span>
            <span className="font-bold text-neutral-400">HIPS</span>
          </div>

          {sizes.map((item, i) => (
            <motion.div 
              key={item.size}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, type: "spring" }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredRow(i)}
              onHoverEnd={() => setHoveredRow(null)}
              className="grid grid-cols-4 py-6 border-b border-neutral-200 relative group cursor-pointer overflow-hidden"
            >
              {/* Background highlight on hover */}
              <motion.div 
                initial={false}
                animate={{ 
                  scaleY: hoveredRow === i ? 1 : 0, 
                  opacity: hoveredRow === i ? 1 : 0 
                }}
                className="absolute inset-0 bg-neutral-100 origin-bottom -z-10"
              />
              
              <span className="text-2xl font-black text-black group-hover:translate-x-2 transition-transform duration-300">{item.size}</span>
              <span className="text-xl text-neutral-600 my-auto">{item.chest}"</span>
              <span className="text-xl text-neutral-600 my-auto">{item.waist}"</span>
              <span className="text-xl text-neutral-600 my-auto">{item.hips}"</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
