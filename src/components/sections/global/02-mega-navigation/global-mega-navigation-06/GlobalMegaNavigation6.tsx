import React from 'react';
import { Snowflake, ShoppingBag } from 'lucide-react';

export const GlobalMegaNavigation6: React.FC = () => {
  return (
    <div className="w-full py-8 px-6 bg-slate-950 text-cyan-200">
      <div className="max-w-6xl mx-auto rounded-3xl bg-slate-900/90 border border-cyan-400/50 p-8 shadow-[0_0_40px_rgba(6,182,212,0.3)]">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-cyan-900/50">
          <div className="flex items-center gap-3">
            <Snowflake className="w-6 h-6 text-cyan-400 animate-spin [animation-duration:10s]" />
            <span className="font-black text-2xl text-white tracking-widest">CRYO<span className="text-cyan-400">.MEGA</span></span>
          </div>
          <button className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            FROZEN VAULT
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-cyan-950/40 border border-cyan-500/20">
            <h4 className="font-mono text-xs font-bold text-cyan-400 mb-3">[ CRYO_SUITS ]</h4>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li><a href="#thermal" className="hover:text-cyan-300">&gt; Thermal Parkas</a></li>
              <li><a href="#arctic" className="hover:text-cyan-300">&gt; Arctic Insulated Suits</a></li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-cyan-950/40 border border-cyan-500/20">
            <h4 className="font-mono text-xs font-bold text-cyan-400 mb-3">[ ICE_GEAR ]</h4>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li><a href="#spikes" className="hover:text-cyan-300">&gt; Titanium Ice Cleats</a></li>
              <li><a href="#goggles" className="hover:text-cyan-300">&gt; Polarized Glacier Goggles</a></li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-slate-950 border border-cyan-400/40 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-cyan-400">STATUS: SUB-ZERO</span>
              <h3 className="font-black text-lg text-white mt-1">Expedition 2026</h3>
            </div>
            <button className="mt-4 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs">
              EXPLORE EXPEDITION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GlobalMegaNavigation6;
