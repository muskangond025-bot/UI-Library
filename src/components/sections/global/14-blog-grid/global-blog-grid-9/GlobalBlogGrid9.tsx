"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

export function GlobalBlogGrid9() {
  const posts = [
    { title: 'The Psychology of Visual Hierarchy in Mobile Checkout UI', tag: 'UX RESEARCH', read: '5 min', img: 'https://images.unsplash.com/photo-1556742049-0a67daf64f42?q=80&w=800&auto=format&fit=crop' },
    { title: 'Micro-Interactions That Elevate SaaS Product Adoption', tag: 'PRODUCT DESIGN', read: '4 min', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop' },
    { title: 'Design System Governance in Multi-Brand Enterprises', tag: 'SYSTEMS', read: '7 min', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-100 text-slate-800 font-sans border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider bg-slate-200 px-3 py-1 rounded-full">SOFT NEUMORPHIC FEED #9</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4">Elevated Reader Stream</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ y: -6 }} className="bg-slate-100 rounded-3xl p-6 shadow-[10px_10px_20px_#d1d5db,-10px_-10px_20px_#ffffff] flex flex-col justify-between min-h-[440px] cursor-pointer group">
              <div>
                <div className="w-full h-52 rounded-2xl overflow-hidden mb-5 shadow-inner">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                  <span className="font-bold text-indigo-600">{p.tag}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {p.read}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">{p.title}</h3>
              </div>
              <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-xs font-bold text-slate-700">
                <span>READ ARTICLE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-indigo-600" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}