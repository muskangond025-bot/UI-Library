import React from 'react';
import { motion } from 'framer-motion';

const sizes = [
  { size: 'Small', w: '29-31', c: '36-38' },
  { size: 'Medium', w: '31-33', c: '38-40' },
  { size: 'Large', w: '33-35', c: '40-42' }
];

export default function SizeGuide12({ data }: { data: any }) {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100, rotateY: -45 },
    show: { opacity: 1, x: 0, rotateY: 0, transition: { type: "spring", duration: 1 } }
  };

  return (
    <section className="py-32 bg-[#e8e8e8] min-h-screen flex items-center justify-center perspective-[1000px] overflow-hidden">
      <div className="max-w-7xl w-full px-6 flex flex-col md:flex-row gap-12 items-center">
        
        <div className="md:w-1/3">
          <h2 className="text-6xl font-black text-black leading-none mb-6">Scroll.<br/>Compare.</h2>
          <p className="text-neutral-500">Horizontal comparison cards that snap into view.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="md:w-2/3 flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar"
        >
          {sizes.map((s, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="min-w-[300px] h-[400px] bg-white rounded-[2rem] shadow-xl p-8 flex flex-col snap-center group hover:bg-black transition-colors duration-500"
            >
              <h3 className="text-4xl font-black text-black group-hover:text-white transition-colors duration-500 mb-12">{s.size}</h3>
              
              <div className="space-y-6 mt-auto">
                <div className="border-b border-neutral-200 group-hover:border-white/20 pb-2 transition-colors">
                  <div className="text-sm font-bold text-neutral-400 group-hover:text-neutral-500 uppercase">Waist</div>
                  <div className="text-2xl text-neutral-800 group-hover:text-white transition-colors">{s.w}"</div>
                </div>
                <div className="border-b border-neutral-200 group-hover:border-white/20 pb-2 transition-colors">
                  <div className="text-sm font-bold text-neutral-400 group-hover:text-neutral-500 uppercase">Chest</div>
                  <div className="text-2xl text-neutral-800 group-hover:text-white transition-colors">{s.c}"</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
