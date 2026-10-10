import React from 'react';
import { Heart, Gift, Smile, ArrowRight, Sparkles } from 'lucide-react';

export const EmptyWishlist7: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-peach-50 bg-amber-50/50 text-slate-800">
      <div className="max-w-3xl mx-auto text-center">
        <div className="p-12 rounded-[40px] bg-white border-4 border-amber-100 shadow-[12px_12px_24px_rgba(251,191,36,0.15),-12px_-12px_24px_rgba(255,255,255,0.9)] relative">
          <div className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-rose-400 text-white flex items-center justify-center shadow-[inset_-6px_-6px_12px_rgba(0,0,0,0.2),inset_6px_6px_12px_rgba(255,255,255,0.4)] transform hover:rotate-6 transition-transform">
            <Heart className="w-16 h-16 fill-white stroke-none animate-bounce" />
          </div>

          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 inline-block mb-4">
            Claymorphism 3D Box
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Your Wish Box is Empty!
          </h2>
          <p className="text-slate-600 max-w-md mx-auto mb-8 text-base">
            Start adding your dream items to unlock custom discount bundles and birthday wishlist gifts!
          </p>

          <button className="px-8 py-4 rounded-3xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 shadow-lg shadow-amber-200 transition-all flex items-center gap-2 mx-auto">
            <Gift className="w-5 h-5" />
            <span>Discover Wishlist Gifts</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default EmptyWishlist7;
