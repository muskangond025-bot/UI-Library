import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';

export function OffersFeatured5() {
  const highlights = [
    { title: 'Studio Display XDR Pro', desc: 'Mini-LED 5K resolution with 1600 nits peak brightness.', price: '$1,299', orig: '$1,599', tag: 'APPLE STUDIO PICK' },
    { title: 'Pro Audio Headphones Max', desc: 'Custom acoustic driver architecture with lossless spatial audio.', price: '$429', orig: '$549', tag: 'FEATURED DROP' }
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-900 p-8 sm:p-14 font-sans rounded-3xl border border-slate-200/80 shadow-sm">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <span className="px-4 py-1.5 bg-slate-200/60 text-slate-700 rounded-full text-xs font-semibold tracking-wide inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Apple-Inspired Minimalist Slate
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Studio Featured Offers</h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">Engineered precision hardware drops with elegant typography</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-xl flex flex-col justify-between h-80 group transition-all"
            >
              <div>
                <span className="text-[11px] font-bold tracking-wider text-blue-600 uppercase">{item.tag}</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>

              <div className="flex justify-between items-end pt-6 border-t border-slate-100">
                <div>
                  <div className="text-3xl font-extrabold text-slate-900">{item.price}</div>
                  <div className="text-xs text-slate-400 line-through">{item.orig}</div>
                </div>
                <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-xs transition-colors flex items-center gap-1">
                  Explore <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OffersFeatured5;
