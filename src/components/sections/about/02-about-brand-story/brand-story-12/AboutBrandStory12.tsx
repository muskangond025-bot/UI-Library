import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Zap } from 'lucide-react';

export function AboutBrandStory12({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-black text-emerald-400 font-mono overflow-hidden">
      <div className="max-w-7xl mx-auto pt-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border-2 border-emerald-500/50 p-6 sm:p-10 rounded-xl relative bg-emerald-950/20 shadow-[0_0_40px_rgba(16,185,129,0.15)]"
        >
          <div className="absolute -top-3.5 left-6 px-3 py-0.5 bg-black border border-emerald-500/60 text-xs text-emerald-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            [HUD_BRAND_BLUEPRINT // ID: 12]
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-wider uppercase text-white leading-tight">
                {settings.title || 'SCI-FI HUD BRAND ARCHITECTURE BLUEPRINT'}
              </h2>
              <p className="text-emerald-300/80 text-sm sm:text-base font-sans leading-relaxed max-w-2xl">
                {settings.excerpt || 'Futuristic technical indicators, telemetry badges, and corner bracket frames engineered for advanced developer portals.'}
              </p>
              <div className="pt-4 border-t border-emerald-900/60">
                <button className="px-7 py-3.5 bg-emerald-500 text-black font-extrabold text-xs uppercase tracking-widest flex items-center gap-2">
                  <Terminal className="w-4 h-4 fill-black" /> <span>EXECUTE_BLUEPRINT()</span>
                </button>
              </div>
            </div>
            <div className="lg:col-span-4 aspect-square border border-emerald-500/40 rounded-lg overflow-hidden p-1 bg-black/60 relative">
              <img src={settings.featuredImage || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"} alt="HUD Blueprint" className="w-full h-full object-cover opacity-80 mix-blend-screen" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
