import React from 'react';
import { Heart, Sparkles, Layers, Box, Globe, MoveRight } from 'lucide-react';

export const EmptyWishlist4: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-slate-950 via-purple-950/40 to-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Spatial Glass Capsule */}
        <div className="p-8 md:p-16 rounded-3xl bg-slate-900/40 backdrop-blur-2xl border border-purple-500/20 shadow-2xl shadow-purple-950/50">
          <div className="relative mx-auto w-36 h-36 mb-8 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 animate-spin [animation-duration:10s] blur-md" />
            <div className="relative w-28 h-28 rounded-2xl bg-slate-950/90 border border-purple-400/40 flex items-center justify-center shadow-inner">
              <Heart className="w-14 h-14 text-pink-400 fill-pink-500/30 animate-bounce [animation-duration:3s]" />
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-300 animate-pulse" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-900/60 text-purple-300 border border-purple-700/50 mb-6">
            <Layers className="w-3.5 h-3.5 text-pink-400" />
            <span>Spatial Wishlist Chamber</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">
            Your Spatial Vault is Empty
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-10 text-base md:text-lg">
            Immerse yourself in our catalog. Bookmark products in 3D spatial space to view them anytime.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-900/50 transition-all flex items-center gap-2">
              <Box className="w-5 h-5" />
              <span>Launch Catalog 3D</span>
              <MoveRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EmptyWishlist4;
