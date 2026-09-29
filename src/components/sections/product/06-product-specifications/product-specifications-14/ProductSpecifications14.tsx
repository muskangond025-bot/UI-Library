import React from 'react';
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
