import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export function OffersFeatured13() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { num: 'STEP 01', title: 'TRENDING DROPS', desc: 'Community voted top weekly items' },
    { num: 'STEP 02', title: "EDITOR'S CHOICE", desc: 'Curated by design professionals' },
    { num: 'STEP 03', title: 'VAULT ARCHIVE', desc: 'Rare limited hardware releases' }
  ];

  const deals = [
    [
      { title: 'Spatial Audio Pods Pro', price: '$99', orig: '$199', tag: 'TRENDING #1' },
      { title: 'Mechanical Mecha Pad', price: '$79', orig: '$159', tag: 'TRENDING #2' }
    ],
    [
      { title: 'Bespoke Aluminum Sound Dock', price: '$129', orig: '$259', tag: 'EDITOR PICK' },
      { title: 'Minimalist Desk Light Bar', price: '$89', orig: '$179', tag: 'EDITOR PICK' }
    ],
    [
      { title: '24K Gold Accent Keyboard', price: '$499', orig: '$999', tag: 'VAULT DROP' },
      { title: 'Champagne Gold Watch', price: '$890', orig: '$1,780', tag: 'VAULT DROP' }
    ]
  ];

  return (
    <div className="w-full bg-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" /> CATEGORY STORY JOURNEY
          </span>
          <h2 className="text-3xl font-extrabold">Step-by-Step Featured Story</h2>
        </div>

        {/* Story Journey Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-6 rounded-2xl border text-left transition-all ${
                activeStep === idx
                  ? 'bg-indigo-600/10 border-indigo-500 text-white shadow-xl'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span>{s.num}</span>
                {activeStep === idx && <CheckCircle2 className="w-4 h-4 text-indigo-400" />}
              </div>
              <div className="text-xl font-extrabold text-white">{s.title}</div>
              <div className="text-xs text-slate-500 mt-1">{s.desc}</div>
            </button>
          ))}
        </div>

        {/* Featured Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deals[activeStep].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex justify-between items-center"
            >
              <div>
                <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase">{item.tag}</span>
                <h3 className="font-extrabold text-xl text-white mt-1">{item.title}</h3>
                <div className="mt-3">
                  <span className="text-2xl font-black text-indigo-400">{item.price}</span>
                  <span className="text-xs text-slate-500 line-through ml-2">{item.orig}</span>
                </div>
              </div>

              <button className="p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OffersFeatured13;
