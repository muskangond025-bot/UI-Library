"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalVideoSection15() {
  const videos = [
    { title: 'Jewelry Prism Reel', duration: '03:15', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
    { title: 'Prism Fashion Reel', duration: '04:20', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { title: 'Crystal Living Reel', duration: '05:00', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
    { title: 'Diamond Tech Reel', duration: '03:50', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-12">Diamond Prism Video Facets</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((v, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04, rotate: 1 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 cursor-pointer h-[340px] flex flex-col justify-between"
            >
              <span className="text-xs font-mono text-cyan-400 font-bold">{v.duration} PRISM</span>
              <div className="w-full h-40 rounded-2xl overflow-hidden border border-white/10 my-2 relative">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play className="w-5 h-5 text-cyan-300 fill-cyan-300" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-cyan-300">{v.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}