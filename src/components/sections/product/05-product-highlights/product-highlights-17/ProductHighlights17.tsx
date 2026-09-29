import React from 'react';
import { motion } from 'framer-motion';

const markers = [
  { top: "20%", left: "30%", title: "Telephoto", desc: "5x optical zoom." },
  { top: "60%", left: "70%", title: "Main", desc: "48MP resolution." },
  { top: "40%", left: "50%", title: "Ultrawide", desc: "Macro photography." }
];

export default function ProductHighlights17({ data }: { data: any }) {
  return (
    <section className="h-screen bg-neutral-950 relative overflow-hidden flex items-center justify-center p-6">
      <div className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        <img 
          src="https://picsum.photos/seed/tech17/1200/800" 
          alt="Product" 
          className="w-full h-full object-cover opacity-60"
        />
        
        {markers.map((marker, i) => (
          <motion.div 
            key={i}
            className="absolute group z-10"
            style={{ top: marker.top, left: marker.left }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="relative flex items-center justify-center w-10 h-10 -ml-5 -mt-5 cursor-pointer">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-20 group-hover:animate-ping" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 border-2 border-white shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            </div>
            
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
              <div className="p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-center shadow-xl">
                <h4 className="text-white font-bold mb-1">{marker.title}</h4>
                <p className="text-neutral-400 text-sm">{marker.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
