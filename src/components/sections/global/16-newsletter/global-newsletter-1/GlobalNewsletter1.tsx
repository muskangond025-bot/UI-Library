"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export function GlobalNewsletter1() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans relative overflow-hidden">
      <div className="max-w-4xl mx-auto bg-slate-900/60 rounded-3xl border border-cyan-500/30 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl relative">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" /> EDITORIAL DISPATCH #1
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Stay Ahead of Spatial Design Trends</h2>
          <p className="text-slate-400 text-sm max-w-lg mt-4 leading-relaxed">
            Get curated weekly essays on volumetric UI, generative shaders, and next-gen frontend engineering delivered to your inbox.
          </p>

          {subscribed ? (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mt-8 flex items-center gap-3 bg-cyan-500/20 text-cyan-300 px-6 py-4 rounded-2xl border border-cyan-500/40">
              <CheckCircle2 className="w-6 h-6 text-cyan-400" />
              <span className="text-sm font-bold font-mono">You are subscribed! Check your inbox for confirmation.</span>
            </motion.div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="w-full max-w-md mt-8 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                <input type="email" required placeholder="Enter work email address..." className="w-full bg-slate-950/80 border border-slate-700 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" />
              </div>
              <button type="submit" className="px-6 py-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20">
                SUBSCRIBE <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="text-[11px] font-mono text-slate-500 mt-4">Join 28,000+ tech leaders. Zero spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}