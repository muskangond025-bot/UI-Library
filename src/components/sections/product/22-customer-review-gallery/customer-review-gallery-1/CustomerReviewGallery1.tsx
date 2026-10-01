import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, Quote, ArrowUpRight, X, Play } from 'lucide-react';

export default function CustomerReviewGallery1({ data }: { data: any }) {
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);

  const customers = data?.customers || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-neutral-800 pb-8">
          <div>
            <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase">{data?.eyebrow || 'EDITORIAL PERSPECTIVE'}</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-neutral-100 mt-2">{data?.heading || 'The Community Gallery'}</h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm sm:text-base leading-relaxed">{data?.subtitle || 'Real stories and visual expressions from our valued clientele around the globe.'}</p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {customers.slice(0, 6).map((item: any, idx: number) => {
            const spans = [
              'md:col-span-8 md:row-span-2 h-[500px]',
              'md:col-span-4 h-[240px]',
              'md:col-span-4 h-[240px]',
              'md:col-span-4 h-[320px]',
              'md:col-span-4 h-[320px]',
              'md:col-span-4 h-[320px]',
            ];
            const spanClass = spans[idx % spans.length];

            return (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, clipPath: 'inset(10% 0 10% 0)' }}
                whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0% 0)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                onClick={() => setSelectedCustomer(item)}
                className={`relative group cursor-pointer overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800/80 ${spanClass}`}
              >
                <img
                  src={item.media}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {item.mediaType === 'video' && (
                  <div className="absolute top-4 right-4 bg-neutral-900/80 backdrop-blur-md p-2.5 rounded-full border border-neutral-700/50 text-white">
                    <Play className="w-4 h-4 fill-white" />
                  </div>
                )}

                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-900/80 border border-neutral-700/60 backdrop-blur-md text-amber-300">
                      <Star className="w-3 h-3 fill-amber-300 stroke-none" />
                      {item.rating}.0 Verified
                    </span>
                    <span className="p-2 rounded-full bg-neutral-900/60 border border-neutral-700/50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  <div>
                    <Quote className="w-6 h-6 text-amber-400/60 mb-2" />
                    <p className="text-sm font-serif italic text-neutral-200 line-clamp-2 mb-3">"{item.reviewText}"</p>
                    <div className="flex items-center gap-3">
                      <img src={item.avatar} alt={item.name} className="w-8 h-8 rounded-full object-cover border border-amber-400/40" />
                      <div>
                        <h4 className="text-xs font-semibold text-neutral-100 flex items-center gap-1">
                          {item.name}
                          {item.verified && <CheckCircle2 className="w-3 h-3 text-amber-400" />}
                        </h4>
                        <p className="text-[10px] text-neutral-400">{item.productName}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Drawer for detail view */}
        <AnimatePresence>
          {selectedCustomer && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelectedCustomer(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              >
                <button
                  onClick={() => setSelectedCustomer(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-950/80 text-neutral-300 hover:text-white border border-neutral-700"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="md:w-1/2 h-64 md:h-auto relative bg-black">
                  <img src={selectedCustomer.media} alt={selectedCustomer.name} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-between overflow-y-auto">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex text-amber-400">
                        {[...Array(selectedCustomer.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                        ))}
                      </div>
                      <span className="text-xs text-neutral-400">{selectedCustomer.date}</span>
                    </div>
                    <p className="text-base font-serif italic text-neutral-100 leading-relaxed mb-6">"{selectedCustomer.reviewText}"</p>
                    <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 mb-6 flex items-center gap-4">
                      <img src={selectedCustomer.productImage} alt={selectedCustomer.productName} className="w-12 h-12 rounded-lg object-cover" />
                      <div>
                        <p className="text-xs text-amber-400 font-medium">Purchased Item</p>
                        <h5 className="text-sm font-semibold text-white">{selectedCustomer.productName}</h5>
                        <p className="text-xs text-neutral-400">{selectedCustomer.productPrice}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-neutral-800">
                    <img src={selectedCustomer.avatar} alt={selectedCustomer.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <h4 className="text-sm font-medium text-white flex items-center gap-1.5">
                        {selectedCustomer.name}
                        {selectedCustomer.verified && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                      </h4>
                      <p className="text-xs text-neutral-400">{selectedCustomer.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
