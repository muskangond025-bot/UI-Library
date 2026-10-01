import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, Filter, Search, Grid, List } from 'lucide-react';

export default function CustomerReviewGallery20({ data }: { data: any }) {
  const customers = data?.customers || [];
  const [filter, setFilter] = useState('all');

  const filtered = customers.filter((item: any) => {
    if (filter === 'video') return item.mediaType === 'video';
    if (filter === 'verified') return item.verified;
    return true;
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">{data?.eyebrow || 'ALL-IN-ONE HUB'}</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-1">{data?.heading || 'Customer Review Hub'}</h2>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2">
            {['all', 'video', 'verified'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-semibold capitalize transition-all ${
                  filter === f ? 'bg-amber-400 text-neutral-950 font-bold' : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:bg-neutral-800'
                }`}
              >
                {f} Reviews
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((item: any, idx: number) => (
              <motion.div
                key={item.id || idx}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                    <img src={item.media} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex text-amber-400 mb-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                    ))}
                  </div>
                  <p className="text-xs text-neutral-300 italic line-clamp-3 mb-4">"{item.reviewText}"</p>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-neutral-800">
                  <img src={item.avatar} alt={item.name} className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <h4 className="text-xs font-bold text-white flex items-center gap-1">
                      {item.name}
                      {item.verified && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                    </h4>
                    <p className="text-[10px] text-neutral-400">{item.productName}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
