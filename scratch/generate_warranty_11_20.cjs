const fs = require('fs');
const path = require('path');

const components = [
  {
    name: 'WarrantyInformation11',
    content: `import React from 'react';
import { motion } from 'framer-motion';

export default function WarrantyInformation11({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-blue-50 flex items-center justify-center overflow-hidden">
      <motion.div 
        className="bg-white p-10 rounded-[2rem] shadow-lg max-w-lg w-full"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <motion.div 
          className="w-16 h-16 bg-blue-100 rounded-full mb-6 relative flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 180 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full" />
        </motion.div>
        
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Extended Protection</h3>
        <p className="text-slate-600 leading-relaxed mb-6">
          Enjoy complete peace of mind with our extended 3-year protection plan, covering all accidental drops and spills.
        </p>
        
        <motion.button 
          className="text-blue-600 font-semibold flex items-center gap-2 group"
          whileHover={{ x: 5 }}
        >
          Learn More 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </motion.button>
      </motion.div>
    </div>
  );
}
`
  },
  {
    name: 'WarrantyInformation12',
    content: `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function WarrantyInformation12({ data }: { data: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  
  const width = useTransform(scrollYProgress, [0.2, 0.5], ["0%", "100%"]);

  return (
    <div ref={ref} className="p-8 min-h-[400px] rounded-3xl bg-zinc-950 flex flex-col items-center justify-center text-white">
      <h2 className="text-4xl font-bold mb-12">Claim Progress</h2>
      
      <div className="w-full max-w-3xl space-y-12">
        {[
          { label: "Submitted", status: "Done" },
          { label: "In Review", status: "Active" },
          { label: "Approved", status: "Pending" },
          { label: "Resolved", status: "Pending" }
        ].map((step, i) => (
          <div key={i} className="relative">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xl font-medium text-zinc-300">{step.label}</span>
              <span className={\`text-sm font-bold uppercase \${step.status === 'Active' ? 'text-amber-400' : 'text-zinc-600'}\`}>
                {step.status}
              </span>
            </div>
            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-amber-400"
                style={{ width: i < 2 ? "100%" : (i === 2 ? width : "0%") }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
`
  },
  {
    name: 'WarrantyInformation13',
    content: `import React from 'react';
import { motion } from 'framer-motion';

export default function WarrantyInformation13({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-rose-50 flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-sm">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-white rounded-3xl border border-rose-100 shadow-xl flex flex-col items-center justify-center p-8 origin-bottom"
            initial={{ y: i * 20, scale: 1 - i * 0.05, opacity: 1 - i * 0.2 }}
            whileHover={{ y: -50 - i * 10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ zIndex: 3 - i }}
          >
            <div className="w-16 h-16 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center font-bold text-2xl mb-4">
              {3 - i}
            </div>
            <h3 className="font-bold text-slate-800 text-xl text-center">Year {3 - i} Coverage</h3>
            <p className="text-slate-500 text-center text-sm mt-2">
              {i === 0 ? "Full device replacement" : i === 1 ? "Parts and labor included" : "Hardware defect protection"}
            </p>
          </motion.div>
        ))}
        {/* Placeholder to reserve space since children are absolute */}
        <div className="h-[250px]" />
      </div>
    </div>
  );
}
`
  },
  {
    name: 'WarrantyInformation14',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';

export default function WarrantyInformation14({ data }: { data: any }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2
    });
  };

  return (
    <div 
      className="p-8 min-h-[500px] rounded-3xl bg-slate-900 flex items-center justify-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
    >
      <motion.div 
        className="w-full max-w-xl bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-12 rounded-3xl text-center relative z-10"
        animate={{
          x: position.x * 0.05,
          y: position.y * 0.05,
          rotateX: position.y * -0.05,
          rotateY: position.x * 0.05
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      >
        <div className="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)]">
          <MousePointer2 className="text-white w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Interactive Protection</h2>
        <p className="text-slate-400">
          Our warranty is as responsive as this card. No matter what angle life comes at you, we've got you covered.
        </p>
      </motion.div>
      
      {/* Interactive background glow */}
      <motion.div 
        className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"
        animate={{
          x: position.x * 0.2,
          y: position.y * 0.2
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
    </div>
  );
}
`
  },
  {
    name: 'WarrantyInformation15',
    content: `import React from 'react';
import { motion } from 'framer-motion';

export default function WarrantyInformation15({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-emerald-950 flex flex-col items-center justify-center overflow-hidden relative">
      {/* Decorative noise/grain background */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="relative z-10 max-w-lg text-center">
        <motion.div 
          className="w-24 h-24 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center mb-8 relative"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
        >
          <motion.div 
            className="absolute inset-0 border-2 border-emerald-400 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-emerald-400 text-3xl font-bold">10</span>
        </motion.div>
        
        <motion.h2 
          className="text-4xl font-bold text-emerald-50 mb-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Decade Guarantee
        </motion.h2>
        
        <motion.p 
          className="text-emerald-200/60"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A full 10-year warranty backing up our commitment to sustainable and durable manufacturing.
        </motion.p>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'WarrantyInformation16',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

export default function WarrantyInformation16({ data }: { data: any }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-slate-100 flex items-center justify-center">
      <div className="w-full max-w-sm">
        <AnimatePresence>
          {!isDeleted && (
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden"
              exit={{ x: -100, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {/* Swipe to delete simulation overlay */}
              <motion.div 
                className="absolute inset-y-0 right-0 bg-red-500 w-full flex items-center justify-end px-6 z-0 origin-right"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isDeleting ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-bold">Cancel Claim</span>
              </motion.div>

              <div className="relative z-10 bg-white">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-slate-800">Claim #99284</h3>
                    <p className="text-sm text-slate-500">In Progress</p>
                  </div>
                  <button 
                    onClick={() => setIsDeleting(true)}
                    className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
                
                {isDeleting && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-6"
                  >
                    <p className="font-medium text-slate-800 mb-4">Are you sure?</p>
                    <div className="flex gap-2">
                      <button onClick={() => setIsDeleting(false)} className="px-4 py-2 rounded-lg bg-slate-100 text-slate-600 text-sm font-medium">No, Keep</button>
                      <button onClick={() => setIsDeleted(true)} className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-medium">Yes, Cancel</button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {isDeleted && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 text-green-700 p-6 rounded-2xl flex flex-col items-center text-center border border-green-100"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check size={24} />
            </div>
            <h3 className="font-bold mb-2">Claim Cancelled</h3>
            <p className="text-sm opacity-80">You can start a new claim at any time from your dashboard.</p>
            <button onClick={() => { setIsDeleted(false); setIsDeleting(false); }} className="mt-4 text-sm font-bold underline">Undo</button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
`
  },
  {
    name: 'WarrantyInformation17',
    content: `import React from 'react';
import { motion } from 'framer-motion';

export default function WarrantyInformation17({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-900 flex items-center justify-center perspective-[1200px]">
      <motion.div 
        className="w-full max-w-sm"
        initial={{ rotateY: -30, rotateX: 10, opacity: 0 }}
        whileInView={{ rotateY: 0, rotateX: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        viewport={{ margin: "-20%" }}
      >
        <motion.div 
          className="bg-gradient-to-br from-neutral-800 to-neutral-950 p-1 rounded-2xl shadow-2xl"
          whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="bg-neutral-900 rounded-xl p-8 border border-neutral-800" style={{ transform: "translateZ(30px)" }}>
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-6 shadow-inner">
              <span className="text-xl text-neutral-400 font-serif italic">W</span>
            </div>
            
            <h3 className="text-2xl font-semibold text-white mb-2" style={{ transform: "translateZ(40px)" }}>
              Premium Coverage
            </h3>
            
            <p className="text-neutral-500 mb-6 text-sm leading-relaxed">
              Experience our highest tier of protection, featuring next-day replacement and zero deductibles on all claims.
            </p>
            
            <motion.button 
              className="w-full py-3 bg-white text-neutral-900 font-bold rounded-lg"
              whileTap={{ scale: 0.95 }}
              style={{ transform: "translateZ(50px)" }}
            >
              Upgrade Now
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
`
  },
  {
    name: 'WarrantyInformation18',
    content: `import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function WarrantyInformation18({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-indigo-900 flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Background ripples */}
      <motion.div 
        className="absolute w-96 h-96 border border-indigo-500/20 rounded-full"
        animate={{ scale: [1, 2], opacity: [1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute w-96 h-96 border border-indigo-400/20 rounded-full"
        animate={{ scale: [1, 2], opacity: [1, 0] }}
        transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div 
          className="w-20 h-20 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(99,102,241,0.5)] cursor-pointer"
          whileHover={{ scale: 1.1, borderRadius: "50%" }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <Download className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>
        
        <h2 className="text-3xl font-bold mb-2 text-center">Download PDF</h2>
        <p className="text-indigo-300 text-center max-w-sm">
          Get the complete 24-page warranty guide, including international clauses and legal terms.
        </p>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'WarrantyInformation19',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function WarrantyInformation19({ data }: { data: any }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-zinc-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200 max-w-md w-full">
        <h3 className="text-xl font-bold text-zinc-800 mb-6">Support PIN</h3>
        <p className="text-zinc-500 mb-6 text-sm">
          Provide this temporary PIN when calling our warranty support line for faster service.
        </p>
        
        <div className="relative">
          <motion.div 
            className="bg-zinc-100 font-mono text-4xl text-center font-bold tracking-widest py-6 rounded-2xl text-zinc-800 cursor-pointer border-2 border-transparent hover:border-zinc-200 transition-colors"
            onClick={handleCopy}
            whileTap={{ scale: 0.98 }}
          >
            4928
          </motion.div>
          
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 text-white px-4 py-2 rounded-lg font-medium text-sm pointer-events-none"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={isCopied ? { opacity: 1, y: -40, scale: 1 } : { opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Copied!
          </motion.div>
        </div>
        
        <div className="mt-6 w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-zinc-300"
            animate={{ width: ["100%", "0%"] }}
            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          />
        </div>
        <p className="text-xs text-center text-zinc-400 mt-2">Expires in 60 seconds</p>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'WarrantyInformation20',
    content: `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function WarrantyInformation20({ data }: { data: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Calculate SVGs draw path length based on scroll
  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <div ref={ref} className="p-8 min-h-[600px] rounded-3xl bg-amber-50 flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div style={{ opacity }} className="relative z-10 text-center max-w-lg mb-16">
        <h2 className="text-4xl font-serif text-amber-950 mb-4">Certified Protection</h2>
        <p className="text-amber-800/70">
          Scroll down to seal your guarantee. Our promise is etched in stone (or in this case, SVG paths).
        </p>
      </motion.div>
      
      <div className="w-48 h-48 relative">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
          <motion.circle
            cx="50" cy="50" r="45"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="4"
            style={{ pathLength }}
          />
          <motion.path
            d="M30 50 L45 65 L70 35"
            fill="none"
            stroke="#b45309"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ pathLength }}
          />
        </svg>
      </div>
    </div>
  );
}
`
  }
];

components.forEach(comp => {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'sections', 'product', '11-warranty-information', 'warranty-information-' + comp.name.replace('WarrantyInformation', ''), comp.name + '.tsx');
  
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, comp.content, 'utf-8');
  console.log('Updated ' + comp.name);
});
