import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radio, Play, Pause, ArrowRight, Disc, Flame, Volume2 } from 'lucide-react';

export function AboutHero19({ data, section }: { data?: any; section?: any }) {
  const [playing, setPlaying] = useState(false);
  const [activeTrack, setActiveTrack] = useState(0);

  const playlist = [
    { title: 'Midnight Synth Drive', year: '1984', duration: '3:45' },
    { title: 'Neon Sunset Horizon', year: '1986', duration: '4:12' },
    { title: 'Cyberpunk Pulse Wave', year: '1988', duration: '3:58' }
  ];

  return (
    <section className="w-full h-[520px] sm:h-[580px] lg:h-[620px] min-h-[460px] max-h-[680px] py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 bg-[#0D0714] text-pink-100 overflow-hidden relative font-sans flex flex-col justify-between">
      
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
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between relative z-10 gap-3 sm:gap-4">
        
        {/* Top Header Badge */}
        <div className="flex items-center justify-between flex-wrap gap-3 shrink-0">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-3.5 py-1.5 rounded-full bg-pink-950/80 border border-pink-500/50 backdrop-blur-xl text-pink-300 text-[10px] sm:text-xs font-mono font-extrabold uppercase tracking-widest flex items-center gap-2 shadow-[0_0_25px_rgba(236,72,153,0.4)]"
          >
            <Radio className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
            RETRO SYNTHWAVE CYBER CITY • DESIGN #19
          </motion.span>

          <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-[10px] sm:text-xs font-mono font-bold flex items-center gap-1.5">
            <Flame className="w-3 h-3 text-pink-400" /> 1984 VINTAGE ANALOG AUDIO
          </span>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center flex-1 min-h-0">
          
          {/* Left Title & Action Area */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-3 sm:space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight leading-[1.12] text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-purple-400"
            >
              Retro Synthwave 80s Digital Universe
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-pink-200/90 text-xs sm:text-sm leading-relaxed max-w-xl line-clamp-3"
            >
              Immerse your audience in high-octane 80s retro-futuristic visuals, pulsing neon magenta sunset horizons, and interactive cassette audio widgets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 flex-wrap pt-1"
            >
              <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-extrabold text-[11px] sm:text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(236,72,153,0.45)] hover:scale-105 transition-all flex items-center gap-2">
                <span>Launch Synthwave Deck</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          </div>

          {/* Right Interactive Retro Cassette Player Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-4 sm:p-5 rounded-2xl bg-pink-950/45 border-2 border-pink-500/40 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-3"
          >
            <div className="flex items-center justify-between border-b border-pink-800/40 pb-2.5">
              <div className="flex items-center gap-2 text-[11px] font-mono text-pink-300 font-bold uppercase">
                <Disc className={`w-4 h-4 text-pink-400 ${playing ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
                <span>RETRO CASSETTE PLAYER</span>
              </div>
              <Volume2 className="w-3.5 h-3.5 text-pink-400" />
            </div>

            {/* Currently Playing Track */}
            <div className="p-2.5 rounded-xl bg-black/60 border border-pink-500/30 space-y-1">
              <div className="text-[10px] text-pink-400 font-mono">NOW PLAYING</div>
              <div className="text-base font-bold text-white font-mono">{playlist[activeTrack].title}</div>
              <div className="text-[10px] text-pink-300 font-mono">Year {playlist[activeTrack].year} • {playlist[activeTrack].duration}</div>
            </div>

            {/* Simulated Animated Audio Equalizer Bars */}
            <div className="h-9 flex items-end justify-between gap-1 p-1.5 rounded-lg bg-black/40 border border-pink-500/20">
              {[60, 90, 40, 80, 100, 50, 75, 95, 65, 85, 45, 90, 70, 80].map((h, i) => (
                <div
                  key={i}
                  className="w-full bg-gradient-to-t from-pink-500 to-purple-400 rounded-t-sm transition-all duration-300"
                  style={{ height: playing ? `${h}%` : '20%' }}
                />
              ))}
            </div>

            {/* Playback Controls */}
            <div className="pt-1">
              <button
                onClick={() => setPlaying(!playing)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-mono font-bold text-[11px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:from-pink-400 hover:to-rose-400 transition-all"
              >
                {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                <span>{playing ? 'Pause Playback' : 'Play Synthwave Track'}</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom subtle indicator line */}
        <div className="flex items-center justify-between text-[10px] font-mono text-pink-400/60 border-t border-pink-900/40 pt-2 shrink-0">
          <span>ANALOG TAPE FREQUENCY: 44.1kHz</span>
          <span>1980s NEON RETRO WAVE</span>
        </div>
      </div>
    </section>
  );
}
