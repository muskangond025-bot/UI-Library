import React from 'react';
import { Heart, Sun, ArrowRight } from 'lucide-react';

export const EmptyWishlist17: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-[#f7f0eb] text-amber-950 font-serif">
      <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-[#efe3d9] border border-amber-900/10">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-amber-800 text-amber-50 flex items-center justify-center">
          <Heart className="w-12 h-12 fill-amber-100/30 stroke-amber-50" />
        </div>
        <span className="text-xs uppercase tracking-widest font-sans font-bold text-amber-800 mb-3 block">
          Boho Terracotta Studio
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-amber-950 mb-4">
          Empty Terracotta Vase
        </h2>
        <p className="font-sans text-amber-900/80 max-w-md mx-auto mb-8 text-sm md:text-base">
          Fill your studio with organic textures and warm pottery creations. Save items to curate your dream space.
        </p>
        <button className="px-8 py-4 rounded-full bg-amber-900 text-amber-50 font-sans font-bold hover:bg-amber-800 transition-colors inline-flex items-center gap-2">
          <span>Explore Artisan Finds</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
export default EmptyWishlist17;
