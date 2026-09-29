import React, { useState } from 'react';
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
