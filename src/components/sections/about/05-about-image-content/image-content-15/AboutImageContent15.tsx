import React from 'react';
import { motion } from 'framer-motion';

export function AboutImageContent15({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-zinc-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Neon Spotlight Edge
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
            {settings.title || 'High Contrast Precision & Neon Edge Architecture'}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            {settings.excerpt || 'Illuminating core content with vibrant cyan and magenta glow contours engineered for maximum visual contrast on dark interfaces.'}
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-zinc-900 border-l-4 border-cyan-400">
              <div className="text-xs text-zinc-400 uppercase font-mono">Response Time</div>
              <div className="text-xl font-bold text-white mt-1">&lt; 12ms</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900 border-l-4 border-fuchsia-500">
              <div className="text-xs text-zinc-400 uppercase font-mono">Color Space</div>
              <div className="text-xl font-bold text-white mt-1">DCI-P3 Wide</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-6 relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-100 transition duration-1000" />
          <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-zinc-900 p-2 shadow-2xl">
            <img 
              src={settings.featuredImage || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"} 
              alt="Neon Spotlight Media" 
              className="w-full h-[380px] object-cover rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
