import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, Play, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CustomerReviewGallery4({ data }: { data: any }) {
  const customers = data?.customers || [];

  return (
    <section className="py-20 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold tracking-widest text-pink-400 uppercase">{data?.eyebrow || 'INSTAGRAM INSPIRED'}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">{data?.heading || 'Customer Style Rail'}</h2>
        </div>
        <p className="text-neutral-400 text-sm max-w-sm">{data?.subtitle || 'Swipe through real-time customer fits, video unboxings, and verified reviews.'}</p>
      </div>

      {/* Horizontal Drag UGC Track */}
      <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 pb-8 snap-x snap-mandatory">
        {customers.map((item: any, idx: number) => (
          <motion.div
            key={item.id || idx}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex-none w-72 sm:w-80 snap-start relative group bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 shadow-xl"
          >
            <div className="relative h-96 overflow-hidden">
              <img src={item.media} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />

              {/* Story Header */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <div className="flex items-center gap-2 p-1.5 pr-3 rounded-full bg-neutral-900/80 backdrop-blur-md border border-neutral-700/60">
                  <img src={item.avatar} alt={item.name} className="w-7 h-7 rounded-full object-cover ring-2 ring-pink-500" />
                  <span className="text-xs font-semibold text-white truncate max-w-[100px]">{item.name}</span>
                </div>
                {item.mediaType === 'video' && (
                  <span className="p-2 rounded-full bg-pink-600 text-white shadow-lg">
                    <Play className="w-3.5 h-3.5 fill-white" />
                  </span>
                )}
              </div>

              {/* Review Quote on Bottom Hover */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <div className="flex text-amber-400 mb-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                  ))}
                </div>
                <p className="text-xs text-neutral-200 line-clamp-2 italic mb-3">"{item.reviewText}"</p>
                <button className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Shop {item.productName}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
