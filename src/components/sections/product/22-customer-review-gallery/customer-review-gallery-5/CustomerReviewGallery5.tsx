import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, Quote, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CustomerReviewGallery5({ data }: { data: any }) {
  const customers = data?.customers || [];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const featured = customers[selectedIndex] || customers[0] || {};

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">{data?.eyebrow || 'SPOTLIGHT REVIEWS'}</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-1 text-white">{data?.heading || 'Featured Customer Story'}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Lead Featured Review */}
          <div className="lg:col-span-7 bg-neutral-950 rounded-3xl overflow-hidden border border-neutral-800 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-80 md:h-auto relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  src={featured.media}
                  alt={featured.name}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            <div className="md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 mb-4">
                  {[...Array(featured.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-indigo-400/40 mb-3" />
                <p className="text-base text-neutral-200 leading-relaxed italic mb-6">"{featured.reviewText}"</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <img src={featured.avatar} alt={featured.name} className="w-10 h-10 rounded-full object-cover border border-indigo-400" />
                  <div>
                    <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
                      {featured.name}
                      {featured.verified && <CheckCircle2 className="w-4 h-4 text-indigo-400" />}
                    </h4>
                    <p className="text-xs text-neutral-400">{featured.location}</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-indigo-400 font-semibold uppercase">Featured Item</p>
                    <h5 className="text-xs font-bold text-white">{featured.productName}</h5>
                  </div>
                  <span className="text-xs font-bold text-neutral-300">{featured.productPrice}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Side Thumbnail List */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {customers.map((item: any, idx: number) => (
              <motion.div
                key={item.id || idx}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedIndex(idx)}
                className={`relative cursor-pointer rounded-2xl overflow-hidden border transition-all h-44 ${
                  idx === selectedIndex ? 'border-indigo-500 ring-2 ring-indigo-500/50' : 'border-neutral-800 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={item.media} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-white truncate max-w-[100px]">{item.name}</span>
                  <span className="text-[10px] font-bold text-amber-400">★ {item.rating}.0</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
