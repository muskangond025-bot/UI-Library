import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export default function BrandInformation2({ data }: { data: any }) {
  const milestones = data?.milestones || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">{data?.eyebrow || 'HERITAGE & LEGACY'}</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white mt-2">{data?.heading || 'A Century of Craftsmanship'}</h2>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">{data?.subtitle || 'Trace our journey across ten decades of textile innovation.'}</p>
        </div>

        <div className="relative border-l-2 border-emerald-500/40 ml-4 sm:ml-32 space-y-12 pl-6 sm:pl-10">
          {milestones.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-neutral-900" />
              <span className="hidden sm:block absolute -left-36 top-1 text-sm text-emerald-400 font-serif font-bold">{item.year}</span>

              <div className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="sm:hidden text-xs font-bold text-emerald-400 font-serif">{item.year}</span>
                  <span className="text-[10px] text-neutral-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    {item.location}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
