const fs = require('fs');
const path = require('path');

const p11 = `import React from 'react';
import { motion } from 'framer-motion';

const specs = [
  { icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", title: "Silicon", details: ["A17 Pro", "6-core CPU", "16-core Neural Engine"] },
  { icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z", title: "Camera", details: ["48MP Main", "12MP Ultrawide", "Photonic Engine"] },
  { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Power", details: ["29h playback", "MagSafe up to 15W", "USB-C fast charge"] },
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Durability", details: ["Ceramic Shield", "Aerospace Titanium", "IP68 water resistant"] }
];

export default function ProductSpecifications11({ data }: { data: any }) {
  return (
    <section className="py-24 bg-neutral-900 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16">Core Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative h-80 bg-neutral-950 border border-white/10 rounded-[2rem] overflow-hidden p-8 flex flex-col items-center justify-center text-center cursor-pointer"
            >
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="transform group-hover:-translate-y-12 transition-transform duration-500 ease-out flex flex-col items-center">
                <svg className="w-16 h-16 text-neutral-500 mb-6 group-hover:text-blue-400 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={spec.icon} />
                </svg>
                <h3 className="text-2xl font-bold text-white">{spec.title}</h3>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <ul className="space-y-3">
                  {spec.details.map((detail, j) => (
                    <li key={j} className="text-sm text-neutral-300 border-b border-white/5 pb-2 last:border-0">{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

const p12 = `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductSpecifications12({ data }: { data: any }) {
  // Simulating a 3D rotating isometric grid
  return (
    <section className="py-32 bg-black min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full text-center mb-16 relative z-20">
        <h2 className="text-5xl font-black text-white">Engineered precision.</h2>
        <p className="text-neutral-400 mt-4 text-xl">Every nanometer counts.</p>
      </div>

      <div className="relative w-full max-w-4xl mx-auto aspect-video perspective-[2000px]">
        <motion.div 
          animate={{ rotateY: [0, -360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformStyle: "preserve-3d" }}
          className="w-full h-full relative"
        >
          {/* Front Face */}
          <div className="absolute inset-0 bg-neutral-900/80 border border-white/20 backdrop-blur-xl rounded-3xl p-12 flex flex-col justify-between" style={{ transform: "translateZ(250px)" }}>
            <h3 className="text-3xl font-bold text-white">Silicon</h3>
            <div>
              <p className="text-6xl font-black text-blue-500 mb-2">3nm</p>
              <p className="text-xl text-neutral-400">Industry-first architecture.</p>
            </div>
          </div>

          {/* Back Face */}
          <div className="absolute inset-0 bg-neutral-900/80 border border-white/20 backdrop-blur-xl rounded-3xl p-12 flex flex-col justify-between" style={{ transform: "rotateY(180deg) translateZ(250px)" }}>
            <h3 className="text-3xl font-bold text-white">Graphics</h3>
            <div>
              <p className="text-6xl font-black text-purple-500 mb-2">20%</p>
              <p className="text-xl text-neutral-400">Faster GPU performance.</p>
            </div>
          </div>

          {/* Left Face */}
          <div className="absolute inset-0 bg-neutral-900/80 border border-white/20 backdrop-blur-xl rounded-3xl p-12 flex flex-col justify-between" style={{ transform: "rotateY(-90deg) translateZ(400px)" }}>
            <h3 className="text-3xl font-bold text-white">Neural</h3>
            <div>
              <p className="text-6xl font-black text-emerald-500 mb-2">2x</p>
              <p className="text-xl text-neutral-400">Faster machine learning.</p>
            </div>
          </div>

          {/* Right Face */}
          <div className="absolute inset-0 bg-neutral-900/80 border border-white/20 backdrop-blur-xl rounded-3xl p-12 flex flex-col justify-between" style={{ transform: "rotateY(90deg) translateZ(400px)" }}>
            <h3 className="text-3xl font-bold text-white">Memory</h3>
            <div>
              <p className="text-6xl font-black text-pink-500 mb-2">17%</p>
              <p className="text-xl text-neutral-400">More memory bandwidth.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
`;

const p13 = `import React from 'react';

const specs = [
  { id: "display", title: "Display", content: "6.7-inch Super Retina XDR display with ProMotion. 2796-by-1290-pixel resolution at 460 ppi. 2,000,000:1 contrast ratio (typical)." },
  { id: "camera", title: "Camera", content: "Pro camera system. 48MP Main: 24 mm, f/1.78 aperture. 12MP Ultra Wide: 13 mm, f/2.2 aperture. 12MP 5x Telephoto: 120 mm, f/2.8 aperture." },
  { id: "battery", title: "Power & Battery", content: "Video playback: Up to 29 hours. Fast-charge capable: Up to 50% charge in around 30 minutes with 20W adapter." },
  { id: "sensors", title: "Sensors", content: "Face ID. LiDAR Scanner. Barometer. High dynamic range gyro. High-g accelerometer. Proximity sensor. Dual ambient light sensors." }
];

export default function ProductSpecifications13({ data }: { data: any }) {
  // Simple CSS sticky layout, highly robust
  return (
    <section className="bg-white min-h-screen text-black">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-16 relative">
        
        {/* Sticky Sidebar Navigation */}
        <div className="md:w-1/3">
          <div className="sticky top-24">
            <h2 className="text-sm font-bold tracking-widest text-neutral-400 mb-8 uppercase">Technical Specs</h2>
            <nav className="flex flex-col gap-4">
              {specs.map((spec) => (
                <a 
                  key={spec.id} 
                  href={\`#spec-\${spec.id}\`}
                  className="text-2xl font-bold text-neutral-300 hover:text-black transition-colors"
                >
                  {spec.title}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="md:w-2/3">
          {specs.map((spec) => (
            <div key={spec.id} id={\`spec-\${spec.id}\`} className="min-h-[50vh] pt-24 border-b border-neutral-200 last:border-0">
              <h3 className="text-4xl md:text-6xl font-black mb-8">{spec.title}</h3>
              <p className="text-2xl text-neutral-500 font-light leading-relaxed">{spec.content}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
`;

const p14 = `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductSpecifications14({ data }: { data: any }) {
  return (
    <section className="py-32 bg-[#080808] min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2">
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
            Inside<br/><span className="text-blue-500">Innovation.</span>
          </h2>
          <p className="text-xl text-neutral-400 font-light mb-12 max-w-md">
            Hover over the blueprint hotspots to explore the advanced hardware architecture powering the next generation.
          </p>
        </div>

        <div className="lg:w-1/2 relative aspect-square max-w-lg w-full">
          {/* Blueprint placeholder image */}
          <div className="absolute inset-0 rounded-3xl border border-blue-500/30 bg-blue-900/10 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
            <img src="https://picsum.photos/seed/blueprint14/600/600" className="opacity-50 mix-blend-screen grayscale" alt="Blueprint" />
          </div>
          
          {/* Hotspots */}
          {[
            { top: '20%', left: '30%', title: 'Front Camera', desc: '12MP TrueDepth' },
            { top: '50%', left: '50%', title: 'A17 Pro', desc: 'Central Processing' },
            { top: '75%', left: '40%', title: 'Taptic Engine', desc: 'Haptic feedback' },
          ].map((spot, i) => (
            <div 
              key={i} 
              className="absolute group z-10"
              style={{ top: spot.top, left: spot.left }}
            >
              <div className="relative flex items-center justify-center w-8 h-8 -ml-4 -mt-4 cursor-crosshair">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40 group-hover:animate-ping" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500" />
              </div>
              
              <motion.div 
                className="absolute top-1/2 left-full ml-4 -translate-y-1/2 w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              >
                <div className="bg-neutral-900 border border-blue-500/30 p-4 rounded-xl shadow-2xl backdrop-blur-md">
                  <h4 className="text-blue-400 font-bold text-sm mb-1">{spot.title}</h4>
                  <p className="text-white text-xs">{spot.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
`;

const p15 = `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductSpecifications15({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start end", "end start"]
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section 
      ref={scrollContainerRef}
      className="h-[800px] lg:h-screen bg-neutral-950 overflow-y-auto overflow-x-hidden hide-scrollbar relative py-32"
    >
      <div className="text-center mb-24 sticky top-12 z-20 mix-blend-difference pointer-events-none">
        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter">Everything.</h2>
      </div>

      <div ref={contentRef} className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        
        {/* Left Column (moves UP) */}
        <motion.div style={{ y: yLeft }} className="flex flex-col gap-8">
          <div className="bg-neutral-900 rounded-3xl p-10 min-h-[400px] flex flex-col justify-end">
            <h3 className="text-3xl font-bold text-white mb-2">Titanium</h3>
            <p className="text-neutral-400">Grade 5 titanium bands with a new brushed texture.</p>
          </div>
          <div className="bg-neutral-900 rounded-3xl p-10 min-h-[300px] flex flex-col justify-end">
            <h3 className="text-3xl font-bold text-white mb-2">A17 Pro</h3>
            <p className="text-neutral-400">The industry's first 3-nanometer chip.</p>
          </div>
          <div className="bg-neutral-900 rounded-3xl p-10 min-h-[400px] flex flex-col justify-end">
            <h3 className="text-3xl font-bold text-white mb-2">Display</h3>
            <p className="text-neutral-400">6.7" Super Retina XDR.</p>
          </div>
        </motion.div>

        {/* Right Column (moves DOWN) */}
        <motion.div style={{ y: yRight }} className="flex flex-col gap-8 md:-mt-48">
          <div className="bg-neutral-900 rounded-3xl p-10 min-h-[300px] flex flex-col justify-end">
            <h3 className="text-3xl font-bold text-white mb-2">Action Button</h3>
            <p className="text-neutral-400">A fast track to your favorite feature.</p>
          </div>
          <div className="bg-neutral-900 rounded-3xl p-10 min-h-[500px] flex flex-col justify-end">
            <h3 className="text-3xl font-bold text-white mb-2">Pro Camera</h3>
            <p className="text-neutral-400">48MP Main camera. Up to 4x resolution.</p>
          </div>
          <div className="bg-neutral-900 rounded-3xl p-10 min-h-[300px] flex flex-col justify-end">
            <h3 className="text-3xl font-bold text-white mb-2">Battery</h3>
            <p className="text-neutral-400">Up to 29 hours of video playback.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
`;

const files = [
  { path: '../src/components/sections/product/06-product-specifications/product-specifications-11/ProductSpecifications11.tsx', content: p11 },
  { path: '../src/components/sections/product/06-product-specifications/product-specifications-12/ProductSpecifications12.tsx', content: p12 },
  { path: '../src/components/sections/product/06-product-specifications/product-specifications-13/ProductSpecifications13.tsx', content: p13 },
  { path: '../src/components/sections/product/06-product-specifications/product-specifications-14/ProductSpecifications14.tsx', content: p14 },
  { path: '../src/components/sections/product/06-product-specifications/product-specifications-15/ProductSpecifications15.tsx', content: p15 },
];

files.forEach(f => {
  const fullPath = path.join(__dirname, f.path);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, f.content, 'utf8');
});

console.log('Product Specs 11-15 generated successfully.');
