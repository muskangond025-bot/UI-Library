const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/22-customer-review-gallery');

const generateTSX = (id) => {
  switch (id) {
    case 1:
      return `import React, { useState } from 'react';
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
                className={\`relative group cursor-pointer overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800/80 \${spanClass}\`}
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
`;
    case 2:
      return `import React, { useState } from 'react';
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
`;
    case 3:
      return `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, ChevronLeft, ChevronRight, Play, Pause, ShoppingBag } from 'lucide-react';

export default function CustomerReviewGallery3({ data }: { data: any }) {
  const customers = data?.customers || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying || customers.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % customers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, customers.length]);

  const current = customers[currentIndex] || {};

  return (
    <section className="relative min-h-[650px] w-full bg-neutral-950 text-white overflow-hidden flex items-center justify-center py-20 px-4">
      {/* Full-Bleed Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <img src={current.media} alt={current.name} className="w-full h-full object-cover filter brightness-50 contrast-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/70" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/10 text-white border border-white/20 backdrop-blur-md mb-6">
          {data?.eyebrow || 'CINEMATIC SHOWCASE'}
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="flex text-amber-400 mb-6">
              {[...Array(current.rating || 5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 stroke-none" />
              ))}
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif italic text-white max-w-3xl leading-relaxed mb-8">
              "{current.reviewText}"
            </h2>

            <div className="flex items-center gap-4 mb-8">
              <img src={current.avatar} alt={current.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/60 shadow-xl" />
              <div className="text-left">
                <h4 className="text-base font-semibold text-white flex items-center gap-1.5">
                  {current.name}
                  {current.verified && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                </h4>
                <p className="text-xs text-neutral-300">{current.location} • {current.productName}</p>
              </div>
            </div>

            <a
              href={current.productLink || '#'}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-950 text-sm font-semibold hover:bg-neutral-200 transition-colors shadow-xl"
            >
              <ShoppingBag className="w-4 h-4" />
              Shop {current.productName}
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Gallery Slider Controls */}
        <div className="mt-12 flex items-center gap-6">
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + customers.length) % customers.length)}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white transition-colors"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
          </button>

          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % customers.length)}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Progress Indicator */}
        <div className="flex gap-2 mt-8">
          {customers.map((_: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={\`h-1.5 rounded-full transition-all duration-300 \${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'}\`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 4:
      return `import React from 'react';
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
`;
    default:
      return generateTSXPart2(id);
  }
};

const generateTSXPart2 = (id) => {
  switch (id) {
    case 5:
      return `import React, { useState } from 'react';
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
                className={\`relative cursor-pointer rounded-2xl overflow-hidden border transition-all h-44 \${
                  idx === selectedIndex ? 'border-indigo-500 ring-2 ring-indigo-500/50' : 'border-neutral-800 opacity-70 hover:opacity-100'
                }\`}
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
`;
    case 6:
      return `import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function CustomerReviewGallery6({ data }: { data: any }) {
  const customers = data?.customers || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-cyan-400 bg-cyan-950 border border-cyan-800 uppercase">
              {data?.eyebrow || 'BENTO MATRIX'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-3 text-white">{data?.heading || 'Asymmetric Review Matrix'}</h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm">{data?.subtitle || 'Architectural layout engineered for high-impact customer storytelling.'}</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {customers.map((item: any, idx: number) => {
            const spans = [
              'md:col-span-2 md:row-span-2',
              'md:col-span-2 md:row-span-1',
              'md:col-span-1 md:row-span-2',
              'md:col-span-1 md:row-span-1',
              'md:col-span-2 md:row-span-1',
              'md:col-span-2 md:row-span-1',
            ];
            const spanClass = spans[idx % spans.length];

            return (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className={\`relative group rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between \${spanClass}\`}
              >
                <img src={item.media} alt={item.name} className="absolute inset-0 w-full h-full object-cover filter brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                <div className="relative z-10 flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-950/70 backdrop-blur-md text-cyan-300 border border-cyan-800/60 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Buyer
                  </span>
                  <span className="text-amber-400 font-bold text-xs flex items-center gap-1 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md">
                    ★ {item.rating}.0
                  </span>
                </div>

                <div className="relative z-10">
                  <p className="text-xs sm:text-sm font-medium text-neutral-100 italic line-clamp-2 mb-3">"{item.reviewText}"</p>
                  <div className="flex items-center gap-3">
                    <img src={item.avatar} alt={item.name} className="w-8 h-8 rounded-full object-cover ring-2 ring-cyan-400/50" />
                    <div>
                      <h4 className="text-xs font-bold text-white">{item.name}</h4>
                      <p className="text-[10px] text-neutral-400">{item.productName}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
`;
    case 7:
      return `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function CustomerReviewGallery7({ data }: { data: any }) {
  const customers = data?.customers || [];
  const [activeTab, setActiveTab] = useState(0);

  const current = customers[activeTab] || {};

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fbf9f5] text-stone-900 border-y border-stone-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center border-b border-stone-300 pb-8 mb-16">
          <span className="text-xs font-serif tracking-widest text-stone-500 uppercase">VOLUME IV • ISSUE 12</span>
          <h2 className="text-4xl sm:text-6xl font-serif font-normal text-stone-900 mt-2">{data?.heading || 'Editorial Press & Reviews'}</h2>
          <p className="text-stone-600 font-serif italic mt-2 text-sm sm:text-base">{data?.subtitle || 'Selected customer testimonials presented in timeless editorial print aesthetic.'}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
                className="p-3 bg-white shadow-2xl border border-stone-200 transform -rotate-1"
              >
                <img src={current.media} alt={current.name} className="w-full h-[420px] object-cover" />
                <p className="text-center font-serif text-xs italic text-stone-500 mt-3">{current.name} wearing {current.productName}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-5xl font-serif text-amber-700 block mb-2">"</span>
                <p className="text-xl sm:text-2xl font-serif italic text-stone-800 leading-relaxed mb-8">
                  {current.reviewText}
                </p>

                <div className="border-t border-stone-300 pt-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-base font-bold text-stone-900">{current.name}</h4>
                    <p className="text-xs text-stone-500">{current.location} • Verified Purchaser</p>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-xs text-stone-400 block">Rating</span>
                    <span className="font-serif text-sm font-bold text-amber-800">5.0 / 5.0</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-4 mt-12 pt-6 border-t border-stone-300">
              <button
                onClick={() => setActiveTab((prev) => (prev - 1 + customers.length) % customers.length)}
                className="p-3 rounded-full border border-stone-400 hover:bg-stone-200 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-stone-800" />
              </button>
              <span className="font-serif text-xs text-stone-500">
                {activeTab + 1} of {customers.length}
              </span>
              <button
                onClick={() => setActiveTab((prev) => (prev + 1) % customers.length)}
                className="p-3 rounded-full border border-stone-400 hover:bg-stone-200 transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-stone-800" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`;
    case 8:
      return `import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';

export default function CustomerReviewGallery8({ data }: { data: any }) {
  const customers = data?.customers || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">{data?.eyebrow || 'MINIMALIST DESIGN'}</span>
          <h2 className="text-3xl font-light tracking-tight text-neutral-900 mt-2">{data?.heading || 'Refined Review Grid'}</h2>
          <p className="text-neutral-500 text-xs sm:text-sm mt-2">{data?.subtitle || 'Understated elegance featuring authentic customer imagery.'}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {customers.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border-b border-neutral-200 pb-8 flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden aspect-[4/5] mb-6 rounded-lg bg-neutral-100">
                  <img src={item.media} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                <div className="flex text-amber-500 mb-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 stroke-none" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-light mb-4">"{item.reviewText}"</p>
              </div>

              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span className="font-medium text-neutral-900 flex items-center gap-1">
                  {item.name}
                  {item.verified && <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900" />}
                </span>
                <span>{item.productName}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    default:
      return generateTSXPart3(id);
  }
};

const generateTSXPart3 = (id) => {
  switch (id) {
    case 9:
      return `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, RotateCw, ChevronRight } from 'lucide-react';

export default function CustomerReviewGallery9({ data }: { data: any }) {
  const customers = data?.customers || [];
  const [deck, setDeck] = useState(customers);

  const handleNext = () => {
    setDeck((prev) => {
      const next = [...prev];
      const top = next.shift();
      if (top) next.push(top);
      return next;
    });
  };

  return (
    <section className="py-24 px-4 bg-neutral-950 text-white overflow-hidden flex flex-col items-center justify-center min-h-[600px]">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">{data?.eyebrow || 'STACKED CARDS'}</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-1 text-white">{data?.heading || 'Customer Story Deck'}</h2>
      </div>

      <div className="relative w-full max-w-md h-[460px] flex items-center justify-center">
        {deck.slice(0, 3).map((item: any, idx: number) => {
          const isTop = idx === 0;
          return (
            <motion.div
              key={item.id}
              style={{ zIndex: 10 - idx }}
              animate={{
                scale: 1 - idx * 0.06,
                y: idx * 16,
                rotate: idx === 0 ? 0 : idx === 1 ? -4 : 4,
                opacity: 1 - idx * 0.2
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              onClick={isTop ? handleNext : undefined}
              className={\`absolute inset-0 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 shadow-2xl flex flex-col justify-between cursor-pointer border-neutral-700/80\`}
            >
              <div className="relative h-56 rounded-2xl overflow-hidden mb-4">
                <img src={item.media} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-amber-400">
                  ★ {item.rating}.0
                </div>
              </div>

              <div>
                <p className="text-xs text-neutral-300 italic line-clamp-2 mb-3">"{item.reviewText}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={item.avatar} alt={item.name} className="w-7 h-7 rounded-full object-cover" />
                    <span className="text-xs font-semibold text-white">{item.name}</span>
                  </div>
                  <span className="text-[10px] text-amber-400 font-medium">Click to Flip →</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <button
        onClick={handleNext}
        className="mt-8 flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 text-neutral-950 font-bold text-xs hover:bg-amber-300 transition-colors shadow-xl"
      >
        <RotateCw className="w-4 h-4" /> Cycle Next Deck Card
      </button>
    </section>
  );
}
`;
    case 10:
      return `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, Heart, MessageCircle, Share2, MapPin } from 'lucide-react';

export default function CustomerReviewGallery10({ data }: { data: any }) {
  const customers = data?.customers || [];

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">{data?.eyebrow || 'SOCIAL STREAM'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Live Community Feed'}</h2>
        </div>

        <div className="space-y-8">
          {customers.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Post Header */}
              <div className="p-4 flex items-center justify-between border-b border-neutral-800">
                <div className="flex items-center gap-3">
                  <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-400" />
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1">
                      {item.name}
                      {item.verified && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                    </h4>
                    <p className="text-[10px] text-neutral-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-neutral-500" />
                      {item.location}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-neutral-500">{item.date}</span>
              </div>

              {/* Post Media */}
              <div className="relative max-h-96 overflow-hidden bg-black">
                <img src={item.media} alt={item.name} className="w-full h-full object-cover" />
              </div>

              {/* Post Actions */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4 text-neutral-300">
                    <button className="flex items-center gap-1 hover:text-pink-500 transition-colors text-xs font-semibold">
                      <Heart className="w-4 h-4" /> 248 Likes
                    </button>
                    <button className="flex items-center gap-1 hover:text-white transition-colors text-xs">
                      <MessageCircle className="w-4 h-4" /> Comments
                    </button>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  <span className="font-bold text-white mr-1.5">{item.name}</span>
                  {item.reviewText}
                </p>

                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-medium">Tag: {item.productName}</span>
                  <span className="font-bold text-white">{item.productPrice}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 11:
      return `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, ChevronRight } from 'lucide-react';

export default function CustomerReviewGallery11({ data }: { data: any }) {
  const customers = data?.customers || [];
  const [activeIndex, setActiveIndex] = useState(0);

  const active = customers[activeIndex] || {};

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Sticky Canvas Left */}
          <div className="lg:col-span-6 relative h-[500px] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={active.media}
                alt={active.name}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-white">{active.productName}</h4>
                <p className="text-[10px] text-neutral-400">{active.location}</p>
              </div>
              <span className="text-xs font-bold text-amber-400">★ {active.rating}.0</span>
            </div>
          </div>

          {/* Interactive Selector Right */}
          <div className="lg:col-span-6 space-y-4">
            <div className="mb-6">
              <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">{data?.eyebrow || 'DUAL VIEWPORT'}</span>
              <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Interactive Review Canvas'}</h2>
            </div>

            {customers.map((item: any, idx: number) => {
              const isActive = idx === activeIndex;
              return (
                <motion.div
                  key={item.id || idx}
                  onClick={() => setActiveIndex(idx)}
                  whileHover={{ x: 6 }}
                  className={\`p-5 rounded-2xl border cursor-pointer transition-all \${
                    isActive
                      ? 'bg-neutral-900 border-purple-500 shadow-lg'
                      : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700 opacity-60 hover:opacity-100'
                  }\`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <img src={item.avatar} alt={item.name} className="w-7 h-7 rounded-full object-cover" />
                      <span className="text-xs font-bold text-white">{item.name}</span>
                    </div>
                    <div className="flex text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 stroke-none" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-neutral-300 italic line-clamp-2">"{item.reviewText}"</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
`;
    case 12:
      return `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, X, Maximize2, ShoppingBag } from 'lucide-react';

export default function CustomerReviewGallery12({ data }: { data: any }) {
  const customers = data?.customers || [];
  const [modalItem, setModalItem] = useState<any>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">{data?.eyebrow || 'LIGHTBOX EXPERIENCE'}</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-1">{data?.heading || 'Media Showcase Gallery'}</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {customers.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              whileHover={{ scale: 1.05 }}
              onClick={() => setModalItem(item)}
              className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-800 cursor-pointer group border border-neutral-700/60"
            >
              <img src={item.media} alt={item.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {modalItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setModalItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden flex flex-col md:flex-row max-h-[85vh]"
              >
                <button onClick={() => setModalItem(null)} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-950/80 text-white">
                  <X className="w-5 h-5" />
                </button>
                <div className="md:w-3/5 h-80 md:h-auto bg-black">
                  <img src={modalItem.media} alt={modalItem.name} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-2/5 p-8 flex flex-col justify-between overflow-y-auto">
                  <div>
                    <div className="flex text-amber-400 mb-3">
                      {[...Array(modalItem.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                      ))}
                    </div>
                    <p className="text-sm text-neutral-200 italic mb-6">"{modalItem.reviewText}"</p>
                  </div>
                  <div className="pt-4 border-t border-neutral-800">
                    <div className="flex items-center gap-3 mb-4">
                      <img src={modalItem.avatar} alt={modalItem.name} className="w-9 h-9 rounded-full object-cover" />
                      <div>
                        <h4 className="text-xs font-bold text-white">{modalItem.name}</h4>
                        <p className="text-[10px] text-neutral-400">{modalItem.location}</p>
                      </div>
                    </div>
                    <button className="w-full py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2">
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Shop {modalItem.productName}
                    </button>
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
`;
    default:
      return generateTSXPart4(id);
  }
};

const generateTSXPart4 = (id) => {
  switch (id) {
    case 13:
      return `import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function CustomerReviewGallery13({ data }: { data: any }) {
  const customers = data?.customers || [];

  return (
    <section className="py-24 px-4 bg-stone-100 text-stone-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-lg mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">{data?.eyebrow || 'RETRO POLAROID'}</span>
          <h2 className="text-4xl font-serif text-stone-900 mt-1">{data?.heading || 'Snapshots of Joy'}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {customers.map((item: any, idx: number) => {
            const rotations = ['rotate-2', '-rotate-3', 'rotate-3', '-rotate-2', 'rotate-1', '-rotate-4'];
            const rot = rotations[idx % rotations.length];

            return (
              <motion.div
                key={item.id || idx}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
                transition={{ duration: 0.3 }}
                className={\`bg-white p-4 pb-6 shadow-xl border border-stone-200 transform \${rot} cursor-pointer\`\}
              >
                <div className="aspect-[4/3] bg-stone-200 overflow-hidden mb-4">
                  <img src={item.media} alt={item.name} className="w-full h-full object-cover filter contrast-105" />
                </div>
                <div className="text-center">
                  <p className="font-serif italic text-xs text-stone-700 line-clamp-2 mb-2">"{item.reviewText}"</p>
                  <p className="font-serif text-xs font-bold text-stone-900">— {item.name}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
`;
    case 14:
      return `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';

export default function CustomerReviewGallery14({ data }: { data: any }) {
  const customers = data?.customers || [];
  const [activeIdx, setActiveIdx] = useState(0);

  const active = customers[activeIdx] || {};

  return (
    <section className="py-24 px-4 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-xs font-bold tracking-widest text-teal-400 uppercase">{data?.eyebrow || 'RADIAL ORBIT'}</span>
        <h2 className="text-3xl font-bold mt-1 mb-16">{data?.heading || 'Community Orbit Showcase'}</h2>

        <div className="relative flex flex-col items-center justify-center">
          {/* Avatar Orbit Node Ring */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {customers.map((item: any, idx: number) => (
              <button
                key={item.id || idx}
                onClick={() => setActiveIdx(idx)}
                className={\`p-1 rounded-full transition-all \${
                  idx === activeIdx ? 'ring-4 ring-teal-400 scale-110' : 'opacity-60 hover:opacity-100'
                }\`}
              >
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
              </button>
            ))}
          </div>

          {/* Central Active Card */}
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-lg w-full bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl text-left"
          >
            <img src={active.media} alt={active.name} className="w-full h-64 object-cover rounded-2xl mb-6" />
            <div className="flex text-amber-400 mb-3">
              {[...Array(active.rating || 5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
              ))}
            </div>
            <p className="text-sm text-neutral-200 italic leading-relaxed mb-6">"{active.reviewText}"</p>
            <div className="flex items-center justify-between border-t border-neutral-800 pt-4">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1">
                  {active.name}
                  {active.verified && <CheckCircle2 className="w-4 h-4 text-teal-400" />}
                </h4>
                <p className="text-xs text-neutral-400">{active.productName}</p>
              </div>
              <span className="text-xs font-bold text-teal-400">{active.productPrice}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
`;
    case 15:
      return `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CustomerReviewGallery15({ data }: { data: any }) {
  const customers = data?.customers || [];
  const [index, setIndex] = useState(0);

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-orange-400 tracking-widest uppercase">{data?.eyebrow || 'CAROUSEL STACK'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Depth Scaled Reviews'}</h2>
        </div>

        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => setIndex((prev) => (prev - 1 + customers.length) % customers.length)}
            className="p-3 rounded-full bg-neutral-800 text-white hover:bg-neutral-700"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="w-full max-w-xl bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden p-6 shadow-2xl">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img src={customers[index]?.media} alt={customers[index]?.name} className="w-full h-72 object-cover rounded-2xl mb-6" />
              <p className="text-sm text-neutral-200 italic mb-4">"{customers[index]?.reviewText}"</p>
              <div className="flex items-center justify-between border-t border-neutral-800 pt-4">
                <span className="text-xs font-bold text-white">{customers[index]?.name}</span>
                <span className="text-xs font-bold text-orange-400">★ {customers[index]?.rating}.0</span>
              </div>
            </motion.div>
          </div>

          <button
            onClick={() => setIndex((prev) => (prev + 1) % customers.length)}
            className="p-3 rounded-full bg-neutral-800 text-white hover:bg-neutral-700"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
`;
    case 16:
      return `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2 } from 'lucide-react';

export default function CustomerReviewGallery16({ data }: { data: any }) {
  const customers = data?.customers || [];
  const milestones = ["Day 1 - Unboxing", "30 Days In", "6 Months Later", "1 Year Review"];

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-rose-400 tracking-widest uppercase">{data?.eyebrow || 'CHRONOLOGICAL JOURNEY'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Long-Term Experience Timeline'}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {customers.slice(0, 4).map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-4 text-xs text-rose-400 font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                {milestones[idx]}
              </div>
              <img src={item.media} alt={item.name} className="w-full h-44 object-cover rounded-xl mb-4" />
              <p className="text-xs text-neutral-300 italic line-clamp-3 mb-3">"{item.reviewText}"</p>
              <div className="text-[10px] text-neutral-400 font-bold">{item.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 17:
      return `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, CheckCircle2 } from 'lucide-react';

export default function CustomerReviewGallery17({ data }: { data: any }) {
  const customers = data?.customers || [];
  const [playingVideo, setPlayingVideo] = useState<any>(null);

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase">{data?.eyebrow || 'VIDEO FIRST'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Video Review Gallery'}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {customers.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              whileHover={{ y: -6 }}
              onClick={() => setPlayingVideo(item)}
              className="relative aspect-[9/16] max-h-[460px] mx-auto w-full rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800 cursor-pointer group shadow-2xl"
            >
              <img src={item.media} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 rounded-full bg-red-600 text-white shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-white" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs text-white italic line-clamp-2 mb-3">"{item.reviewText}"</p>
                <div className="flex items-center gap-2">
                  <img src={item.avatar} alt={item.name} className="w-7 h-7 rounded-full object-cover" />
                  <span className="text-xs font-bold text-white">{item.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Player Modal */}
        <AnimatePresence>
          {playingVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setPlayingVideo(null)}
            >
              <div className="relative max-w-md w-full bg-neutral-900 rounded-3xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setPlayingVideo(null)} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white">
                  <X className="w-5 h-5" />
                </button>
                <div className="aspect-[9/16] bg-black">
                  <img src={playingVideo.media} alt={playingVideo.name} className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
`;
    case 18:
      return `import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';

export default function CustomerReviewGallery18({ data }: { data: any }) {
  const customers = data?.customers || [];

  return (
    <section className="py-24 px-4 bg-gradient-to-tr from-violet-950 via-indigo-950 to-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-violet-400 tracking-widest uppercase">{data?.eyebrow || 'GLASSMORPHISM'}</span>
          <h2 className="text-4xl font-bold mt-1">{data?.heading || 'Floating UGC Experience'}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {customers.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: idx * 0.4, ease: 'easeInOut' }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl flex flex-col justify-between"
            >
              <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                <img src={item.media} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-neutral-200 italic line-clamp-3 mb-4">"{item.reviewText}"</p>
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <span className="text-xs font-bold text-white">{item.name}</span>
                <span className="text-xs font-bold text-amber-300">★ {item.rating}.0</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 19:
      return `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function CustomerReviewGallery19({ data }: { data: any }) {
  const customers = data?.customers || [];

  return (
    <section className="py-24 px-4 bg-stone-950 text-stone-100 uppercase font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="border-b border-stone-800 pb-8 mb-16 flex justify-between items-end">
          <div>
            <span className="text-xs font-mono text-amber-500">{data?.eyebrow || 'HIGH FASHION'}</span>
            <h2 className="text-4xl sm:text-6xl font-black mt-2 tracking-tight">{data?.heading || 'Art-Directed Customer Edits'}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customers.slice(0, 3).map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              whileHover={{ scale: 1.02 }}
              className="bg-stone-900 border border-stone-800 p-6 rounded-none flex flex-col justify-between"
            >
              <div className="h-80 overflow-hidden mb-6 bg-black">
                <img src={item.media} alt={item.name} className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500" />
              </div>
              <p className="text-xs font-serif italic text-stone-300 normal-case mb-4">"{item.reviewText}"</p>
              <div className="flex justify-between items-center text-xs font-mono text-stone-400">
                <span>{item.name}</span>
                <ArrowUpRight className="w-4 h-4 text-amber-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 20:
      return `import React, { useState } from 'react';
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
                className={\`px-4 py-2 rounded-full text-xs font-semibold capitalize transition-all \${
                  filter === f ? 'bg-amber-400 text-neutral-950 font-bold' : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:bg-neutral-800'
                }\`}
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
`;
    default:
      return '';
  }
};

console.log("Writing TSX files...");
for (let i = 1; i <= 20; i++) {
  const folderPath = path.join(baseDir, `customer-review-gallery-${i}`);
  const tsxContent = generateTSX(i);
  fs.writeFileSync(path.join(folderPath, `CustomerReviewGallery${i}.tsx`), tsxContent, 'utf8');
}
console.log("All 20 TSX files generated successfully.");
