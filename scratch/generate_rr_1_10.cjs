const fs = require('fs');
const path = require('path');

const components = [
  {
    name: 'ReturnRefundInformation1',
    content: `import React, { useRef } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

export default function ReturnRefundInformation1({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const items = [
    "30-DAY RETURNS", "NO QUESTIONS ASKED", "INSTANT REFUND",
    "FREE SHIPPING", "EASY DROP-OFF", "24/7 SUPPORT"
  ];
  
  // Create a continuous infinite marquee
  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-zinc-950 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950" />
      
      <div className="text-center z-10 mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Seamless Returns</h2>
        <p className="text-zinc-400">Our promise to you.</p>
      </div>

      <div className="w-full relative overflow-hidden flex -rotate-2 scale-110">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {[...items, ...items, ...items].map((item, i) => (
            <div key={i} className="mx-4 text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-zinc-700 to-zinc-800 uppercase tracking-tighter hover:from-white hover:to-zinc-400 transition-all duration-300 cursor-default">
              {item} <span className="text-zinc-800 mx-4">•</span>
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="w-full relative overflow-hidden flex rotate-2 scale-110 mt-8">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...items, ...items, ...items].reverse().map((item, i) => (
            <div key={i} className="mx-4 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-zinc-700 to-zinc-800 uppercase tracking-tighter hover:from-white hover:to-zinc-400 transition-all duration-300 cursor-default">
              {item} <span className="text-zinc-800 mx-4">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ReturnRefundInformation2',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCcw, ShieldCheck, Clock } from 'lucide-react';

export default function ReturnRefundInformation2({ data }: { data: any }) {
  const [hovered, setHovered] = useState<number | null>(null);

  const cards = [
    { icon: RefreshCcw, title: "Free Exchanges", desc: "Swap for a different size or color at zero cost." },
    { icon: ShieldCheck, title: "Full Refund", desc: "Get 100% of your money back to original payment." },
    { icon: Clock, title: "30 Days Limit", desc: "Take your time to decide within a full month." }
  ];

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, i) => {
          const isHovered = hovered === i;
          return (
            <motion.div
              key={i}
              className="relative h-64 rounded-3xl cursor-pointer perspective-[1000px]"
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
            >
              <motion.div 
                className="w-full h-full absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex flex-col items-center justify-center text-white p-6 shadow-2xl"
                animate={{
                  rotateX: isHovered ? 10 : 0,
                  rotateY: isHovered ? -10 : 0,
                  z: isHovered ? 50 : 0,
                  boxShadow: isHovered ? "0 25px 50px -12px rgba(255,255,255,0.25)" : "0 4px 6px -1px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4" style={{ transform: "translateZ(30px)" }}>
                  <card.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ transform: "translateZ(40px)" }}>{card.title}</h3>
                
                <AnimatePresence>
                  {isHovered && (
                    <motion.p 
                      className="text-sm text-center text-white/80"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      style={{ transform: "translateZ(20px)" }}
                    >
                      {card.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ReturnRefundInformation3',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReturnRefundInformation3({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-[500px] rounded-3xl bg-neutral-900 flex items-center justify-center relative overflow-hidden">
      
      {/* Hidden Content (Revealed when portal opens) */}
      <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-8 z-0">
        <h2 className="text-4xl font-bold text-neutral-900 mb-6">Return Initiated.</h2>
        <p className="text-neutral-500 max-w-md text-center mb-8">
          Please check your email for the return shipping label. Print it out and attach it to your package.
        </p>
        <button 
          className="px-8 py-4 bg-neutral-900 text-white rounded-full font-bold hover:bg-neutral-800 transition"
          onClick={() => setIsOpen(false)}
        >
          Cancel Return
        </button>
      </div>

      {/* Left Door */}
      <motion.div 
        className="absolute top-0 left-0 w-1/2 h-full bg-neutral-900 z-10 border-r border-neutral-800 flex items-center justify-end pr-4 shadow-2xl origin-left"
        initial={false}
        animate={{ x: isOpen ? "-100%" : "0%" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <div className="w-1 h-32 bg-neutral-800 rounded-full" />
      </motion.div>

      {/* Right Door */}
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full bg-neutral-900 z-10 border-l border-neutral-800 flex items-center justify-start pl-4 shadow-2xl origin-right"
        initial={false}
        animate={{ x: isOpen ? "100%" : "0%" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <div className="w-1 h-32 bg-neutral-800 rounded-full" />
      </motion.div>

      {/* Trigger Button (Sits on top until clicked) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="absolute z-20 px-8 py-4 bg-white text-neutral-900 rounded-full font-black text-xl tracking-widest uppercase hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            onClick={() => setIsOpen(true)}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            Start Return
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
`
  },
  {
    name: 'ReturnRefundInformation4',
    content: `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReturnRefundInformation4({ data }: { data: any }) {
  const words = ["FREE", "FAST", "SIMPLE", "FAIR"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-[#f4f4f0] flex flex-col items-center justify-center relative overflow-hidden">
      <p className="absolute top-12 left-12 font-mono text-sm uppercase tracking-widest text-neutral-400">Our Policy</p>
      
      <div className="text-center">
        <h2 className="text-[120px] font-black text-neutral-900 leading-none tracking-tighter">
          RETURNS<br />MADE
        </h2>
        
        <div className="h-[120px] relative overflow-hidden mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 80, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              exit={{ y: -80, opacity: 0, rotateX: 90 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-full flex justify-center origin-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              <span className="text-[120px] font-black text-blue-600 leading-none tracking-tighter italic">
                {words[index]}.
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ReturnRefundInformation5',
    content: `import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function ReturnRefundInformation5({ data }: { data: any }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const x = useMotionValue(0);
  
  const background = useTransform(
    x,
    [0, 250],
    ["#27272a", "#10b981"] // zinc-800 to emerald-500
  );

  const handleDragEnd = (e: any, info: any) => {
    if (info.offset.x > 200) {
      setIsSuccess(true);
      x.set(280);
    } else {
      x.set(0);
    }
  };

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-zinc-950 flex flex-col items-center justify-center relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-2">Instant Refunds</h2>
        <p className="text-zinc-400">Swipe below to simulate our 1-click refund process.</p>
      </div>

      <motion.div 
        className="relative w-full max-w-sm h-20 rounded-full flex items-center p-2 shadow-inner border border-zinc-800"
        style={{ background }}
      >
        {/* Success Text */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl tracking-wide z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isSuccess ? 1 : 0 }}
        >
          <Check className="mr-2" /> Refund Issued
        </motion.div>

        {/* Swipe Text */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center text-zinc-500 font-bold uppercase tracking-widest z-0 pointer-events-none pl-12"
          animate={{ opacity: isSuccess ? 0 : 1 }}
        >
          Swipe to refund
        </motion.div>

        {/* Knob */}
        {!isSuccess && (
          <motion.div
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing z-10"
            drag="x"
            dragConstraints={{ left: 0, right: 280 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            style={{ x }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="text-zinc-900" size={24} />
          </motion.div>
        )}
      </motion.div>

      {isSuccess && (
        <button 
          onClick={() => { setIsSuccess(false); x.set(0); }}
          className="mt-8 text-zinc-500 hover:text-white transition-colors text-sm underline underline-offset-4"
        >
          Reset Simulation
        </button>
      )}
    </div>
  );
}
`
  },
  {
    name: 'ReturnRefundInformation6',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ReturnRefundInformation6({ data }: { data: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-[#e5e5e5] flex flex-col items-center justify-center relative perspective-[1200px]">
      <div className="text-center absolute top-12">
        <h2 className="text-3xl font-bold text-neutral-800">Repacking Made Easy</h2>
        <p className="text-neutral-500">Hover the box to tape it shut.</p>
      </div>

      <motion.div 
        className="relative w-64 h-64 mt-16 cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{ rotateX: 10, rotateY: -15 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Box Bottom */}
        <div className="absolute inset-0 bg-[#c4a484] shadow-2xl border border-[#a88665]" style={{ transform: "translateZ(-128px)" }} />
        
        {/* Box Back */}
        <div className="absolute inset-0 bg-[#b39171] border border-[#a88665]" style={{ transform: "rotateX(90deg) translateZ(128px)" }} />
        
        {/* Box Left */}
        <div className="absolute inset-0 bg-[#d5b596] border border-[#a88665]" style={{ transform: "rotateY(-90deg) translateZ(128px)" }} />
        
        {/* Box Right */}
        <div className="absolute inset-0 bg-[#c4a484] border border-[#a88665]" style={{ transform: "rotateY(90deg) translateZ(128px)" }} />
        
        {/* Box Front */}
        <div className="absolute inset-0 bg-[#d5b596] border border-[#a88665] flex items-center justify-center" style={{ transform: "translateZ(128px)" }}>
          <span className="font-mono text-[#a88665] border-2 border-[#a88665] p-2 rotate-12 opacity-50 font-bold">RETURN</span>
        </div>

        {/* Top Flap Left */}
        <motion.div 
          className="absolute inset-0 bg-[#d5b596] origin-left border border-[#a88665]"
          initial={{ rotateY: -90 }}
          animate={{ rotateY: isHovered ? 0 : -90 }}
          transition={{ duration: 0.5 }}
          style={{ transform: "rotateX(90deg) translateZ(-128px)" }}
        />

        {/* Top Flap Right */}
        <motion.div 
          className="absolute inset-0 bg-[#d5b596] origin-right border border-[#a88665]"
          initial={{ rotateY: 90 }}
          animate={{ rotateY: isHovered ? 0 : 90 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ transform: "rotateX(90deg) translateZ(-128px)" }}
        />

        {/* Tape (Appears last) */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-8 bg-[#e8e4c9]/80 backdrop-blur-sm"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: isHovered ? 1.2 : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          style={{ transform: "rotateX(90deg) translateZ(-129px) translateY(-50%)", originX: 0 }}
        />
      </motion.div>
    </div>
  );
}
`
  },
  {
    name: 'ReturnRefundInformation7',
    content: `import React from 'react';
import { motion } from 'framer-motion';

export default function ReturnRefundInformation7({ data }: { data: any }) {
  const steps = [
    { num: "01", title: "Submit Request", desc: "Log in and select the items you wish to return." },
    { num: "02", title: "Print Label", desc: "We'll instantly email you a prepaid shipping label." },
    { num: "03", title: "Drop Off", desc: "Leave the package at any authorized carrier location." },
    { num: "04", title: "Get Refunded", desc: "Money is sent back the day we receive the item." }
  ];

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-white border border-neutral-200 flex items-center justify-center">
      <div className="w-full max-w-2xl relative">
        
        {/* Vertical Progress Line */}
        <motion.div 
          className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-neutral-900 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {steps.map((step, i) => (
          <motion.div 
            key={i}
            className="flex items-start mb-16 last:mb-0 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: i * 0.3 + 0.5, duration: 0.6 }}
          >
            <div className="w-20 h-20 rounded-full bg-neutral-50 border-4 border-white shadow-xl flex items-center justify-center shrink-0 z-10 text-neutral-900 font-black text-xl font-mono">
              {step.num}
            </div>
            
            <div className="ml-8 pt-4">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">{step.title}</h3>
              <p className="text-neutral-500 text-lg leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ReturnRefundInformation8',
    content: `import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ReturnRefundInformation8({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="p-8 min-h-[500px] rounded-3xl bg-neutral-950 flex items-center justify-center relative overflow-hidden cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="text-center relative z-10 pointer-events-none mix-blend-difference text-white">
        <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">The Fine Print</h2>
        <p className="text-lg opacity-80">Hover to reveal our transparent policy.</p>
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          WebkitMaskImage: isHovering 
            ? \`radial-gradient(250px circle at \${mousePos.x}px \${mousePos.y}px, black 40%, transparent 100%)\`
            : \`radial-gradient(0px circle at \${mousePos.x}px \${mousePos.y}px, black 40%, transparent 100%)\`
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      >
        {/* Revealed Content Layer */}
        <div className="absolute inset-0 bg-emerald-400 p-16 flex flex-col items-center justify-center text-emerald-950">
           <h3 className="text-4xl font-black mb-8 uppercase text-center border-b-4 border-emerald-950 pb-4">No Hidden Fees.</h3>
           <div className="grid grid-cols-2 gap-8 text-xl font-bold max-w-2xl">
             <p>✓ 100% Free Shipping on Returns</p>
             <p>✓ Zero Restocking Fees</p>
             <p>✓ 60 Days Return Window</p>
             <p>✓ Instant Credit Option</p>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
`
  },
  {
    name: 'ReturnRefundInformation9',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReturnRefundInformation9({ data }: { data: any }) {
  const [isShredding, setIsShredding] = useState(false);

  const startShredding = () => {
    if(isShredding) return;
    setIsShredding(true);
    setTimeout(() => setIsShredding(false), 3000);
  };

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-orange-50 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-orange-900">Cancel Anytime</h2>
        <p className="text-orange-600/70">Click the receipt to void your order instantly.</p>
      </div>

      <div className="relative w-full max-w-xs h-80 flex flex-col items-center">
        
        {/* Receipt Container */}
        <div className="absolute top-0 w-48 h-64 overflow-hidden z-10 cursor-pointer" onClick={startShredding}>
          <motion.div 
            className="w-full h-full bg-white shadow-md border-t-8 border-dashed border-neutral-200 p-4 font-mono text-xs flex flex-col"
            animate={{ y: isShredding ? 200 : 0 }}
            transition={{ duration: 1.5, ease: "linear" }}
          >
            <div className="text-center font-bold text-lg mb-4 border-b pb-2">RECEIPT</div>
            <div className="flex justify-between mb-2"><span>ITEM A</span><span>$49.99</span></div>
            <div className="flex justify-between mb-2"><span>ITEM B</span><span>$29.99</span></div>
            <div className="mt-auto border-t pt-2 flex justify-between font-bold"><span>TOTAL</span><span>$79.98</span></div>
            
            {/* Red Void Stamp */}
            <AnimatePresence>
              {isShredding && (
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={{ scale: 3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, rotate: -15 }}
                >
                  <span className="text-red-500 font-black text-4xl border-4 border-red-500 p-2 opacity-80">VOID</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Shredder Machine */}
        <div className="absolute bottom-0 w-64 h-32 bg-neutral-800 rounded-t-2xl z-20 shadow-2xl flex flex-col items-center border-t-4 border-neutral-700">
           {/* Shredder Slot */}
           <div className="w-48 h-2 bg-black rounded-full mt-4 shadow-inner" />
           <div className="mt-4 px-4 py-1 bg-red-500/20 text-red-400 font-mono text-xs rounded uppercase tracking-widest flex items-center gap-2">
             <div className={\`w-2 h-2 rounded-full \${isShredding ? 'bg-red-500 animate-pulse' : 'bg-neutral-600'}\`} />
             Destroy
           </div>
        </div>

        {/* Shredded Pieces falling out bottom */}
        {isShredding && (
          <div className="absolute -bottom-16 w-48 flex justify-between z-30">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-16 bg-white shadow-sm"
                initial={{ y: -50, opacity: 0, rotate: 0 }}
                animate={{ y: 150, opacity: [0, 1, 0], rotate: (Math.random() - 0.5) * 45 }}
                transition={{ duration: 1.5, delay: 1 + (i * 0.1), ease: "easeOut" }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ReturnRefundInformation10',
    content: `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Package, Warehouse, Home } from 'lucide-react';

export default function ReturnRefundInformation10({ data }: { data: any }) {
  // Using whileInView for infinite loop parallax instead of useScroll for better grid compatibility
  
  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-gradient-to-b from-blue-400 to-cyan-300 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Clouds */}
      <motion.div 
        className="absolute top-10 flex text-white/30 pointer-events-none"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <div className="flex gap-32 w-[200%]">
          {Array.from({ length: 10 }).map((_, i) => (
            <svg key={i} width="100" height="40" viewBox="0 0 100 40" fill="currentColor">
              <path d="M20 20 Q 30 10 40 20 Q 50 0 70 20 Q 90 10 90 30 L 10 30 Q 0 20 20 20 Z" />
            </svg>
          ))}
        </div>
      </motion.div>

      {/* Midground Scenery (Trees / Houses) */}
      <motion.div 
        className="absolute bottom-16 flex items-end gap-24 pointer-events-none text-emerald-800/40 w-[200%]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
         {Array.from({ length: 15 }).map((_, i) => (
           <div key={i} className="flex gap-4">
             <div className="w-8 h-16 bg-emerald-800/20 rounded-t-full" />
             <div className="w-12 h-10 bg-emerald-800/20 mt-6" />
           </div>
         ))}
      </motion.div>

      {/* The Journey */}
      <div className="absolute bottom-8 w-full px-16 flex justify-between items-end z-20 pointer-events-none">
        <div className="flex flex-col items-center text-blue-900 drop-shadow-md">
           <Home size={32} />
           <span className="font-bold mt-2">You</span>
        </div>
        
        <div className="flex flex-col items-center text-blue-900 drop-shadow-md">
           <Warehouse size={40} />
           <span className="font-bold mt-2">Warehouse</span>
        </div>
      </div>

      {/* Moving Package (Moves from right to left to symbolize a return) */}
      <motion.div 
        className="absolute bottom-12 z-30 drop-shadow-xl"
        animate={{ 
          left: ["80%", "20%"],
          rotate: [0, -360],
          y: [0, -40, 0, -20, 0]
        }}
        transition={{ 
          left: { repeat: Infinity, duration: 4, ease: "linear" },
          rotate: { repeat: Infinity, duration: 4, ease: "linear" },
          y: { repeat: Infinity, duration: 1 }
        }}
      >
        <div className="bg-yellow-100 p-2 rounded shadow-lg border border-yellow-300">
          <Package className="text-yellow-700" size={24} />
        </div>
      </motion.div>

      {/* Road */}
      <div className="absolute bottom-0 w-full h-16 bg-neutral-800 z-10 flex flex-col justify-center">
        <div className="w-full border-t-4 border-dashed border-yellow-400 opacity-50" />
      </div>

      <div className="relative z-40 text-center -mt-16 text-blue-950 mix-blend-overlay">
        <h2 className="text-5xl font-black uppercase tracking-widest">Return Journey</h2>
        <p className="font-bold text-xl">Track your package every step back.</p>
      </div>
    </div>
  );
}
`
  }
];

components.forEach(comp => {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'sections', 'product', '13-return-refund-information', 'return-refund-information-' + comp.name.replace('ReturnRefundInformation', ''), comp.name + '.tsx');
  
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, comp.content, 'utf-8');
  console.log('Updated ' + comp.name);
});
