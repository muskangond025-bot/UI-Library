"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalTestimonials14() {
  const reviews = [
    { name: 'Director Cut Review', role: 'Film Studio', text: 'High impact cinematic testimonial canvas.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'Motion Graphic Review', role: 'VFX Agency', text: 'Embedded video thumbnail with playhead pulse.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { name: 'Live Action Review', role: 'Media House', text: 'Clean widescreen presentation for video feedback.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-black uppercase mb-10">Cinematic Video Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="relative rounded-2xl overflow-hidden h-[360px] cursor-pointer border border-zinc-800 p-6 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <Play className="w-5 h-5 fill-white ml-0.5" />
              </div>
              <div className="relative z-10">
                <p className="text-lg font-bold text-white mb-2">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={r.avatar} alt={r.name} className="w-9 h-9 rounded-full object-cover border border-amber-400" />
                  <div>
                    <h4 className="text-sm font-bold text-amber-400">{r.name}</h4>
                    <p className="text-xs text-zinc-400 font-mono">{r.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}