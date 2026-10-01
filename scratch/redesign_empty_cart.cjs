const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'cart', '09-empty-cart-section');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

const defaultSettings = {
  title: "Your Cart Is Empty",
  subtitle: "Explore our latest collections to find items you'll love",
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
    title: "Empty Cart 01 — SVG Cart Draw",
    desc: "An animated SVG cart progressively draws its outline using stroke-dashoffset before revealing the shopping CTA.",
    motion: "SVG stroke-dashoffset outline path drawing animation",
    code: `import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection1({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-slate-950 text-white font-sans overflow-hidden">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        {/* SVG Path Drawing Cart */}
        <div className="w-28 h-28 mb-6 relative flex items-center justify-center">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-indigo-400">
            <motion.path
              d="M15 20H25L35 65H80L90 30H30"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.circle
              cx="40"
              cy="78"
              r="6"
              stroke="currentColor"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
            <motion.circle
              cx="75"
              cy="78"
              r="6"
              stroke="currentColor"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
            />
          </svg>
        </div>

        <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-2">01 / SVG PATH DRAW</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">{settings.title}</h2>
        <p className="text-sm text-slate-400 mb-8 max-w-sm">{settings.subtitle}</p>
        
        <button className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all">
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
    title: "Empty Cart 02 — 3D Floating Cart",
    desc: "A layered shopping bag floats in 3D space using CSS perspective, rotateX, rotateY, and ambient levitation.",
    motion: "3D perspective levitation with rotateX and rotateY transforms",
    code: `import React from 'react';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection2({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-black text-white font-sans border-y border-neutral-900 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-4">02 / 3D FLOATING LEVITATION</span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase mb-4">
            YOUR CART<br />IS FLOATING EMPTY.
          </h2>
          <p className="text-sm text-neutral-400 mb-8">{settings.subtitle}</p>
          <button className="px-8 py-4 bg-white hover:bg-neutral-200 text-black font-extrabold rounded-2xl text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-2xl">
            <span>{settings.primaryCta?.label || 'Explore Store'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3D Levitating Container */}
        <div className="perspective-1000 w-72 h-80 flex items-center justify-center">
          <motion.div 
            animate={{ 
              rotateX: [12, -12, 12],
              rotateY: [-15, 15, -15],
              y: [-15, 15, -15]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full bg-gradient-to-br from-neutral-900 to-emerald-950/60 border border-emerald-500/30 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-2xl backdrop-blur-xl"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="w-20 h-20 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mb-4" style={{ transform: 'translateZ(40px)' }}>
              <ShoppingBag className="w-10 h-10 text-emerald-400" />
            </div>
            <span className="text-xs font-mono font-bold text-emerald-300" style={{ transform: 'translateZ(20px)' }}>3D LEVITATION ITEM</span>
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
    title: "Empty Cart 03 — Morphing SVG Bag",
    desc: "An SVG shopping bag visually morphs its path shape between open and closed state transitions.",
    motion: "Controlled SVG path shape morphing transition",
    code: `import React, { useState } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection3({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12">
        <div className="md:col-span-7">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">03 / MORPHING SVG BAG</span>
          <h2 className="text-3xl font-extrabold text-white mb-3">{settings.title}</h2>
          <p className="text-sm text-slate-400 mb-8">{settings.subtitle}</p>
          <button className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2">
            <span>{settings.primaryCta?.label || 'Explore Store'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Morphing SVG Container */}
        <div 
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-950 rounded-2xl border border-slate-800 cursor-pointer"
        >
          <svg viewBox="0 0 100 100" className="w-32 h-32 text-cyan-400">
            <motion.path
              d={isOpen ? "M20 30 L80 30 L75 85 L25 85 Z" : "M30 35 L70 35 L65 80 L35 80 Z"}
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinejoin="round"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <motion.path
              d={isOpen ? "M35 30 C35 10, 65 10, 65 30" : "M40 35 C40 20, 60 20, 60 35"}
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </svg>
          <span className="text-[10px] font-mono text-slate-400 mt-2">Hover to Morph SVG Shape</span>
        </div>
      </div>
    </section>
  );
}
export default EmptyCartSection3;`
  },
  {
    id: 4,
    title: "Empty Cart 04 — 3D Card Depth",
    desc: "Layered glassmorphic depth cards shift independently based on cursor pointer motion.",
    motion: "Multi-layered 3D depth shift responding to pointer interaction",
    code: `import React, { useState } from 'react';
import { ArrowRight, Layers } from 'lucide-react';

export function EmptyCartSection4({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 15;
    const y = (e.clientY - rect.top - rect.height / 2) / 15;
    setMousePos({ x, y });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="w-full py-20 px-6 lg:px-12 bg-neutral-950 text-white font-sans overflow-hidden"
    >
      <div className="max-w-lg mx-auto text-center flex flex-col items-center">
        {/* Layered 3D Depth Stack */}
        <div className="relative w-64 h-56 mb-8 flex justify-center items-center">
          <div 
            className="absolute inset-0 bg-amber-500/10 border border-amber-500/30 rounded-3xl backdrop-blur-md transition-transform duration-200 ease-out"
            style={{ transform: \`translate3d(\${mousePos.x * -1}px, \${mousePos.y * -1}px, 0px) rotate(-6deg)\` }}
          />
          <div 
            className="absolute inset-0 bg-neutral-900/80 border border-neutral-800 rounded-3xl backdrop-blur-xl transition-transform duration-200 ease-out p-6 flex flex-col justify-center items-center shadow-2xl"
            style={{ transform: \`translate3d(\${mousePos.x}px, \${mousePos.y}px, 0px) rotate(3deg)\` }}
          >
            <Layers className="w-12 h-12 text-amber-400 mb-2" />
            <span className="text-xs font-mono font-bold text-amber-300">04 / 3D LAYER DEPTH</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">{settings.title}</h2>
        <p className="text-xs text-neutral-400 mb-6">{settings.subtitle}</p>

        <button className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2">
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
    title: "Empty Cart 05 — Orbiting SVG Elements",
    desc: "Small SVG icons orbit around a central empty cart symbol in a continuous circular motion.",
    motion: "Controlled 360-degree circular SVG orbit motion",
    code: `import React from 'react';
import { ShoppingBag, ArrowRight, Star, Heart, Tag } from 'lucide-react';

export function EmptyCartSection5({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        {/* Orbiting SVG Container */}
        <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shadow-2xl z-10">
            <ShoppingBag className="w-9 h-9 text-indigo-400" />
          </div>

          <div className="absolute inset-0 border border-dashed border-indigo-500/30 rounded-full animate-spin-slow" style={{ animationDuration: '15s' }}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white">
              <Star className="w-3.5 h-3.5" />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-pink-600 flex items-center justify-center text-white">
              <Heart className="w-3.5 h-3.5" />
            </div>
            <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white">
              <Tag className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">05 / ORBITING SVG ELEMENTS</span>
        <h2 className="text-2xl font-extrabold mb-2">{settings.title}</h2>
        <p className="text-xs text-slate-400 mb-8">{settings.subtitle}</p>

        <button className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2">
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
    title: "Empty Cart 06 — Drawing Journey Path",
    desc: "An SVG path draws itself progressively across a 4-step shopping journey.",
    motion: "Progressive SVG stroke-dashoffset path drawing animation",
    code: `import React from 'react';
import { ShoppingBag, Search, PlusCircle, CreditCard, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection6({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-900 text-white font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">06 / DRAWING JOURNEY PATH</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-8">{settings.title}</h2>

        {/* SVG Path Progress Line */}
        <div className="relative mb-10 px-4">
          <svg className="w-full h-2 text-slate-800 overflow-visible mb-6">
            <line x1="0" y1="0" x2="100%" y2="0" stroke="currentColor" strokeWidth="4" />
            <motion.line 
              x1="0" y1="0" x2="100%" y2="0" 
              stroke="#22d3ee" strokeWidth="4" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 0.25 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-400 text-white">
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
    title: "Empty Cart 07 — 3D Parallax Object",
    desc: "Background artwork and main product object respond to pointer movement at different depth offsets.",
    motion: "Pointer-driven multi-layer 3D parallax transform",
    code: `import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function EmptyCartSection7({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setOffset({
      x: (clientX - window.innerWidth / 2) / 25,
      y: (clientY - window.innerHeight / 2) / 25
    });
  };

  return (
    <section onMouseMove={handleMouseMove} className="w-full py-16 px-6 lg:px-12 bg-neutral-950 text-white font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block mb-2">07 / 3D PARALLAX INTERACTION</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">YOUR BAG IS CURRENTLY UNFILLED.</h2>
          <p className="text-sm text-neutral-400 mb-8">{settings.subtitle}</p>
          <button className="px-8 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2">
            <span>{settings.primaryCta?.label || 'Browse Store'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="md:col-span-5 relative h-80 rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 flex items-center justify-center">
          <div 
            className="w-full h-full absolute inset-0 transition-transform duration-100 ease-out"
            style={{ transform: \`translate3d(\${offset.x * 1.5}px, \${offset.y * 1.5}px, 0)\` }}
          >
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" alt="Parallax Background" className="w-full h-full object-cover opacity-50" />
          </div>
          <div 
            className="relative z-10 px-6 py-4 bg-black/80 backdrop-blur-xl rounded-2xl border border-purple-500/40 shadow-2xl transition-transform duration-100 ease-out"
            style={{ transform: \`translate3d(\${offset.x * -1.5}px, \${offset.y * -1.5}px, 0)\` }}
          >
            <span className="text-xs font-mono font-bold text-purple-300">0 ITEMS IN BAG</span>
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
    title: "Empty Cart 08 — SVG Particle Field",
    desc: "Subtle geometric SVG particles float softly around the empty state visual.",
    motion: "Controlled SVG particle matrix drift animation",
    code: `import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection8({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white font-sans relative overflow-hidden">
      {/* SVG Particle Matrix */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-indigo-400/30"
            style={{
              top: \`\${(i * 18) % 90}%\`,
              left: \`\${(i * 23) % 90}%\`
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-2">08 / SVG PARTICLE MATRIX</span>
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
    title: "Empty Cart 09 — 3D Bag Opening",
    desc: "A shopping bag uses layered perspective and rotateX to simulate a dimensional opening.",
    motion: "Perspective rotateX 3D bag opening transition",
    code: `import React, { useState } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export function EmptyCartSection9({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        {/* 3D Opening Bag Box */}
        <div 
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="perspective-1000 w-32 h-36 mb-6 cursor-pointer"
        >
          <div 
            className={\`w-full h-full bg-slate-900 border border-slate-700 rounded-2xl flex flex-col items-center justify-center shadow-2xl transition-transform duration-500 \${
              isOpen ? 'rotate-x-12 scale-105 border-indigo-400' : ''
            }\`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <ShoppingBag className="w-12 h-12 text-indigo-400 mb-1" />
            <span className="text-[10px] font-mono text-slate-400">{isOpen ? 'OPEN' : 'CLOSED'}</span>
          </div>
        </div>

        <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">09 / 3D BAG OPENING</span>
        <h2 className="text-2xl font-extrabold mb-2">{settings.title}</h2>
        <p className="text-xs text-slate-400 mb-8 max-w-xs">{settings.subtitle}</p>

        <button className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2">
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
    title: "Empty Cart 10 — SVG Circle Reveal",
    desc: "A circular SVG mask expands to reveal the empty cart message.",
    motion: "Circular SVG mask expansion transition",
    code: `import React, { useState } from 'react';
import { Tag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection10({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-900 text-white font-sans">
      <div className="max-w-3xl mx-auto text-center">
        {/* SVG Circle Reveal Mask */}
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-24 h-24 rounded-full bg-amber-400/10 border-2 border-amber-400 mx-auto flex items-center justify-center mb-6"
        >
          <Tag className="w-10 h-10 text-amber-400" />
        </motion.div>

        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">10 / SVG CIRCLE REVEAL</span>
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
    title: "Empty Cart 11 — 3D Tilt Interaction",
    desc: "Main empty-cart card tilts smoothly in 3D based on pointer movement.",
    motion: "Pointer-driven rotateX and rotateY 3D spring tilt",
    code: `import React, { useState } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export function EmptyCartSection11({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({ rx: (y / rect.height) * -20, ry: (x / rect.width) * 20 });
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
          className="bg-gradient-to-br from-indigo-950 to-slate-900 border border-indigo-500/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl transition-transform duration-200 ease-out"
          style={{ transform: \`rotateX(\${tilt.rx}deg) rotateY(\${tilt.ry}deg)\` }}
        >
          <span className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-widest block mb-2">11 / 3D TILT INTERACTION</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">READY TO SHOP?</h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-8 max-w-md mx-auto">{settings.subtitle}</p>

          <button className="px-10 py-4 bg-white hover:bg-slate-200 text-slate-950 font-extrabold rounded-2xl text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2">
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
    title: "Empty Cart 12 — SVG Line-Morph",
    desc: "An SVG path line transforms between cart and bag shapes continuously.",
    motion: "Continuous SVG path stroke line morphing animation",
    code: `import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection12({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-md mx-auto bg-slate-900 border-2 border-dashed border-slate-700 rounded-3xl p-8 text-center flex flex-col items-center">
        {/* SVG Line Morph */}
        <svg viewBox="0 0 100 100" className="w-20 h-20 text-emerald-400 mb-4">
          <motion.path
            d="M20 30 H80 L70 80 H30 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            animate={{
              d: [
                "M20 30 H80 L70 80 H30 Z",
                "M30 20 H70 L80 80 H20 Z",
                "M20 30 H80 L70 80 H30 Z"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-2">12 / SVG LINE-MORPH</span>
        <h2 className="text-2xl font-bold mb-2">{settings.title}</h2>
        <p className="text-xs text-slate-400 mb-6">{settings.subtitle}</p>

        <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-2">
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
    title: "Empty Cart 13 — Floating Object Stack",
    desc: "Multiple Z-space stacked elements float independently at varied speeds.",
    motion: "Multi-layered Z-space floating vertical stack animation",
    code: `import React from 'react';
import { Compass, ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection13({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-900 text-white font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-950 border border-slate-800 rounded-3xl p-8 relative">
        {/* Floating Stack Objects */}
        <motion.div 
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 rounded-xl bg-indigo-600/30 border border-indigo-400 flex items-center justify-center text-indigo-300"
        >
          <ShoppingBag className="w-6 h-6" />
        </motion.div>

        <div>
          <span className="text-xs font-mono font-bold text-indigo-400 uppercase block mb-1">13 / FLOATING OBJECT STACK</span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">{settings.title}</h2>
          <p className="text-xs text-slate-400 mt-1 max-w-md">{settings.subtitle}</p>
        </div>

        <button className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2">
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
    title: "Empty Cart 14 — SVG Magnetic CTA",
    desc: "Primary shopping CTA subtly translates magnetic offset toward the pointer.",
    motion: "Pointer-driven magnetic translation shift on action button",
    code: `import React, { useState } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export function EmptyCartSection14({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const handleBtnMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 3;
    const y = (e.clientY - rect.top - rect.height / 2) / 3;
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
            <span className="text-[10px] font-mono text-indigo-400 block font-bold">14 / SVG MAGNETIC CTA</span>
            <h3 className="text-lg font-bold text-white">{settings.title}</h3>
            <p className="text-xs text-slate-400">{settings.subtitle}</p>
          </div>
        </div>

        <button 
          onMouseMove={handleBtnMove}
          onMouseLeave={() => setBtnPos({ x: 0, y: 0 })}
          style={{ transform: \`translate3d(\${btnPos.x}px, \${btnPos.y}px, 0)\` }}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 transition-transform duration-100 ease-out"
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
    title: "Empty Cart 15 — 3D Depth Transition",
    desc: "Layered luxury card elements shift across Z-depth planes.",
    motion: "Z-plane 3D depth layer shift animation",
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function EmptyCartSection15({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-24 px-6 lg:px-12 bg-black text-white font-serif">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-lg mx-auto text-center"
      >
        <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-4">15 / 3D DEPTH TRANSITION</span>
        <h2 className="text-3xl sm:text-4xl font-normal tracking-wide text-neutral-100 mb-4 italic">Nothing here yet.</h2>
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
    title: "Empty Cart 16 — SVG Viewport Scroll Draw",
    desc: "An SVG path draws itself when scrolling into view.",
    motion: "Viewport entrance triggered SVG path drawing",
    code: `import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection16({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        {/* Viewport Scroll SVG Draw */}
        <div className="w-24 h-24 mb-6">
          <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
            <motion.rect
              x="10" y="10" width="80" height="80" rx="20"
              fill="none" stroke="currentColor" strokeWidth="4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">16 / VIEWPORT SCROLL DRAW</span>
        <h2 className="text-2xl font-extrabold mb-2">{settings.title}</h2>
        <p className="text-xs text-slate-400 mb-6">{settings.subtitle}</p>

        <button className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider">
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
    title: "Empty Cart 17 — Interactive 3D Object",
    desc: "A 3D shopping badge performs a spring rotation on cursor hover.",
    motion: "Spring-based 3D rotateX and rotateY interaction",
    code: `import React from 'react';
import { ArrowDown, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection17({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        <motion.div 
          whileHover={{ rotateY: 180, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-400 flex items-center justify-center text-indigo-300 mb-4 cursor-pointer"
        >
          <ShoppingBag className="w-8 h-8" />
        </motion.div>
        
        <span className="text-xs font-mono font-bold text-indigo-400 uppercase">17 / INTERACTIVE 3D OBJECT</span>
        <h2 className="text-2xl font-extrabold my-2">{settings.title}</h2>
        <p className="text-xs text-slate-400 mb-6 max-w-xs">{settings.subtitle}</p>

        <button className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider">
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
    title: "Empty Cart 18 — SVG Particle Assembly",
    desc: "Separate SVG geometric nodes assemble into a cart composition.",
    motion: "Node assembly translation into final SVG structure",
    code: `import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection18({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-neutral-950 text-white font-sans">
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative border border-neutral-800 bg-neutral-900 h-96 flex items-center p-8 sm:p-12">
        {/* Assembling SVG Nodes */}
        <div className="absolute right-12 top-12 w-48 h-48 hidden md:block">
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full border-2 border-dashed border-amber-400/40 rounded-full flex items-center justify-center"
          >
            <span className="text-xs font-mono text-amber-300">SVG ASSEMBLED</span>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-md">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-2">18 / SVG PARTICLE ASSEMBLY</span>
          <h2 className="text-3xl font-extrabold text-white mb-3">{settings.title}</h2>
          <p className="text-xs sm:text-sm text-neutral-300 mb-6">{settings.subtitle}</p>
          <button className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-2">
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
    title: "Empty Cart 19 — 3D Portal Frame",
    desc: "A dimensional portal frame creates depth around the empty cart drawer.",
    motion: "Dimensional 3D depth portal entrance",
    code: `import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export function EmptyCartSection19({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-10 px-6 bg-slate-950 text-white font-sans">
      <div className="max-w-sm mx-auto bg-slate-900 border-2 border-indigo-500/30 rounded-2xl p-6 text-center shadow-2xl">
        <div className="w-10 h-10 rounded-lg bg-indigo-600/20 border border-indigo-400 mx-auto mb-3 flex items-center justify-center text-indigo-300">
          <ShoppingBag className="w-5 h-5" />
        </div>
        <span className="text-[9px] font-mono text-indigo-400 uppercase block mb-1">19 / 3D PORTAL FRAME</span>
        <h3 className="text-sm font-bold text-white mb-1">{settings.title}</h3>
        <p className="text-[11px] text-slate-400 mb-4">{settings.subtitle}</p>
        <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-1.5">
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
    desc: "Combines animated SVG path drawing, 3D card tilt, cursor depth parallax, and oversized editorial typography.",
    motion: "Hybrid SVG path drawing, 3D tilt, and layered editorial depth transition",
    code: `import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection20({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setTilt({
      x: (clientX - window.innerWidth / 2) / 30,
      y: (clientY - window.innerHeight / 2) / 30
    });
  };

  return (
    <section onMouseMove={handleMouseMove} className="w-full py-20 px-6 lg:px-12 bg-gradient-to-br from-black via-slate-950 to-indigo-950 text-white font-sans relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-3">20 / AWARD-LEVEL HYBRID</span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-500 mb-4">
            0 ITEMS IN BAG.
          </h2>
          <p className="text-sm text-slate-400 max-w-md mb-8">{settings.subtitle}</p>
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold rounded-2xl text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-2xl shadow-indigo-500/30">
            <span>{settings.primaryCta?.label || 'Start Shopping Journey'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3D Tilt Hybrid Container */}
        <div className="lg:col-span-5 perspective-1000">
          <div 
            className="bg-slate-900/80 backdrop-blur-2xl border border-indigo-500/30 rounded-3xl p-8 text-center shadow-2xl transition-transform duration-150 ease-out"
            style={{ transform: \`rotateX(\${tilt.y * -1}deg) rotateY(\${tilt.x}deg)\` }}
          >
            {/* SVG Path Drawing Ring */}
            <svg viewBox="0 0 100 100" className="w-20 h-20 text-indigo-400 mx-auto mb-4">
              <motion.circle
                cx="50" cy="50" r="40"
                fill="none" stroke="currentColor" strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
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

console.log("Successfully redesigned all 20 Empty Cart Section variants with SVG & 3D motion identities!");
