import React, { useState } from 'react';
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
