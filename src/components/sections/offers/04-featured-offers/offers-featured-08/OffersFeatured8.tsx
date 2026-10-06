import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export function OffersFeatured8() {
  const cleanItems = [
    { title: 'Minimal Ceramic Acoustic Pod', desc: 'Matte white precision porcelain sound enclosure.', price: '$149', orig: '$249', tag: 'CLEAN SELECTION' },
    { title: 'Architectural Aluminum Lamp', desc: 'Precision machined anodized aluminum body.', price: '$189', orig: '$299', tag: 'STUDIO EDITION' }
  ];

  return (
    <div className="w-full bg-white text-slate-900 p-8 sm:p-14 font-sans rounded-3xl border border-slate-200 shadow-sm">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <span className="px-4 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold tracking-wide inline-flex items-center gap-1.5 border border-slate-200">
            <Sparkles className="w-3.5 h-3.5 text-slate-900" /> Ultra-Clean Studio Slate
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Clean White Featured Catalogue</h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">Pure white layout with soft floating shadow previews and refined typography</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cleanItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-lg flex flex-col justify-between h-80 group transition-all"
            >
              <div>
                <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">{item.tag}</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-2 group-hover:text-slate-700 transition-colors">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>

              <div className="flex justify-between items-end pt-6 border-t border-slate-200">
                <div>
                  <div className="text-3xl font-extrabold text-slate-900">{item.price}</div>
                  <div className="text-xs text-slate-400 line-through">{item.orig}</div>
                </div>
                <button className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold text-xs transition-colors flex items-center gap-1">
                  View <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OffersFeatured8;
