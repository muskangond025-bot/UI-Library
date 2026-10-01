import React, { useState } from 'react';
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
