import React from 'react';
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
