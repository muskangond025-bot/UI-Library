const fs = require('fs');
const path = require('path');

const sg1 = `import React, { useState } from 'react';
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
`;

const sg2 = `import React, { useState } from 'react';
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
              className={\`w-[80px] py-3 z-10 text-sm font-bold transition-colors \${unit === 'cm' ? 'text-black' : 'text-white'}\`}
            >
              CM
            </button>
            <button 
              onClick={() => setUnit('inch')} 
              className={\`w-[80px] py-3 z-10 text-sm font-bold transition-colors \${unit === 'inch' ? 'text-black' : 'text-white'}\`}
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
                    key={\`chest-\${unit}\`}
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
                    key={\`waist-\${unit}\`}
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
`;

const sg3 = `import React from 'react';
import { motion } from 'framer-motion';

const sizes = [
  { size: 'XS', chest: 34, waist: 28 },
  { size: 'S', chest: 36, waist: 30 },
  { size: 'M', chest: 38, waist: 32 },
  { size: 'L', chest: 40, waist: 34 },
  { size: 'XL', chest: 42, waist: 36 }
];

export default function SizeGuide3({ data }: { data: any }) {
  return (
    <section className="py-32 bg-[#f4f4f5] min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full px-6 flex flex-col md:flex-row gap-16 items-center">
        
        <div className="md:w-1/3">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-8"
          >
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
          </motion.div>
          <h2 className="text-5xl font-black text-black mb-4">Size Chart.</h2>
          <p className="text-neutral-500 text-lg">Use this guide to find your perfect fit. Measurements reflect garment dimensions.</p>
        </div>

        <div className="md:w-2/3 w-full">
          <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 border border-neutral-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="pb-6 text-neutral-400 font-bold uppercase tracking-wider text-sm border-b-2 border-neutral-100">Size</th>
                  <th className="pb-6 text-neutral-400 font-bold uppercase tracking-wider text-sm border-b-2 border-neutral-100">Chest (in)</th>
                  <th className="pb-6 text-neutral-400 font-bold uppercase tracking-wider text-sm border-b-2 border-neutral-100">Waist (in)</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((row, i) => (
                  <motion.tr 
                    key={row.size}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <td className="py-6 border-b border-neutral-100 text-2xl font-black text-black group-hover:text-blue-600 transition-colors">
                      {row.size}
                    </td>
                    <td className="py-6 border-b border-neutral-100 text-lg text-neutral-600">
                      {row.chest}
                    </td>
                    <td className="py-6 border-b border-neutral-100 text-lg text-neutral-600">
                      {row.waist}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
`;

const sg4 = `import React from 'react';
import { motion } from 'framer-motion';

export default function SizeGuide4({ data }: { data: any }) {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <section className="py-32 bg-black min-h-screen flex flex-col justify-center overflow-hidden relative">
      <div className="absolute inset-0 flex items-center whitespace-nowrap opacity-10 pointer-events-none">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="text-[200px] font-black text-white leading-none uppercase"
        >
          MEASUREMENTS MEASUREMENTS MEASUREMENTS
        </motion.div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {sizes.map((size, i) => (
            <motion.div
              key={size}
              initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
              className="aspect-[3/4] rounded-2xl relative overflow-hidden group cursor-crosshair"
            >
              {/* Glassmorphic background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <span className="text-6xl font-black text-white mb-6 group-hover:scale-125 transition-transform duration-500">{size}</span>
                
                <div className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 text-center">
                  <div className="text-white/60 text-sm">CHEST</div>
                  <div className="text-white font-bold text-xl mb-2">{34 + i*2}"</div>
                  <div className="w-full h-[1px] bg-white/20 mb-2" />
                  <div className="text-white/60 text-sm">WAIST</div>
                  <div className="text-white font-bold text-xl">{28 + i*2}"</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

const sg5 = `import React, { useState } from 'react';
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
                className={\`w-16 h-16 rounded-full text-2xl font-bold border-2 transition-all \${active === s.id ? 'bg-black text-white border-black scale-110' : 'bg-transparent text-neutral-400 border-neutral-200 hover:border-black'}\`}
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
`;

const sg6 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sizes = [
  { size: 'Small', measurements: 'Chest 36-38" / Waist 29-31"' },
  { size: 'Medium', measurements: 'Chest 38-40" / Waist 31-33"' },
  { size: 'Large', measurements: 'Chest 40-42" / Waist 33-35"' },
  { size: 'X-Large', measurements: 'Chest 42-44" / Waist 35-37"' }
];

export default function SizeGuide6({ data }: { data: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="py-32 bg-[#0a0a0a] min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full px-6">
        
        <div className="mb-20 text-center">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-white"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
          </motion.div>
          <h2 className="text-4xl font-light text-white tracking-widest uppercase">Size Guide</h2>
        </div>

        <div className="border-t border-white/10">
          {sizes.map((item, i) => (
            <div key={i} className="border-b border-white/10">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex justify-between items-center text-left group"
              >
                <span className={\`text-4xl font-black transition-colors \${openIndex === i ? 'text-white' : 'text-neutral-600 group-hover:text-neutral-400'}\`}>
                  {item.size}
                </span>
                <span className="text-2xl text-neutral-600 font-light">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-xl text-neutral-400 font-light tracking-wide">
                      {item.measurements}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
`;

const sg7 = `import React from 'react';
import { motion } from 'framer-motion';

export default function SizeGuide7({ data }: { data: any }) {
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <section className="py-32 bg-[#e5e5e5] min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-2 bg-black rounded-[2rem] p-12 text-white flex flex-col justify-between shadow-xl"
          >
            <div>
              <h2 className="text-6xl font-black tracking-tight mb-4">Fit Guide</h2>
              <p className="text-neutral-400 text-xl max-w-md">Our garments are true to size. If you are between sizes, we recommend sizing up.</p>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4">
              {sizes.map((s, i) => (
                <div key={s} className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-xl font-bold hover:bg-white hover:text-black transition-colors cursor-pointer">
                  {s}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2rem] p-8 shadow-xl flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold text-neutral-400 uppercase tracking-widest mb-6">How to Measure</h3>
            <div className="space-y-6">
              <div>
                <strong className="block text-black text-lg mb-1">Chest</strong>
                <p className="text-neutral-500 text-sm">Measure under your arms, around the fullest part of your chest.</p>
              </div>
              <div>
                <strong className="block text-black text-lg mb-1">Waist</strong>
                <p className="text-neutral-500 text-sm">Measure around your natural waistline, keeping the tape comfortably loose.</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
`;

const sg8 = `import React from 'react';
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
`;

const sg9 = `import React from 'react';
import { motion } from 'framer-motion';

export default function SizeGuide9({ data }: { data: any }) {
  return (
    <section className="py-32 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-7xl md:text-[10rem] font-black text-white leading-none tracking-tighter mb-12">SIZES.</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-y border-white/20 py-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-left"
          >
            <h3 className="text-3xl font-bold text-white mb-2">Regular Fit</h3>
            <p className="text-neutral-500">True to size. Order your normal size.</p>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.4 }}
            className="flex gap-4"
          >
            {['S', 'M', 'L', 'XL'].map((s) => (
              <div key={s} className="w-16 h-16 border-2 border-white text-white rounded-xl flex items-center justify-center text-2xl font-bold hover:bg-white hover:text-black transition-colors cursor-pointer">
                {s}
              </div>
            ))}
          </motion.div>
          
        </div>
        
      </div>
    </section>
  );
}
`;

const sg10 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';

const sizes = ['S', 'M', 'L', 'XL'];
const dimensions = {
  S: { chest: 38, length: 28 },
  M: { chest: 40, length: 29 },
  L: { chest: 42, length: 30 },
  XL: { chest: 44, length: 31 }
};

export default function SizeGuide10({ data }: { data: any }) {
  const [index, setIndex] = useState(1); // Default to M

  const activeSize = sizes[index];
  const activeDims = dimensions[activeSize as keyof typeof dimensions];

  return (
    <section className="py-32 bg-[#f8f8f8] min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-black">Interactive Fit</h2>
          <p className="text-neutral-500 mt-2">Drag or click to compare sizes.</p>
        </div>

        <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-neutral-100 relative overflow-hidden">
          
          <div className="flex justify-between items-center mb-16 relative">
            {/* Track */}
            <div className="absolute left-0 right-0 h-1 bg-neutral-200 top-1/2 -translate-y-1/2 z-0" />
            
            {sizes.map((s, i) => (
              <div 
                key={s} 
                onClick={() => setIndex(i)}
                className={\`relative z-10 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl cursor-pointer transition-colors \${index === i ? 'bg-blue-600 text-white' : 'bg-neutral-100 text-neutral-400 hover:bg-neutral-200'}\`}
              >
                {s}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8 text-center">
            <div className="bg-neutral-50 rounded-3xl p-8">
              <div className="text-neutral-400 font-bold uppercase tracking-widest text-sm mb-4">Chest</div>
              <motion.div 
                key={\`chest-\${activeSize}\`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring" }}
                className="text-6xl font-black text-black"
              >
                {activeDims.chest}"
              </motion.div>
            </div>
            
            <div className="bg-neutral-50 rounded-3xl p-8">
              <div className="text-neutral-400 font-bold uppercase tracking-widest text-sm mb-4">Length</div>
              <motion.div 
                key={\`length-\${activeSize}\`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring" }}
                className="text-6xl font-black text-black"
              >
                {activeDims.length}"
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
`;

const files = [
  { path: '../src/components/sections/product/09-size-guide/size-guide-1/SizeGuide1.tsx', content: sg1 },
  { path: '../src/components/sections/product/09-size-guide/size-guide-2/SizeGuide2.tsx', content: sg2 },
  { path: '../src/components/sections/product/09-size-guide/size-guide-3/SizeGuide3.tsx', content: sg3 },
  { path: '../src/components/sections/product/09-size-guide/size-guide-4/SizeGuide4.tsx', content: sg4 },
  { path: '../src/components/sections/product/09-size-guide/size-guide-5/SizeGuide5.tsx', content: sg5 },
  { path: '../src/components/sections/product/09-size-guide/size-guide-6/SizeGuide6.tsx', content: sg6 },
  { path: '../src/components/sections/product/09-size-guide/size-guide-7/SizeGuide7.tsx', content: sg7 },
  { path: '../src/components/sections/product/09-size-guide/size-guide-8/SizeGuide8.tsx', content: sg8 },
  { path: '../src/components/sections/product/09-size-guide/size-guide-9/SizeGuide9.tsx', content: sg9 },
  { path: '../src/components/sections/product/09-size-guide/size-guide-10/SizeGuide10.tsx', content: sg10 },
];

files.forEach(f => {
  const fullPath = path.join(__dirname, f.path);
  fs.writeFileSync(fullPath, f.content, 'utf8');
});

console.log('Size Guide 1-10 created!');
