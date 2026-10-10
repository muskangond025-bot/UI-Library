"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export function GlobalCategoryGrid4() {
  const items = [
    { title: 'Beauty Glow', items: '240 Items', bg: 'bg-rose-100 border-rose-200', pill: 'bg-rose-500', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop' },
    { title: 'Home Comfort', items: '180 Items', bg: 'bg-teal-100 border-teal-200', pill: 'bg-teal-600', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
    { title: 'Fine Jewels', items: '320 Items', bg: 'bg-purple-100 border-purple-200', pill: 'bg-purple-600', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
    { title: 'Active Sports', items: '410 Items', bg: 'bg-indigo-100 border-indigo-200', pill: 'bg-indigo-600', img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-100 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-md text-purple-600 font-bold text-xs uppercase mb-3">
            <Sparkles className="w-4 h-4" /> Claymorphic Soft Collection
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900">Explore Soft Categories</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 rounded-3xl border-2 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all cursor-pointer ${item.bg} flex flex-col justify-between h-96` }
            >
              <div className="flex justify-between items-center">
                <span className={`text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm ${item.pill}`}>
                  {item.items}
                </span>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-600 shadow-inner">
                  <Heart className="w-4 h-4" />
                </div>
              </div>
              <div className="w-full h-44 rounded-2xl overflow-hidden shadow-lg border-2 border-white/60 my-4">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">{item.title}</h3>
                <p className="text-xs font-medium text-slate-500 mt-1">Tap to browse collection</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}