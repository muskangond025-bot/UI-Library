import React, { useState } from 'react';
import { motion } from 'framer-motion';

const features = [
  { id: 1, title: "Super Retina XDR", subtitle: "OLED display", img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800" },
  { id: 2, title: "Titanium Design", subtitle: "Aerospace-grade", img: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?q=80&w=800" },
  { id: 3, title: "A17 Pro", subtitle: "Game-changing chip", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800" },
  { id: 4, title: "Pro Camera", subtitle: "48MP Main", img: "https://images.unsplash.com/photo-1592840062778-9e19d7d921a2?q=80&w=800" },
];

export default function ProductHighlights11({ data }: { data: any }) {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-neutral-950 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">Designed to perform.</h2>
          <p className="text-xl text-neutral-400">Hover to expand features.</p>
        </div>
        
        <div className="flex flex-col md:flex-row h-[60vh] gap-4 w-full">
          {features.map((f, i) => (
            <motion.div
              key={f.id}
              onHoverStart={() => setActive(i)}
              animate={{ flex: active === i ? 4 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative rounded-3xl overflow-hidden cursor-pointer h-full"
            >
              <img src={f.img} alt={f.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <motion.div 
                className="absolute bottom-0 left-0 p-8 flex flex-col justify-end"
                animate={{ opacity: active === i ? 1 : 0.4, y: active === i ? 0 : 20 }}
              >
                <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2 whitespace-nowrap">{f.subtitle}</h3>
                <h2 className="text-3xl md:text-5xl font-black text-white whitespace-nowrap">{f.title}</h2>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
