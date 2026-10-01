import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, Heart, Tag, X, Maximize2 } from 'lucide-react';

export default function CustomerReviewGallery2({ data }: { data: any }) {
  const [activeItem, setActiveItem] = useState<any>(null);
  const customers = data?.customers || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">{data?.eyebrow || 'COMMUNITY STORIES'}</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">{data?.heading || 'Visual Customer Reviews'}</h2>
          <p className="text-neutral-400 mt-3 text-sm sm:text-base">{data?.subtitle || 'Explore authentic photos uploaded by verified buyers experiencing our collection.'}</p>
        </div>

        {/* Pinterest Style Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {customers.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveItem(item)}
              className="break-inside-avoid relative group bg-neutral-800/80 rounded-2xl overflow-hidden border border-neutral-700/60 shadow-lg cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img src={item.media} alt={item.name} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-2 rounded-full bg-black/60 text-white backdrop-blur-md inline-block">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                {item.tags && item.tags.length > 0 && (
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/90 text-neutral-950 backdrop-blur-md">
                      {item.tags[0]}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <img src={item.avatar} alt={item.name} className="w-8 h-8 rounded-full object-cover border border-emerald-400/40" />
                    <div>
                      <h4 className="text-xs font-bold text-white flex items-center gap-1">
                        {item.name}
                        {item.verified && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                      </h4>
                      <p className="text-[10px] text-neutral-400">{item.location}</p>
                    </div>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed italic line-clamp-3 mb-4">"{item.reviewText}"</p>

                <div className="flex items-center justify-between pt-3 border-t border-neutral-700/60 text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <Tag className="w-3 h-3" />
                    {item.productName}
                  </span>
                  <span>{item.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal View */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setActiveItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-xl w-full bg-neutral-900 border border-neutral-700 rounded-2xl overflow-hidden p-6 text-white"
              >
                <button onClick={() => setActiveItem(null)} className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
                <img src={activeItem.media} alt={activeItem.name} className="w-full h-72 object-cover rounded-xl mb-4" />
                <div className="flex items-center gap-3 mb-3">
                  <img src={activeItem.avatar} alt={activeItem.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h3 className="text-sm font-bold flex items-center gap-1.5">
                      {activeItem.name}
                      {activeItem.verified && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    </h3>
                    <p className="text-xs text-neutral-400">{activeItem.location} • {activeItem.date}</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-200 italic mb-4">"{activeItem.reviewText}"</p>
                <div className="p-3 rounded-lg bg-neutral-800 flex items-center justify-between">
                  <span className="text-xs text-emerald-400 font-semibold">{activeItem.productName}</span>
                  <span className="text-xs text-white font-bold">{activeItem.productPrice}</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
