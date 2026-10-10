import React from 'react';
import { motion } from 'framer-motion';

export function AboutImageContent18({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Prismatic Photo Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 order-2 lg:order-1 relative"
        >
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-teal-400 via-indigo-500 to-pink-500 blur-lg opacity-60 animate-pulse" />
          <div className="relative rounded-2xl p-1 bg-gradient-to-r from-teal-400 via-indigo-500 to-pink-500 shadow-2xl">
            <div className="rounded-xl overflow-hidden bg-slate-900">
              <img 
                src={settings.featuredImage || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"} 
                alt="Prismatic Refraction Media" 
                className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-6 order-1 lg:order-2 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wide">
            🌈 Prismatic Chromatic Spectrum
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {settings.title || 'Iridescent Spectrum Framing for Creative Imagery'}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {settings.excerpt || 'Vibrant rainbow refraction borders cast rich chromatic ambient lighting, capturing immediate viewer attention.'}
          </p>
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-3 overflow-hidden">
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-950" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="" />
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-950" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="" />
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-950" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="" />
            </div>
            <span className="text-xs text-slate-400 font-medium">Trusted by 2,500+ design teams globally</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
