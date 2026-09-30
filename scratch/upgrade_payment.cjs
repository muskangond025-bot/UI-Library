const fs = require('fs');
const path = require('path');

const components = [
  {
    name: 'PaymentInformation11',
    content: `import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PaymentInformation11({ data }: { data: any }) {
  const [isSplitting, setIsSplitting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSplitting(s => !s);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-neutral-950 to-neutral-950 pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Split Pay</h2>
        <p className="text-indigo-400 font-bold tracking-widest text-sm mt-2">INTEREST-FREE INSTALLMENTS</p>
      </div>

      <div className="w-full max-w-md h-40 bg-neutral-900/50 backdrop-blur-xl rounded-3xl shadow-[0_0_50px_rgba(79,70,229,0.15)] border border-white/10 flex items-center justify-center relative z-10">
        <motion.div 
          className="text-5xl font-black text-white absolute tracking-tighter"
          animate={{ opacity: isSplitting ? 0 : 1, scale: isSplitting ? 0.8 : 1, filter: isSplitting ? "blur(10px)" : "blur(0px)" }}
          transition={{ duration: 0.5 }}
        >
          $100.00
        </motion.div>

        <div className="flex gap-4 absolute">
          {[1, 2, 3, 4].map((num) => (
            <motion.div
              key={num}
              className="w-20 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex flex-col items-center justify-center font-bold text-white shadow-2xl border border-white/20"
              initial={{ scale: 0, opacity: 0, x: 0, rotateY: 90 }}
              animate={isSplitting ? { scale: 1, opacity: 1, x: (num - 2.5) * 24, rotateY: 0 } : { scale: 0.5, opacity: 0, x: 0, rotateY: 90 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: isSplitting ? num * 0.1 : 0 }}
            >
              <span className="text-xs opacity-60 mb-1">Pay {num}</span>
              <span className="text-xl">$25</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-indigo-500 blur-[1px]"
          animate={{
            y: [-20, -100],
            x: Math.sin(i) * 50,
            opacity: [0, 1, 0],
            scale: [0, 2, 0]
          }}
          transition={{ repeat: Infinity, duration: 2 + i, delay: i * 0.5 }}
          style={{ left: \`\${20 + i * 15}%\`, bottom: "20%" }}
        />
      ))}
    </div>
  );
}
`
  },
  {
    name: 'PaymentInformation12',
    content: `import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { CreditCard, CheckCircle2, ChevronRight } from 'lucide-react';

export default function PaymentInformation12({ data }: { data: any }) {
  const [success, setSuccess] = useState(false);
  const x = useMotionValue(0);
  const background = useTransform(x, [0, 200], ["#171717", "#065f46"]);
  const glowOpacity = useTransform(x, [0, 200], [0.1, 1]);

  useEffect(() => {
    // Auto-demo the swipe
    let controls;
    if (!success) {
      controls = animate(x, [0, 50, 0], { repeat: Infinity, duration: 2, ease: "easeInOut" });
    }
    return () => controls?.stop();
  }, [success, x]);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-black flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background glow attached to swipe progress */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 to-transparent pointer-events-none"
        style={{ opacity: glowOpacity }}
      />

      <div className="text-center mb-16 z-10">
        <h2 className="text-4xl font-black text-white uppercase tracking-widest">Swipe to Pay</h2>
        <motion.div 
          className="flex items-center justify-center gap-2 mt-4 text-emerald-500"
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-xs font-bold tracking-widest uppercase">Drag Card Right</span>
          <ChevronRight size={16} />
        </motion.div>
      </div>

      <motion.div className="w-full max-w-md h-32 rounded-[2rem] relative flex items-center px-4 border border-white/10 shadow-2xl z-10 overflow-hidden" style={{ background }}>
        {/* Scanner Track */}
        <div className="absolute left-8 right-8 h-3 bg-black/80 rounded-full shadow-[inset_0_2px_10px_rgba(0,0,0,1)] border border-white/5 pointer-events-none flex items-center">
           {/* Animated dots on track */}
           <motion.div 
             className="h-1 w-1/4 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent blur-[2px]"
             animate={{ x: ["-100%", "400%"] }}
             transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
           />
        </div>
        
        {!success ? (
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 280 }}
            dragElastic={0}
            dragMomentum={false}
            onDragStart={() => x.stop()} // Stop auto demo when user grabs
            onDrag={(e, info) => {
              if (info.point.x > 250) setSuccess(true);
            }}
            style={{ x }}
            className="w-24 h-20 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] border border-neutral-600 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-full h-2 bg-neutral-700 mb-2 mt-[-10px]" /> {/* Magnetic strip */}
            <CreditCard size={28} className="text-white/80 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
          </motion.div>
        ) : (
          <motion.div 
            initial={{ scale: 0, rotate: -180 }} 
            animate={{ scale: 1, rotate: 0 }} 
            className="w-full flex flex-col items-center justify-center text-emerald-400 z-10"
          >
            <CheckCircle2 size={48} className="drop-shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
            <span className="font-bold text-xs uppercase tracking-widest mt-2 text-white">Payment Secured</span>
          </motion.div>
        )}
      </motion.div>

      {success && (
        <motion.button 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          onClick={() => { setSuccess(false); x.set(0); }} 
          className="mt-12 px-6 py-2 rounded-full border border-neutral-700 text-neutral-400 hover:text-white hover:border-white transition-colors text-xs font-bold uppercase tracking-widest z-10"
        >
          Reset Demo
        </motion.button>
      )}
    </div>
  );
}
`
  },
  {
    name: 'PaymentInformation13',
    content: `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe2 } from 'lucide-react';

export default function PaymentInformation13({ data }: { data: any }) {
  const [currency, setCurrency] = useState(0);
  const currencies = [
    { code: "USD", symbol: "$", rate: 1, flag: "🇺🇸" },
    { code: "EUR", symbol: "€", rate: 0.92, flag: "🇪🇺" },
    { code: "GBP", symbol: "£", rate: 0.79, flag: "🇬🇧" },
    { code: "JPY", symbol: "¥", rate: 150.2, flag: "🇯🇵" },
  ];

  const price = 299.99;

  // Auto-cycle currencies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrency(c => (c + 1) % currencies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20" />

      <div className="text-center mb-12 z-10">
        <h2 className="text-4xl font-black text-white uppercase tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">Global Pricing</h2>
        <p className="text-indigo-300 font-bold text-sm tracking-widest mt-2">AUTO-CONVERT TO LOCAL CURRENCY</p>
      </div>

      <div className="flex gap-2 mb-8 z-10">
        {currencies.map((c, i) => (
          <div
            key={i}
            className={\`px-4 py-2 rounded-xl font-bold transition-all duration-500 \${currency === i ? 'bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] scale-110' : 'bg-white/5 text-white/50 border border-white/10'}\`}
          >
            <span className="mr-2">{c.flag}</span>{c.code}
          </div>
        ))}
      </div>

      <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl p-8 rounded-[2rem] shadow-2xl border border-white/20 text-center relative overflow-hidden z-10">
        
        {/* Spinning Globe */}
        <motion.div 
          className="absolute -bottom-16 -right-16 text-indigo-500/20 z-0"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <Globe2 size={200} strokeWidth={1} />
        </motion.div>

        <div className="relative z-10">
          <p className="text-xs font-bold text-indigo-200 uppercase tracking-[0.3em] mb-4">Total Amount Due</p>
          <div className="h-24 overflow-hidden flex items-center justify-center bg-black/20 rounded-2xl border border-white/10 shadow-inner">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currency}
                initial={{ y: 50, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: -50, opacity: 0, rotateX: 90 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="text-6xl font-black text-white tracking-tighter drop-shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                {currencies[currency].symbol}{(price * currencies[currency].rate).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'PaymentInformation14',
    content: `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function PaymentInformation14({ data }: { data: any }) {
  const [scratched, setScratched] = useState(false);

  // Auto-scratch for demo if user doesn't interact
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!scratched) setScratched(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [scratched]);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-900 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Animated beams background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ background: 'conic-gradient(from 0deg at 50% 50%, #f43f5e, #fbbf24, #f43f5e)' }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-3xl" />

      <div className="text-center mb-12 z-10">
        <h2 className="text-4xl font-black text-white uppercase tracking-widest drop-shadow-lg">Promo Reveal</h2>
        <p className="text-rose-400 font-bold mt-2 text-sm tracking-widest uppercase flex items-center justify-center gap-2">
          <Sparkles size={16} /> Scratch to win <Sparkles size={16} />
        </p>
      </div>

      <motion.div 
        className="w-full max-w-sm h-48 rounded-2xl relative cursor-crosshair overflow-hidden group border-4 border-rose-500/50 shadow-[0_0_50px_rgba(244,63,94,0.3)] z-10"
        onClick={() => setScratched(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Hidden Code */}
        <div className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center text-center p-6">
          <span className="text-rose-500 font-bold mb-2 uppercase tracking-[0.3em] text-xs">Winning Code:</span>
          <motion.span 
            className="text-5xl font-black text-white tracking-widest font-mono drop-shadow-[0_0_20px_rgba(244,63,94,0.8)]"
            animate={scratched ? { scale: [1, 1.1, 1], opacity: [0, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            SAVE20
          </motion.span>
        </div>

        {/* Scratch Layer */}
        <AnimatePresence>
          {!scratched && (
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-neutral-300 via-neutral-100 to-neutral-400 flex items-center justify-center flex-wrap gap-1 p-2"
              exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)", rotate: 10 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
               {/* Holographic sweep */}
               <motion.div 
                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent w-[200%]"
                 animate={{ x: ["-100%", "100%"] }}
                 transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
               />
               <span className="absolute text-neutral-800 font-black text-3xl uppercase tracking-widest drop-shadow-xl z-10 flex items-center gap-2">
                 SCRATCH
               </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {scratched && (
        <motion.button 
          className="mt-12 z-10 text-xs font-bold text-neutral-500 uppercase tracking-widest hover:text-white border border-neutral-700 px-6 py-2 rounded-full"
          onClick={() => setScratched(false)}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        >
          Reset Card
        </motion.button>
      )}
    </div>
  );
}
`
  },
  {
    name: 'PaymentInformation15',
    content: `import React from 'react';
import { motion } from 'framer-motion';
import { Shield, LockKeyhole, FileCheck, CheckCircle } from 'lucide-react';

export default function PaymentInformation15({ data }: { data: any }) {
  const badges = [
    { icon: Shield, text: "McAfee Secure", color: "text-rose-500", glow: "shadow-[0_0_30px_rgba(244,63,94,0.3)] border-rose-500/50" },
    { icon: LockKeyhole, text: "256-bit AES", color: "text-emerald-500", glow: "shadow-[0_0_30px_rgba(16,185,129,0.3)] border-emerald-500/50" },
    { icon: FileCheck, text: "PCI-DSS Compliant", color: "text-blue-500", glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)] border-blue-500/50" },
    { icon: CheckCircle, text: "Norton Verified", color: "text-amber-500", glow: "shadow-[0_0_30px_rgba(245,158,11,0.3)] border-amber-500/50" },
  ];

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-16 z-10">
        <h2 className="text-4xl font-black text-white uppercase tracking-widest drop-shadow-lg">Zero Trust Security</h2>
        <p className="text-neutral-500 font-bold mt-2 text-sm tracking-widest uppercase">MILITARY-GRADE ENCRYPTION</p>
      </div>

      <div className="grid grid-cols-2 gap-8 w-full max-w-2xl z-10">
        {badges.map((badge, i) => (
          <motion.div
            key={i}
            className={\`p-6 rounded-2xl bg-neutral-900 border backdrop-blur-xl flex items-center gap-4 cursor-pointer relative overflow-hidden \${badge.glow}\`}
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ repeat: Infinity, duration: 4, delay: i * 0.5, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Shimmer effect inside badge */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
            />
            
            <div className={\`w-14 h-14 rounded-full bg-black border border-neutral-800 flex items-center justify-center \${badge.color} drop-shadow-[0_0_10px_currentColor]\`}>
              <badge.icon size={28} />
            </div>
            <span className="font-bold text-white tracking-wide">{badge.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
`
  },
  {
    name: 'PaymentInformation20',
    content: `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Check, ShieldAlert } from 'lucide-react';

export default function PaymentInformation20({ data }: { data: any }) {
  const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle');

  // Auto loop the morph animation to show it off
  useEffect(() => {
    const sequence = async () => {
      while (true) {
        setState('idle');
        await new Promise(r => setTimeout(r, 2000));
        setState('loading');
        await new Promise(r => setTimeout(r, 2000));
        setState('success');
        await new Promise(r => setTimeout(r, 2000));
      }
    };
    sequence();
  }, []);

  const bgColors = {
    idle: '#171717',
    loading: '#3b82f6',
    success: '#10b981'
  };

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-900 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Dynamic Background Glow based on state */}
      <motion.div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        animate={{ backgroundColor: bgColors[state] }}
        transition={{ duration: 0.5 }}
      />

      <div className="text-center mb-16 z-10">
        <h2 className="text-4xl font-black text-white uppercase tracking-widest drop-shadow-lg">State Morphs</h2>
        <p className="text-neutral-500 font-bold mt-2 text-sm tracking-widest uppercase">DYNAMIC UI TRANSITIONS</p>
      </div>

      <motion.div
        className="flex items-center justify-center font-bold text-white shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden relative z-10 border border-white/10"
        animate={{ 
          width: state === 'idle' ? 300 : 80,
          height: state === 'idle' ? 80 : 80,
          borderRadius: 40,
          backgroundColor: bgColors[state]
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <AnimatePresence mode="wait">
          {state === 'idle' && (
            <motion.span 
              key="idle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="whitespace-nowrap uppercase tracking-[0.2em] text-lg flex items-center gap-3"
            >
              <ShieldAlert size={20} /> Authorize Payment
            </motion.span>
          )}
          
          {state === 'loading' && (
            <motion.div 
              key="loading"
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <Loader2 size={32} className="animate-spin drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </motion.div>
          )}

          {state === 'success' && (
            <motion.div 
              key="success"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
            >
              <Check size={40} className="drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
`
  }
];

components.forEach(comp => {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'sections', 'product', '14-payment-information', 'payment-information-' + comp.name.replace('PaymentInformation', ''), comp.name + '.tsx');
  fs.writeFileSync(filePath, comp.content, 'utf-8');
  console.log('Updated ' + comp.name);
});
