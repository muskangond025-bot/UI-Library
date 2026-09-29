import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sizes = [
  { id: 'S', chest: '36-38', waist: '29-31', arm: '32-33' },
  { id: 'M', chest: '38-40', waist: '31-33', arm: '33-34' },
  { id: 'L', chest: '40-42', waist: '33-35', arm: '34-35' },
];

export default function SizeGuide5({ data }: { data: any }) {
  const [active, setActive] = useState('M');

  return (
    <section className="py-32 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full px-6 flex flex-col md:flex-row gap-16 items-center">
        
        <div className="md:w-1/2 w-full flex flex-col gap-4">
          <h2 className="text-6xl font-black text-black tracking-tighter mb-8">Dimensions.</h2>
          
          <div className="flex gap-4 mb-8">
            {sizes.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`w-16 h-16 rounded-full text-2xl font-bold border-2 transition-all ${active === s.id ? 'bg-black text-white border-black scale-110' : 'bg-transparent text-neutral-400 border-neutral-200 hover:border-black'}`}
              >
                {s.id}
              </button>
            ))}
          </div>

          <div className="space-y-6 relative h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                {sizes.filter(s => s.id === active).map(s => (
                  <div key={s.id} className="space-y-6">
                    <div className="flex justify-between items-end border-b-2 border-black pb-2">
                      <span className="text-2xl font-bold text-black">Chest</span>
                      <span className="text-3xl font-light text-neutral-500">{s.chest}"</span>
                    </div>
                    <div className="flex justify-between items-end border-b-2 border-black pb-2">
                      <span className="text-2xl font-bold text-black">Waist</span>
                      <span className="text-3xl font-light text-neutral-500">{s.waist}"</span>
                    </div>
                    <div className="flex justify-between items-end border-b-2 border-black pb-2">
                      <span className="text-2xl font-bold text-black">Arm</span>
                      <span className="text-3xl font-light text-neutral-500">{s.arm}"</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="md:w-1/2 w-full flex justify-center">
          {/* Abstract human silhouette representation */}
          <div className="relative w-64 h-96">
            <motion.div 
              className="absolute inset-0 border-4 border-neutral-200 rounded-[3rem]"
              animate={{ 
                scaleX: active === 'S' ? 0.9 : active === 'M' ? 1 : 1.1,
                scaleY: active === 'S' ? 0.95 : active === 'M' ? 1 : 1.05
              }}
              transition={{ type: "spring", bounce: 0.5 }}
            />
            
            {/* Chest Line */}
            <motion.div 
              className="absolute top-32 left-0 right-0 h-[2px] bg-black flex items-center justify-center"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
            >
              <span className="bg-white px-2 text-xs font-bold -mt-6">CHEST</span>
            </motion.div>
            
            {/* Waist Line */}
            <motion.div 
              className="absolute top-52 left-8 right-8 h-[2px] bg-black flex items-center justify-center"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
            >
              <span className="bg-white px-2 text-xs font-bold -mt-6">WAIST</span>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
