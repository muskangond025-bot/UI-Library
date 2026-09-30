import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductCare17({ data }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <div 
      className={`p-8 min-h-[400px] rounded-3xl flex items-center justify-center transition-colors duration-1000 ${isDark ? 'bg-zinc-950' : 'bg-zinc-100'}`}
    >
      <div className="w-full max-w-xl text-center">
        <motion.div 
          layout
          className={`inline-block px-6 py-2 rounded-full font-mono text-sm mb-8 cursor-pointer ${isDark ? 'bg-zinc-800 text-zinc-300' : 'bg-white text-zinc-600 shadow-sm'}`}
          onClick={() => setIsDark(!isDark)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Toggle Environment: {isDark ? 'Dark Storage' : 'Light Use'}
        </motion.div>

        <motion.h2 
          className={`text-4xl md:text-5xl font-black mb-6 transition-colors duration-1000 ${isDark ? 'text-white' : 'text-zinc-900'}`}
          layout
        >
          {isDark ? 'Keep away from light' : 'Avoid direct sun'}
        </motion.h2>

        <motion.p 
          className={`text-lg transition-colors duration-1000 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}
          layout
        >
          {isDark 
            ? "When storing, keep in a cool, dark place to prevent material degradation." 
            : "During everyday use, prolonged exposure to direct sunlight may cause fading."}
        </motion.p>
        
        <div className="mt-12 flex justify-center">
          <motion.div 
            className={`w-24 h-24 rounded-full border-4 flex items-center justify-center transition-colors duration-1000 ${isDark ? 'border-zinc-800 text-zinc-700' : 'border-zinc-200 text-zinc-300'}`}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            {isDark ? '🌙' : '☀️'}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
