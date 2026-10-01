import React from 'react';
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
