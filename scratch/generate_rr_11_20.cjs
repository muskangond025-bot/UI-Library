const fs = require('fs');
const path = require('path');

const components = [
  {
    name: 'ReturnRefundInformation11',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReturnRefundInformation11({ data }: { data: any }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const reasons = [
    { id: 1, title: "Wrong Size", desc: "Doesn't fit? We'll swap it instantly." },
    { id: 2, title: "Changed Mind", desc: "No worries, returns are always free." },
    { id: 3, title: "Damaged", desc: "We'll replace it and cover all costs." },
    { id: 4, title: "Gift Return", desc: "Get store credit discreetly." }
  ];

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-100 flex flex-col items-center justify-center relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-neutral-900">Why returning?</h2>
        <p className="text-neutral-500">Click a reason to see your options.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl relative z-10">
        {reasons.map(reason => (
          <motion.div
            layoutId={\`card-\${reason.id}\`}
            key={reason.id}
            className="bg-white p-6 rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition-shadow border border-neutral-200 flex flex-col items-center justify-center text-center h-32"
            onClick={() => setSelectedId(reason.id)}
          >
            <motion.h3 layoutId={\`title-\${reason.id}\`} className="font-bold text-neutral-900">{reason.title}</motion.h3>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              className="absolute inset-0 bg-neutral-900/20 backdrop-blur-sm z-20 rounded-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            />
            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none p-8">
              <motion.div
                layoutId={\`card-\${selectedId}\`}
                className="bg-white p-12 rounded-3xl shadow-2xl w-full max-w-lg pointer-events-auto flex flex-col items-center text-center relative"
              >
                <button 
                  className="absolute top-6 right-6 w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center font-bold text-neutral-500 hover:bg-neutral-200"
                  onClick={() => setSelectedId(null)}
                >
                  ✕
                </button>
                <motion.h3 layoutId={\`title-\${selectedId}\`} className="text-3xl font-black text-neutral-900 mb-4">
                  {reasons.find(r => r.id === selectedId)?.title}
                </motion.h3>
                <motion.p 
                  className="text-neutral-500 text-lg mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {reasons.find(r => r.id === selectedId)?.desc}
                </motion.p>
                
                <motion.button 
                  className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Proceed with Return
                </motion.button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
`
  },
  {
    name: 'ReturnRefundInformation12',
    content: `import React from 'react';
import { motion } from 'framer-motion';

export default function ReturnRefundInformation12({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-950 flex items-center justify-center relative overflow-hidden">
      
      {/* Animated Organic Blob */}
      <motion.div 
        className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-purple-600 to-blue-600 opacity-50 blur-3xl mix-blend-screen"
        animate={{
          borderRadius: ["40% 60% 70% 30%", "30% 50% 40% 60%", "60% 30% 50% 70%", "40% 60% 70% 30%"],
          rotate: [0, 90, 180, 360],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      />
      
      <motion.div 
        className="absolute w-[400px] h-[400px] bg-gradient-to-bl from-pink-500 to-orange-500 opacity-40 blur-3xl mix-blend-screen"
        animate={{
          borderRadius: ["60% 40% 30% 70%", "40% 60% 50% 50%", "50% 50% 70% 30%", "60% 40% 30% 70%"],
          rotate: [360, 180, 90, 0],
          scale: [0.9, 1.2, 1, 0.9]
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />

      {/* Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-lg bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-6">Organic Refunds</h2>
        <div className="space-y-6">
          <div className="flex justify-between border-b border-white/10 pb-4">
            <span className="text-white/60">Condition</span>
            <span className="text-white font-medium">Unworn & Unwashed</span>
          </div>
          <div className="flex justify-between border-b border-white/10 pb-4">
            <span className="text-white/60">Timeframe</span>
            <span className="text-white font-medium">90 Days</span>
          </div>
          <div className="flex justify-between pb-4">
            <span className="text-white/60">Refund Method</span>
            <span className="text-white font-medium">Original Payment</span>
          </div>
        </div>
        <button className="w-full mt-8 py-4 bg-white/20 hover:bg-white/30 transition text-white font-bold rounded-xl backdrop-blur-md border border-white/30">
          View Full Policy
        </button>
      </div>

    </div>
  );
}
`
  },
  {
    name: 'ReturnRefundInformation13',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, ArchiveRestore } from 'lucide-react';

export default function ReturnRefundInformation13({ data }: { data: any }) {
  const [isReturned, setIsReturned] = useState(false);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-orange-50 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-16 relative z-20">
        <h2 className="text-4xl font-black text-orange-900 uppercase">Drag to Return</h2>
        <p className="text-orange-600 font-bold">Drop the item into the warehouse box.</p>
      </div>

      <div className="w-full max-w-3xl flex justify-between items-center relative z-20 px-12">
        
        {/* Draggable Item */}
        <AnimatePresence>
          {!isReturned && (
            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.8}
              onDragEnd={(e, info) => {
                if (info.offset.x > 300) {
                  setIsReturned(true);
                }
              }}
              className="w-32 h-32 bg-white rounded-2xl shadow-xl border-4 border-orange-200 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing hover:scale-105 z-30"
              exit={{ scale: 0, opacity: 0, rotate: 180 }}
            >
              <Package size={48} className="text-orange-500" />
              <span className="font-bold text-orange-900 mt-2">Item</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Drop Zone */}
        <div className="w-48 h-48 border-4 border-dashed border-orange-300 rounded-3xl flex flex-col items-center justify-center text-orange-400 bg-orange-100/50">
          <ArchiveRestore size={48} className="mb-2" />
          <span className="font-bold uppercase tracking-widest text-sm">Drop Here</span>
        </div>
      </div>

      {/* Success Reveal */}
      <AnimatePresence>
        {isReturned && (
          <motion.div
            className="absolute inset-0 bg-emerald-500 z-40 flex flex-col items-center justify-center text-white p-8"
            initial={{ clipPath: "circle(0% at 75% 50%)" }}
            animate={{ clipPath: "circle(150% at 75% 50%)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h2 className="text-5xl font-black mb-4">Refund Processing!</h2>
            <p className="text-xl mb-8 font-medium">Your funds will appear in 3-5 business days.</p>
            <button 
              className="px-8 py-3 bg-white text-emerald-600 rounded-full font-bold shadow-lg hover:scale-105 transition"
              onClick={() => setIsReturned(false)}
            >
              Reset Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
`
  },
  {
    name: 'ReturnRefundInformation14',
    content: `import React from 'react';
import { motion } from 'framer-motion';

export default function ReturnRefundInformation14({ data }: { data: any }) {
  const text = "initiate_refund --policy=strict\\n> Verifying order status...\\n> OK.\\n> Processing refund to original payment method...\\n> Status: COMPLETED in 0.4s.\\n\\nRefunds are processed automatically and instantly when scanned by the carrier. No manual reviews. No delays.";
  
  const chars = text.split("");

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-black flex items-center justify-center font-mono">
      <div className="w-full max-w-2xl bg-neutral-900 rounded-xl p-6 shadow-[0_0_50px_rgba(34,197,94,0.1)] border border-neutral-800">
        
        <div className="flex gap-2 mb-6 border-b border-neutral-800 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        <div className="text-green-500 text-lg leading-relaxed whitespace-pre-wrap flex flex-wrap">
          {chars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span 
            className="inline-block w-3 h-6 bg-green-500 ml-1 translate-y-1"
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          />
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ReturnRefundInformation15',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReturnRefundInformation15({ data }: { data: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { title: "How long do I have to return?", content: "You have 60 days from the date of delivery to return any unused, unwashed items in their original packaging." },
    { title: "Do I have to pay for shipping?", content: "No! All domestic returns are completely free. We provide a prepaid shipping label instantly." },
    { title: "When will I get my refund?", content: "Refunds are issued to your original payment method within 24 hours of the carrier scanning your return package." }
  ];

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-100 flex flex-col items-center py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-neutral-900">Origami FAQs</h2>
      </div>

      <div className="w-full max-w-2xl space-y-4 perspective-[1000px]">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div 
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-200 cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              initial={false}
              animate={{ 
                rotateX: isOpen ? 0 : 5, 
                backgroundColor: isOpen ? "#ffffff" : "#fafafa",
                transformOrigin: "top"
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="p-6 font-bold text-lg text-neutral-900 flex justify-between items-center">
                {faq.title}
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>↓</motion.span>
              </div>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, rotateX: -90 }}
                    animate={{ height: "auto", opacity: 1, rotateX: 0 }}
                    exit={{ height: 0, opacity: 0, rotateX: -90 }}
                    transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                    className="origin-top bg-neutral-50 border-t border-neutral-100"
                  >
                    <div className="p-6 text-neutral-600 leading-relaxed">
                      {faq.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
    name: 'ReturnRefundInformation16',
    content: `import React from 'react';
import { motion } from 'framer-motion';

export default function ReturnRefundInformation16({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-indigo-950 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-2">By The Numbers</h2>
        <p className="text-indigo-300">Data visualization of our transparent policies.</p>
      </div>

      <div className="flex gap-16 items-end h-64 relative z-10 w-full max-w-xl justify-center border-b-2 border-indigo-900 pb-4">
        
        {/* Bar 1 */}
        <div className="flex flex-col items-center gap-4">
          <motion.div 
            className="w-24 bg-emerald-500 rounded-t-xl flex items-end justify-center pb-4 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
            initial={{ height: 0 }}
            whileInView={{ height: 200 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.span 
              className="text-emerald-950 font-black text-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              100%
            </motion.span>
          </motion.div>
          <span className="text-indigo-200 font-bold uppercase tracking-widest text-sm">Refund</span>
        </div>

        {/* Bar 2 */}
        <div className="flex flex-col items-center gap-4">
          <motion.div 
            className="w-24 bg-rose-500 rounded-t-xl flex items-end justify-center pb-4"
            initial={{ height: 200 }}
            whileInView={{ height: 10 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          >
            <motion.span 
              className="text-white font-black text-xl absolute -top-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              0%
            </motion.span>
          </motion.div>
          <span className="text-indigo-200 font-bold uppercase tracking-widest text-sm">Fees</span>
        </div>

      </div>

    </div>
  );
}
`
  },
  {
    name: 'ReturnRefundInformation17',
    content: `import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';

export default function ReturnRefundInformation17({ data }: { data: any }) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (buttonRef.current && !clicked) {
      const rect = buttonRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      
      const distance = Math.sqrt(Math.pow(e.clientX - cx, 2) + Math.pow(e.clientY - cy, 2));
      
      if (distance < 150) {
        // Magnet pull
        setPosition({
          x: (e.clientX - cx) * 0.3,
          y: (e.clientY - cy) * 0.3
        });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    }
  };

  return (
    <div 
      className="p-8 min-h-[500px] rounded-3xl bg-neutral-100 flex flex-col items-center justify-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
    >
      <div className="absolute top-12 text-center pointer-events-none">
        <h2 className="text-3xl font-bold text-neutral-800">Magnetic Action</h2>
        <p className="text-neutral-500">Move your cursor near the button.</p>
      </div>

      <AnimatePresence>
        {!clicked && (
          <motion.button
            ref={buttonRef}
            className="w-48 h-48 bg-neutral-900 rounded-full flex flex-col items-center justify-center text-white font-bold shadow-2xl z-20"
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
            onClick={() => {
              setClicked(true);
              setPosition({ x: 0, y: 0 });
            }}
            exit={{ scale: 30, opacity: 0, transition: { duration: 1 } }}
          >
            <MousePointer2 className="mb-2 opacity-50" />
            Click Me
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {clicked && (
          <motion.div 
            className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center z-10 text-white p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-5xl font-black mb-8">Return Policy Unlocked</h2>
            <p className="text-xl max-w-2xl text-center text-neutral-400 leading-relaxed mb-8">
              We process refunds immediately upon carrier scan. No waiting weeks for warehouse processing.
            </p>
            <button 
              className="px-8 py-3 bg-white text-neutral-900 rounded-full font-bold"
              onClick={() => setClicked(false)}
            >
              Reset
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
`
  },
  {
    name: 'ReturnRefundInformation18',
    content: `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ReturnRefundInformation18({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Use whileInView instead of scroll mapping for grid reliability, but keep structure for text mask
  
  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-black flex items-center justify-center relative overflow-hidden group">
      
      {/* Background that text will mask */}
      <motion.div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2500&auto=format&fit=crop')] bg-cover bg-center opacity-50"
        initial={{ scale: 1.5, filter: "blur(10px)" }}
        whileInView={{ scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 2 }}
      />
      
      {/* Huge Masked Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-overlay">
        <h2 className="text-[200px] font-black text-white leading-none tracking-tighter uppercase whitespace-nowrap">
          REFUND
        </h2>
      </div>
      
      <div className="relative z-20 bg-black/60 backdrop-blur-md p-12 rounded-3xl border border-white/10 max-w-xl text-center mt-32 hover:bg-black/80 transition-colors">
        <h3 className="text-3xl font-bold text-white mb-4">A visual journey</h3>
        <p className="text-neutral-300 leading-relaxed">
          Our return process is designed to be as beautiful and seamless as our products. 
          Simply pack it up, stick the label on, and drop it off.
        </p>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ReturnRefundInformation19',
    content: `import React from 'react';
import { motion } from 'framer-motion';

export default function ReturnRefundInformation19({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-white tracking-widest uppercase">Cyber Policy</h2>
      </div>

      <div className="relative p-1 rounded-2xl overflow-hidden group">
        
        {/* Animated Neon Border */}
        <motion.div 
          className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        />
        
        {/* Glow Layer */}
        <motion.div 
          className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#06b6d4_360deg)] blur-2xl"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        />

        {/* Content Card */}
        <div className="relative bg-neutral-900 rounded-xl p-10 w-full max-w-lg z-10 shadow-2xl">
          <ul className="space-y-6 text-cyan-50 font-mono">
            <li className="flex items-center gap-4">
              <span className="text-cyan-400">01_</span>
              FREE GROUND SHIPPING
            </li>
            <li className="flex items-center gap-4 border-t border-neutral-800 pt-6">
              <span className="text-cyan-400">02_</span>
              NO RESTOCKING FEES
            </li>
            <li className="flex items-center gap-4 border-t border-neutral-800 pt-6">
              <span className="text-cyan-400">03_</span>
              INSTANT CREDIT VERIFICATION
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}
`
  },
  {
    name: 'ReturnRefundInformation20',
    content: `import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ReturnRefundInformation20({ data }: { data: any }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // This is a simplified "scratch" concept. In a real highly interactive DOM, 
  // you'd use HTML5 Canvas to actually scratch pixels. Here we use an expanding clipPath
  // triggered by hover duration or click to simulate revealing the card underneath.
  
  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-rose-50 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-rose-900">Scratch to Reveal</h2>
        <p className="text-rose-500">Click the gray card to scratch off the coating.</p>
      </div>

      <div 
        className="relative w-full max-w-md h-64 rounded-2xl shadow-xl cursor-crosshair overflow-hidden border-4 border-white"
        onClick={() => setIsRevealed(true)}
      >
        {/* Hidden Content */}
        <div className="absolute inset-0 bg-white p-8 flex flex-col items-center justify-center text-center">
          <h3 className="text-3xl font-black text-rose-600 mb-2">WINNER!</h3>
          <p className="text-neutral-600 font-bold">Just kidding, but our returns are free anyway.</p>
          <p className="text-sm text-neutral-400 mt-4">100% Refund guaranteed for 60 days.</p>
        </div>

        {/* Scratch-off Coating Layer */}
        <motion.div 
          className="absolute inset-0 bg-neutral-300 flex items-center justify-center"
          initial={false}
          animate={{
            opacity: isRevealed ? 0 : 1,
            scale: isRevealed ? 1.5 : 1,
            filter: isRevealed ? "blur(10px)" : "blur(0px)"
          }}
          transition={{ duration: 1 }}
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\"20\\" height=\\"20\\" viewBox=\\"0 0 20 20\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cg fill=\\"%23a3a3a3\\" fill-opacity=\\"0.4\\" fill-rule=\\"evenodd\\"%3E%3Ccircle cx=\\"3\\" cy=\\"3\\" r=\\"3\\"/>%3Ccircle cx=\\"13\\" cy=\\"13\\" r=\\"3\\"/>%3C/g%3E%3C/svg%3E")' }}
        >
          <span className="font-black text-4xl text-neutral-400 uppercase tracking-widest drop-shadow-md">
            ? ? ?
          </span>
        </motion.div>
      </div>

      {isRevealed && (
        <button 
          className="mt-8 px-6 py-2 bg-rose-200 text-rose-800 rounded-full font-bold hover:bg-rose-300 transition"
          onClick={() => setIsRevealed(false)}
        >
          Reset Card
        </button>
      )}
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
