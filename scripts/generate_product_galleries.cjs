const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/01-product-gallery');

const galleries = [
  {
    num: 1,
    name: 'ProductGallery1',
    code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductGallery1({ data }: { data: any }) {
  const images = data?.settings?.images || [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80'
  ];
  
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <motion.div 
            className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 relative"
            layoutId="main-image"
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={selected}
                src={selected}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full object-cover"
                alt="Product"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>
        
        <div className="flex md:flex-col gap-4 overflow-x-auto md:w-32 shrink-0 hide-scrollbar pb-2 md:pb-0">
          {images.map((img: string, idx: number) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelected(img)}
              className={\`w-20 h-20 md:w-full md:aspect-square rounded-xl overflow-hidden border-2 transition-colors shrink-0 \${selected === img ? 'border-indigo-600 shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'}\`}
            >
              <img src={img} className="w-full h-full object-cover" alt={\`Thumbnail \${idx + 1}\`} />
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}`
  },
  {
    num: 2,
    name: 'ProductGallery2',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery2({ data }: { data: any }) {
  const images = data?.settings?.images || [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80',
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80'
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
        {images.map((img: string, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={\`rounded-2xl overflow-hidden group relative \${idx === 0 ? 'col-span-2 row-span-2' : ''}\`}
          >
            <img 
              src={img} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt={\`Gallery item \${idx}\`} 
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center backdrop-blur-[2px] opacity-0 group-hover:opacity-100">
              <span className="text-white font-medium tracking-wider uppercase text-sm border border-white/50 px-6 py-2 rounded-full">View</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}`
  },
  {
    num: 3,
    name: 'ProductGallery3',
    code: `import React from 'react';
import { motion } from 'framer-motion';

// Infinite Marquee Gallery inspired by the PDF & Infinite Menu requirements
export default function ProductGallery3({ data }: { data: any }) {
  const baseImages = data?.settings?.images || [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80'
  ];
  const images = [...baseImages, ...baseImages, ...baseImages];

  return (
    <div className="w-full py-16 overflow-hidden bg-gray-50 flex flex-col gap-8">
      <div className="text-center px-4">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Immersive Views</h3>
        <p className="text-gray-500">Explore our product from every angle in high definition.</p>
      </div>
      
      <div className="relative w-full overflow-hidden flex" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <motion.div 
          className="flex gap-6 px-3"
          animate={{ x: [0, -1920] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {images.map((img: string, idx: number) => (
            <div key={idx} className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] shrink-0 rounded-3xl overflow-hidden relative group">
              <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Marquee item" />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-medium">Zoom In</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}`
  },
  {
    num: 4,
    name: 'ProductGallery4',
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery4({ data }: { data: any }) {
  const images = data?.settings?.images || [
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80'
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
        <motion.div 
          className="lg:col-span-2 rounded-3xl overflow-hidden relative group"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img src={images[0]} className="w-full h-full object-cover" alt="Main" />
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium">Featured</div>
        </motion.div>
        
        <div className="flex flex-col gap-6 h-full">
          {images.slice(1, 3).map((img: string, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex-1 rounded-3xl overflow-hidden relative group"
            >
              <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Secondary" />
              {idx === 1 && images.length > 3 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-black/50 transition-colors">
                  <span className="text-white text-xl font-bold">+{images.length - 3} More</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`
  },
  {
    num: 5,
    name: 'ProductGallery5',
    code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Slider with Glass Icons
export default function ProductGallery5({ data }: { data: any }) {
  const images = data?.settings?.images || [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80'
  ];
  
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-gray-900 shadow-2xl">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={index}
            src={images[index]}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        
        <button 
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button 
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
        
        <div className="absolute bottom-6 inset-x-0 flex justify-center gap-2 z-10">
          {images.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setIndex(i)}
              className={\`w-2 h-2 rounded-full transition-all \${i === index ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'}\`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}`
  },
  {
    num: 6,
    name: 'ProductGallery6',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery6({ data }: { data: any }) {
  const images = data?.settings?.images || [
    'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'
  ];

  return (
    <div className="w-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 flex flex-col justify-center space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
          >
            Design in the Details.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500"
          >
            Discover the intricate craftsmanship and premium materials that make our product stand out from the rest.
          </motion.p>
        </div>
        
        <div className="lg:w-2/3 grid grid-cols-2 gap-4">
          {images.map((img: string, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={\`rounded-2xl overflow-hidden \${idx % 3 === 0 ? 'col-span-2 aspect-[21/9]' : 'aspect-square'}\`}
            >
              <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery detail" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}`
  },
  {
    num: 7,
    name: 'ProductGallery7',
    code: `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductGallery7({ data }: { data: any }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const images = data?.settings?.images || [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80'
  ];

  return (
    <div ref={containerRef} className="w-full bg-[#0a0a0a] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">A Closer Look</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Parallax scrolling gallery that reveals every stunning detail.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <motion.div style={{ y: y1 }} className="space-y-8 md:space-y-16">
            <div className="rounded-3xl overflow-hidden aspect-[4/5]">
              <img src={images[0]} className="w-full h-full object-cover" alt="Image 1" />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-square">
              <img src={images[2]} className="w-full h-full object-cover" alt="Image 3" />
            </div>
          </motion.div>
          
          <motion.div style={{ y: y2 }} className="space-y-8 md:space-y-16 md:mt-32">
            <div className="rounded-3xl overflow-hidden aspect-square">
              <img src={images[1]} className="w-full h-full object-cover" alt="Image 2" />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-[4/5]">
              <img src={images[3]} className="w-full h-full object-cover" alt="Image 4" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}`
  },
  {
    num: 8,
    name: 'ProductGallery8',
    code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductGallery8({ data }: { data: any }) {
  const images = data?.settings?.images || [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'
  ];
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="flex flex-col lg:flex-row gap-4 h-[600px]">
        {images.map((img: string, idx: number) => {
          const isActive = active === idx;
          return (
            <motion.div
              key={idx}
              onHoverStart={() => setActive(idx)}
              onHoverEnd={() => setActive(null)}
              animate={{ flex: isActive ? 3 : 1 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="relative rounded-3xl overflow-hidden cursor-pointer min-h-[100px] h-full"
            >
              <img 
                src={img} 
                className="absolute inset-0 w-full h-full object-cover" 
                alt={\`Accordion \${idx}\`} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <AnimatePresence>
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.2 }}
                    className="absolute bottom-8 left-8 right-8"
                  >
                    <h3 className="text-white text-2xl font-bold mb-2">View Angle {idx + 1}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2">Experience the fine materials and build quality from this perspective, highlighting the core design philosophy.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}`
  },
  {
    num: 9,
    name: 'ProductGallery9',
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery9({ data }: { data: any }) {
  const images = data?.settings?.images || [
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80'
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden"
            >
              <img src={images[0]} className="w-full h-full object-cover" alt="Main" />
            </motion.div>
            <div className="grid grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full aspect-square rounded-[2rem] overflow-hidden"
              >
                <img src={images[1]} className="w-full h-full object-cover" alt="Sub 1" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="w-full aspect-square rounded-[2rem] overflow-hidden"
              >
                <img src={images[2]} className="w-full h-full object-cover" alt="Sub 2" />
              </motion.div>
            </div>
          </div>
          
          <div className="md:col-span-4 flex flex-col justify-between pt-12 pb-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Aesthetic Appeal</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Every curve, material, and finish has been carefully chosen to create a timeless design that fits perfectly in your life.
              </p>
              <ul className="space-y-4 mb-12">
                {[
                  'Premium Grade Materials',
                  'Precision Engineering',
                  'Sustainable Manufacturing',
                  'Ergonomic Comfort'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800 font-medium">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full aspect-[3/4] rounded-[2rem] overflow-hidden relative"
            >
              <img src={images[3]} className="w-full h-full object-cover" alt="Sub 3" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
  {
    num: 10,
    name: 'ProductGallery10',
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery10({ data }: { data: any }) {
  const images = data?.settings?.images || [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80'
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full min-h-screen bg-[#111] py-20 flex flex-col justify-center">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase">Visual Identity</h2>
        <div className="h-1 w-24 bg-indigo-500 mx-auto rounded-full" />
      </div>
      
      <div className="w-full overflow-hidden flex flex-col md:flex-row gap-2 px-2 h-[70vh]">
        {images.map((img: string, idx: number) => {
          const isHovered = hoveredIndex === idx;
          const isOtherHovered = hoveredIndex !== null && !isHovered;
          
          return (
            <motion.div
              key={idx}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
              animate={{ 
                flex: isHovered ? 4 : isOtherHovered ? 0.5 : 1,
                opacity: isOtherHovered ? 0.5 : 1
              }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="relative rounded-xl overflow-hidden cursor-crosshair min-h-[100px] h-full"
            >
              <img 
                src={img} 
                className="absolute inset-0 w-full h-full object-cover" 
                alt={\`Gallery \${idx}\`} 
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-500" />
              
              <motion.div 
                className="absolute inset-0 border-4 border-white/0 flex items-center justify-center mix-blend-overlay"
                animate={{ borderColor: isHovered ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0)' }}
              >
                {isHovered && (
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-white/80 font-bold text-6xl tracking-widest uppercase rotate-90 md:rotate-0"
                  >
                    0{idx + 1}
                  </motion.span>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}`
  }
];

// Write components and json
galleries.forEach(g => {
  const dirPath = path.join(baseDir, 'product-gallery-' + g.num);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Write component
  fs.writeFileSync(path.join(dirPath, g.name + '.tsx'), g.code);
  
  // Write JSON
  const jsonContent = {
    id: 'product-gallery-' + g.num,
    name: 'Product Gallery ' + g.num,
    type: "product-gallery",
    settings: {
      images: [
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80',
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80',
        'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=1200&q=80',
        'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=80'
      ]
    }
  };
  fs.writeFileSync(path.join(dirPath, 'product-gallery-' + g.num + '.json'), JSON.stringify(jsonContent, null, 2));
});

console.log('Successfully generated 10 robust product gallery components.');
