import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFeatures20({ data }: { data: any }) {
  const words = ["The", "future", "is", "already", "here."];

  return (
    <section className="h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 px-6">
        {words.map((word, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 2, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ 
              duration: 1.5, 
              delay: i * 0.3, 
              ease: [0.16, 1, 0.3, 1] // Apple-like custom ease out
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="overflow-hidden"
          >
            <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter">
              {word}
            </h2>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
