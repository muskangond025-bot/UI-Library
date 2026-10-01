const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'cart', '09-empty-cart-section');

const defaultSettings = {
  title: "Your Cart Is Empty",
  subtitle: "Explore our latest curated collections to find handcrafted items you'll love",
  primaryCta: {
    label: "Start Shopping",
    href: "/shop"
  },
  categories: [
    { name: "New Arrivals", href: "/new" },
    { name: "Best Sellers", href: "/best-sellers" },
    { name: "Trending Apparel", href: "/apparel" },
    { name: "Accessories", href: "/accessories" }
  ]
};

const variants = [
  {
    id: 1,
    title: "Empty Cart 01 — Continuous SVG Dash Tracing",
    desc: "A custom vector cart with continuously tracing neon dash outlines, spinning wireframe wheels, and glowing path trails.",
    motion: "Continuous infinite SVG stroke-dashoffset loop & spinning wheels",
    code: `import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection1({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-slate-950 text-white font-sans overflow-hidden border-y border-slate-800">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        {/* AWWWARDS-Level Animated Tracing SVG Cart */}
        <div className="w-36 h-36 mb-6 relative flex items-center justify-center">
          <svg viewBox="0 0 120 120" fill="none" className="w-full h-full text-indigo-400">
            {/* Ambient Pulsing Glow Background Ring */}
            <motion.circle 
              cx="60" cy="60" r="50" 
              stroke="rgba(99, 102, 241, 0.2)" 
              strokeWidth="2" 
              strokeDasharray="6 6"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            {/* Tracing Cart Basket Outline */}
            <motion.path
              d="M20 25 H35 L45 75 H95 L105 35 H38"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="12 6"
              animate={{ strokeDashoffset: [-36, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            {/* Animated Wireframe Wheels */}
            <g>
              <motion.circle cx="50" cy="90" r="8" stroke="#38bdf8" strokeWidth="3" fill="#0f172a"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <line x1="50" y1="82" x2="50" y2="98" stroke="#38bdf8" strokeWidth="2" />
              <line x1="42" y1="90" x2="58" y2="90" stroke="#38bdf8" strokeWidth="2" />
            </g>
            <g>
              <motion.circle cx="90" cy="90" r="8" stroke="#38bdf8" strokeWidth="3" fill="#0f172a"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <line x1="90" y1="82" x2="90" y2="98" stroke="#38bdf8" strokeWidth="2" />
              <line x1="82" y1="90" x2="98" y2="90" stroke="#38bdf8" strokeWidth="2" />
            </g>
            {/* Floating Sparkle inside empty cart */}
            <motion.path 
              d="M70 45 L73 52 L80 55 L73 58 L70 65 L67 58 L60 55 L67 52 Z" 
              fill="#f59e0b"
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-2">01 / CONTINUOUS SVG DASH TRACING</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">{settings.title}</h2>
        <p className="text-sm text-slate-400 mb-8 max-w-sm">{settings.subtitle}</p>
        
        <button className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all">
          <span>{settings.primaryCta?.label || 'Start Shopping'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection1;`
  },
  {
    id: 2,
    title: "Empty Cart 02 — 3D Levitating SVG Bag & Orbit Rings",
    desc: "A 3D perspective levitating shopping bag wrapped in concentric SVG orbit rings with floating particle nodes.",
    motion: "Perspective 3D levitation + concentric rotating SVG orbit rings",
    code: `import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection2({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-black text-white font-sans border-y border-neutral-900 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-4">02 / 3D LEVITATION & SVG ORBITS</span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase mb-4">
            YOUR CART<br />IS FLOATING EMPTY.
          </h2>
          <p className="text-sm text-neutral-400 mb-8">{settings.subtitle}</p>
          <button className="px-8 py-4 bg-white hover:bg-neutral-200 text-black font-extrabold rounded-2xl text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-2xl">
            <span>{settings.primaryCta?.label || 'Explore Store'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3D Levitating Glass Container with SVG Orbit */}
        <div className="perspective-1000 w-80 h-80 relative flex items-center justify-center">
          <motion.div 
            animate={{ 
              rotateX: [10, -10, 10],
              rotateY: [-12, 12, -12],
              y: [-12, 12, -12]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-emerald-950/70 border border-emerald-500/30 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-2xl backdrop-blur-2xl relative"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* SVG Orbit Ring Background */}
            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-emerald-400/40 pointer-events-none">
              <motion.circle 
                cx="100" cy="100" r="75" 
                fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.circle 
                cx="100" cy="100" r="55" 
                fill="none" stroke="rgba(52, 211, 153, 0.6)" strokeWidth="1.5" strokeDasharray="4 4"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            {/* Central Animated Vector Bag */}
            <div style={{ transform: 'translateZ(45px)' }}>
              <svg viewBox="0 0 80 80" className="w-20 h-20 text-emerald-400">
                <path d="M20 25 H60 L55 70 H25 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                <motion.path 
                  d="M30 25 C30 10, 50 10, 50 25" 
                  fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round"
                  animate={{ d: ["M30 25 C30 10, 50 10, 50 25", "M30 25 C30 5, 50 5, 50 25", "M30 25 C30 10, 50 10, 50 25"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
            </div>

            <span className="text-xs font-mono font-bold text-emerald-300 mt-4" style={{ transform: 'translateZ(25px)' }}>
              0 ITEMS • ORBITAL STATE
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default EmptyCartSection2;`
  },
  {
    id: 3,
    title: "Empty Cart 03 — Morphing SVG Wave & Elastic Handles",
    desc: "An SVG shopping bag with animated elastic handles and a fluid bezier liquid wave baseline.",
    motion: "SVG fluid bezier liquid wave animation & elastic handle morphing",
    code: `import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection3({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12">
        <div className="md:col-span-7">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">03 / FLUID BEZIER SVG MORPH</span>
          <h2 className="text-3xl font-extrabold text-white mb-3">{settings.title}</h2>
          <p className="text-sm text-slate-400 mb-8">{settings.subtitle}</p>
          <button className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2">
            <span>{settings.primaryCta?.label || 'Explore Store'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Fluid Bezier Wave Animated Vector Bag */}
        <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-950 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 100 100" className="w-36 h-36 text-cyan-400">
            {/* Liquid Wave Base inside SVG Bag */}
            <clipPath id="bagClip">
              <path d="M25 35 H75 L70 85 H30 Z" />
            </clipPath>
            
            <path d="M25 35 H75 L70 85 H30 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
            
            <g clipPath="url(#bagClip)">
              <motion.path 
                d="M 20 65 Q 40 55, 60 65 T 100 65 L 100 90 L 20 90 Z" 
                fill="rgba(34, 211, 238, 0.25)"
                animate={{ d: [
                  "M 20 65 Q 40 55, 60 65 T 100 65 L 100 90 L 20 90 Z",
                  "M 20 65 Q 40 75, 60 65 T 100 65 L 100 90 L 20 90 Z",
                  "M 20 65 Q 40 55, 60 65 T 100 65 L 100 90 L 20 90 Z"
                ] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </g>

            {/* Elastic Handles */}
            <motion.path 
              d="M38 35 C38 18, 62 18, 62 35"
              fill="none" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round"
              animate={{ d: [
                "M38 35 C38 18, 62 18, 62 35",
                "M38 35 C38 12, 62 12, 62 35",
                "M38 35 C38 18, 62 18, 62 35"
              ] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
          <span className="text-[10px] font-mono text-cyan-300 mt-2">FLUID BEZIER WAVE STATE</span>
        </div>
      </div>
    </section>
  );
}
export default EmptyCartSection3;`
  },
  {
    id: 4,
    title: "Empty Cart 04 — Interactive 3D Depth Card Deck",
    desc: "Layered glassmorphic depth cards with interactive mouse tilt and floating SVG item placeholders.",
    motion: "Interactive 3D depth card tilt + Z-layer offset movement",
    code: `import React, { useState } from 'react';
import { ArrowRight, Layers } from 'lucide-react';

export function EmptyCartSection4({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 12;
    const y = (e.clientY - rect.top - rect.height / 2) / 12;
    setMousePos({ x, y });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="w-full py-20 px-6 lg:px-12 bg-neutral-950 text-white font-sans overflow-hidden"
    >
      <div className="max-w-lg mx-auto text-center flex flex-col items-center">
        {/* Interactive 3D Layered Card Stack */}
        <div className="relative w-72 h-60 mb-8 flex justify-center items-center">
          <div 
            className="absolute inset-0 bg-amber-500/10 border border-amber-500/30 rounded-3xl backdrop-blur-md transition-transform duration-150 ease-out"
            style={{ transform: \`translate3d(\${mousePos.x * -1.2}px, \${mousePos.y * -1.2}px, 0px) rotate(-8deg)\` }}
          />
          <div 
            className="absolute inset-0 bg-neutral-900/90 border border-neutral-700 rounded-3xl backdrop-blur-xl transition-transform duration-150 ease-out p-6 flex flex-col justify-center items-center shadow-2xl"
            style={{ transform: \`translate3d(\${mousePos.x}px, \${mousePos.y}px, 0px) rotate(4deg)\` }}
          >
            {/* SVG Animated Card Icon */}
            <svg viewBox="0 0 60 60" className="w-14 h-14 text-amber-400 mb-2">
              <rect x="10" y="15" width="40" height="30" rx="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <line x1="10" y1="25" x2="50" y2="25" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="20" cy="35" r="2" fill="currentColor" />
            </svg>
            <span className="text-xs font-mono font-bold text-amber-300 uppercase">04 / 3D CARD DEPTH</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">{settings.title}</h2>
        <p className="text-xs text-neutral-400 mb-6">{settings.subtitle}</p>

        <button className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-400/20">
          <span>{settings.primaryCta?.label || 'Explore Store'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection4;`
  },
  {
    id: 5,
    title: "Empty Cart 05 — Orbiting SVG Constellation",
    desc: "A central vector cart surrounded by 3 concentric SVG planetary orbit rings and floating symbols.",
    motion: "Multi-ring concentric 360-degree SVG orbit animation",
    code: `import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection5({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-slate-950 text-white font-sans overflow-hidden">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        {/* SVG Multi-Ring Planetary Orbit Constellation */}
        <div className="relative w-56 h-56 mb-8 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-slate-900 border border-indigo-500/50 flex items-center justify-center shadow-2xl z-10">
            <ShoppingBag className="w-9 h-9 text-indigo-400" />
          </div>

          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-indigo-400">
            <motion.circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle cx="100" cy="100" r="65" fill="none" stroke="rgba(129, 140, 248, 0.4)" strokeWidth="1.5" strokeDasharray="4 4"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            {/* Orbiting SVG Nodes */}
            <motion.circle cx="100" cy="10" r="5" fill="#818cf8"
              animate={{ rotate: 360 }}
              style={{ originX: "100px", originY: "100px" }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <motion.rect x="155" y="95" width="10" height="10" rx="2" fill="#38bdf8"
              animate={{ rotate: -360 }}
              style={{ originX: "100px", originY: "100px" }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>

        <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">05 / MULTI-RING SVG CONSTELLATION</span>
        <h2 className="text-2xl font-extrabold mb-2">{settings.title}</h2>
        <p className="text-xs text-slate-400 mb-8">{settings.subtitle}</p>

        <button className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-indigo-600/30">
          <span>{settings.primaryCta?.label || 'Explore Store'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection5;`
  },
  {
    id: 6,
    title: "Empty Cart 06 — Progressive SVG Journey Path Draw",
    desc: "An SVG path line traces continuously across a 4-step shopping journey with active glow nodes.",
    motion: "Progressive SVG path line drawing with active glow nodes",
    code: `import React from 'react';
import { ShoppingBag, Search, PlusCircle, CreditCard, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection6({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-900 text-white font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">06 / SVG PROGRESSIVE PATH JOURNEY</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-8">{settings.title}</h2>

        {/* Animated SVG Path Line */}
        <div className="relative mb-10 px-4">
          <svg viewBox="0 0 400 20" className="w-full h-6 text-slate-800 overflow-visible mb-6">
            <line x1="20" y1="10" x2="380" y2="10" stroke="currentColor" strokeWidth="4" />
            <motion.line 
              x1="20" y1="10" x2="380" y2="10" 
              stroke="#22d3ee" strokeWidth="4" strokeDasharray="20 10"
              animate={{ strokeDashoffset: [-60, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-400 text-white shadow-lg shadow-cyan-500/10">
              <ShoppingBag className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
              <span className="text-xs font-bold block">01 / Empty Cart</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-slate-500">
              <Search className="w-5 h-5 mx-auto mb-2" />
              <span className="text-xs font-bold block">02 / Explore</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-slate-500">
              <PlusCircle className="w-5 h-5 mx-auto mb-2" />
              <span className="text-xs font-bold block">03 / Add Items</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-slate-500">
              <CreditCard className="w-5 h-5 mx-auto mb-2" />
              <span className="text-xs font-bold block">04 / Checkout</span>
            </div>
          </div>
        </div>

        <button className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-2">
          <span>Start Shopping Journey</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection6;`
  },
  {
    id: 7,
    title: "Empty Cart 07 — 3D Parallax Pointer Field",
    desc: "An offset visual artwork frame responding in real-time to pointer movement with depth translation.",
    motion: "Pointer-driven 3D depth parallax movement",
    code: `import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function EmptyCartSection7({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setOffset({
      x: (clientX - window.innerWidth / 2) / 20,
      y: (clientY - window.innerHeight / 2) / 20
    });
  };

  return (
    <section onMouseMove={handleMouseMove} className="w-full py-16 px-6 lg:px-12 bg-neutral-950 text-white font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block mb-2">07 / 3D PARALLAX POINTER FIELD</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">YOUR BAG IS CURRENTLY UNFILLED.</h2>
          <p className="text-sm text-neutral-400 mb-8">{settings.subtitle}</p>
          <button className="px-8 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-purple-600/30">
            <span>{settings.primaryCta?.label || 'Browse Store'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="md:col-span-5 relative h-80 rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 flex items-center justify-center">
          <div 
            className="w-full h-full absolute inset-0 transition-transform duration-150 ease-out"
            style={{ transform: \`translate3d(\${offset.x * 1.5}px, \${offset.y * 1.5}px, 0)\` }}
          >
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" alt="Parallax Visual" className="w-full h-full object-cover opacity-50" />
          </div>
          <div 
            className="relative z-10 px-6 py-4 bg-black/85 backdrop-blur-xl rounded-2xl border border-purple-500/40 shadow-2xl transition-transform duration-150 ease-out"
            style={{ transform: \`translate3d(\${offset.x * -1.5}px, \${offset.y * -1.5}px, 0)\` }}
          >
            <span className="text-xs font-mono font-bold text-purple-300 uppercase">0 ITEMS IN BAG • 3D PARALLAX</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default EmptyCartSection7;`
  },
  {
    id: 8,
    title: "Empty Cart 08 — Animated SVG Particle Matrix",
    desc: "An array of floating SVG geometric particle nodes pulsating softly around a full-width banner.",
    motion: "Floating SVG particle matrix ambient drift animation",
    code: `import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection8({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white font-sans relative overflow-hidden border-y border-slate-800">
      {/* SVG Particle Matrix Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 800 400" className="w-full h-full text-indigo-400/30">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={(i * 55) % 800}
              cy={(i * 35) % 400}
              r={(i % 3) + 2}
              fill="currentColor"
              animate={{
                cy: [(i * 35) % 400 - 15, (i * 35) % 400 + 15, (i * 35) % 400 - 15],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{ duration: 3 + (i % 4), repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-2">08 / ANIMATED SVG PARTICLE MATRIX</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">{settings.title}</h2>
        <p className="text-sm text-slate-400 mb-8 max-w-xl mx-auto">{settings.subtitle}</p>

        <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-xl shadow-indigo-600/30">
          <span>{settings.primaryCta?.label || 'Explore Store'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection8;`
  },
  {
    id: 9,
    title: "Empty Cart 09 — 3D Perspective Bag Opening",
    desc: "A vector shopping bag with 3D perspective rotateX opening dynamics on hover.",
    motion: "Perspective rotateX 3D bag opening transition",
    code: `import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection9({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        {/* 3D Perspective Opening Vector Bag */}
        <div 
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="perspective-1000 w-36 h-40 mb-6 cursor-pointer"
        >
          <motion.div 
            animate={{ rotateX: isOpen ? 18 : 0, scale: isOpen ? 1.08 : 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full bg-slate-900 border border-indigo-500/40 rounded-2xl flex flex-col items-center justify-center shadow-2xl backdrop-blur"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <svg viewBox="0 0 60 60" className="w-14 h-14 text-indigo-400 mb-1" style={{ transform: 'translateZ(30px)' }}>
              <path d="M15 20 H45 L40 50 H20 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M22 20 C22 10, 38 10, 38 20" fill="none" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span className="text-[10px] font-mono font-bold text-indigo-300" style={{ transform: 'translateZ(15px)' }}>
              {isOpen ? 'BAG OPEN' : 'BAG CLOSED'}
            </span>
          </motion.div>
        </div>

        <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">09 / 3D PERSPECTIVE BAG OPENING</span>
        <h2 className="text-2xl font-extrabold mb-2">{settings.title}</h2>
        <p className="text-xs text-slate-400 mb-8 max-w-xs">{settings.subtitle}</p>

        <button className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-indigo-600/30">
          <span>{settings.primaryCta?.label || 'Explore Store'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection9;`
  },
  {
    id: 10,
    title: "Empty Cart 10 — SVG Circle Mask Expansion",
    desc: "A circular SVG mask expands outwardly to reveal category directory pills.",
    motion: "Expanding circular SVG mask reveal transition",
    code: `import React from 'react';
import { Tag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection10({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-900 text-white font-sans">
      <div className="max-w-3xl mx-auto text-center">
        {/* SVG Circle Mask Expansion Icon */}
        <motion.div 
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-24 h-24 rounded-full bg-amber-400/10 border-2 border-amber-400 mx-auto flex items-center justify-center mb-6 shadow-xl shadow-amber-400/10"
        >
          <Tag className="w-10 h-10 text-amber-400" />
        </motion.div>

        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">10 / SVG CIRCLE MASK EXPANSION</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">{settings.title}</h2>
        <p className="text-sm text-slate-400 mb-8 max-w-md mx-auto">{settings.subtitle}</p>

        <button className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-2">
          <span>{settings.primaryCta?.label || 'Browse Categories'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection10;`
  },
  {
    id: 11,
    title: "Empty Cart 11 — 3D Spring Tilt Hero",
    desc: "A high-impact CTA hero panel that tilts smoothly in 3D based on pointer movement.",
    motion: "Pointer-driven rotateX and rotateY 3D spring tilt interaction",
    code: `import React, { useState } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export function EmptyCartSection11({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({ rx: (y / rect.height) * -18, ry: (x / rect.width) * 18 });
  };

  const handleMouseLeave = () => setTilt({ rx: 0, ry: 0 });

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="max-w-2xl mx-auto perspective-1000"
      >
        <div 
          className="bg-gradient-to-br from-indigo-950 to-slate-900 border border-indigo-500/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl transition-transform duration-150 ease-out"
          style={{ transform: \`rotateX(\${tilt.rx}deg) rotateY(\${tilt.ry}deg)\` }}
        >
          <span className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-widest block mb-2">11 / 3D SPRING TILT HERO</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">READY TO SHOP?</h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-8 max-w-md mx-auto">{settings.subtitle}</p>

          <button className="px-10 py-4 bg-white hover:bg-slate-200 text-slate-950 font-extrabold rounded-2xl text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xl">
            <ShoppingBag className="w-4 h-4" />
            <span>{settings.primaryCta?.label || 'START SHOPPING NOW'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
export default EmptyCartSection11;`
  },
  {
    id: 12,
    title: "Empty Cart 12 — Continuous SVG Line-Morphing",
    desc: "An SVG stroke outline continuously morphs its path shape between a shopping cart and a tote bag.",
    motion: "Continuous SVG stroke line morphing keyframe animation",
    code: `import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection12({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-md mx-auto bg-slate-900 border-2 border-dashed border-slate-700 rounded-3xl p-8 text-center flex flex-col items-center">
        {/* Continuous Morphing SVG Path */}
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-emerald-400 mb-4">
          <motion.path
            d="M20 30 H80 L70 80 H30 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinejoin="round"
            animate={{
              d: [
                "M20 30 H80 L70 80 H30 Z",
                "M30 20 H70 L80 80 H20 Z",
                "M20 30 H80 L70 80 H30 Z"
              ]
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-2">12 / CONTINUOUS SVG LINE-MORPH</span>
        <h2 className="text-2xl font-bold mb-2">{settings.title}</h2>
        <p className="text-xs text-slate-400 mb-6">{settings.subtitle}</p>

        <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg shadow-emerald-500/20">
          <span>{settings.primaryCta?.label || 'Fill Your Cart'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection12;`
  },
  {
    id: 13,
    title: "Empty Cart 13 — Multi-Layer Floating Object Stack",
    desc: "Multiple visual layers float independently at varied speed frequencies in 3D Z-space.",
    motion: "Multi-layer floating Z-space stack animation",
    code: `import React from 'react';
import { Compass, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection13({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-900 text-white font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-950 border border-slate-800 rounded-3xl p-8 relative">
        {/* Floating Stack Objects */}
        <motion.div 
          animate={{ y: [-8, 8, -8], rotate: [-4, 4, -4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-14 h-14 rounded-2xl bg-indigo-600/30 border border-indigo-400/50 flex items-center justify-center text-indigo-300 shadow-xl"
        >
          <ShoppingBag className="w-7 h-7" />
        </motion.div>

        <div>
          <span className="text-xs font-mono font-bold text-indigo-400 uppercase block mb-1">13 / MULTI-LAYER FLOATING STACK</span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">{settings.title}</h2>
          <p className="text-xs text-slate-400 mt-1 max-w-md">{settings.subtitle}</p>
        </div>

        <button className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-indigo-600/30">
          <Compass className="w-4 h-4" />
          <span>{settings.primaryCta?.label || 'Explore Store'}</span>
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection13;`
  },
  {
    id: 14,
    title: "Empty Cart 14 — Pointer Magnetic CTA",
    desc: "Primary shopping CTA button translates magnetically toward the cursor on hover.",
    motion: "Pointer magnetic translation shift on action CTA",
    code: `import React, { useState } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export function EmptyCartSection14({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const handleBtnMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 2.5;
    const y = (e.clientY - rect.top - rect.height / 2) / 2.5;
    setBtnPos({ x, y });
  };

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-indigo-400 flex-shrink-0">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-indigo-400 block font-bold">14 / POINTER MAGNETIC CTA</span>
            <h3 className="text-lg font-bold text-white">{settings.title}</h3>
            <p className="text-xs text-slate-400">{settings.subtitle}</p>
          </div>
        </div>

        <button 
          onMouseMove={handleBtnMove}
          onMouseLeave={() => setBtnPos({ x: 0, y: 0 })}
          style={{ transform: \`translate3d(\${btnPos.x}px, \${btnPos.y}px, 0)\` }}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 transition-transform duration-100 ease-out shadow-lg shadow-indigo-600/30"
        >
          <span>{settings.primaryCta?.label || 'Start Shopping'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection14;`
  },
  {
    id: 15,
    title: "Empty Cart 15 — Luxury Serif 3D Depth Transition",
    desc: "Refined luxury serif typography with Z-depth layer transitions.",
    motion: "Z-plane 3D depth layer transition",
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function EmptyCartSection15({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-24 px-6 lg:px-12 bg-black text-white font-serif border-y border-neutral-900">
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-lg mx-auto text-center"
      >
        <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-4">CART / 00 // LUXURY MINIMAL</span>
        <h2 className="text-3xl sm:text-5xl font-normal tracking-wide text-neutral-100 mb-4 italic">Nothing here yet.</h2>
        <p className="text-xs font-sans text-neutral-400 max-w-xs mx-auto mb-8 font-light">{settings.subtitle}</p>
        <button className="text-xs font-sans font-bold tracking-widest uppercase text-white underline underline-offset-8 hover:text-amber-400 transition-colors">
          {settings.primaryCta?.label || 'DISCOVER THE COLLECTION'}
        </button>
      </motion.div>
    </section>
  );
}
export default EmptyCartSection15;`
  },
  {
    id: 16,
    title: "Empty Cart 16 — Viewport Entrance SVG Draw",
    desc: "An SVG vector outline traces itself upon scrolling into the viewport.",
    motion: "Viewport entrance SVG path drawing animation",
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function EmptyCartSection16({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        {/* SVG Viewport Draw Box */}
        <div className="w-28 h-28 mb-6">
          <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
            <motion.rect
              x="10" y="10" width="80" height="80" rx="20"
              fill="none" stroke="currentColor" strokeWidth="3.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">16 / VIEWPORT ENTRANCE SVG DRAW</span>
        <h2 className="text-2xl font-extrabold mb-2">{settings.title}</h2>
        <p className="text-xs text-slate-400 mb-6">{settings.subtitle}</p>

        <button className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-indigo-600/30">
          {settings.primaryCta?.label || 'Start Shopping'}
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection16;`
  },
  {
    id: 17,
    title: "Empty Cart 17 — Interactive 3D Spring Badge",
    desc: "A 3D shopping badge performs a spring rotation on cursor hover.",
    motion: "Spring 3D rotateY hover interaction",
    code: `import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection17({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        <motion.div 
          whileHover={{ rotateY: 180, scale: 1.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-18 h-18 rounded-2xl bg-indigo-600/20 border border-indigo-400 flex items-center justify-center text-indigo-300 mb-4 cursor-pointer shadow-xl shadow-indigo-500/20"
        >
          <ShoppingBag className="w-8 h-8" />
        </motion.div>
        
        <span className="text-xs font-mono font-bold text-indigo-400 uppercase">17 / INTERACTIVE 3D SPRING BADGE</span>
        <h2 className="text-2xl font-extrabold my-2">{settings.title}</h2>
        <p className="text-xs text-slate-400 mb-6 max-w-xs">{settings.subtitle}</p>

        <button className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-indigo-600/30">
          {settings.primaryCta?.label || 'Discover Products'}
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection17;`
  },
  {
    id: 18,
    title: "Empty Cart 18 — SVG Node Assembly Animation",
    desc: "Dispersed SVG geometric nodes assemble smoothly into a final composition.",
    motion: "SVG node assembly translation into structured vector compositing",
    code: `import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection18({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-neutral-950 text-white font-sans">
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative border border-neutral-800 bg-neutral-900 h-96 flex items-center p-8 sm:p-12">
        <div className="absolute right-12 top-12 w-48 h-48 hidden md:block">
          <motion.div 
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full border-2 border-dashed border-amber-400/50 rounded-full flex items-center justify-center shadow-xl shadow-amber-400/10"
          >
            <span className="text-xs font-mono text-amber-300 uppercase">SVG ASSEMBLED</span>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-md">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-2">18 / SVG NODE ASSEMBLY</span>
          <h2 className="text-3xl font-extrabold text-white mb-3">{settings.title}</h2>
          <p className="text-xs sm:text-sm text-neutral-300 mb-6">{settings.subtitle}</p>
          <button className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg shadow-amber-400/20">
            <span>{settings.primaryCta?.label || 'Explore Store'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
export default EmptyCartSection18;`
  },
  {
    id: 19,
    title: "Empty Cart 19 — Dimensional 3D Portal Frame",
    desc: "A 3D portal frame creates visual depth for compact drawer contexts.",
    motion: "Dimensional 3D portal frame depth entrance",
    code: `import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export function EmptyCartSection19({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-10 px-6 bg-slate-950 text-white font-sans">
      <div className="max-w-sm mx-auto bg-slate-900 border-2 border-indigo-500/40 rounded-2xl p-6 text-center shadow-2xl backdrop-blur">
        <div className="w-11 h-11 rounded-xl bg-indigo-600/20 border border-indigo-400 mx-auto mb-3 flex items-center justify-center text-indigo-300 shadow-md">
          <ShoppingBag className="w-5 h-5" />
        </div>
        <span className="text-[9px] font-mono text-indigo-400 uppercase block mb-1">19 / 3D PORTAL FRAME</span>
        <h3 className="text-sm font-bold text-white mb-1">{settings.title}</h3>
        <p className="text-[11px] text-slate-400 mb-4">{settings.subtitle}</p>
        <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-600/30">
          <span>{settings.primaryCta?.label || 'Shop Now'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection19;`
  },
  {
    id: 20,
    title: "Empty Cart 20 — Award-Level Hybrid Showcase",
    desc: "Combines animated SVG stroke path drawing, 3D pointer tilt, and oversized editorial typography.",
    motion: "Hybrid SVG path drawing + 3D pointer tilt + layered depth shift",
    code: `import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection20({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setTilt({
      x: (clientX - window.innerWidth / 2) / 25,
      y: (clientY - window.innerHeight / 2) / 25
    });
  };

  return (
    <section onMouseMove={handleMouseMove} className="w-full py-20 px-6 lg:px-12 bg-gradient-to-br from-black via-slate-950 to-indigo-950 text-white font-sans relative overflow-hidden border-y border-slate-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-3">20 / AWARD-LEVEL HYBRID SHOWCASE</span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-500 mb-4">
            0 ITEMS IN BAG.
          </h2>
          <p className="text-sm text-slate-400 max-w-md mb-8">{settings.subtitle}</p>
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold rounded-2xl text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-2xl shadow-indigo-500/30">
            <span>{settings.primaryCta?.label || 'Start Shopping Journey'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3D Tilt Hybrid Glass Container with SVG Ring */}
        <div className="lg:col-span-5 perspective-1000">
          <div 
            className="bg-slate-900/85 backdrop-blur-2xl border border-indigo-500/40 rounded-3xl p-8 text-center shadow-2xl transition-transform duration-150 ease-out"
            style={{ transform: \`rotateX(\${tilt.y * -1}deg) rotateY(\${tilt.x}deg)\` }}
          >
            <svg viewBox="0 0 100 100" className="w-24 h-24 text-indigo-400 mx-auto mb-4">
              <motion.circle
                cx="50" cy="50" r="42"
                fill="none" stroke="currentColor" strokeWidth="3.5" strokeDasharray="12 6"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </svg>
            <h3 className="text-lg font-bold text-white mb-2">Curated Shopping Gateway</h3>
            <p className="text-xs text-slate-400">Discover hand-picked collections crafted for elevated aesthetic tastes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default EmptyCartSection20;`
  }
];

// Write files
variants.forEach(v => {
  const dir = path.join(baseDir, `empty-cart-section-${v.id}`);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const tsxPath = path.join(dir, `EmptyCartSection${v.id}.tsx`);
  fs.writeFileSync(tsxPath, v.code);

  const jsonPath = path.join(dir, `empty-cart-section-${v.id}.json`);
  const jsonContent = {
    title: v.title,
    description: v.desc,
    animation: v.motion,
    section: {
      settings: {
        title: v.title,
        description: v.desc,
        subtitle: defaultSettings.subtitle,
        primaryCta: defaultSettings.primaryCta,
        categories: defaultSettings.categories
      }
    }
  };
  fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2));
});

console.log("Successfully generated AWWWARDS-level SVG and 3D Motion Empty Cart variants!");
