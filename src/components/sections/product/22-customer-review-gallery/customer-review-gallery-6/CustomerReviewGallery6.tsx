import React from 'react';
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
                className={`relative group rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between ${spanClass}`}
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
