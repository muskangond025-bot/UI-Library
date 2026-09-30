import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplet, Wind, Sun } from 'lucide-react';

export default function ProductCare18({ data }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    { icon: <Droplet />, label: "Water Repellent" },
    { icon: <Wind />, label: "Breathable" },
    { icon: <Sun />, label: "UV Protection" }
  ];

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-slate-900 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
        
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-white">Material Tech Specs</h3>
          {loading && (
            <motion.div 
              className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          )}
        </div>

        <div className="space-y-6">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div 
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-700/50 rounded-xl animate-pulse" />
                    <div className="h-6 bg-slate-700/50 rounded-md w-1/3 animate-pulse" />
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
                className="space-y-4"
              >
                {features.map((feat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-default"
                  >
                    <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center">
                      {feat.icon}
                    </div>
                    <span className="text-slate-200 font-medium">{feat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
