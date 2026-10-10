"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Star } from 'lucide-react';

export function GlobalTestimonials4() {
  const reviews = [
    { name: 'Chloe Bennett', role: 'UI Lead', text: 'Soft volumes, delightful interactions, and zero layout stress.', bg: 'bg-rose-100 border-rose-200', pill: 'bg-rose-500', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'Liam Davies', role: 'Product Owner', text: 'Extremely friendly tactile cards that boosted user trust.', bg: 'bg-teal-100 border-teal-200', pill: 'bg-teal-600', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { name: 'Emma Watson', role: 'Brand Strategist', text: 'The pastel balance and 3D depth are absolutely gorgeous.', bg: 'bg-purple-100 border-purple-200', pill: 'bg-purple-600', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
    { name: 'Noah Miller', role: 'Design Director', text: 'Our favorite component library for modern app interfaces.', bg: 'bg-indigo-100 border-indigo-200', pill: 'bg-indigo-600', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-100 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-md text-purple-600 font-bold text-xs uppercase mb-3">
            <Sparkles className="w-4 h-4" /> Claymorphic Soft Feedback
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900">Tactile Customer Love</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`p-6 rounded-3xl border-2 shadow-[0_10px_30px_rgba(0,0,0,0.06)] cursor-pointer flex flex-col justify-between h-[340px] ${r.bg}`}
            >
              <div className="flex justify-between items-center">
                <span className={`text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm ${r.pill}`}>VERIFIED</span>
                <Heart className="w-4 h-4 text-slate-500" />
              </div>
              <p className="text-slate-800 text-base font-bold my-2">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full border-2 border-white object-cover shadow" />
                <div>
                  <h4 className="text-sm font-black text-slate-900">{r.name}</h4>
                  <p className="text-xs font-semibold text-slate-500">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}