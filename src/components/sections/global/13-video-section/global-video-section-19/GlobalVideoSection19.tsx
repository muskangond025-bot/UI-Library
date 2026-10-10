"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalVideoSection19() {
  return (
    <section className="w-full py-20 px-6 bg-slate-200 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-800">Neumorphic Soft Inset Video Console</h2>

        <div className="bg-slate-200 p-8 rounded-3xl shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] cursor-pointer max-w-4xl mx-auto h-[440px] relative">
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-inner border border-slate-300 relative">
            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" alt="Neumorphic Video" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center shadow-[6px_6px_12px_#00000040]">
                <Play className="w-6 h-6 fill-slate-800 ml-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}