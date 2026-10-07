import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShoppingBag, Plus, X, ArrowRight, Tag } from 'lucide-react';

const HOTSPOTS = [
  {
    id: 1,
    top: '32%',
    left: '48%',
    title: 'Cashmere Trench Coat',
    price: '$450',
    oldPrice: '$750',
    tag: '40% OFF',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 2,
    top: '68%',
    left: '56%',
    title: 'Italian Leather Boots',
    price: '$280',
    oldPrice: '$420',
    tag: '33% OFF',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=300&q=80',
  },
];

export function OffersLimitedTime16() {
  const [activeSpot, setActiveSpot] = useState<number | null>(null);

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-stone-950 text-stone-100 rounded-3xl border border-stone-800 shadow-2xl relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-stone-800 border border-stone-700 text-amber-300 text-xs font-mono uppercase tracking-widest">
            Design: Magazine Editorial Lookbook • Animation: Shop-The-Look Hotspots
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-amber-100 tracking-tight">
            The Autumn Lookbook
          </h2>
          <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto font-sans">
            Hover or click on the glowing hotspots over the editorial model to discover special bundle pricing on featured garments.
          </p>
        </div>

        {/* Editorial Grid Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Hotspot Photo Spread */}
          <div className="lg:col-span-7 relative aspect-[4/5] rounded-3xl overflow-hidden border border-stone-800 shadow-2xl bg-stone-900 group">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80"
              alt="Editorial Autumn Lookbook"
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60" />

            {/* Hotspot Dots */}
            {HOTSPOTS.map((spot) => (
              <div
                key={spot.id}
                style={{ top: spot.top, left: spot.left }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <button
                  onClick={() => setActiveSpot(activeSpot === spot.id ? null : spot.id)}
                  className="relative w-8 h-8 rounded-full bg-amber-400/90 text-stone-950 flex items-center justify-center shadow-lg transition-transform hover:scale-125"
                >
                  <span className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-75" />
                  <Plus className="w-4 h-4 stroke-[3] relative z-10" />
                </button>

                {/* Hotspot Popover */}
                <AnimatePresence>
                  {activeSpot === spot.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute left-1/2 -translate-x-1/2 bottom-12 w-64 p-4 rounded-2xl bg-stone-900/95 border border-amber-400/30 text-stone-100 shadow-2xl backdrop-blur-md z-30"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[10px] font-mono font-bold">
                          {spot.tag}
                        </span>
                        <button onClick={() => setActiveSpot(null)} className="text-stone-400 hover:text-white">
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex gap-3 items-center">
                        <img src={spot.image} alt={spot.title} className="w-12 h-12 rounded-lg object-cover border border-stone-700" />
                        <div className="text-left">
                          <h4 className="font-serif font-bold text-sm text-stone-100">{spot.title}</h4>
                          <div className="flex items-baseline gap-2 mt-0.5">
                            <span className="text-amber-400 font-bold text-sm">{spot.price}</span>
                            <span className="text-stone-500 line-through text-xs">{spot.oldPrice}</span>
                          </div>
                        </div>
                      </div>

                      <button className="w-full mt-3 py-2 rounded-lg bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-amber-300 transition-colors">
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add Item To Cart</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Side Editorial Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-4">
              <span className="text-amber-400 font-mono text-xs uppercase tracking-widest">Complete Look Offer</span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white">
                Shop The Entire Outfit Bundle & Save 45%
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed font-sans">
                Curated by our senior stylists. Get the Cashmere Trench Coat paired with Handcrafted Italian Leather Boots for an exclusive limited-time bundle price.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
              <div className="flex justify-between items-baseline border-b border-stone-800 pb-3">
                <span className="text-stone-400 text-xs uppercase font-mono">Full Look Bundle Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-serif font-bold text-amber-300">$630.00</span>
                  <span className="text-sm text-stone-500 line-through font-mono">$1,170.00</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <Tag className="w-4 h-4 text-amber-400" />
                  <span>Includes Trench Coat + Italian Boots</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Complimentary Garment Care Kit</span>
                </div>
              </div>

              <button className="w-full py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-extrabold text-base tracking-wide flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95">
                <ShoppingBag className="w-5 h-5" />
                <span>Shop Complete Look ($630)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersLimitedTime16;
