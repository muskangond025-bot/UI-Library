import React from 'react';
import { ShoppingBag, Layers, Box, MoveRight } from 'lucide-react';

export const GlobalMegaNavigation4: React.FC = () => {
  return (
    <div className="w-full py-8 px-6 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto rounded-3xl bg-slate-900/50 backdrop-blur-2xl border border-purple-500/30 shadow-2xl p-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-purple-500/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center font-black">
              S
            </div>
            <span className="font-black text-xl bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">
              SPATIAL<span className="text-pink-400">.MEGA</span>
            </span>
          </div>
          <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-xs shadow-lg flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            <span>Spatial Vault</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-purple-500/20">
            <h4 className="font-bold text-xs uppercase text-pink-400 mb-3">3D Spatial Wearables</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#vr-headsets" className="hover:text-white">Spatial Headsets V2</a></li>
              <li><a href="#haptic-gloves" className="hover:text-white">Haptic Gloves</a></li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-purple-500/20">
            <h4 className="font-bold text-xs uppercase text-purple-400 mb-3">Holographic Displays</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#lightfield" className="hover:text-white">Lightfield Screens</a></li>
              <li><a href="#retinal" className="hover:text-white">Retinal Projectors</a></li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/60 to-pink-950/60 border border-pink-500/30 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase text-yellow-300">VR Showcase</span>
              <h3 className="text-lg font-bold mt-1 text-white">Apple Vision Suite</h3>
            </div>
            <button className="mt-4 px-4 py-2 rounded-xl bg-purple-600 text-white font-bold text-xs flex items-center gap-2 w-fit">
              <Box className="w-4 h-4" />
              <span>Launch 3D Room</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GlobalMegaNavigation4;
