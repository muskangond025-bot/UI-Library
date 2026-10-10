"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Play } from 'lucide-react';

export function GlobalVideoSection10() {
  const videos = [
    { title: 'Denim Film Reel', duration: '03:40', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop', rotate: '-rotate-2' },
    { title: 'Retro Audio Reel', duration: '05:10', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', rotate: 'rotate-3' },
    { title: 'Classic Kicks Teaser', duration: '02:50', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop', rotate: '-rotate-3' },
    { title: 'Analog Home Reel', duration: '04:15', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop', rotate: 'rotate-2' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-stone-200 text-stone-900 font-serif">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Tag className="w-5 h-5 text-amber-800" />
          <h2 className="text-3xl font-extrabold">Retro Polaroid Film Reel Grid</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((v, idx) => (
            <motion.div
              key={idx}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className={`bg-white p-4 pb-6 shadow-xl border border-stone-300 rounded-sm cursor-pointer transition-all ${v.rotate}`}
            >
              <div className="w-full h-48 bg-stone-100 overflow-hidden mb-3 border border-stone-200 relative">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-stone-900 flex items-center justify-center shadow">
                    <Play className="w-4 h-4 fill-stone-900 ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="font-sans flex justify-between items-center text-xs font-bold">
                <span>{v.title}</span>
                <span className="font-mono text-amber-800">{v.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}