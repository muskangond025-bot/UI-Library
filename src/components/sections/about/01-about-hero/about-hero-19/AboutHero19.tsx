import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radio, Play, Pause, ArrowRight, Disc, Flame, Volume2, Sparkles } from 'lucide-react';

export function AboutHero19({ data, section }: { data?: any; section?: any }) {
  const [playing, setPlaying] = useState(false);
  const [activeTrack, setActiveTrack] = useState(0);

  const playlist = [
    { title: 'Midnight Synth Drive', year: '1984', duration: '3:45' },
    { title: 'Neon Sunset Horizon', year: '1986', duration: '4:12' },
    { title: 'Cyberpunk Pulse Wave', year: '1988', duration: '3:58' }
  ];

  return (
    <section className="w-full min-h-[750px] py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0714] text-pink-100 overflow-hidden relative font-sans">
      
      {/* 1. FULL-SCREEN 80S SYNTHWAVE CYBER CITY BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=2000&q=80"
          alt="Synthwave Cityscape Sunset"
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-150 saturate-150 transition-transform duration-700"
        />

        {/* 80s Perspective Grid Mesh Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ec489920_1px,transparent_1px),linear-gradient(to_bottom,#ec489920_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        
        {/* Pulsing Neon Sunset Ambient Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[45rem] h-[25rem] bg-gradient-to-t from-pink-600/30 via-purple-600/20 to-transparent rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* 2. HERO CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto min-h-[600px] flex flex-col justify-between relative z-10 space-y-12">
        
        {/* Top Header Badge */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-4">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-5 py-2 rounded-full bg-pink-950/80 border border-pink-500/50 backdrop-blur-xl text-pink-300 text-xs font-mono font-extrabold uppercase tracking-widest flex items-center gap-2 shadow-[0_0_25px_rgba(236,72,153,0.4)]"
          >
            <Radio className="w-4 h-4 text-pink-400 animate-pulse" />
            RETRO SYNTHWAVE CYBER CITY • DESIGN #19
          </motion.span>

          <span className="px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-pink-400" /> 1984 VINTAGE ANALOG AUDIO
          </span>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Title & Action Area */}
          <div className="lg:col-span-7 space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-purple-400"
            >
              Retro Synthwave 80s Digital Universe
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-pink-200/90 text-base sm:text-xl leading-relaxed max-w-xl"
            >
              Immerse your audience in high-octane 80s retro-futuristic visuals, pulsing neon magenta sunset horizons, and interactive cassette audio widgets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-extrabold text-xs uppercase tracking-widest shadow-[0_0_35px_rgba(236,72,153,0.5)] hover:scale-105 transition-all flex items-center gap-2">
                <span>Launch Synthwave Deck</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Right Interactive Retro Cassette Player Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 p-8 rounded-[2.5rem] bg-pink-950/40 border-2 border-pink-500/40 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] space-y-6"
          >
            <div className="flex items-center justify-between border-b border-pink-800/40 pb-4">
              <div className="flex items-center gap-3 text-xs font-mono text-pink-300 font-bold uppercase">
                <Disc className={`w-5 h-5 text-pink-400 ${playing ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
                <span>RETRO CASSETTE PLAYER</span>
              </div>
              <Volume2 className="w-4 h-4 text-pink-400" />
            </div>

            {/* Currently Playing Track */}
            <div className="p-4 rounded-2xl bg-black/60 border border-pink-500/30 space-y-2">
              <div className="text-xs text-pink-400 font-mono">NOW PLAYING</div>
              <div className="text-xl font-bold text-white font-mono">{playlist[activeTrack].title}</div>
              <div className="text-xs text-pink-300 font-mono">Year {playlist[activeTrack].year} • {playlist[activeTrack].duration}</div>
            </div>

            {/* Simulated Animated Audio Equalizer Bars */}
            <div className="h-12 flex items-end justify-between gap-1 p-2 rounded-xl bg-black/40 border border-pink-500/20">
              {[60, 90, 40, 80, 100, 50, 75, 95, 65, 85, 45, 90, 70, 80].map((h, i) => (
                <div
                  key={i}
                  className="w-full bg-gradient-to-t from-pink-500 to-purple-400 rounded-t-sm transition-all duration-300"
                  style={{ height: playing ? `${h}%` : '20%' }}
                />
              ))}
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setPlaying(!playing)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:from-pink-400 hover:to-rose-400 transition-all"
              >
                {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                <span>{playing ? 'Pause Playback' : 'Play Synthwave Track'}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
