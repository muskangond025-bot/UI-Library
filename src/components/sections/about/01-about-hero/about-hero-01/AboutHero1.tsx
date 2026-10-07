import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Store, ArrowRight } from 'lucide-react';

export function AboutHero1({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [storeName, setStoreName] = useState('');

  return (
    <div className="w-full min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] relative overflow-hidden flex items-center justify-center font-sans bg-[#FAF8FF]">
      
      {/* 1. Full-Bleed 3D Isometric Background Scene Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/etail_dribbble_clay_scene.jpg"
          alt="Etail 3D Isometric Scene"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft Left Side Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#ECE8F5]/90 via-[#ECE8F5]/60 to-transparent w-full lg:w-2/3 pointer-events-none" />
      </div>

      {/* 2. REAL 3D Photorealistic Box & Coin Motion Overlay (Transparent PNGs, ZERO Background Boxes/Cards) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden max-w-7xl mx-auto">
        
        {/* REAL 3D etail Box sliding along conveyor rail directly into store */}
        {[0, 1, 2].map((idx) => (
          <motion.div
            key={`real-3d-box-${idx}`}
            initial={{ x: '10vw', y: '12vh', opacity: 0, scale: 0.6 }}
            animate={{
              x: ['10vw', '42vw'],
              y: ['12vh', '22vh'],
              opacity: [0, 1, 1, 0],
              scale: [0.6, 0.95, 0.85, 0.4]
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              delay: idx * 1.3,
              ease: 'easeInOut'
            }}
            className="absolute z-20 w-16 sm:w-24 filter drop-shadow-2xl"
          >
            <img
              src="/real_3d_box_transparent.png"
              alt="Real 3D etail package box"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        ))}

        {/* REAL 3D Silver Dollar Coins floating out from store door */}
        {[0, 1, 2].map((idx) => (
          <motion.div
            key={`real-3d-coin-${idx}`}
            initial={{ x: '72vw', y: '50vh', opacity: 0, scale: 0.4, rotate: -20 }}
            animate={{
              x: ['72vw', '88vw'],
              y: ['50vh', '68vh'],
              opacity: [0, 1, 1, 0],
              scale: [0.4, 1.2, 0.95, 0.5],
              rotate: [-20, 360]
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              delay: 0.4 + idx * 0.9,
              ease: 'easeOut'
            }}
            className="absolute z-30 w-20 sm:w-28 filter drop-shadow-2xl"
          >
            <img
              src="/real_3d_coin_transparent.png"
              alt="Real 3D silver coin"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        ))}

      </div>

      {/* 3. Foreground Content: Text & Input Form */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 py-12 relative z-20">
        <div className="max-w-lg space-y-7 text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black text-[#0A1136] tracking-tight leading-[1.02]">
              {settings.titleLine1 || 'Register'}<br />
              {settings.titleLine2 || 'your store'}<br />
              {settings.titleLine3 || 'name now!'}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#434A70] text-base sm:text-lg font-medium leading-relaxed"
          >
            {settings.subtitle || "With etail.me, anyone can earn their first dollar online. Just start with what you know. It's that easy."}
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center bg-white rounded-full p-2 pl-6 shadow-2xl shadow-slate-400/30 border border-white relative max-w-md"
          >
            <div className="flex items-center gap-2 text-[#EC407A] font-bold text-sm sm:text-base shrink-0 select-none">
              <Store className="w-5 h-5 text-[#EC407A]" />
              <span>{settings.inputPrefix || 'My store'}</span>
              <span className="text-slate-300 font-normal">|</span>
            </div>

            <input
              type="text"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              placeholder={settings.inputPlaceholder || 'Enter your store name'}
              className="w-full px-3 py-2 bg-transparent text-[#0A1136] placeholder-[#9097BC] text-sm sm:text-base font-medium focus:outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              type="submit"
              className="w-12 h-12 rounded-full bg-[#EC407A] hover:bg-[#D81B60] text-white flex items-center justify-center shrink-0 shadow-lg shadow-pink-500/30 transition-colors"
            >
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </motion.button>
          </motion.form>

        </div>
      </div>

    </div>
  );
}
