"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Maximize, Sparkles, Film, Clock } from 'lucide-react';

export function GlobalVideoSection1() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playlist = [
    { title: 'Cyberpunk Next-Gen Launch', duration: '03:45', views: '124K Views', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { title: 'Luxury Apparel Fashion Film', duration: '02:15', views: '98K Views', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { title: 'Modern Living Space Tour', duration: '04:10', views: '56K Views', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans relative overflow-hidden">
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> GLASSMORPHIC VIDEO HERO PLAYER
            </div>
            <h2 className="text-4xl font-extrabold text-white">Interactive Cinema Hub</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Hero Video Player */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl group h-[460px]">
            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" alt="Hero Video" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-black/20" />
            
            {/* Center Play Trigger */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className="w-20 h-20 rounded-full bg-cyan-500/90 text-slate-950 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.5)] group-hover:scale-110 transition-transform">
                {isPlaying ? <Pause className="w-8 h-8 fill-slate-950" /> : <Play className="w-8 h-8 fill-slate-950 ml-1" />}
              </div>
            </button>

            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent space-y-3">
              <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer">
                <div className="bg-cyan-400 h-full w-2/5" />
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-slate-300">
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400 font-bold">01:45 / 03:45</span>
                  <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">4K HDR</span>
                </div>
                <div className="flex items-center gap-3">
                  <Volume2 className="w-4 h-4 cursor-pointer hover:text-white" />
                  <Maximize className="w-4 h-4 cursor-pointer hover:text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Side Video Playlist */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-2">
              <Film className="w-4 h-4 text-cyan-400" /> Up Next Playlist
            </h3>
            {playlist.map((item, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/50 flex gap-4 items-center cursor-pointer transition-colors group">
                <div className="w-24 h-16 rounded-xl overflow-hidden relative shrink-0">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">{item.title}</h4>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mt-1">
                    <Clock className="w-3 h-3" /> <span>{item.duration}</span>
                    <span>• {item.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}