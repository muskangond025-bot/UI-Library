import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, Shield } from 'lucide-react';

export default function WarrantyInformation1({ data }: { data: any }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Portal Hero Background Effect */}
      <motion.div 
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        animate={{ opacity: hovered ? 1 : 0.5 }}
        transition={{ duration: 1 }}
      />

      <motion.div 
        className="relative z-10 max-w-xl text-center"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <motion.div 
          className="mx-auto w-24 h-24 mb-8 relative"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <div className="absolute inset-0 bg-indigo-500 rounded-full blur-2xl opacity-50 mix-blend-screen" />
          <div className="relative w-full h-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center">
            <Shield className="w-12 h-12 text-indigo-300" />
          </div>
        </motion.div>

        <h2 className="text-4xl font-bold text-white mb-4">Lifetime Coverage</h2>
        <p className="text-neutral-400 mb-8 leading-relaxed">
          Our products are built to last. Enjoy complete peace of mind with our comprehensive lifetime warranty covering all manufacturing defects.
        </p>

        <motion.button 
          className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-neutral-950 rounded-full font-medium overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="absolute inset-0 bg-indigo-100"
            initial={{ x: "100%" }}
            whileHover={{ x: 0 }}
            transition={{ type: "tween", ease: "easeInOut" }}
          />
          <span className="relative flex items-center gap-2">
            View Details 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
}
