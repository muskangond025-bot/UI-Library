import React, { useState } from 'react';
import { motion } from 'framer-motion';

const sizes = [
  { size: 'S', cm: { chest: '91', waist: '76' }, inch: { chest: '36', waist: '30' } },
  { size: 'M', cm: { chest: '96', waist: '81' }, inch: { chest: '38', waist: '32' } },
  { size: 'L', cm: { chest: '101', waist: '86' }, inch: { chest: '40', waist: '34' } },
  { size: 'XL', cm: { chest: '106', waist: '91' }, inch: { chest: '42', waist: '36' } },
];

export default function SizeGuide2({ data }: { data: any }) {
  const [unit, setUnit] = useState<'cm'|'inch'>('cm');

  return (
    <section className="py-32 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">Find Your<br/>Fit.</h2>
          
          <div className="flex bg-neutral-900 rounded-full p-1 border border-white/10 relative">
            <motion.div 
              className="absolute bg-white rounded-full h-[calc(100%-8px)] top-1 w-[80px]"
              animate={{ x: unit === 'cm' ? 4 : 88 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            />
            <button 
              onClick={() => setUnit('cm')} 
              className={`w-[80px] py-3 z-10 text-sm font-bold transition-colors ${unit === 'cm' ? 'text-black' : 'text-white'}`}
            >
              CM
            </button>
            <button 
              onClick={() => setUnit('inch')} 
              className={`w-[80px] py-3 z-10 text-sm font-bold transition-colors ${unit === 'inch' ? 'text-black' : 'text-white'}`}
            >
              INCHES
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {sizes.map((s, i) => (
            <motion.div 
              key={s.size}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-900 rounded-[2rem] p-8 border border-white/5 hover:border-white/20 transition-colors group relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 text-8xl font-black text-white/5 group-hover:text-white/10 transition-colors pointer-events-none">
                {s.size}
              </div>
              
              <h3 className="text-4xl font-black text-white mb-8">{s.size}</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-neutral-500 text-sm uppercase tracking-widest mb-1">Chest</div>
                  <motion.div 
                    key={`chest-${unit}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-3xl font-light text-white"
                  >
                    {s[unit].chest}
                  </motion.div>
                </div>
                <div>
                  <div className="text-neutral-500 text-sm uppercase tracking-widest mb-1">Waist</div>
                  <motion.div 
                    key={`waist-${unit}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-3xl font-light text-white"
                  >
                    {s[unit].waist}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
