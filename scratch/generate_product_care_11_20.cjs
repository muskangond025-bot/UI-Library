const fs = require('fs');
const path = require('path');

const components = [
  {
    name: 'ProductCare11',
    content: `import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Shield, Sparkles, Droplet } from 'lucide-react';

export default function ProductCare11({ data }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  return (
    <div 
      className="p-8 min-h-[400px] rounded-3xl bg-zinc-950 flex flex-col items-center justify-center relative overflow-hidden cursor-none"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      <motion.div 
        className="absolute w-64 h-64 bg-fuchsia-600/30 rounded-full blur-[100px] pointer-events-none z-0"
        animate={{ x: mousePosition.x - 128, y: mousePosition.y - 128 }}
        transition={{ type: 'spring', damping: 40, stiffness: 400, mass: 0.5 }}
      />
      
      <div className="z-10 text-center max-w-2xl">
        <motion.h2 
          className="text-4xl font-bold text-white mb-8 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Immaculate Care
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Shield size={24} />, title: "Protect", desc: "Keep away from direct sunlight" },
            { icon: <Sparkles size={24} />, title: "Polish", desc: "Use microfiber cloth" },
            { icon: <Droplet size={24} />, title: "Clean", desc: "Mild soap and water only" }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-6 rounded-2xl hover:border-fuchsia-500/50 transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="text-fuchsia-400 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.div 
        className="w-4 h-4 rounded-full bg-white fixed top-0 left-0 pointer-events-none mix-blend-difference z-50 hidden md:block"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.1 }}
        style={{ position: 'absolute' }}
      />
    </div>
  );
}
`
  },
  {
    name: 'ProductCare12',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function ProductCare12({ data }) {
  const [items, setItems] = useState([
    { id: 1, text: "Wipe with damp cloth", done: false },
    { id: 2, text: "Apply leather conditioner", done: false },
    { id: 3, text: "Store in dust bag", done: false }
  ]);
  const [error, setError] = useState(false);

  const toggleItem = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  const handleFinish = () => {
    if (items.some(item => !item.done)) {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-slate-50 flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Care Checklist</h2>
        
        <div className="space-y-3 mb-8">
          {items.map(item => (
            <motion.div
              key={item.id}
              layout
              className={\`flex items-center p-4 rounded-xl cursor-pointer transition-colors \${item.done ? 'bg-green-50 border border-green-200' : 'bg-slate-50 border border-slate-200 hover:bg-slate-100'}\`}
              onClick={() => toggleItem(item.id)}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className={\`w-6 h-6 rounded-full flex items-center justify-center mr-4 \${item.done ? 'bg-green-500 text-white' : 'border-2 border-slate-300'}\`}
              >
                <AnimatePresence>
                  {item.done && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <CheckCircle2 size={16} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <span className={\`font-medium \${item.done ? 'text-green-700 line-through' : 'text-slate-700'}\`}>
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
        
        <motion.button
          className={\`w-full py-4 rounded-xl font-bold text-white transition-colors \${items.every(i => i.done) ? 'bg-green-500 hover:bg-green-600' : 'bg-slate-800 hover:bg-slate-900'}\`}
          onClick={handleFinish}
          animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          {items.every(i => i.done) ? "All done!" : "Complete all steps"}
        </motion.button>
        
        <AnimatePresence>
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0 }}
              className="mt-4 flex items-center justify-center text-red-500 text-sm font-medium"
            >
              <AlertCircle size={16} className="mr-2" /> Please complete all steps
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ProductCare13',
    content: `import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function ProductCare13({ data }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  return (
    <div 
      className="p-8 min-h-[500px] rounded-3xl bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 flex items-center justify-center perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full max-w-sm bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl"
      >
        <motion.div style={{ transform: "translateZ(50px)" }} className="mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg mb-6">
            <span className="text-3xl">🫧</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Deep Clean</h2>
          <p className="text-indigo-200 text-sm">Professional care recommended</p>
        </motion.div>
        
        <motion.div style={{ transform: "translateZ(30px)" }} className="space-y-4">
          {[
            "Use specialized solvent",
            "Maintain 40% humidity",
            "Avoid direct exposure"
          ].map((text, i) => (
            <div key={i} className="flex items-center bg-white/5 p-3 rounded-xl border border-white/10">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
              <span className="text-indigo-100 font-medium text-sm">{text}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
`
  },
  {
    name: 'ProductCare14',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductCare14({ data }) {
  const [selectedId, setSelectedId] = useState(null);
  
  const rules = [
    { id: '1', title: 'Washing', subtitle: 'Machine wash guidelines', details: 'Turn inside out. Use cold water (30°C max). Gentle cycle only. Do not overfill the machine to prevent extreme creasing.' },
    { id: '2', title: 'Drying', subtitle: 'Best practices for drying', details: 'Air dry flat when possible. If using a machine, tumble dry on the lowest heat setting. Remove immediately.' },
    { id: '3', title: 'Ironing', subtitle: 'Temperature settings', details: 'Iron on low heat (110°C max) on the reverse side. Do not iron over prints, embroidery, or sensitive trims.' }
  ];

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-amber-50 flex items-center justify-center relative">
      <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {rules.map((rule) => (
          <motion.div
            layoutId={\`card-\${rule.id}\`}
            key={rule.id}
            className="bg-white p-6 rounded-3xl shadow-sm border border-amber-100 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setSelectedId(rule.id)}
          >
            <motion.h3 layoutId={\`title-\${rule.id}\`} className="font-bold text-amber-900 text-lg mb-1">{rule.title}</motion.h3>
            <motion.p layoutId={\`sub-\${rule.id}\`} className="text-amber-600/70 text-sm">{rule.subtitle}</motion.p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-amber-900/20 backdrop-blur-sm flex items-center justify-center p-8 z-50 rounded-3xl"
            onClick={() => setSelectedId(null)}
          >
            {rules.filter(r => r.id === selectedId).map(rule => (
              <motion.div
                layoutId={\`card-\${rule.id}\`}
                key={rule.id}
                className="bg-white w-full max-w-lg p-10 rounded-3xl shadow-2xl relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full -z-10 opacity-50" />
                <motion.h3 layoutId={\`title-\${rule.id}\`} className="font-bold text-amber-900 text-3xl mb-2">{rule.title}</motion.h3>
                <motion.p layoutId={\`sub-\${rule.id}\`} className="text-amber-600 font-medium mb-6">{rule.subtitle}</motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-slate-600 leading-relaxed"
                >
                  {rule.details}
                </motion.div>
                
                <motion.button 
                  className="mt-8 px-6 py-3 bg-amber-100 text-amber-900 rounded-xl font-bold hover:bg-amber-200 transition-colors"
                  onClick={() => setSelectedId(null)}
                >
                  Got it
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
`
  },
  {
    name: 'ProductCare15',
    content: `import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductCare15({ data }) {
  const [currentStep, setCurrentStep] = useState(0);
  
  const frames = [
    { text: "DO NOT", color: "text-red-500", bg: "bg-red-50" },
    { text: "BLEACH", color: "text-red-600", bg: "bg-red-100" },
    { text: "USE", color: "text-blue-500", bg: "bg-blue-50" },
    { text: "MILD SOAP", color: "text-blue-600", bg: "bg-blue-100" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % frames.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [frames.length]);

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-neutral-900 flex items-center justify-center relative overflow-hidden">
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
      
      <div className="relative z-10 text-center">
        <h3 className="text-neutral-500 text-sm font-mono tracking-widest mb-12">CARE INSTRUCTION SEQUENCE</h3>
        
        <div className="h-32 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ scale: 1.5, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              exit={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={\`text-6xl md:text-8xl font-black \${frames[currentStep].color}\`}
            >
              {frames[currentStep].text}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center gap-2 mt-12">
          {frames.map((_, i) => (
            <div key={i} className={\`h-1 rounded-full transition-all duration-500 \${i === currentStep ? 'w-8 bg-white' : 'w-2 bg-neutral-700'}\`} />
          ))}
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ProductCare16',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductCare16({ data }) {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const content = {
    1: { title: "Preparation", desc: "Empty all pockets and remove any detachable accessories before cleaning." },
    2: { title: "Pre-treat", desc: "Apply stain remover directly to soiled areas and let sit for 10 minutes." },
    3: { title: "Wash", desc: "Machine wash cold on a delicate cycle with like colors." },
    4: { title: "Dry", desc: "Lay flat on a clean towel away from direct sunlight." }
  };

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-cyan-950 flex flex-col items-center justify-center text-white">
      <div className="w-full max-w-lg bg-cyan-900/30 p-8 rounded-3xl border border-cyan-800/50 backdrop-blur-xl">
        <div className="flex justify-between items-center mb-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-cyan-900 -z-10 -translate-y-1/2 rounded-full" />
          <motion.div 
            className="absolute top-1/2 left-0 h-1 bg-cyan-400 -z-10 -translate-y-1/2 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: \`\${((step - 1) / (totalSteps - 1)) * 100}%\` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          
          {[1, 2, 3, 4].map(num => (
            <div 
              key={num} 
              className={\`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-500 \${step >= num ? 'bg-cyan-400 text-cyan-950 shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 'bg-cyan-900 text-cyan-700'}\`}
            >
              {num}
            </div>
          ))}
        </div>

        <div className="min-h-[120px]">
          <motion.div
            key={step}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-cyan-50 mb-3">{content[step].title}</h3>
            <p className="text-cyan-200/80 leading-relaxed">{content[step].desc}</p>
          </motion.div>
        </div>

        <div className="flex justify-between mt-8">
          <button 
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            className={\`px-6 py-2 rounded-lg font-medium transition-colors \${step === 1 ? 'opacity-50 cursor-not-allowed text-cyan-700' : 'text-cyan-400 hover:bg-cyan-900/50'}\`}
          >
            Previous
          </button>
          <button 
            onClick={() => setStep(Math.min(totalSteps, step + 1))}
            disabled={step === totalSteps}
            className={\`px-6 py-2 rounded-lg font-bold transition-all \${step === totalSteps ? 'opacity-50 cursor-not-allowed bg-cyan-900 text-cyan-700' : 'bg-cyan-400 text-cyan-950 hover:bg-cyan-300 shadow-lg shadow-cyan-400/20'}\`}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ProductCare17',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductCare17({ data }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <div 
      className={\`p-8 min-h-[400px] rounded-3xl flex items-center justify-center transition-colors duration-1000 \${isDark ? 'bg-zinc-950' : 'bg-zinc-100'}\`}
    >
      <div className="w-full max-w-xl text-center">
        <motion.div 
          layout
          className={\`inline-block px-6 py-2 rounded-full font-mono text-sm mb-8 cursor-pointer \${isDark ? 'bg-zinc-800 text-zinc-300' : 'bg-white text-zinc-600 shadow-sm'}\`}
          onClick={() => setIsDark(!isDark)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Toggle Environment: {isDark ? 'Dark Storage' : 'Light Use'}
        </motion.div>

        <motion.h2 
          className={\`text-4xl md:text-5xl font-black mb-6 transition-colors duration-1000 \${isDark ? 'text-white' : 'text-zinc-900'}\`}
          layout
        >
          {isDark ? 'Keep away from light' : 'Avoid direct sun'}
        </motion.h2>

        <motion.p 
          className={\`text-lg transition-colors duration-1000 \${isDark ? 'text-zinc-500' : 'text-zinc-500'}\`}
          layout
        >
          {isDark 
            ? "When storing, keep in a cool, dark place to prevent material degradation." 
            : "During everyday use, prolonged exposure to direct sunlight may cause fading."}
        </motion.p>
        
        <div className="mt-12 flex justify-center">
          <motion.div 
            className={\`w-24 h-24 rounded-full border-4 flex items-center justify-center transition-colors duration-1000 \${isDark ? 'border-zinc-800 text-zinc-700' : 'border-zinc-200 text-zinc-300'}\`}
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
`
  },
  {
    name: 'ProductCare18',
    content: `import React, { useState, useEffect } from 'react';
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
`
  },
  {
    name: 'ProductCare19',
    content: `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCare19({ data }) {
  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-pink-50 flex items-center justify-center overflow-hidden">
      <div className="relative group perspective-[1000px]">
        {/* Background decorative blobs */}
        <motion.div 
          className="absolute -top-20 -left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <motion.div 
          className="relative bg-white/80 backdrop-blur-2xl p-12 rounded-[2rem] shadow-2xl border border-white max-w-lg w-full z-10"
          whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="text-center">
            <motion.div 
              className="inline-block mb-6 bg-pink-100 p-4 rounded-2xl"
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ type: "spring" }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-600">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </motion.div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Dry Clean Only</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              This garment is constructed from delicate fibers that require professional care. Submerging in water will cause irreversible damage.
            </p>
            
            <motion.button 
              className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium w-full"
              whileHover={{ scale: 1.05, backgroundColor: "#1e293b" }}
              whileTap={{ scale: 0.95 }}
            >
              Find a cleaner near you
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ProductCare20',
    content: `import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function ProductCare20({ data }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const content = [
    "STORE FLAT",
    "DO NOT HANG",
    "AVOID MOISTURE",
    "BRUSH GENTLY"
  ];

  return (
    <div ref={containerRef} className="p-8 min-h-[600px] rounded-3xl bg-black flex flex-col items-center justify-center relative">
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-400 to-blue-500 origin-left z-50 rounded-t-3xl" 
        style={{ scaleX }} 
      />

      <div className="w-full max-w-4xl px-4 py-20 space-y-24">
        {content.map((text, i) => {
          // Create a delayed parallax effect for each item
          const y = useTransform(scrollYProgress, [0, 1], [100 - i * 20, -100 + i * 20]);
          const opacity = useTransform(scrollYProgress, 
            [i * 0.2, 0.4 + i * 0.1, 0.8 + i * 0.1], 
            [0, 1, 0]
          );

          return (
            <motion.div 
              key={i}
              style={{ y, opacity }}
              className="flex justify-center"
            >
              <h2 className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 to-zinc-600 tracking-tighter">
                {text}
              </h2>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
`
  }
];

components.forEach(comp => {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'sections', 'product', '10-product-care', 'product-care-' + comp.name.replace('ProductCare', ''), comp.name + '.tsx');
  
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, comp.content, 'utf-8');
  console.log('Updated ' + comp.name);
});
