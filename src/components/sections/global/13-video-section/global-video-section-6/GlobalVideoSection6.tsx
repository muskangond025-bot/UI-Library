"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalVideoSection6() {
  const [active, setActive] = useState(0);
  const videos = [
    { title: 'Fashion Runway Reel', duration: '04:15', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop', desc: 'Full high-definition runway showcase with 4K color grading.' },
    { title: 'Tech Hardware Demo', duration: '06:30', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', desc: 'Detailed feature overview of futuristic computational devices.' },
    { title: 'Swiss Watch Craft', duration: '03:50', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop', desc: 'Craftsmanship documentary inside traditional horology workshops.' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-10">Expandable Video Accordion Stage</h2>

        <div className="flex flex-col lg:flex-row gap-4 h-[460px]">
          {videos.map((v, idx) => {
            const isSel = active === idx;
            return (
              <motion.div
                key={idx}
                onClick={() => setActive(idx)}
                layout
                className={`relative rounded-3xl overflow-hidden cursor-pointer p-6 flex flex-col justify-between transition-all duration-500 ${isSel ? 'lg:flex-[3] bg-indigo-950 border-2 border-indigo-500' : 'lg:flex-[1] bg-slate-800'}`}
              >
                <img src={v.img} alt={v.title} className="absolute inset-0 w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                
                <div className="relative z-10 flex justify-between items-center">
                  <span className="text-xs font-mono font-bold px-3 py-1 bg-indigo-600 rounded-full text-white">{v.duration}</span>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white">{v.title}</h3>
                  {isSel && <p className="text-sm text-slate-300 mt-2">{v.desc}</p>}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}