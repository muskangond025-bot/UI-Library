import React, { useState } from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: "Speed", front: "Lightning Fast", back: "Under 50ms latency across the globe." },
  { title: "Design", front: "Award Winning", back: "Recognized for seamless UX/UI." },
  { title: "Scale", front: "Infinite Limits", back: "Auto-scaling infrastructure." }
];

export default function ProductFeatures13({ data }: { data: any }) {
  return (
    <section className="py-32 bg-neutral-100 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-16 px-6">
        <h2 className="text-5xl font-black mb-4">Flip the script.</h2>
        <p className="text-xl text-neutral-500">Hover to reveal the details.</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-3 gap-8 perspective-[2000px]">
        {features.map((feat, i) => (
          <FlipCard key={i} feat={feat} />
        ))}
      </div>
    </section>
  );
}

function FlipCard({ feat }: { feat: any }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-80 w-full cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 bg-white rounded-3xl p-8 flex flex-col items-center justify-center shadow-lg border border-neutral-200"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-neutral-400 font-bold tracking-widest uppercase text-sm mb-4">{feat.title}</span>
          <h3 className="text-3xl font-black text-center">{feat.front}</h3>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 bg-blue-600 rounded-3xl p-8 flex flex-col items-center justify-center shadow-lg text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-2xl font-bold text-white">{feat.back}</p>
        </div>
      </motion.div>
    </div>
  );
}
