import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://picsum.photos/seed/m1/600/400",
  "https://picsum.photos/seed/m2/600/400",
  "https://picsum.photos/seed/m3/600/400",
  "https://picsum.photos/seed/m4/600/400",
];

export default function ProductFeatures17({ data }: { data: any }) {
  // Duplicating for infinite effect
  const trackImages = [...images, ...images];

  return (
    <section className="py-24 bg-neutral-900 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="px-6 mb-16 text-center">
        <h2 className="text-5xl font-black text-white">Visual Excellence.</h2>
      </div>

      <div className="relative w-full overflow-hidden group py-10">
        <motion.div 
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {trackImages.map((src, i) => (
            <div 
              key={i} 
              className="w-[400px] h-[300px] rounded-3xl overflow-hidden relative flex-shrink-0 group/card cursor-pointer"
            >
              <img src={src} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" alt="Feature" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8 text-center">
                <p className="text-white font-bold text-lg transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
                  Immersive High-Fidelity Details
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
