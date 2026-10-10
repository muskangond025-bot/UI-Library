"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export function GlobalPromotionalCards4() {
  const cards = [
    { title: 'Beauty Glow Pass', off: 'FLAT $30 OFF', code: 'GLOW30', bg: 'bg-rose-100 border-rose-200', pill: 'bg-rose-500', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop' },
    { title: 'Home Comfort Voucher', off: 'FLAT $50 OFF', code: 'NEST50', bg: 'bg-teal-100 border-teal-200', pill: 'bg-teal-600', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
    { title: 'Jewelry Gift Card', off: 'FLAT $100 OFF', code: 'GIFT100', bg: 'bg-purple-100 border-purple-200', pill: 'bg-purple-600', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
    { title: 'Active Club Voucher', off: 'FLAT $40 OFF', code: 'CLUB40', bg: 'bg-indigo-100 border-indigo-200', pill: 'bg-indigo-600', img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-100 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-md text-purple-600 font-bold text-xs uppercase mb-3">
            <Sparkles className="w-4 h-4" /> Claymorphic Soft Vouchers
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900">Tactile Reward Cards</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`p-6 rounded-3xl border-2 shadow-[0_10px_30px_rgba(0,0,0,0.06)] cursor-pointer flex flex-col justify-between h-[380px] ${c.bg}`}
            >
              <div className="flex justify-between items-center">
                <span className={`text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm ${c.pill}`}>{c.off}</span>
                <Heart className="w-4 h-4 text-slate-500" />
              </div>
              <div className="w-full h-40 rounded-2xl overflow-hidden border-2 border-white shadow-md my-3">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-500">PROMO: {c.code}</span>
                <h3 className="text-xl font-black text-slate-900 mt-0.5">{c.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}