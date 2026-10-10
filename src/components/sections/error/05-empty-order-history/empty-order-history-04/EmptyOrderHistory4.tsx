import React from 'react';
import { Package, Layers, Box, MoveRight } from 'lucide-react';

export const EmptyOrderHistory4: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-slate-950 via-blue-950/40 to-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-cyan-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="p-8 md:p-16 rounded-3xl bg-slate-900/40 backdrop-blur-2xl border border-blue-500/20 shadow-2xl shadow-blue-950/50">
          <div className="relative mx-auto w-36 h-36 mb-8 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 animate-spin [animation-duration:10s] blur-md" />
            <div className="relative w-28 h-28 rounded-2xl bg-slate-950/90 border border-blue-400/40 flex items-center justify-center shadow-inner">
              <Package className="w-14 h-14 text-cyan-400 animate-bounce [animation-duration:3s]" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-900/60 text-blue-300 border border-blue-700/50 mb-6">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Spatial Logistics Vault</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
            Spatial Order History Empty
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-10 text-base md:text-lg">
            Track your 3D spatial deliveries in real time. Place an order to view holographic package tracking models.
          </p>

          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-900/50 transition-all inline-flex items-center gap-2">
            <Box className="w-5 h-5" />
            <span>Explore Spatial Products</span>
            <MoveRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default EmptyOrderHistory4;
