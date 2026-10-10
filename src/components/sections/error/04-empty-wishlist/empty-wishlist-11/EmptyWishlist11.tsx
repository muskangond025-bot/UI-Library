import React from 'react';
import { Heart, Sparkles, TrendingUp, Flame, Tag, ArrowRight } from 'lucide-react';

export const EmptyWishlist11: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-slate-100 text-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Tile 1: Main Empty Callout */}
          <div className="md:col-span-2 p-10 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 fill-rose-500" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Your Wishlist is Empty</h2>
              <p className="text-slate-600 mb-8 max-w-md">Save products you love in your personalized Bento Wishlist grid for rapid checkout anytime.</p>
            </div>
            <button className="w-fit px-6 py-3.5 rounded-2xl bg-slate-900 text-white font-bold hover:bg-rose-600 transition-colors flex items-center gap-2">
              <span>Explore Top Collections</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Bento Tile 2: Trending */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex flex-col justify-between shadow-xl">
            <div>
              <Flame className="w-10 h-10 mb-4 text-amber-300" />
              <h3 className="text-2xl font-bold mb-2">Trending Deals</h3>
              <p className="text-rose-100 text-sm">Up to 40% off top saved products today.</p>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full w-fit mt-6">View Deals</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EmptyWishlist11;
