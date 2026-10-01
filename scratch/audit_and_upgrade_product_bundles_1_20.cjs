const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/16-product-bundles');

function writeComponent(num, code) {
  const folder = `product-bundles-${num}`;
  const filePath = path.join(baseDir, folder, `ProductBundles${num}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// ----------------------------------------------------
// 10. ProductBundles10: 360-Degree Interactive Tech Suite
// ----------------------------------------------------
const code10 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCw, ShoppingBag, Star, Sparkles, Check } from 'lucide-react';

export default function ProductBundles10({ data }: { data?: any }) {
  const [rotation, setRotation] = useState(0);
  const [selected, setSelected] = useState([1]);

  const images = [
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1512790182412-b19e6d61b39a?w=800&auto=format&fit=crop&q=80"
  ];

  const main = { name: "Cinematic 8K Camera Body", price: 1899 };
  const addOns = [
    { id: 1, name: "50mm Prime Portrait Lens", price: 349, image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=500&auto=format&fit=crop&q=80" },
    { id: 2, name: "Heavy Duty Carbon Tripod", price: 189, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80" }
  ];

  const total = main.price + addOns.filter(a => selected.includes(a.id)).reduce((acc, c) => acc + c.price, 0);

  return (
    <div className="p-6 md:p-10 min-h-[680px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          10. 360° PERSPECTIVE ROTATION SUITE
        </span>
        <h2 className="text-3xl font-black text-white">Interactive Camera Ecosystem</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-4xl z-10 my-4 items-center">
        {/* 360 Viewer */}
        <div className="bg-slate-900 border border-cyan-500/30 rounded-3xl p-5 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative">
          <div className="flex justify-between items-center mb-2 text-xs font-bold text-cyan-400">
            <span className="flex items-center gap-1"><RotateCw size={14} className="animate-spin" /> 360° Camera View</span>
            <span>\${main.price}</span>
          </div>

          <div className="w-full h-56 rounded-2xl overflow-hidden bg-slate-950 mb-3 relative">
            <img src={images[rotation]} alt="Camera 360" className="w-full h-full object-cover" />
          </div>

          <div className="bg-slate-950 p-2 rounded-xl border border-white/5">
            <input 
              type="range" 
              min="0" 
              max="2" 
              value={rotation} 
              onChange={(e) => setRotation(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
          </div>
        </div>

        {/* Addon Selector */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-300">Select Accessories to Bundle:</h3>
          {addOns.map(item => {
            const isSel = selected.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => setSelected(prev => prev.includes(item.id) ? prev.filter(x => x !== item.id) : [...prev, item.id])}
                className={\`p-3.5 rounded-2xl cursor-pointer border flex items-center justify-between transition-all \${
                  isSel ? 'bg-slate-900 border-cyan-500 shadow-md' : 'bg-slate-900/40 border-white/10 opacity-70'
                }\`}
              >
                <div className="flex items-center gap-3">
                  <div className={\`w-6 h-6 rounded-full flex items-center justify-center \${isSel ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800'}\`}>
                    <Check size={14} className="stroke-[3]" />
                  </div>
                  <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded-xl" />
                  <span className="text-xs font-bold">{item.name}</span>
                </div>
                <span className="text-sm font-black text-cyan-400">+\${item.price}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full max-w-4xl bg-slate-900 border border-white/10 p-4 rounded-3xl flex justify-between items-center z-10">
        <div>
          <span className="text-xs text-slate-400 block">Total 360° Bundle</span>
          <span className="text-2xl font-black text-cyan-400">\${total}</span>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2">
          <ShoppingBag size={16} /> Reserve 360 Bundle
        </button>
      </div>

    </div>
  );
}
`;
writeComponent(10, code10);

// ----------------------------------------------------
// 11. ProductBundles11: Cursor Spotlight Reactive Bundle
// ----------------------------------------------------
const code11 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingBag, Volume2 } from 'lucide-react';

export default function ProductBundles11({ data }: { data?: any }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [boosted, setBoosted] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none"
    >
      {/* Spotlight Glow */}
      <div 
        className="absolute w-72 h-72 bg-indigo-500/15 blur-[80px] rounded-full pointer-events-none transition-transform duration-75"
        style={{ transform: \`translate(\${mousePos.x - 144}px, \${mousePos.y - 144}px)\` }}
      />

      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          11. CURSOR SPOTLIGHT REACTIVE BUNDLE
        </span>
        <h2 className="text-3xl font-black text-white">Quantum Surround Audio Bundle</h2>
      </div>

      <div className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 max-w-md w-full z-10 shadow-2xl">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-indigo-400 font-bold">Spatial Audio Kit</span>
          <button 
            onClick={() => setBoosted(!boosted)}
            className={\`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1 transition-all \${
              boosted ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
            }\`}
          >
            <Volume2 size={14} /> {boosted ? 'Bass Boosted' : 'Flat EQ'}
          </button>
        </div>

        <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80" alt="Headset" className="w-full h-52 object-cover rounded-2xl mb-4" />

        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-extrabold text-lg">Quantum 7.1 Headset + Stand</h3>
            <span className="text-2xl font-black text-indigo-400">$228</span>
          </div>

          <button className="px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs rounded-xl flex items-center gap-2">
            <ShoppingBag size={16} /> Add to Cart
          </button>
        </div>
      </div>

      <div className="text-xs text-slate-500 z-10">Hover mouse across canvas to activate spotlight effect.</div>

    </div>
  );
}
`;
writeComponent(11, code11);

// ----------------------------------------------------
// 12. ProductBundles12: Haptic Error Action Cam Bundle
// ----------------------------------------------------
const code12 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Check, AlertCircle } from 'lucide-react';

export default function ProductBundles12({ data }: { data?: any }) {
  const [selected, setSelected] = useState<number[]>([1]);
  const [shake, setShake] = useState(false);

  const addons = [
    { id: 1, name: "Dual Extended Battery Pack", price: 39 },
    { id: 2, name: "Floating Water Mount", price: 25 },
    { id: 3, name: "64GB Extreme SD Card", price: 19 }
  ];

  const handleCheckout = () => {
    if (selected.length === 0) {
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  const total = 299 + addons.filter(a => selected.includes(a.id)).reduce((acc, c) => acc + c.price, 0);

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          12. HAPTIC ERROR ACTION CAM BUNDLE
        </span>
        <h2 className="text-3xl font-black text-white">Action Cam Extreme Package</h2>
      </div>

      <motion.div 
        animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-6 z-10 shadow-2xl"
      >
        <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80" alt="Cam" className="w-full h-48 object-cover rounded-2xl mb-4" />

        <div className="space-y-2 mb-4">
          <span className="text-xs text-slate-400 font-bold block">Select Kit Accessories:</span>
          {addons.map(a => {
            const isSel = selected.includes(a.id);
            return (
              <div 
                key={a.id}
                onClick={() => setSelected(prev => prev.includes(a.id) ? prev.filter(x => x !== a.id) : [...prev, a.id])}
                className={\`p-2.5 rounded-xl cursor-pointer border flex justify-between text-xs font-bold transition-all \${
                  isSel ? 'bg-blue-950 border-blue-500 text-white' : 'bg-slate-950 border-white/5 text-slate-400'
                }\`}
              >
                <div className="flex items-center gap-2">
                  <div className={\`w-4 h-4 rounded flex items-center justify-center \${isSel ? 'bg-blue-500 text-slate-950' : 'bg-slate-800'}\`}>
                    {isSel && <Check size={12} className="stroke-[3]" />}
                  </div>
                  <span>{a.name}</span>
                </div>
                <span className="text-emerald-400">+\${a.price}</span>
              </div>
            );
          })}
        </div>

        {shake && (
          <div className="mb-3 text-xs text-rose-400 flex items-center gap-1 font-bold">
            <AlertCircle size={14} /> Select at least 1 accessory to proceed!
          </div>
        )}

        <div className="flex justify-between items-center pt-3 border-t border-white/10">
          <span className="text-2xl font-black text-blue-400">\${total}</span>
          <button onClick={handleCheckout} className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs rounded-xl flex items-center gap-2">
            <ShoppingBag size={16} /> Checkout Action Bundle
          </button>
        </div>
      </motion.div>

    </div>
  );
}
`;
writeComponent(12, code12);

// ----------------------------------------------------
// 13. ProductBundles13: 3D Parallax Tilt Workstation Bundle
// ----------------------------------------------------
const code13 = `import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Sparkles, ShoppingBag } from 'lucide-react';

export default function ProductBundles13({ data }: { data?: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none perspective-1000">
      
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          13. 3D PARALLAX TILT WORKSTATION BUNDLE
        </span>
        <h2 className="text-3xl font-black text-white">Ergonomic Setup Suite</h2>
      </div>

      <motion.div 
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="w-full max-w-md bg-slate-900 border border-amber-500/40 rounded-3xl p-6 z-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] cursor-pointer"
      >
        <img src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&auto=format&fit=crop&q=80" alt="Desk" className="w-full h-52 object-cover rounded-2xl mb-4" />

        <h3 className="font-extrabold text-xl text-white">Walnut Desk + Dual Arm + Leather Mat</h3>
        <p className="text-xs text-slate-400 mt-1 mb-4">Complete 3-piece ergonomic setup with free express shipping.</p>

        <div className="flex justify-between items-center pt-3 border-t border-white/10">
          <div>
            <span className="text-2xl font-black text-amber-400">$837</span>
            <span className="text-xs text-slate-500 line-through block">$1,037</span>
          </div>
          <button className="px-5 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2">
            <ShoppingBag size={16} /> Buy Suite
          </button>
        </div>
      </motion.div>

    </div>
  );
}
`;
writeComponent(13, code13);

// ----------------------------------------------------
// 14. ProductBundles14: Shared-Element Quick View Modal Bundle
// ----------------------------------------------------
const code14 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, ShoppingBag } from 'lucide-react';

export default function ProductBundles14({ data }: { data?: any }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          14. SHARED-ELEMENT QUICK VIEW BUNDLE
        </span>
        <h2 className="text-3xl font-black text-white">Designer Wool Apparel Kit</h2>
      </div>

      <div className="w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-6 z-10 text-center shadow-2xl">
        <img src="https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80" alt="Jacket" className="w-full h-52 object-cover rounded-2xl mb-4" />
        <h3 className="font-extrabold text-xl text-white">Trench Coat & Leather Boots Set</h3>
        <p className="text-xs text-slate-400 mt-1 mb-4">Italian Merino Wool + Handcrafted Calfskin Leather.</p>
        <button onClick={() => setOpen(true)} className="px-6 py-3 bg-white text-slate-950 font-black text-xs rounded-xl flex items-center justify-center gap-2 mx-auto">
          <Eye size={16} /> Quick View Full Bundle
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl z-50 p-6 flex items-center justify-center">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="w-full max-w-md bg-slate-900 border border-white/15 rounded-3xl p-6 relative">
              <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white"><X size={18} /></button>
              <img src="https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80" alt="Jacket" className="w-full h-48 object-cover rounded-2xl mb-4" />
              <h3 className="text-2xl font-black text-white">Full Designer Bundle Set</h3>
              <p className="text-xs text-slate-300 mt-2">Includes Trench Coat + Leather Boots + Silk Scarf (Save $120).</p>
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
                <span className="text-3xl font-black text-white">$670</span>
                <button onClick={() => setOpen(false)} className="px-6 py-3.5 bg-amber-500 text-slate-950 font-black text-xs rounded-xl">
                  <ShoppingBag size={18} /> Buy Full Set
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
`;
writeComponent(14, code14);

// ----------------------------------------------------
// 15. ProductBundles15: Pulsating Sound Aura Music Suite
// ----------------------------------------------------
const code15 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, ShoppingBag, Sparkles } from 'lucide-react';

export default function ProductBundles15({ data }: { data?: any }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute w-[500px] h-[350px] bg-rose-600/20 blur-[170px] rounded-full pointer-events-none"
      />

      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          15. PULSATING SOUND AURA MUSIC SUITE
        </span>
        <h2 className="text-3xl font-black text-white">Music Production Ecosystem</h2>
      </div>

      <div className="w-full max-w-md bg-slate-900 border border-rose-500/30 rounded-3xl p-6 z-10 shadow-2xl">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-rose-400 font-bold">Studio Setup</span>
          <button 
            onClick={() => setPlaying(!playing)}
            className={\`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1 transition-all \${
              playing ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-400'
            }\`}
          >
            <Volume2 size={14} className={playing ? 'animate-bounce' : ''} /> {playing ? 'Playing Sample' : 'Test Sound'}
          </button>
        </div>

        <img src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80" alt="Monitors" className="w-full h-52 object-cover rounded-2xl mb-4" />

        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-extrabold text-lg">Monitors + Interface + Pads</h3>
            <span className="text-2xl font-black text-rose-400">$649</span>
          </div>
          <button className="px-5 py-3 bg-rose-500 hover:bg-rose-400 text-white font-extrabold text-xs rounded-xl flex items-center gap-2">
            <ShoppingBag size={16} /> Buy Suite
          </button>
        </div>
      </div>

    </div>
  );
}
`;
writeComponent(15, code15);

// ----------------------------------------------------
// 16. ProductBundles16: Multi-Step Custom Bundle Builder Wizard
// ----------------------------------------------------
const code16 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShoppingBag, ArrowRight } from 'lucide-react';

export default function ProductBundles16({ data }: { data?: any }) {
  const [step, setStep] = useState(1);

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          16. MULTI-STEP CUSTOM BUNDLE WIZARD
        </span>
        <h2 className="text-3xl font-black text-white">Custom Device Builder</h2>
      </div>

      <div className="w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-6 z-10 shadow-2xl">
        <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/10 text-xs font-bold text-slate-400">
          <span>Step {step} of 3</span>
          <div className="flex gap-1.5">
            <span className={\`w-3 h-3 rounded-full \${step >= 1 ? 'bg-blue-500' : 'bg-slate-800'}\`} />
            <span className={\`w-3 h-3 rounded-full \${step >= 2 ? 'bg-blue-500' : 'bg-slate-800'}\`} />
            <span className={\`w-3 h-3 rounded-full \${step >= 3 ? 'bg-blue-500' : 'bg-slate-800'}\`} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <h3 className="font-extrabold text-lg text-white mb-2">Select Core Unit</h3>
              <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80" alt="Watch" className="w-full h-44 object-cover rounded-2xl mb-4" />
              <button onClick={() => setStep(2)} className="w-full py-3 bg-blue-600 text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-2">
                Next: Add Accessories <ArrowRight size={14} />
              </button>
            </motion.div>
          )}
          {step === 2 && (
            <motion.div key="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <h3 className="font-extrabold text-lg text-white mb-2">Choose Strap & Stand</h3>
              <p className="text-xs text-slate-400 mb-4">Includes Leather Strap + Wireless Charging Dock.</p>
              <button onClick={() => setStep(3)} className="w-full py-3 bg-blue-600 text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-2">
                Next: Confirm Bundle <ArrowRight size={14} />
              </button>
            </motion.div>
          )}
          {step === 3 && (
            <motion.div key="3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <h3 className="font-extrabold text-lg text-white mb-2">Bundle Confirmed</h3>
              <span className="text-2xl font-black text-blue-400 block mb-4">$338 Total</span>
              <button onClick={() => setStep(1)} className="w-full py-3 bg-emerald-500 text-slate-950 font-black text-xs rounded-xl flex items-center justify-center gap-2">
                <Check size={16} /> Complete Order
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
`;
writeComponent(16, code16);

// ----------------------------------------------------
// 17. ProductBundles17: Dynamic Light/Dark Mode Bundle
// ----------------------------------------------------
const code17 = `import React, { useState } from 'react';
import { Sun, Moon, ShoppingBag } from 'lucide-react';

export default function ProductBundles17({ data }: { data?: any }) {
  const [dark, setDark] = useState(true);

  return (
    <div className={\`p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] flex flex-col items-center justify-between relative overflow-hidden font-sans border transition-colors duration-500 select-none \${
      dark ? 'bg-slate-950 border-white/10 text-white' : 'bg-slate-100 border-slate-200 text-slate-900'
    }\`}>
      
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-500 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          17. DYNAMIC LIGHT & DARK MODE BUNDLE
        </span>
        <h2 className="text-3xl font-black">Ecosystem Mode Switcher</h2>
      </div>

      <div className={\`w-full max-w-md rounded-3xl p-6 z-10 border transition-colors duration-500 shadow-2xl \${
        dark ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'
      }\`}>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold">Tablet & Stylus Bundle</span>
          <button onClick={() => setDark(!dark)} className="p-2 rounded-full bg-slate-800 text-amber-400">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80" alt="Tablet" className="w-full h-48 object-cover rounded-2xl mb-4" />

        <div className="flex justify-between items-center">
          <span className="text-2xl font-black">$749</span>
          <button className={\`px-5 py-3 font-extrabold text-xs rounded-xl flex items-center gap-2 \${
            dark ? 'bg-white text-slate-950' : 'bg-slate-950 text-white'
          }\`}>
            <ShoppingBag size={16} /> Add to Cart
          </button>
        </div>
      </div>

    </div>
  );
}
`;
writeComponent(17, code17);

// ----------------------------------------------------
// 18. ProductBundles18: Skeleton Shimmer Data Loader Bundle
// ----------------------------------------------------
const code18 = `import React, { useState } from 'react';
import { RefreshCw, ShoppingBag } from 'lucide-react';

export default function ProductBundles18({ data }: { data?: any }) {
  const [loading, setLoading] = useState(false);

  const reload = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          18. SKELETON SHIMMER DATA LOADER BUNDLE
        </span>
        <h2 className="text-3xl font-black text-white">Live Data Fetch Demo</h2>
      </div>

      <div className="w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-6 z-10 shadow-2xl">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-slate-400 font-bold">Ring Light Bundle</span>
          <button onClick={reload} className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white">
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>

        {loading ? (
          <div className="animate-pulse space-y-4">
            <div className="w-full h-48 bg-slate-800 rounded-2xl" />
            <div className="h-6 bg-slate-800 rounded-lg w-3/4" />
            <div className="h-10 bg-slate-800 rounded-xl w-full" />
          </div>
        ) : (
          <div>
            <img src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&auto=format&fit=crop&q=80" alt="Ring" className="w-full h-48 object-cover rounded-2xl mb-4" />
            <div className="flex justify-between items-center">
              <span className="text-2xl font-black text-white">$138</span>
              <button className="px-5 py-3 bg-blue-600 text-white font-extrabold text-xs rounded-xl flex items-center gap-2">
                <ShoppingBag size={16} /> Buy Bundle
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
`;
writeComponent(18, code18);

// ----------------------------------------------------
// 19. ProductBundles19: Organic SVG Blob Eco Workstation
// ----------------------------------------------------
const code19 = `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingBag } from 'lucide-react';

export default function ProductBundles19({ data }: { data?: any }) {
  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="absolute w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          19. ORGANIC ROTATING SVG BLOB ECO WORKSTATION
        </span>
        <h2 className="text-3xl font-black text-white">Eco Bamboo Desktop Bundle</h2>
      </div>

      <div className="w-full max-w-md bg-slate-900/90 border border-emerald-500/30 rounded-3xl p-6 z-10 backdrop-blur-xl shadow-2xl">
        <img src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80" alt="Bamboo Tripod" className="w-full h-48 object-cover rounded-2xl mb-4" />
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-extrabold text-lg">Eco Tripod + Cable Kit</h3>
            <span className="text-2xl font-black text-emerald-400">$88</span>
          </div>
          <button className="px-5 py-3 bg-emerald-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2">
            <ShoppingBag size={16} /> Buy Eco Pack
          </button>
        </div>
      </div>

    </div>
  );
}
`;
writeComponent(19, code19);

// ----------------------------------------------------
// 20. ProductBundles20: Ultimate All-in-One Enterprise Suite
// ----------------------------------------------------
const code20 = `import React from 'react';
import { ShoppingBag, Star, Sparkles, ShieldCheck } from 'lucide-react';

export default function ProductBundles20({ data }: { data?: any }) {
  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          20. ULTIMATE ALL-IN-ONE ENTERPRISE SUITE
        </span>
        <h2 className="text-3xl font-black text-white">Full Workstation Suite</h2>
      </div>

      <div className="w-full max-w-md bg-slate-900 border border-amber-500/40 rounded-3xl p-6 z-10 shadow-[0_0_50px_rgba(245,158,11,0.15)]">
        <img src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&auto=format&fit=crop&q=80" alt="Desk" className="w-full h-52 object-cover rounded-2xl mb-4" />
        
        <div className="flex items-center gap-1 text-xs text-amber-400 font-bold mb-1">
          <Star size={14} className="fill-amber-400" /> 4.9 Verified Setup (320+ reviews)
        </div>

        <h3 className="font-black text-xl text-white">Ergonomic Walnut Desk + 3 Add-ons</h3>
        <p className="text-xs text-slate-400 mt-1 mb-4">Includes Desk + Monitor Arm + Leather Mat + Cable Kit (Save $200).</p>

        <div className="flex justify-between items-center pt-3 border-t border-white/10">
          <div>
            <span className="text-3xl font-black text-amber-400">$876</span>
            <span className="text-xs text-slate-500 line-through block">$1,076</span>
          </div>

          <button className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2">
            <ShoppingBag size={18} /> Buy Complete Suite
          </button>
        </div>
      </div>

    </div>
  );
}
`;
writeComponent(20, code20);

console.log('All 20 ProductBundles components written cleanly!');
