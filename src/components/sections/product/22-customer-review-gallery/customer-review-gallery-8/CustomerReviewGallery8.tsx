import React from 'react';
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
