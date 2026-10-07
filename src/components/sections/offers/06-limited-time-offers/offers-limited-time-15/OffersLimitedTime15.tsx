import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ShoppingBag, Eye, Star } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    title: 'Aura ANC Wireless Headphones',
    tag: 'LIMITED DROP',
    discount: '40% OFF',
    price: '$239',
    oldPrice: '$399',
    rating: 4.9,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Chronos Sapphire Watch',
    tag: 'EXCLUSIVE',
    discount: '50% OFF',
    price: '$299',
    oldPrice: '$599',
    rating: 5.0,
    reviews: 94,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Minimalist Leather Tote Bag',
    tag: 'TRENDING',
    discount: '35% OFF',
    price: '$179',
    oldPrice: '$279',
    rating: 4.8,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80',
  },
];

function TiltCard({ product }: { product: typeof PRODUCTS[0] }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y / 15);
    setRotateY(x / 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      style={{
        perspective: 1000,
      }}
      className="w-full"
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-3xl bg-slate-900 border border-slate-800 p-5 shadow-xl hover:shadow-2xl hover:border-slate-700 transition-all duration-300 group text-left overflow-hidden"
      >
        {/* Card Glare Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        {/* Top Badges */}
        <div className="flex items-center justify-between mb-4 relative z-10">
          <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase">
            {product.tag}
          </span>
          <button
            onClick={() => setLiked(!liked)}
            className="p-2 rounded-full bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-rose-500 transition-colors"
          >
            <Heart className={`w-4 h-4 ${liked ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>
        </div>

        {/* Image Container */}
        <div className="relative aspect-square rounded-2xl bg-slate-950 overflow-hidden border border-slate-800 mb-5">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-rose-500 text-white text-xs font-extrabold shadow-md">
            {product.discount}
          </span>
        </div>

        {/* Info */}
        <div className="space-y-3 relative z-10">
          <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>{product.rating} ({product.reviews} reviews)</span>
          </div>

          <h3 className="font-bold text-lg text-white group-hover:text-indigo-400 transition-colors line-clamp-1">
            {product.title}
          </h3>

          <div className="flex items-baseline justify-between pt-1">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-white">{product.price}</span>
              <span className="text-sm text-slate-500 line-through font-semibold">{product.oldPrice}</span>
            </div>
            <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-md">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Claim</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function OffersLimitedTime15() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10 text-center">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Design: 3D Parallax Card Grid • Animation: ReactBits Cursor Tilt & Glare</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured Parallax Offers
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Hover over the cards to feel the interactive 3D glare tilt. Limited inventory remaining across all showcase items!
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((p) => (
            <TiltCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OffersLimitedTime15;
