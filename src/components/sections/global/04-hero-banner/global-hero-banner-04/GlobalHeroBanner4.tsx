import React from 'react';
import { Box, Layers, ArrowRight } from 'lucide-react';

export const GlobalHeroBanner4: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-900/60 text-purple-300 border border-purple-700/50 mb-6">
            <Layers className="w-3.5 h-3.5 text-pink-400" />
            <span>Apple Vision Spatial Hero Suite</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6 bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">
            Spatial Computing Hero Environment
          </h1>

          <p className="text-slate-400 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
            Immerse your customers in photorealistic 3D spatial product models and real-time interactive VR room walkthroughs.
          </p>

          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-900/50 transition-all flex items-center gap-2">
            <Box className="w-5 h-5" />
            <span>Launch Spatial Showcase</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900/50 backdrop-blur-2xl border border-purple-500/30 shadow-2xl text-center">
          <Box className="w-24 h-24 text-pink-400 mx-auto animate-bounce mb-4" />
          <h3 className="text-2xl font-bold mb-2">3D Hologram Preview</h3>
        </div>
      </div>
    </section>
  );
};
export default GlobalHeroBanner4;
