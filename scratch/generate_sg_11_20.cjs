const fs = require('fs');
const path = require('path');

const sg11 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sizes = [
  { size: 'XS', dims: '34" Chest' },
  { size: 'S', dims: '36" Chest' },
  { size: 'M', dims: '38" Chest' },
  { size: 'L', dims: '40" Chest' },
  { size: 'XL', dims: '42" Chest' }
];

export default function SizeGuide11({ data }: { data: any }) {
  const [index, setIndex] = useState(2);

  return (
    <section className="py-32 bg-neutral-950 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-4xl flex flex-col items-center">
        
        <h2 className="text-4xl font-bold text-white mb-20 tracking-[0.2em] uppercase">Dial in your fit</h2>

        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border border-white/10 flex items-center justify-center">
          {/* Active Display in Center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="text-8xl font-black text-white leading-none">{sizes[index].size}</div>
                <div className="text-blue-400 font-mono mt-4 tracking-widest">{sizes[index].dims}</div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Rotating Dial Items */}
          {sizes.map((s, i) => {
            // Calculate angle based on difference from active index
            let diff = i - index;
            // Handle wrap around for infinite circular feel
            if (diff > 2) diff -= sizes.length;
            if (diff < -2) diff += sizes.length;

            const angle = diff * 72; // 360 / 5 sizes
            const isActive = i === index;

            return (
              <motion.button
                key={i}
                onClick={() => setIndex(i)}
                animate={{ rotate: angle }}
                transition={{ type: "spring", bounce: 0.4, duration: 1 }}
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                  <div className={\`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 \${isActive ? 'bg-blue-600 text-white shadow-[0_0_30px_rgba(37,99,235,0.5)] scale-125' : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'}\`}>
                    {s.size}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
`;

const sg12 = `import React from 'react';
import { motion } from 'framer-motion';

const sizes = [
  { size: 'Small', w: '29-31', c: '36-38' },
  { size: 'Medium', w: '31-33', c: '38-40' },
  { size: 'Large', w: '33-35', c: '40-42' }
];

export default function SizeGuide12({ data }: { data: any }) {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100, rotateY: -45 },
    show: { opacity: 1, x: 0, rotateY: 0, transition: { type: "spring", duration: 1 } }
  };

  return (
    <section className="py-32 bg-[#e8e8e8] min-h-screen flex items-center justify-center perspective-[1000px] overflow-hidden">
      <div className="max-w-7xl w-full px-6 flex flex-col md:flex-row gap-12 items-center">
        
        <div className="md:w-1/3">
          <h2 className="text-6xl font-black text-black leading-none mb-6">Scroll.<br/>Compare.</h2>
          <p className="text-neutral-500">Horizontal comparison cards that snap into view.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="md:w-2/3 flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar"
        >
          {sizes.map((s, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="min-w-[300px] h-[400px] bg-white rounded-[2rem] shadow-xl p-8 flex flex-col snap-center group hover:bg-black transition-colors duration-500"
            >
              <h3 className="text-4xl font-black text-black group-hover:text-white transition-colors duration-500 mb-12">{s.size}</h3>
              
              <div className="space-y-6 mt-auto">
                <div className="border-b border-neutral-200 group-hover:border-white/20 pb-2 transition-colors">
                  <div className="text-sm font-bold text-neutral-400 group-hover:text-neutral-500 uppercase">Waist</div>
                  <div className="text-2xl text-neutral-800 group-hover:text-white transition-colors">{s.w}"</div>
                </div>
                <div className="border-b border-neutral-200 group-hover:border-white/20 pb-2 transition-colors">
                  <div className="text-sm font-bold text-neutral-400 group-hover:text-neutral-500 uppercase">Chest</div>
                  <div className="text-2xl text-neutral-800 group-hover:text-white transition-colors">{s.c}"</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
`;

const sg13 = `import React from 'react';
import { motion } from 'framer-motion';

export default function SizeGuide13({ data }: { data: any }) {
  const marks = [
    { label: 'XS', pos: 20 },
    { label: 'S', pos: 35 },
    { label: 'M', pos: 50 },
    { label: 'L', pos: 65 },
    { label: 'XL', pos: 80 },
  ];

  return (
    <section className="py-32 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full px-6 text-center">
        
        <h2 className="text-4xl font-light text-white tracking-[0.3em] uppercase mb-32">The Measuring Tape</h2>

        <div className="relative w-full h-32 bg-yellow-400 rounded-lg shadow-2xl flex items-center overflow-hidden border-y-4 border-yellow-500">
          
          {/* Tick marks generator */}
          <div className="absolute inset-0 flex justify-between px-2">
            {[...Array(50)].map((_, i) => (
              <div key={i} className={\`w-[2px] bg-black/80 \${i % 5 === 0 ? 'h-8' : 'h-4'}\`} />
            ))}
          </div>

          {/* Markers */}
          {marks.map((m, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, y: -50 }}
              whileInView={{ scale: 1, y: 0 }}
              transition={{ delay: i * 0.15, type: "spring", bounce: 0.5 }}
              viewport={{ once: true }}
              className="absolute flex flex-col items-center"
              style={{ left: \`\${m.pos}%\`, transform: 'translateX(-50%)' }}
            >
              <div className="w-1 h-32 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)] z-10" />
              <div className="absolute -bottom-16 bg-red-600 text-white font-black text-xl px-4 py-2 rounded-full whitespace-nowrap">
                {m.label} = {m.pos}"
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
`;

const sg14 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';

const sizes = ['XS', 'S', 'M', 'L'];
const metrics = ['Chest', 'Waist', 'Hips', 'Length'];

const matrix = {
  XS: [34, 28, 34, 26],
  S:  [36, 30, 36, 27],
  M:  [38, 32, 38, 28],
  L:  [40, 34, 40, 29]
};

export default function SizeGuide14({ data }: { data: any }) {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);

  return (
    <section className="py-32 bg-[#050505] min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Neon Crosshairs */}
      <motion.div 
        animate={{ opacity: hoveredRow !== null ? 1 : 0, top: hoveredRow !== null ? hoveredRow * 80 + 180 : 0 }}
        className="absolute left-0 right-0 h-[1px] bg-cyan-400 shadow-[0_0_15px_#22d3ee] pointer-events-none transition-all duration-300"
      />
      <motion.div 
        animate={{ opacity: hoveredCol !== null ? 1 : 0, left: hoveredCol !== null ? hoveredCol * (100/4) + '%' : 0 }}
        className="absolute top-0 bottom-0 w-[1px] bg-fuchsia-400 shadow-[0_0_15px_#e879f9] pointer-events-none transition-all duration-300"
      />

      <div className="max-w-5xl w-full px-6 relative z-10">
        <h2 className="text-5xl font-black text-white text-center mb-16">Neon Matrix</h2>
        
        <div className="grid grid-cols-5 gap-4 text-center border-b border-white/10 pb-4 mb-4">
          <div />
          {metrics.map((m, i) => (
            <div key={m} className="font-bold text-white/50 uppercase tracking-widest text-sm">{m}</div>
          ))}
        </div>

        {sizes.map((s, rowIndex) => (
          <div 
            key={s} 
            className="grid grid-cols-5 gap-4 text-center h-[80px] items-center relative"
            onMouseEnter={() => setHoveredRow(rowIndex)}
            onMouseLeave={() => setHoveredRow(null)}
          >
            <div className="font-black text-2xl text-white">{s}</div>
            
            {matrix[s as keyof typeof matrix].map((val, colIndex) => (
              <div 
                key={colIndex} 
                className={\`text-xl transition-colors duration-300 \${hoveredRow === rowIndex && hoveredCol === colIndex + 1 ? 'text-white font-bold scale-125' : 'text-neutral-500'}\`}
                onMouseEnter={() => setHoveredCol(colIndex + 1)}
                onMouseLeave={() => setHoveredCol(null)}
              >
                {val}"
              </div>
            ))}
          </div>
        ))}

      </div>
    </section>
  );
}
`;

const sg15 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';

const sizes = [
  { us: 'S', eu: '46', uk: '36' },
  { us: 'M', eu: '48', uk: '38' },
  { us: 'L', eu: '50', uk: '40' },
  { us: 'XL', eu: '52', uk: '42' }
];

export default function SizeGuide15({ data }: { data: any }) {
  return (
    <section className="py-32 bg-neutral-100 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black text-black">Global Conversion</h2>
        <p className="text-neutral-500 mt-2">Hover a card to flip and view international sizes.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 perspective-[1500px]">
        {sizes.map((s, i) => (
          <FlipCard key={i} size={s} index={i} />
        ))}
      </div>
    </section>
  );
}

function FlipCard({ size, index }: any) {
  const [isFlipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: "spring" }}
      viewport={{ once: true }}
      className="w-64 h-80 relative preserve-3d cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div 
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className="w-full h-full preserve-3d"
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-black rounded-3xl p-8 flex flex-col items-center justify-center shadow-xl border border-white/10">
          <span className="text-white/50 font-bold uppercase tracking-widest text-sm mb-4">US Size</span>
          <span className="text-8xl font-black text-white">{size.us}</span>
        </div>
        
        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden bg-white rounded-3xl p-8 flex flex-col items-center justify-center shadow-xl border border-neutral-200"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="text-center mb-6">
            <span className="text-neutral-400 font-bold uppercase tracking-widest text-xs block mb-1">EU Size</span>
            <span className="text-4xl font-black text-black">{size.eu}</span>
          </div>
          <div className="w-full h-[1px] bg-neutral-200 mb-6" />
          <div className="text-center">
            <span className="text-neutral-400 font-bold uppercase tracking-widest text-xs block mb-1">UK Size</span>
            <span className="text-4xl font-black text-black">{size.uk}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
`;

const sg16 = `import React from 'react';
import { motion } from 'framer-motion';

export default function SizeGuide16({ data }: { data: any }) {
  return (
    <section className="py-32 bg-[#1a1a1a] min-h-screen flex items-center justify-center">
      
      <motion.div 
        initial={{ rotate: -5, y: 100, opacity: 0 }}
        whileInView={{ rotate: 2, y: 0, opacity: 1 }}
        whileHover={{ rotate: 0, scale: 1.02 }}
        transition={{ type: "spring", bounce: 0.4 }}
        viewport={{ once: true }}
        className="w-[400px] bg-[#f4f1ea] shadow-2xl relative"
        style={{ filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.5))" }}
      >
        {/* Jagged top */}
        <div className="absolute -top-3 left-0 right-0 h-4 bg-repeat-x flex">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-[#f4f1ea]" />
          ))}
        </div>

        <div className="p-10 pb-16 font-mono text-neutral-800 border-x-4 border-b-4 border-dashed border-neutral-300">
          <div className="text-center border-b-2 border-black pb-6 mb-6">
            <h2 className="text-2xl font-black uppercase tracking-widest">Receipt Guide</h2>
            <div className="text-sm mt-2 opacity-60"># 000492 - STANDARD FIT</div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between font-bold text-lg">
              <span>SIZE</span>
              <span>CHEST</span>
            </div>
            <div className="border-b border-dotted border-black/30" />
            
            <div className="flex justify-between">
              <span>X-SMALL</span>
              <span>34.00"</span>
            </div>
            <div className="flex justify-between">
              <span>SMALL</span>
              <span>36.00"</span>
            </div>
            <div className="flex justify-between">
              <span>MEDIUM</span>
              <span>38.00"</span>
            </div>
            <div className="flex justify-between">
              <span>LARGE</span>
              <span>40.00"</span>
            </div>
            <div className="flex justify-between">
              <span>X-LARGE</span>
              <span>42.00"</span>
            </div>
            
            <div className="border-b-2 border-black pt-4 mb-4" />
            <div className="text-center text-sm opacity-60">THANK YOU FOR SHOPPING</div>
            
            {/* Barcode */}
            <div className="mt-8 flex justify-center h-16 w-full">
              {[...Array(30)].map((_, i) => (
                <div key={i} className="bg-black h-full" style={{ width: Math.random() * 4 + 1 + 'px', marginRight: Math.random() * 4 + 1 + 'px' }} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
`;

const sg17 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function SizeGuide17({ data }: { data: any }) {
  const [hovered, setHovered] = useState<string | null>(null);

  const stats = [
    { size: 'S', points: "50,10 90,50 50,90 10,50" }, // Small diamond
    { size: 'M', points: "50,5 95,50 50,95 5,50" },  // Medium diamond
    { size: 'L', points: "50,0 100,50 50,100 0,50" } // Large diamond
  ];

  return (
    <section className="py-32 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full px-6 flex flex-col md:flex-row gap-20 items-center justify-center">
        
        <div className="relative w-80 h-80">
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            {/* Grid lines */}
            <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            
            {/* Labels */}
            <text x="50" y="-5" fill="white" fontSize="4" textAnchor="middle">CHEST</text>
            <text x="50" y="108" fill="white" fontSize="4" textAnchor="middle">WAIST</text>
            <text x="-5" y="51" fill="white" fontSize="4" textAnchor="end">HIPS</text>
            <text x="105" y="51" fill="white" fontSize="4" textAnchor="start">LENGTH</text>

            {/* Radar Polygons */}
            {stats.map((s, i) => {
              const isHovered = hovered === s.size;
              const isFaded = hovered !== null && hovered !== s.size;
              
              return (
                <motion.polygon
                  key={s.size}
                  points={s.points}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: isFaded ? 0.1 : 0.4, scale: 1 }}
                  animate={{ 
                    opacity: isHovered ? 0.8 : isFaded ? 0.1 : 0.4,
                    strokeWidth: isHovered ? 1.5 : 0.5
                  }}
                  transition={{ delay: i * 0.2, type: "spring" }}
                  fill={isHovered ? '#3b82f6' : 'rgba(255,255,255,0.1)'}
                  stroke={isHovered ? '#60a5fa' : 'rgba(255,255,255,0.5)'}
                  className="transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHovered(s.size)}
                  onMouseLeave={() => setHovered(null)}
                />
              );
            })}
          </svg>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-white mb-6">Radar Chart</h2>
          {stats.map((s) => (
            <button
              key={s.size}
              onMouseEnter={() => setHovered(s.size)}
              onMouseLeave={() => setHovered(null)}
              className={\`px-8 py-4 rounded-xl border text-xl font-black transition-all \${hovered === s.size ? 'border-blue-500 bg-blue-500/20 text-white scale-110 ml-4' : 'border-white/20 text-white/50 hover:border-white/50'}\`}
            >
              SIZE {s.size}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
`;

const sg18 = `import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SizeGuide18({ data }: { data: any }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop" 
          className="w-full h-[150%] object-cover object-top opacity-30"
        />
      </motion.div>

      <div className="relative z-10 max-w-4xl w-full px-6 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-black text-white leading-none mix-blend-overlay"
          >
            PERFECT<br/>FIT.
          </motion.h2>
        </div>

        <div className="md:w-1/2 w-full space-y-4">
          {['SMALL 36"', 'MEDIUM 38"', 'LARGE 40"', 'X-LARGE 42"'].map((size, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15, type: "spring" }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white font-bold text-2xl tracking-widest uppercase hover:bg-white/20 transition-colors cursor-pointer"
            >
              {size}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

const sg19 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SizeGuide19({ data }: { data: any }) {
  const [step, setStep] = useState(1);
  const [selectedFit, setFit] = useState<string | null>(null);

  return (
    <section className="py-32 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full px-6">
        
        <div className="flex gap-4 mb-16">
          <div className={\`flex-1 h-2 rounded-full transition-colors duration-500 \${step >= 1 ? 'bg-black' : 'bg-neutral-200'}\`} />
          <div className={\`flex-1 h-2 rounded-full transition-colors duration-500 \${step >= 2 ? 'bg-black' : 'bg-neutral-200'}\`} />
        </div>

        <div className="relative h-[400px]">
          <AnimatePresence mode="wait">
            
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="absolute inset-0 flex flex-col"
              >
                <h2 className="text-4xl font-black text-black mb-8">Step 1: Choose Your Fit</h2>
                <div className="space-y-4 flex-1">
                  {['Slim Fit', 'Regular Fit', 'Oversized'].map((fit) => (
                    <button
                      key={fit}
                      onClick={() => setFit(fit)}
                      className={\`w-full p-6 text-left rounded-2xl border-2 font-bold text-xl transition-all \${selectedFit === fit ? 'border-black bg-neutral-50' : 'border-neutral-200 hover:border-black'}\`}
                    >
                      {fit}
                    </button>
                  ))}
                </div>
                <button 
                  disabled={!selectedFit}
                  onClick={() => setStep(2)}
                  className="w-full bg-black text-white p-6 rounded-2xl font-bold text-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-800 transition-colors"
                >
                  Continue
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="absolute inset-0 flex flex-col"
              >
                <h2 className="text-4xl font-black text-black mb-8">Step 2: Recommended Size</h2>
                <div className="flex-1 flex flex-col items-center justify-center bg-neutral-50 rounded-3xl border border-neutral-200 mb-6">
                  <span className="text-neutral-500 font-bold uppercase tracking-widest mb-4">Based on {selectedFit}</span>
                  <span className="text-8xl font-black text-black">Medium</span>
                </div>
                <button 
                  onClick={() => setStep(1)}
                  className="w-full bg-transparent border-2 border-black text-black p-6 rounded-2xl font-bold text-xl hover:bg-neutral-50 transition-colors"
                >
                  Start Over
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
`;

const sg20 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default function SizeGuide20({ data }: { data: any }) {
  const [frozenSize, setFrozenSize] = useState<string | null>(null);

  return (
    <section className="py-32 bg-black min-h-screen flex items-center justify-center overflow-hidden relative">
      
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <motion.div 
          animate={frozenSize ? { x: 0 } : { x: [0, -2000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap px-16 pointer-events-auto"
        >
          {sizes.map((s, i) => (
            <motion.button
              key={i}
              onClick={() => setFrozenSize(s)}
              className={\`text-[150px] md:text-[250px] font-black uppercase transition-all duration-500 \${frozenSize === s ? 'text-white scale-110' : frozenSize ? 'text-white/5 blur-sm' : 'text-white/20 hover:text-white'}\`}
            >
              {s}
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {frozenSize && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[3rem] p-12 shadow-2xl z-20"
          >
            <button 
              onClick={() => setFrozenSize(null)}
              className="absolute top-8 right-8 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            >
              ✕
            </button>
            <h3 className="text-5xl font-black text-white mb-8">Size {frozenSize} Specs</h3>
            <div className="grid grid-cols-2 gap-8 text-white">
              <div className="border-b border-white/20 pb-4">
                <div className="text-sm text-white/50 font-bold uppercase tracking-widest">Chest</div>
                <div className="text-3xl font-light">38.5"</div>
              </div>
              <div className="border-b border-white/20 pb-4">
                <div className="text-sm text-white/50 font-bold uppercase tracking-widest">Length</div>
                <div className="text-3xl font-light">28.0"</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
`;

const files = [
  { path: '../src/components/sections/product/09-size-guide/size-guide-11/SizeGuide11.tsx', content: sg11 },
  { path: '../src/components/sections/product/09-size-guide/size-guide-12/SizeGuide12.tsx', content: sg12 },
  { path: '../src/components/sections/product/09-size-guide/size-guide-13/SizeGuide13.tsx', content: sg13 },
  { path: '../src/components/sections/product/09-size-guide/size-guide-14/SizeGuide14.tsx', content: sg14 },
  { path: '../src/components/sections/product/09-size-guide/size-guide-15/SizeGuide15.tsx', content: sg15 },
  { path: '../src/components/sections/product/09-size-guide/size-guide-16/SizeGuide16.tsx', content: sg16 },
  { path: '../src/components/sections/product/09-size-guide/size-guide-17/SizeGuide17.tsx', content: sg17 },
  { path: '../src/components/sections/product/09-size-guide/size-guide-18/SizeGuide18.tsx', content: sg18 },
  { path: '../src/components/sections/product/09-size-guide/size-guide-19/SizeGuide19.tsx', content: sg19 },
  { path: '../src/components/sections/product/09-size-guide/size-guide-20/SizeGuide20.tsx', content: sg20 },
];

files.forEach(f => {
  const fullPath = path.join(__dirname, f.path);
  fs.writeFileSync(fullPath, f.content, 'utf8');
});

console.log('Size Guide 11-20 created!');
