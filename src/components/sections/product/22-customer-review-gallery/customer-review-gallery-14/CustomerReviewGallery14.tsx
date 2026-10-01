import React, { useState } from 'react';
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
                className={`p-1 rounded-full transition-all ${
                  idx === activeIdx ? 'ring-4 ring-teal-400 scale-110' : 'opacity-60 hover:opacity-100'
                }`}
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
