import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowRight, MapPin } from 'lucide-react';

export default function BrandInformation1({ data }: { data: any }) {
  const paragraphs = data?.storyParagraphs || [];
  const images = data?.images || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-neutral-800 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase">{data?.eyebrow || 'OUR NARRATIVE'}</span>
            <h2 className="text-4xl sm:text-6xl font-serif text-neutral-100 mt-2">{data?.heading || 'The Pursuit of Timeless Excellence'}</h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>{data?.origin || 'Florence, Italy'} • Est. {data?.foundedYear || '2014'}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <Quote className="w-10 h-10 text-amber-400/40" />
            <p className="text-2xl sm:text-3xl font-serif italic text-amber-300 leading-snug">
              "{data?.quote || 'We do not design for the moment; we craft for a lifetime.'}"
            </p>
            <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              {paragraphs.map((p: string, idx: number) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest hover:text-amber-300 pt-4">
              Discover Our Heritage <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {images.map((img: string, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl ${idx === 0 ? 'h-80' : 'h-80 mt-8'}`}
              >
                <img src={img} alt="Brand Story" className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
