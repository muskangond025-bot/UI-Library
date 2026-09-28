const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../src/components/sections/product/01-product-gallery');

const descriptions = {
  11: "Modern Bento Box Grid with varied aspect ratios",
  12: "Infinite Horizontal Marquee with hover-pause and scale",
  13: "Glassmorphism Focus Grid (others blur on hover)",
  14: "Vertical Split Parallax (auto-scrolling opposite columns)",
  15: "Cinematic Hero Gallery with floating glass thumbnails",
  16: "Polaroid Interactive Stack (spreads on hover)",
  17: "Magnetic Mouse Parallax Floating Gallery",
  18: "Horizontal Accordion Slider (expand on hover)",
  19: "Circular Mask Reveal Grid",
  20: "Interactive Lookbook with Pulsing Hotspots"
};

// We will use standard images for all, the UI will just present them differently
const codes = {
  11: `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery11({ data }: { data: any }) {
  const images = data?.settings?.images || [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80',
    'https://images.unsplash.com/photo-1546435770-a3e426fa03bd?w=1200&q=80',
    'https://images.unsplash.com/photo-1583394838173-6143b40d6cda?w=1200&q=80'
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
        {images.slice(0, 5).map((img: string, idx: number) => {
          let spanClasses = 'col-span-1 row-span-1';
          if (idx === 0) spanClasses = 'md:col-span-2 md:row-span-2';
          if (idx === 3) spanClasses = 'md:col-span-2 md:row-span-1';
          
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              className={\`relative overflow-hidden rounded-3xl group \${spanClasses} bg-gray-100\`}
            >
              <img 
                src={img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Bento Item"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}`,
  
  12: `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery12({ data }: { data: any }) {
  const images = data?.settings?.images || [];
  const marqueeImages = [...images, ...images, ...images];

  return (
    <div className="w-full py-12 overflow-hidden bg-white">
      <div className="flex w-full overflow-hidden">
        <motion.div 
          className="flex gap-6 px-3"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          {marqueeImages.map((img: string, idx: number) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative w-64 h-80 shrink-0 rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all"
            >
              <img src={img} className="w-full h-full object-cover" alt="Marquee Item" />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-medium">Quick View</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}`,

  13: `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery13({ data }: { data: any }) {
  const images = data?.settings?.images || [];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 bg-zinc-950 rounded-[3rem]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 group/grid">
        {images.slice(0, 4).map((img: string, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-2xl overflow-hidden relative group/item transition-all duration-500 hover:!blur-none hover:!opacity-100 group-hover/grid:blur-[4px] group-hover/grid:opacity-50"
          >
            <img src={img} className="w-full h-full object-cover" alt="Glass Focus" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover/item:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-white/90 text-sm font-medium tracking-widest uppercase">Inspect</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}`,

  14: `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery14({ data }: { data: any }) {
  const images = data?.settings?.images || [];
  
  return (
    <div className="w-full max-w-5xl mx-auto h-[600px] overflow-hidden rounded-[3rem] bg-gray-50 flex gap-4 p-4">
      <motion.div 
        className="flex-1 flex flex-col gap-4"
        animate={{ y: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {[...images, ...images].map((img: string, idx: number) => (
          <div key={idx} className="w-full aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
            <img src={img} className="w-full h-full object-cover" alt="Col 1" />
          </div>
        ))}
      </motion.div>
      <motion.div 
        className="flex-1 flex flex-col gap-4"
        animate={{ y: ["-50%", "0%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {[...images, ...images].reverse().map((img: string, idx: number) => (
          <div key={idx} className="w-full aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
            <img src={img} className="w-full h-full object-cover" alt="Col 2" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}`,

  15: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductGallery15({ data }: { data: any }) {
  const images = data?.settings?.images || [];
  const [active, setActive] = useState(0);

  return (
    <div className="w-full max-w-7xl mx-auto aspect-[21/9] min-h-[500px] relative rounded-[2rem] overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={active}
          src={images[active]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
        {images.slice(0, 5).map((img: string, idx: number) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={\`w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden transition-all duration-300 \${active === idx ? 'ring-2 ring-white scale-110 shadow-lg' : 'opacity-60 hover:opacity-100'}\`}
          >
            <img src={img} className="w-full h-full object-cover" alt="Thumb" />
          </button>
        ))}
      </div>
    </div>
  );
}`,

  16: `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery16({ data }: { data: any }) {
  const images = data?.settings?.images || [];

  return (
    <div className="w-full h-[500px] flex items-center justify-center bg-gray-50 rounded-[3rem] overflow-hidden group">
      <div className="relative w-64 h-80">
        {images.slice(0, 4).map((img: string, idx: number) => {
          const rotation = (idx - 1.5) * 10;
          const xOffset = (idx - 1.5) * 60;
          
          return (
            <motion.div
              key={idx}
              initial={{ rotate: rotation, x: 0 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="absolute inset-0 bg-white p-3 pb-12 rounded-lg shadow-xl border border-gray-100 transition-all duration-500 group-hover:!rotate-0"
              style={{
                transformOrigin: "bottom center"
              }}
              // When group is hovered, we spread them out via CSS combined with framer motion
              variants={{
                hover: { x: xOffset, rotate: 0 }
              }}
            >
              <div className="w-full h-full bg-gray-100 overflow-hidden rounded-sm">
                <img src={img} className="w-full h-full object-cover" alt="Polaroid" />
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* Hack for group hover spreading */}
      <style>{\`
        .group:hover > div > div:nth-child(1) { transform: translateX(-180px) rotate(-5deg) !important; }
        .group:hover > div > div:nth-child(2) { transform: translateX(-60px) rotate(-2deg) !important; }
        .group:hover > div > div:nth-child(3) { transform: translateX(60px) rotate(2deg) !important; }
        .group:hover > div > div:nth-child(4) { transform: translateX(180px) rotate(5deg) !important; }
      \`}</style>
    </div>
  );
}`,

  17: `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductGallery17({ data }: { data: any }) {
  const images = data?.settings?.images || [];
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -150]);

  return (
    <div ref={containerRef} className="w-full h-[600px] relative bg-white overflow-hidden rounded-[3rem]">
      {images[0] && (
        <motion.div style={{ y: y1 }} className="absolute top-10 left-10 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl">
          <img src={images[0]} className="w-full h-full object-cover" alt="Float 1" />
        </motion.div>
      )}
      {images[1] && (
        <motion.div style={{ y: y2 }} className="absolute top-40 right-20 w-80 h-96 rounded-3xl overflow-hidden shadow-2xl">
          <img src={images[1]} className="w-full h-full object-cover" alt="Float 2" />
        </motion.div>
      )}
      {images[2] && (
        <motion.div style={{ y: y3 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 w-72 h-64 rounded-[2rem] overflow-hidden shadow-2xl">
          <img src={images[2]} className="w-full h-full object-cover" alt="Float 3" />
        </motion.div>
      )}
    </div>
  );
}`,

  18: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery18({ data }: { data: any }) {
  const images = data?.settings?.images || [];
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto h-[500px] flex gap-2 overflow-hidden rounded-[2rem]">
      {images.slice(0, 5).map((img: string, idx: number) => (
        <motion.div
          key={idx}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
          animate={{
            flex: hovered === idx ? 4 : hovered === null ? 1 : 0.5
          }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="relative h-full overflow-hidden cursor-pointer rounded-2xl"
        >
          <img 
            src={img} 
            className="absolute inset-0 w-full h-full object-cover min-w-[200px]"
            style={{ objectPosition: 'center' }}
            alt="Accordion Item"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      ))}
    </div>
  );
}`,

  19: `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery19({ data }: { data: any }) {
  const images = data?.settings?.images || [];

  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {images.slice(0, 4).map((img: string, idx: number) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="aspect-square relative flex items-center justify-center bg-gray-50 rounded-full group overflow-hidden transition-all duration-500 hover:rounded-2xl"
        >
          <img 
            src={img} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 scale-110 group-hover:scale-100" 
            alt="Circle Reveal" 
          />
        </motion.div>
      ))}
    </div>
  );
}`,

  20: `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery20({ data }: { data: any }) {
  const images = data?.settings?.images || [];
  
  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-[2rem] overflow-hidden shadow-xl bg-gray-100">
        <img src={images[0]} className="w-full h-full object-cover" alt="Main Product" />
        
        {/* Hotspot 1 */}
        <div className="absolute top-1/3 left-1/4 group">
          <div className="relative">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-50 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white ring-4 ring-white/30 cursor-pointer"></span>
            <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-48 bg-white/90 backdrop-blur p-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-200">
              <img src={images[1]} className="w-full h-32 object-cover rounded-lg mb-2" alt="Detail 1" />
              <p className="text-xs font-medium text-gray-900 text-center">Premium Materials</p>
            </div>
          </div>
        </div>

        {/* Hotspot 2 */}
        <div className="absolute top-2/3 right-1/3 group">
          <div className="relative">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-50 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white ring-4 ring-white/30 cursor-pointer"></span>
            <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-48 bg-white/90 backdrop-blur p-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-200">
              <img src={images[2]} className="w-full h-32 object-cover rounded-lg mb-2" alt="Detail 2" />
              <p className="text-xs font-medium text-gray-900 text-center">Attention to Detail</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}`
};

for (let i = 11; i <= 20; i++) {
  const compDir = path.join(targetDir, 'product-gallery-' + i);
  if (!fs.existsSync(compDir)) {
    fs.mkdirSync(compDir, { recursive: true });
  }

  // Write TSX
  const tsxPath = path.join(compDir, 'ProductGallery' + i + '.tsx');
  fs.writeFileSync(tsxPath, codes[i]);

  // Update JSON description
  const jsonPath = path.join(compDir, 'product-gallery-' + i + '.json');
  if (fs.existsSync(jsonPath)) {
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    data.description = descriptions[i];
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
  }
  
  console.log('Generated ProductGallery' + i);
}
