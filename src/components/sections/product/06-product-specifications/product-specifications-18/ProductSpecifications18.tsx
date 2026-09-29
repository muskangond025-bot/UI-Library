import React from 'react';
import { motion } from 'framer-motion';

export default function ProductSpecifications18({ data }: { data: any }) {
  const specs = [
    { title: "DISPLAY", value: "6.7\" SUPER RETINA XDR" },
    { title: "PROCESSOR", value: "A17 PRO 3NM CHIP" },
    { title: "CAMERA", value: "48MP PRO SYSTEM" },
    { title: "MATERIAL", value: "AEROSPACE TITANIUM" }
  ];

  return (
    <section className="py-24 bg-white min-h-screen flex items-center justify-center overflow-hidden">
      <div className="w-full flex flex-col md:flex-row h-full">
        
        {/* Left Side: Massive Typography Specs */}
        <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center space-y-12 relative z-10">
          <h2 className="text-xl font-bold tracking-[0.2em] text-neutral-400 mb-8 border-b border-neutral-200 pb-4">TECH SPECS</h2>
          
          {specs.map((spec, i) => (
            <div key={i} className="group cursor-default">
              <motion.h3 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="text-sm font-bold text-blue-600 tracking-widest mb-2"
              >
                {spec.title}
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.2, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-none group-hover:pl-4 transition-all duration-300">
                  {spec.value}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Right Side: Editorial Image Layout */}
        <div className="md:w-1/2 p-8 md:p-16 relative min-h-[50vh]">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full h-full absolute inset-0 md:inset-16 overflow-hidden rounded-[3rem] shadow-2xl"
          >
            <img 
              src="https://picsum.photos/seed/tech18/1200/1600" 
              alt="Device" 
              className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
