import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export function AboutImageContent3({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-black text-cyan-400 font-mono overflow-hidden">
      <div className="max-w-7xl mx-auto rounded-2xl border border-cyan-500/40 p-8 bg-slate-950/90 relative shadow-[0_0_50px_rgba(6,182,212,0.15)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs text-cyan-300 font-bold uppercase flex items-center gap-2"><Terminal className="w-4 h-4" /> SYS.IMAGE_TELEMETRY // ID: 03</div>
          <h2 className="text-3xl font-black text-white uppercase">{settings.title || 'QUANTUM IMAGE PROCESSING PROTOCOLS'}</h2>
          <p className="text-cyan-200/80 text-sm font-sans leading-relaxed">{settings.excerpt || 'Analyzing real-time visual telemetry and neural asset rendering at scale.'}</p>
        </div>
        <div className="lg:col-span-5 aspect-square border border-cyan-500/40 rounded-xl overflow-hidden p-2 bg-black/60">
          <img src={settings.featuredImage || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"} alt="Cyber Media" className="w-full h-full object-cover opacity-80 mix-blend-screen" />
        </div>
      </div>
    </section>
  );
}
