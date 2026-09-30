const fs = require('fs');
const path = require('path');

const components = [
  {
    name: 'ShippingDeliveryInformation11',
    content: `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function ShippingDeliveryInformation11({ data }: { data: any }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  return (
    <div ref={ref} className="p-8 min-h-[500px] rounded-3xl bg-slate-50 flex flex-col items-center justify-center relative overflow-hidden">
      <h2 className="text-4xl font-bold text-slate-800 mb-4 z-10">Global Network</h2>
      <p className="text-slate-500 mb-12 z-10">Scroll to activate our delivery grid.</p>
      
      <div className="relative w-full max-w-3xl h-64 border border-slate-200 rounded-3xl bg-white shadow-xl flex items-center justify-center p-8">
        <svg className="w-full h-full absolute inset-0 p-8" preserveAspectRatio="none">
          {/* Base Grid */}
          <path d="M 0 50 L 800 50 M 0 100 L 800 100 M 0 150 L 800 150" stroke="#f1f5f9" strokeWidth="2" fill="none" />
          <path d="M 100 0 L 100 200 M 300 0 L 300 200 M 500 0 L 500 200 M 700 0 L 700 200" stroke="#f1f5f9" strokeWidth="2" fill="none" />
          
          {/* Animated Map Path */}
          <motion.path
            d="M 50 150 Q 200 50 400 100 T 750 50"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="4"
            strokeLinecap="round"
            style={{ pathLength }}
          />
        </svg>
        
        <div className="absolute left-[50px] bottom-[50px] text-blue-500 bg-white rounded-full p-1 shadow-md">
          <MapPin size={20} />
        </div>
        <div className="absolute right-[50px] top-[50px] text-emerald-500 bg-white rounded-full p-1 shadow-md">
          <MapPin size={24} fill="currentColor" />
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ShippingDeliveryInformation12',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ShippingDeliveryInformation12({ data }: { data: any }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-900 flex items-center justify-center perspective-[2000px]">
      <motion.div 
        className="w-full max-w-sm h-96 relative cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front: Shipping Label */}
        <div className="absolute inset-0 backface-hidden bg-white p-6 rounded-2xl shadow-2xl flex flex-col justify-between border-8 border-yellow-400">
          <div>
            <div className="flex justify-between items-end border-b-2 border-black pb-2 mb-4">
              <span className="font-bold text-3xl font-mono">PRIORITY</span>
              <span className="text-xs font-bold">1 DAY</span>
            </div>
            <div className="font-mono text-sm space-y-1">
              <p>SHIP TO:</p>
              <p className="font-bold text-lg">JANE DOE</p>
              <p>123 MAIN STREET</p>
              <p>ANYTOWN, NY 10001</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <div className="h-16 w-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e9/UPC-A-036000291452.svg')] bg-cover bg-center opacity-80" />
            <p className="text-[10px] mt-1 font-mono">TRACKING: 1Z 999 999 99 9999 9999</p>
            <p className="text-xs font-bold mt-4 text-blue-600">Click to flip for return policy</p>
          </div>
        </div>

        {/* Back: Return Policy */}
        <div 
          className="absolute inset-0 backface-hidden bg-zinc-800 p-8 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center text-white border-8 border-zinc-700"
          style={{ transform: "rotateY(180deg)" }}
        >
          <h3 className="text-2xl font-bold mb-4 text-yellow-400">Easy Returns</h3>
          <p className="text-zinc-300 text-sm leading-relaxed mb-6">
            Not completely satisfied? We offer free returns within 30 days of delivery. Just drop it off at any authorized carrier location.
          </p>
          <button className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-full text-sm">
            Print Return Label
          </button>
        </div>
      </motion.div>
    </div>
  );
}
`
  },
  {
    name: 'ShippingDeliveryInformation13',
    content: `import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Truck, Package, Clock } from 'lucide-react';

export default function ShippingDeliveryInformation13({ data }: { data: any }) {
  const events = [
    { icon: CheckCircle2, title: "Order Confirmed", time: "10:24 AM", active: true },
    { icon: Package, title: "Packed & Ready", time: "2:15 PM", active: true },
    { icon: Truck, title: "Out for Delivery", time: "Today", active: true },
    { icon: Clock, title: "Estimated Arrival", time: "4:00 PM", active: false }
  ];

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-zinc-50 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">
        <h2 className="text-2xl font-bold text-zinc-800 mb-8">Tracking Details</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-zinc-100" />
          
          {events.map((event, i) => (
            <motion.div 
              key={i}
              className="relative z-10 flex items-start mb-8 last:mb-0"
              initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <div className={\`w-10 h-10 rounded-full flex items-center justify-center shrink-0 mr-4 shadow-sm \${event.active ? 'bg-zinc-900 text-white' : 'bg-white border-2 border-zinc-200 text-zinc-300'}\`}>
                <event.icon size={20} />
              </div>
              <div className="pt-2">
                <h4 className={\`font-bold \${event.active ? 'text-zinc-800' : 'text-zinc-400'}\`}>{event.title}</h4>
                <p className="text-sm font-medium text-zinc-500">{event.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ShippingDeliveryInformation14',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, X } from 'lucide-react';

export default function ShippingDeliveryInformation14({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-blue-50 flex items-center justify-center relative overflow-hidden">
      <h2 className="text-3xl font-bold text-blue-900 absolute top-12">Click the widget</h2>
      
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            layoutId="shipping-widget"
            className="w-20 h-20 bg-blue-600 rounded-full shadow-2xl flex items-center justify-center text-white cursor-pointer relative z-20"
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Package size={32} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              layoutId="shipping-widget"
              className="w-full max-w-sm bg-white rounded-3xl shadow-2xl p-8 relative z-20 overflow-hidden"
              initial={{ borderRadius: 100 }}
              animate={{ borderRadius: 24 }}
              exit={{ borderRadius: 100, opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 bg-slate-100 rounded-full p-2"
              >
                <X size={20} />
              </button>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Package size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Shipping Policy</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  We process all orders within 24 hours. Weekend orders are dispatched on Monday morning.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="font-semibold text-slate-700">Standard</span>
                    <span className="text-blue-600 font-bold">Free</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="font-semibold text-slate-700">Next Day</span>
                    <span className="text-slate-900 font-bold">$15.00</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
`
  },
  {
    name: 'ShippingDeliveryInformation15',
    content: `import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ChevronRight, Check } from 'lucide-react';

export default function ShippingDeliveryInformation15({ data }: { data: any }) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [0, 200], [1, 0]);
  const background = useTransform(x, [0, 250], ["#f1f5f9", "#10b981"]);
  const color = useTransform(x, [0, 250], ["#0f172a", "#ffffff"]);

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 200) {
      setIsConfirmed(true);
    }
  };

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-slate-900 flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Secure Reception</h2>
        <p className="text-slate-400">Swipe to simulate confirming delivery receipt.</p>
      </div>

      <div className="relative w-full max-w-sm h-20 rounded-full bg-slate-800 shadow-inner overflow-hidden border border-slate-700 p-2">
        {/* Success State */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center font-bold text-lg text-emerald-400 z-0 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: isConfirmed ? 1 : 0 }}
        >
          <Check className="mr-2" /> Delivery Confirmed
        </motion.div>

        {/* Draggable Button */}
        {!isConfirmed && (
          <motion.div
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing relative z-20"
            drag="x"
            dragConstraints={{ left: 0, right: 280 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            style={{ x }}
          >
            <ChevronRight className="text-slate-900" size={28} />
          </motion.div>
        )}
        
        {/* Swipe Text */}
        {!isConfirmed && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 font-medium text-slate-400 tracking-wider pl-8"
            style={{ opacity }}
          >
            SWIPE TO CONFIRM
          </motion.div>
        )}
      </div>
      
      {isConfirmed && (
        <button 
          onClick={() => { setIsConfirmed(false); x.set(0); }}
          className="mt-8 text-sm text-slate-500 hover:text-white transition-colors"
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
    name: 'ShippingDeliveryInformation16',
    content: `import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ShippingDeliveryInformation16({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-zinc-950 flex flex-col items-center justify-center relative">
      <h2 className="text-3xl font-bold text-white mb-2 z-20 pointer-events-none">X-Ray Logistics</h2>
      <p className="text-zinc-500 mb-8 z-20 pointer-events-none">Hover to reveal the hidden route network.</p>

      <div 
        ref={containerRef}
        className="relative w-full max-w-2xl h-64 bg-zinc-900 rounded-3xl overflow-hidden cursor-crosshair border border-zinc-800"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Dark Top Layer */}
        <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center z-10 pointer-events-none">
          <span className="text-zinc-800 font-bold text-xl tracking-widest uppercase">Classified Map</span>
        </div>

        {/* Hidden Map Layer exposed by mask */}
        <motion.div 
          className="absolute inset-0 z-20 pointer-events-none bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center"
          animate={{
            WebkitMaskImage: isHovered 
              ? \`radial-gradient(150px circle at \${mousePosition.x}px \${mousePosition.y}px, black 20%, transparent 100%)\`
              : \`radial-gradient(0px circle at \${mousePosition.x}px \${mousePosition.y}px, black 20%, transparent 100%)\`
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
        >
          {/* Overlay to make it look like night vision/xray */}
          <div className="absolute inset-0 bg-blue-600/30 mix-blend-color" />
          
          {/* Fake route lines drawn on top */}
          <svg className="absolute inset-0 w-full h-full p-8" preserveAspectRatio="none">
             <path d="M 50 100 Q 200 200 400 50 T 700 150" fill="none" stroke="#fff" strokeWidth="4" strokeDasharray="5 5" />
             <circle cx="50" cy="100" r="8" fill="#fff" />
             <circle cx="700" cy="150" r="8" fill="#fff" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ShippingDeliveryInformation17',
    content: `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ShippingDeliveryInformation17({ data }: { data: any }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsLoaded(prev => !prev);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-white flex flex-col items-center justify-center border border-slate-100 shadow-sm">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-slate-800">Dynamic Fetching</h2>
        <p className="text-slate-500">Skeleton loader morphs directly into layout.</p>
      </div>

      <div className="w-full max-w-md bg-slate-50 p-6 rounded-2xl border border-slate-200">
        <AnimatePresence mode="wait">
          {!isLoaded ? (
            <motion.div 
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-xl bg-slate-200 animate-pulse" />
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-4 bg-slate-200 rounded w-3/4 animate-pulse" />
                  <div className="h-4 bg-slate-200 rounded w-1/2 animate-pulse" />
                </div>
              </div>
              <div className="h-20 bg-slate-200 rounded-xl animate-pulse w-full" />
            </motion.div>
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl">
                  48h
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800">Expedited Fulfillment</h4>
                  <p className="text-sm text-slate-500">Guaranteed 2-day delivery</p>
                </div>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-xl flex justify-between items-center shadow-sm">
                <span className="text-slate-600 font-medium">Fulfillment Center</span>
                <span className="text-slate-900 font-bold">Ohio, USA</span>
              </div>
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
    name: 'ShippingDeliveryInformation18',
    content: `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Truck } from 'lucide-react';

export default function ShippingDeliveryInformation18({ data }: { data: any }) {
  const containerRef = useRef(null);
  
  // Create a layered parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const midgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const truckX = useTransform(scrollYProgress, [0, 1], ["-100%", "300%"]);

  return (
    <div ref={containerRef} className="p-8 min-h-[400px] rounded-3xl bg-sky-900 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background layer (slow) */}
      <motion.div 
        className="absolute inset-0 opacity-20 pointer-events-none flex whitespace-nowrap pt-12"
        style={{ x: backgroundX }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-32 h-64 bg-sky-950 mx-2 rounded-t-lg mt-auto" style={{ height: \`\${Math.random() * 60 + 20}%\` }} />
        ))}
      </motion.div>

      {/* Midground Trees/Signs (medium) */}
      <motion.div 
        className="absolute bottom-10 w-[200%] flex gap-32 pointer-events-none"
        style={{ x: midgroundX }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="w-4 h-16 bg-sky-950 relative">
             <div className="absolute -top-12 -left-6 w-16 h-16 rounded-full bg-sky-800" />
          </div>
        ))}
      </motion.div>

      {/* Foreground Truck (fast) */}
      <motion.div 
        className="absolute bottom-8 text-sky-100 z-20 pointer-events-none drop-shadow-2xl"
        style={{ x: truckX, y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 0.5 }}
      >
        <Truck size={64} fill="currentColor" />
      </motion.div>

      {/* Ground */}
      <div className="absolute bottom-0 w-full h-10 bg-sky-950 z-10" />

      {/* Text overlays */}
      <div className="relative z-30 text-center mb-16 mix-blend-overlay">
        <h2 className="text-6xl font-black text-sky-100 uppercase tracking-tighter">Moving Fast</h2>
        <p className="text-xl font-bold text-sky-200">Scroll to drive.</p>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ShippingDeliveryInformation19',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Zap, Plane } from 'lucide-react';

export default function ShippingDeliveryInformation19({ data }: { data: any }) {
  const [activeTab, setActiveTab] = useState(0);

  const tiers = [
    { icon: Leaf, name: "Eco Standard", time: "5-7 Days", desc: "Carbon neutral ground shipping.", color: "bg-emerald-500" },
    { icon: Zap, name: "Express", time: "2-3 Days", desc: "Fast priority air transit.", color: "bg-blue-500" },
    { icon: Plane, name: "Overnight", time: "Next Day", desc: "Direct to door delivery by 10 AM.", color: "bg-purple-500" }
  ];

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-zinc-100 flex items-center justify-center">
      <div className="w-full max-w-4xl flex flex-col md:flex-row h-96 gap-4">
        {tiers.map((tier, i) => {
          const isActive = activeTab === i;
          return (
            <motion.div
              key={i}
              className={\`relative rounded-3xl cursor-pointer overflow-hidden flex flex-col justify-end p-8 \${tier.color} text-white\`}
              animate={{ flex: isActive ? 3 : 1 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              onClick={() => setActiveTab(i)}
            >
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
              
              <motion.div 
                className="absolute top-8 left-8 p-3 bg-white/20 backdrop-blur-md rounded-2xl"
                layout
              >
                <tier.icon size={24} />
              </motion.div>

              <div className="relative z-10 mt-auto">
                <motion.h3 layout className="font-bold text-xl mb-1 whitespace-nowrap">{tier.name}</motion.h3>
                <motion.div layout className="font-mono text-sm opacity-80 whitespace-nowrap">{tier.time}</motion.div>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="text-sm font-medium leading-relaxed"
                    >
                      {tier.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
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
    name: 'ShippingDeliveryInformation20',
    content: `import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function ShippingDeliveryInformation20({ data }: { data: any }) {
  const y = useMotionValue(0);
  const progress = useTransform(y, [0, 240], [0, 100]);
  
  // Interpolate phase based on drag position
  const activePhase = useTransform(progress, (v) => {
    if (v < 25) return 0;
    if (v < 50) return 1;
    if (v < 75) return 2;
    return 3;
  });

  const [currentPhase, setCurrentPhase] = useState(0);

  // Sync motion value to state for rendering
  activePhase.onChange((v) => setCurrentPhase(v));

  const phases = ["Processing", "Packaging", "In Transit", "Delivered"];

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-900 flex flex-col md:flex-row items-center justify-center gap-16 relative">
      <div className="text-white text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Interactive Tracker</h2>
        <p className="text-neutral-400 mb-8 max-w-xs">Drag the white indicator down the timeline to explore different delivery phases.</p>
        
        <div className="h-20 overflow-hidden relative">
          <motion.div 
            animate={{ y: currentPhase * -80 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {phases.map((phase, i) => (
              <div key={i} className="h-20 flex flex-col justify-center">
                <span className="text-4xl font-black text-emerald-400 tracking-tighter uppercase">{phase}</span>
                <span className="text-neutral-500 font-mono text-sm tracking-widest">PHASE {i + 1}/4</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative h-72 w-4 bg-neutral-800 rounded-full shrink-0 shadow-inner">
        {/* Progress fill */}
        <motion.div 
          className="absolute top-0 left-0 w-full bg-emerald-500 rounded-full origin-top"
          style={{ height: y }}
        />
        
        {/* Draggable Knob */}
        <motion.div
          className="absolute -left-3 top-0 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing border-4 border-neutral-900 z-10"
          drag="y"
          dragConstraints={{ top: 0, bottom: 240 }}
          dragElastic={0.1}
          style={{ y }}
        >
          <div className="w-2 h-2 bg-neutral-900 rounded-full" />
        </motion.div>
        
        {/* Notches */}
        {[0, 80, 160, 240].map((pos, i) => (
          <div key={i} className="absolute left-6 w-4 h-0.5 bg-neutral-700" style={{ top: pos + 20 }} />
        ))}
      </div>
    </div>
  );
}
`
  }
];

components.forEach(comp => {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'sections', 'product', '12-shipping-delivery-information', 'shipping-delivery-information-' + comp.name.replace('ShippingDeliveryInformation', ''), comp.name + '.tsx');
  
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, comp.content, 'utf-8');
  console.log('Updated ' + comp.name);
});
