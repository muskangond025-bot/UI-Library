"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Play } from 'lucide-react';

export function GlobalVideoSection13() {
  const videos = [
    { title: 'Fashion Stream', duration: '03:40', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { title: 'Tech Stream', duration: '05:15', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { title: 'Living Stream', duration: '04:00', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
    { title: 'Jewelry Stream', duration: '02:50', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans text-center">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-indigo-400 mb-3">
          <Compass className="w-4 h-4" /> Orbital Video Ring
        </div>
        <h2 className="text-3xl font-extrabold mb-12">Radial Video Node Player</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {videos.map((v, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.1 }} className="flex flex-col items-center gap-3 cursor-pointer">
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-indigo-500/30 p-1 bg-slate-800 relative">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover rounded-full" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </div>
              <span className="text-xs font-mono text-indigo-400">{v.duration}</span>
              <span className="text-sm font-bold text-slate-200">{v.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}