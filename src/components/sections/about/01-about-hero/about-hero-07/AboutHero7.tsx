import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, ArrowRight, ShieldCheck, Mail, Sparkles, CheckCircle2 } from 'lucide-react';

export function AboutHero7({ data, section }: { data?: any; section?: any }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="w-full min-h-[700px] py-20 px-4 sm:px-6 lg:px-8 bg-black text-slate-200 overflow-hidden relative font-sans">
      <div className="absolute top-1/2 -left-32 w-[35rem] h-[35rem] bg-cyan-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Hero Content & Email CTA */}
        <div className="lg:col-span-7 space-y-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase">
            <Droplets className="w-4 h-4 animate-bounce text-cyan-400" /> SPATIAL COMMERCE HERO #07
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-white to-cyan-300 leading-[1.08] tracking-tight">
            Pioneering Zero-Latency Spatial E-Commerce
          </h1>

          <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-xl">
            We blend deep liquid dark gradient mesh backdrops with transparent glass architecture to deliver high-performance, carbon-neutral digital storefront systems.
          </p>

          {/* Email Subscription Box */}
          <div className="max-w-md">
            {submitted ? (
              <div className="p-4 rounded-2xl bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-sm font-mono flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" /> Early Access Request Confirmed!
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }} className="flex items-center p-2 rounded-2xl bg-slate-900 border border-slate-800 focus-within:border-cyan-400 transition-colors">
                <Mail className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  className="w-full bg-transparent px-3 py-2 text-sm text-white focus:outline-none placeholder:text-slate-500 font-mono"
                  required
                />
                <button type="submit" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shrink-0 hover:scale-105 transition-all">
                  Request Access
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right 3D Interactive Device Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border-2 border-slate-800 shadow-[0_25px_80px_rgba(0,0,0,0.9)] group"
        >
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80"
            alt="3D Spatial Storefront"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-slate-800 flex items-center justify-between">
            <span className="text-xs font-mono text-cyan-300 font-bold uppercase">SPATIAL MESH v2.6 ACTIVE</span>
            <span className="text-[11px] font-mono text-slate-400">60FPS SPATIAL AR</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}