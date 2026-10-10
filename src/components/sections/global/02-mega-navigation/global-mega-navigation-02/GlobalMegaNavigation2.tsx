import React from 'react';
import { Terminal, Radio, Shield, ShoppingCart, Search, Cpu, ArrowRight } from 'lucide-react';

export const GlobalMegaNavigation2: React.FC = () => {
  return (
    <header className="w-full bg-slate-950 text-cyan-400 border-b border-cyan-500/30 font-mono p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-cyan-900/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan-950 border border-cyan-400 flex items-center justify-center font-bold text-cyan-300">
              CY
            </div>
            <span className="text-xl font-black tracking-widest text-white">CYBER<span className="text-cyan-400">.MEGA_HUD</span></span>
          </div>
          <button className="px-5 py-2 bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            <span>DISPATCH VAULT</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-900/80 border border-cyan-500/30 p-6 rounded-2xl">
          <div>
            <span className="text-xs uppercase text-slate-400 block mb-3 border-b border-slate-800 pb-1">[01] HARDWARE_CATEGORIES</span>
            <ul className="space-y-2 text-xs text-cyan-300">
              <li><a href="#gpu" className="hover:text-white">&gt; QUANTUM_PROCESSORS</a></li>
              <li><a href="#ram" className="hover:text-white">&gt; NEURAL_MEMORY_UNITS</a></li>
              <li><a href="#hologram" className="hover:text-white">&gt; HOLOGRAM_DISPLAYS</a></li>
            </ul>
          </div>
          <div>
            <span className="text-xs uppercase text-slate-400 block mb-3 border-b border-slate-800 pb-1">[02] FIRMWARE_UPDATES</span>
            <ul className="space-y-2 text-xs text-cyan-300">
              <li><a href="#v2" className="hover:text-white">&gt; PATCH_VERSION_4.2</a></li>
              <li><a href="#security" className="hover:text-white">&gt; CYBER_SECURITY_PROTOCOLS</a></li>
            </ul>
          </div>
          <div className="bg-slate-950 border border-cyan-500/40 p-4 rounded-xl">
            <span className="text-xs text-rose-400 block font-bold mb-2">⚡ TELEMETRY WARNING</span>
            <p className="text-slate-400 text-xs font-sans mb-3">High demand detected on Neural Processors. Secure allocation now.</p>
            <button className="px-4 py-1.5 bg-cyan-500 text-black font-bold text-xs hover:bg-cyan-400">SECURE NODE</button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default GlobalMegaNavigation2;
