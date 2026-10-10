"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Star } from 'lucide-react';

export function GlobalCustomerReviews5() {
  const reviews = [
    { name: 'CYBER_KICK', item: 'NEON RUNNER', text: 'Insane futuristic glow accents and extreme cushion.', glow: 'from-pink-500 to-purple-500', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'NEURAL_HEAD', item: 'VR HEADSET', text: 'Visual matrix fidelity is completely mind-blowing.', glow: 'from-cyan-400 to-blue-600', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { name: 'QUANTUM_GEAR', item: 'HOLO WATCH', text: 'Next level telemetry UI and titanium casing.', glow: 'from-emerald-400 to-teal-600', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
    { name: 'SOUND_DRIVE', item: 'BASS MODULE', text: 'Heavy sub-bass frequencies and RGB pulse lines.', glow: 'from-yellow-400 to-amber-600', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-10">Holographic Review Matrix</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.03 }} className="relative rounded-2xl overflow-hidden p-[2px] cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-r ${r.glow} opacity-60 blur-sm` } />
              <div className="relative z-10 bg-zinc-950 rounded-2xl p-6 h-[320px] flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/60 border border-white/20 text-white font-bold">5.0 ★ SCORE</span>
                  <Eye className="w-4 h-4 text-pink-400" />
                </div>
                <p className="text-zinc-200 text-sm font-medium my-2">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={r.avatar} alt={r.name} className="w-9 h-9 rounded-full border border-pink-500/50 object-cover" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{r.name}</h4>
                    <p className="text-xs font-mono text-pink-400">{r.item}</p>
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