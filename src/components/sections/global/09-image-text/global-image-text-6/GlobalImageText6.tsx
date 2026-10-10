"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalImageText6() {
  const [tab, setTab] = useState(0);
  const data = [
    { title: 'Architectural Heritage', desc: 'Precision crafted structural design with raw concrete aesthetics.', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
    { title: 'Computational Gear', desc: 'High-speed processors embedded inside minimalist aluminum cases.', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { title: 'Luxury Timepieces', desc: 'Hand-assembled mechanical movement with sapphire crystal glass.', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-mono uppercase text-indigo-400">Interactive Canvas</span>
          <h2 className="text-4xl font-extrabold text-white">Dynamic Step Feature Showcase</h2>
          <div className="space-y-3">
            {data.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setTab(idx)}
                className={`p-4 rounded-xl cursor-pointer border transition-all ${tab === idx ? 'bg-indigo-950 border-indigo-500 text-white' : 'bg-slate-800/40 border-slate-700 text-slate-400 hover:bg-slate-800'}`}
              >
                <h3 className="font-bold text-lg">{item.title}</h3>
                {tab === idx && <p className="text-sm text-slate-300 mt-2">{item.desc}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="h-[440px] rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative">
          <img src={data[tab].img} alt={data[tab].title} className="w-full h-full object-cover transition-all duration-500" />
        </div>
      </div>
    </section>
  );
}