"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bookmark } from 'lucide-react';

export function GlobalBlogGrid5() {
  const posts = [
    { title: 'Designing High-Conversion E-Commerce Checkout Flows', category: 'UX & CRO', date: 'Oct 09, 2026', read: '5 min read', author: 'Sarah Jenkins', img: 'https://images.unsplash.com/photo-1556742049-0a67daf64f42?q=80&w=800&auto=format&fit=crop' },
    { title: 'The Rise of Micro-Animations in SaaS Dashboards', category: 'UI DESIGN', date: 'Oct 07, 2026', read: '4 min read', author: 'David Kovač', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop' },
    { title: 'Building Scalable Component Libraries with React', category: 'FRONTEND', date: 'Oct 04, 2026', read: '8 min read', author: 'Li Wei', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-50 text-slate-900 font-sans border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">INSIGHTS STREAM #5</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-3">Product & Design Horizontal Feed</h2>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ x: 8 }} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 cursor-pointer group hover:border-indigo-500 transition-all">
              <div className="w-full md:w-48 h-36 rounded-xl overflow-hidden shrink-0">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mb-2">
                  <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded">{p.category}</span>
                  <span>• {p.date}</span>
                  <span>• {p.read}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-950 group-hover:text-indigo-600 transition-colors mb-2">{p.title}</h3>
                <p className="text-xs text-slate-600 font-medium">Published by {p.author}</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:text-indigo-600">
                  <Bookmark className="w-4 h-4" />
                </button>
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}