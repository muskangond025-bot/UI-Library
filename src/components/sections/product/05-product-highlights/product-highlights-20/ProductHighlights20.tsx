import React, { useState } from 'react';
import { motion } from 'framer-motion';

const folders = [
  { title: "Hardware", color: "#172554", content: "Advanced custom silicon architecture." },
  { title: "Software", color: "#1e1b4b", content: "Seamlessly integrated operating system." },
  { title: "Services", color: "#3b0764", content: "Privacy-first cloud computing." },
];

export default function ProductHighlights20({ data }: { data: any }) {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 bg-neutral-950 flex flex-col items-center justify-center relative min-h-screen">
      <div className="max-w-3xl w-full px-6 flex flex-col items-center gap-4">
        <h2 className="text-5xl font-black text-white mb-16">Ecosystem.</h2>
        
        {folders.map((folder, i) => {
          const isActive = active === i;
          const isAbove = i < active;
          
          return (
            <motion.div
              key={i}
              onClick={() => setActive(i)}
              animate={{ 
                y: isActive ? 0 : isAbove ? -20 : (i - active) * 60,
                scale: isActive ? 1 : 0.95,
                zIndex: isActive ? 10 : 0
              }}
              className="w-full h-64 rounded-3xl cursor-pointer absolute shadow-2xl border border-white/10 flex flex-col p-8 transition-colors"
              style={{ backgroundColor: folder.color, top: '40%' }}
              whileHover={{ y: isActive ? 0 : (i - active) * 60 - 10 }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">{folder.title}</h3>
              <motion.p 
                animate={{ opacity: isActive ? 1 : 0 }}
                className="text-xl text-white/70"
              >
                {folder.content}
              </motion.p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
