const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/23-questions-answers');

const generateTSX = (id) => {
  switch (id) {
    case 1:
      return `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, ThumbsUp, MessageSquare, Tag } from 'lucide-react';

export default function QuestionsAnswers1({ data }: { data: any }) {
  const [openId, setOpenId] = useState<string | null>(data?.questions?.[0]?.id || null);
  const [helpfulCounts, setHelpfulCounts] = useState<Record<string, number>>({});

  const questions = data?.questions || [];

  const toggleHelpful = (id: string, initialCount: number) => {
    setHelpfulCounts(prev => ({
      ...prev,
      [id]: (prev[id] ?? initialCount) + 1
    }));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">{data?.eyebrow || 'CUSTOMER INQUIRIES'}</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white mt-2">{data?.heading || 'Product Questions & Answers'}</h2>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">{data?.subtitle || 'Everything you need to know about fit, craftsmanship, and care.'}</p>
        </div>

        {/* Editorial Accordion */}
        <div className="space-y-4">
          {questions.map((item: any, idx: number) => {
            const isOpen = openId === item.id;
            const currentHelpful = helpfulCounts[item.id] ?? item.helpfulCount ?? 0;

            return (
              <div
                key={item.id || idx}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-colors hover:border-neutral-700"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-none p-2 rounded-xl bg-neutral-800 text-amber-400 mt-0.5">
                      <MessageSquare className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-neutral-800 text-amber-300 mb-2 border border-amber-400/20">
                        {item.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-medium text-white leading-snug">{item.question}</h3>
                    </div>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-2 rounded-full bg-neutral-800 text-neutral-400 flex-none"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden border-t border-neutral-800/60 bg-neutral-950/40"
                    >
                      <div className="p-6 pt-4 text-sm text-neutral-300 leading-relaxed space-y-4">
                        <p>{item.answer}</p>
                        
                        <div className="flex flex-wrap items-center justify-between pt-4 border-t border-neutral-800/80 text-xs text-neutral-400 gap-4">
                          <div className="flex items-center gap-2">
                            <img src={item.avatar} alt={item.customerName} className="w-6 h-6 rounded-full object-cover" />
                            <span>Asked by <strong className="text-neutral-200">{item.customerName}</strong></span>
                            {item.verified && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                          </div>

                          <button
                            onClick={() => toggleHelpful(item.id, item.helpfulCount || 0)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors text-xs"
                          >
                            <ThumbsUp className="w-3.5 h-3.5 text-amber-400" />
                            <span>Helpful ({currentHelpful})</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
`;
    case 2:
      return `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ThumbsUp, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

export default function QuestionsAnswers2({ data }: { data: any }) {
  const questions = data?.questions || [];
  const [selectedIdx, setSelectedIdx] = useState(0);

  const active = questions[selectedIdx] || {};

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">{data?.eyebrow || 'DUAL VIEWPORT'}</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-1 text-white">{data?.heading || 'Question & Answer Canvas'}</h2>
          <p className="text-neutral-400 text-sm mt-2">{data?.subtitle || 'Select a question to inspect verified responses from our product specialists.'}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Question List Left */}
          <div className="lg:col-span-5 space-y-3">
            {questions.map((item: any, idx: number) => {
              const isSelected = idx === selectedIdx;
              return (
                <motion.div
                  key={item.id || idx}
                  onClick={() => setSelectedIdx(idx)}
                  whileHover={{ x: 4 }}
                  className={\`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-4 \${
                    isSelected
                      ? 'bg-neutral-800 border-emerald-500 shadow-xl ring-1 ring-emerald-500/50'
                      : 'bg-neutral-950/60 border-neutral-800 opacity-70 hover:opacity-100 hover:border-neutral-700'
                  }\`}
                >
                  <div>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">{item.category}</span>
                    <h4 className="text-sm font-semibold text-white mt-1 line-clamp-2">{item.question}</h4>
                  </div>
                  <ArrowRight className={\`w-4 h-4 flex-none transition-transform \${isSelected ? 'text-emerald-400 translate-x-1' : 'text-neutral-600'}\`} />
                </motion.div>
              );
            })}
          </div>

          {/* Answer Canvas Right */}
          <div className="lg:col-span-7 bg-neutral-950 rounded-3xl p-8 border border-neutral-800 min-h-[380px] flex flex-col justify-between relative shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Brand Answer
                  </span>
                  <span className="text-xs text-neutral-400">{active.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white leading-snug">{active.question}</h3>
                
                <p className="text-base text-neutral-300 leading-relaxed bg-neutral-900/60 p-6 rounded-2xl border border-neutral-800/80">
                  {active.answer}
                </p>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-3">
                    <img src={active.avatar} alt={active.customerName} className="w-8 h-8 rounded-full object-cover ring-2 ring-emerald-400" />
                    <div>
                      <h5 className="text-xs font-bold text-white flex items-center gap-1">
                        {active.customerName}
                        {active.verified && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                      </h5>
                      <p className="text-[10px] text-neutral-400">Asked about {active.productName}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-neutral-400 bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800">
                    <ThumbsUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{active.helpfulCount || 24} people found this helpful</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
`;
    case 3:
      return `import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';

export default function QuestionsAnswers3({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">{data?.eyebrow || 'CONVERSATIONAL FLOW'}</span>
          <h2 className="text-3xl font-bold mt-1 text-white">{data?.heading || 'Customer Q&A Thread'}</h2>
          <p className="text-neutral-400 text-sm mt-2">{data?.subtitle || 'Real conversations between buyers and product specialists.'}</p>
        </div>

        {/* Chat Thread */}
        <div className="space-y-8">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-3"
            >
              {/* Customer Bubble Left */}
              <div className="flex items-start gap-3 max-w-xl">
                <img src={item.avatar} alt={item.customerName} className="w-8 h-8 rounded-full object-cover flex-none mt-1" />
                <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-2xl rounded-tl-none">
                  <div className="flex items-center gap-2 mb-1 text-[11px] text-neutral-400">
                    <span className="font-bold text-white">{item.customerName}</span>
                    <span>• {item.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-200">{item.question}</p>
                </div>
              </div>

              {/* Verified Brand Answer Bubble Right */}
              <div className="flex items-start justify-end gap-3 max-w-xl ml-auto">
                <div className="bg-cyan-950/60 border border-cyan-800/80 p-4 rounded-2xl rounded-tr-none text-right">
                  <div className="flex items-center justify-end gap-1.5 mb-1 text-[11px] text-cyan-300">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span className="font-bold">Official Specialist Answer</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-100">{item.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 4:
      return `import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, ThumbsUp } from 'lucide-react';

export default function QuestionsAnswers4({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">{data?.eyebrow || 'CHRONOLOGICAL INQUIRIES'}</span>
          <h2 className="text-3xl font-bold mt-1 text-white">{data?.heading || 'Community Question Stream'}</h2>
        </div>

        <div className="relative border-l-2 border-indigo-500/40 ml-4 sm:ml-32 space-y-12 pl-6 sm:pl-10">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-neutral-900" />
              
              <span className="hidden sm:block absolute -left-36 top-1 text-xs text-neutral-400 font-mono">{item.date}</span>

              <div className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl shadow-xl">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-base font-bold text-white mt-1 mb-3">{item.question}</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed bg-neutral-900 p-4 rounded-xl mb-4 border border-neutral-800">
                  {item.answer}
                </p>

                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <img src={item.avatar} alt={item.customerName} className="w-5 h-5 rounded-full object-cover" />
                    {item.customerName}
                  </span>
                  <span className="flex items-center gap-1 text-indigo-400">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    {item.helpfulCount || 15} helpful
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    default:
      return generateTSXPart2(id);
  }
};

const generateTSXPart2 = (id) => {
  switch (id) {
    case 5:
      return `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, CheckCircle2 } from 'lucide-react';

export default function QuestionsAnswers5({ data }: { data: any }) {
  const questions = data?.questions || [];
  const [activeId, setActiveId] = useState<string | null>(questions[0]?.id || null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 border-b border-neutral-800 pb-8">
          <span className="text-xs font-mono text-purple-400 uppercase">{data?.eyebrow || 'TYPOGRAPHIC CLARITY'}</span>
          <h2 className="text-4xl sm:text-6xl font-black mt-2 tracking-tight">{data?.heading || 'Direct Q&A Highlights'}</h2>
        </div>

        <div className="divide-y divide-neutral-800">
          {questions.map((item: any, idx: number) => {
            const isOpen = activeId === item.id;
            return (
              <div key={item.id || idx} className="py-8">
                <button
                  onClick={() => setActiveId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left flex items-start justify-between gap-6 cursor-pointer group"
                >
                  <h3 className={\`text-xl sm:text-3xl font-bold tracking-tight transition-colors \${isOpen ? 'text-purple-400' : 'text-neutral-200 group-hover:text-white'}\`}>
                    {item.question}
                  </h3>
                  <span className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:text-white transition-colors flex-none">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed font-light max-w-3xl">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
`;
    case 6:
      return `import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function QuestionsAnswers6({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-24 px-4 bg-[#fbf9f5] text-stone-900 border-y border-stone-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center border-b border-stone-300 pb-8 mb-16">
          <span className="text-xs font-serif tracking-widest text-stone-500 uppercase">COLUMN VI • INQUIRIES</span>
          <h2 className="text-4xl sm:text-5xl font-serif text-stone-900 mt-2">{data?.heading || 'The Inquiry Column'}</h2>
          <p className="text-stone-600 font-serif italic text-sm mt-2">{data?.subtitle || 'Selected customer questions answered by our master tailoring team.'}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-b border-stone-300 pb-8"
            >
              <span className="font-serif text-xs text-amber-800 font-bold uppercase tracking-wider block mb-2">Q: {item.category}</span>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-4">"{item.question}"</h3>
              <p className="font-serif text-sm text-stone-700 leading-relaxed italic mb-4">
                {item.answer}
              </p>
              <p className="font-serif text-xs text-stone-500">— Answered for {item.customerName}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 7:
      return `import React from 'react';
import { motion } from 'framer-motion';
import { Tag, CheckCircle2 } from 'lucide-react';

export default function QuestionsAnswers7({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">{data?.eyebrow || 'CATEGORY EXPLORER'}</span>
          <h2 className="text-3xl font-bold mt-1 text-white">{data?.heading || 'Structured Q&A Matrix'}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              whileHover={{ y: -4 }}
              className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col justify-between shadow-lg"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 mb-3">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-white mb-3">{item.question}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-4">{item.answer}</p>
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-400 pt-3 border-t border-neutral-800">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  Verified Buyer
                </span>
                <span>{item.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 8:
      return `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export default function QuestionsAnswers8({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-teal-400 tracking-widest uppercase">{data?.eyebrow || 'STACKED CARDS'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Question Card Deck'}</h2>
        </div>

        <div className="space-y-4">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01, y: -2 }}
              className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl shadow-2xl relative"
            >
              <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">{item.category}</span>
              <h3 className="text-base font-bold text-white mt-1 mb-2">{item.question}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    default:
      return generateTSXPart3(id);
  }
};

const generateTSXPart3 = (id) => {
  switch (id) {
    case 9:
      return `import React from 'react';
import { motion } from 'framer-motion';

export default function QuestionsAnswers9({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-white text-neutral-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">{data?.eyebrow || 'MINIMALIST DESIGN'}</span>
          <h2 className="text-3xl font-light text-neutral-900 mt-1">{data?.heading || 'Essential Product Q&A'}</h2>
        </div>

        <div className="space-y-12">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-b border-neutral-200 pb-8"
            >
              <h3 className="text-lg font-medium text-neutral-900 mb-3">{item.question}</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light max-w-3xl">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 10:
      return `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export default function QuestionsAnswers10({ data }: { data: any }) {
  const questions = data?.questions || [];
  const [activeIdx, setActiveIdx] = useState(0);

  const active = questions[activeIdx] || {};

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold text-rose-400 tracking-widest uppercase">{data?.eyebrow || 'INDEXED KNOWLEDGE'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Question & Answer Index'}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-2">
            {questions.map((item: any, idx: number) => (
              <button
                key={item.id || idx}
                onClick={() => setActiveIdx(idx)}
                className={\`w-full text-left p-4 rounded-xl text-xs font-semibold transition-all \${
                  idx === activeIdx ? 'bg-rose-500 text-white shadow-lg' : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800'
                }\`}
              >
                {item.question}
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 p-8 rounded-3xl min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">{active.category}</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-4">{active.question}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed bg-neutral-950 p-5 rounded-2xl border border-neutral-800 mb-6">
                  {active.answer}
                </p>
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <CheckCircle2 className="w-4 h-4 text-rose-400" />
                  <span>Verified response for {active.productName}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
`;
    case 11:
      return `import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck } from 'lucide-react';

export default function QuestionsAnswers11({ data }: { data: any }) {
  const questions = data?.questions || [];
  const featured = questions[0] || {};
  const rest = questions.slice(1);

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-yellow-400 tracking-widest uppercase">{data?.eyebrow || 'SPOTLIGHT QUESTION'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Featured Q&A Spotlight'}</h2>
        </div>

        {/* Hero Featured Card */}
        <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-3xl mb-8 shadow-2xl">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 inline-block mb-4">
            Most Popular Query
          </span>
          <h3 className="text-2xl font-bold text-white mb-3">{featured.question}</h3>
          <p className="text-base text-neutral-300 leading-relaxed">{featured.answer}</p>
        </div>

        {/* Supporting Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((item: any, idx: number) => (
            <div key={item.id || idx} className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl">
              <h4 className="text-sm font-bold text-white mb-2">{item.question}</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 12:
      return `import React from 'react';
import { motion } from 'framer-motion';

export default function QuestionsAnswers12({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">{data?.eyebrow || 'BENTO GRID'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Asymmetric Q&A Bento'}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {questions.map((item: any, idx: number) => {
            const isWide = idx === 0 || idx === 3;
            return (
              <motion.div
                key={item.id || idx}
                whileHover={{ y: -4 }}
                className={\`bg-neutral-900 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between \${
                  isWide ? 'md:col-span-2' : 'md:col-span-1'
                }\`}
              >
                <div>
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-base font-bold text-white mt-1 mb-3">{item.question}</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
`;
    default:
      return generateTSXPart4(id);
  }
};

const generateTSXPart4 = (id) => {
  switch (id) {
    case 13:
      return `import React from 'react';
import { motion } from 'framer-motion';

export default function QuestionsAnswers13({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">{data?.eyebrow || 'LAYERED FOLDERS'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Interactive Folder Q&A'}</h2>
        </div>

        <div className="space-y-4">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              whileHover={{ x: 6 }}
              className="bg-neutral-900 border-l-4 border-l-amber-400 border border-neutral-800 p-6 rounded-2xl shadow-xl"
            >
              <h3 className="text-base font-bold text-white mb-2">{item.question}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 14:
      return `import React from 'react';
import { motion } from 'framer-motion';

export default function QuestionsAnswers14({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <span className="text-xs font-bold text-pink-400 tracking-widest uppercase">{data?.eyebrow || 'HORIZONTAL RAIL'}</span>
        <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Swipeable Q&A Rail'}</h2>
      </div>

      <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 pb-6 snap-x snap-mandatory">
        {questions.map((item: any, idx: number) => (
          <motion.div
            key={item.id || idx}
            whileHover={{ scale: 1.02 }}
            className="flex-none w-80 snap-start bg-neutral-950 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold text-pink-400 uppercase">{item.category}</span>
              <h3 className="text-sm font-bold text-white mt-1 mb-3">{item.question}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed line-clamp-4">{item.answer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
`;
    case 15:
      return `import React, { useState } from 'react';

export default function QuestionsAnswers15({ data }: { data: any }) {
  const questions = data?.questions || [];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">{data?.eyebrow || 'STICKY NAVIGATION'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Jump-Nav Q&A Section'}</h2>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {questions.map((item: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={\`px-4 py-2 rounded-full text-xs font-semibold transition-colors \${
                activeTab === idx ? 'bg-emerald-400 text-neutral-950 font-bold' : 'bg-neutral-900 border border-neutral-800 text-neutral-300'
              }\`}
            >
              {item.category}
            </button>
          ))}
        </div>

        <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl shadow-xl">
          <h3 className="text-xl font-bold text-white mb-4">{questions[activeTab]?.question}</h3>
          <p className="text-sm text-neutral-300 leading-relaxed">{questions[activeTab]?.answer}</p>
        </div>
      </div>
    </section>
  );
}
`;
    case 16:
      return `import React from 'react';
import { motion } from 'framer-motion';

export default function QuestionsAnswers16({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 border-b border-neutral-800 pb-6">
          <span className="text-xs font-mono text-amber-400 uppercase">{data?.eyebrow || 'NUMBERED EDITION'}</span>
          <h2 className="text-4xl font-extrabold mt-1">{data?.heading || 'Numbered Q&A Directory'}</h2>
        </div>

        <div className="space-y-10">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 border-b border-neutral-900 pb-8"
            >
              <span className="text-3xl font-black text-amber-400 font-mono">0{idx + 1}</span>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{item.question}</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 17:
      return `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuestionsAnswers17({ data }: { data: any }) {
  const questions = data?.questions || [];
  const categories = Array.from(new Set(questions.map((q: any) => q.category)));
  const [selectedCat, setSelectedCat] = useState(categories[0] || 'All');

  const filtered = questions.filter((q: any) => q.category === selectedCat);

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">{data?.eyebrow || 'DYNAMIC FILTERING'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Category Q&A Explorer'}</h2>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat: any) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={\`px-5 py-2.5 rounded-full text-xs font-bold transition-all \${
                selectedCat === cat ? 'bg-purple-500 text-white shadow-lg' : 'bg-neutral-950 text-neutral-400 border border-neutral-800'
              }\`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="space-y-4">
          <AnimatePresence>
            {filtered.map((item: any, idx: number) => (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-base font-bold text-white mb-2">{item.question}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
`;
    case 18:
      return `import React from 'react';
import { motion } from 'framer-motion';

export default function QuestionsAnswers18({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-neutral-950 via-slate-950 to-indigo-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase">{data?.eyebrow || 'GLASSMORPHISM'}</span>
          <h2 className="text-4xl font-bold mt-1">{data?.heading || 'Floating Q&A Experience'}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: idx * 0.3 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl"
            >
              <h3 className="text-base font-bold text-white mb-3">{item.question}</h3>
              <p className="text-xs text-neutral-200 leading-relaxed">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 19:
      return `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function QuestionsAnswers19({ data }: { data: any }) {
  const questions = data?.questions || [];
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">{data?.eyebrow || 'FOCUS MODE'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Question Spotlight Hub'}</h2>
        </div>

        <div className="space-y-4">
          {questions.map((item: any, idx: number) => {
            const isDimmed = hoveredIdx !== null && hoveredIdx !== idx;
            return (
              <motion.div
                key={item.id || idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                animate={{ opacity: isDimmed ? 0.3 : 1, scale: hoveredIdx === idx ? 1.02 : 1 }}
                className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-xl transition-all"
              >
                <h3 className="text-base font-bold text-white mb-2">{item.question}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
`;
    case 20:
      return `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ThumbsUp, CheckCircle2 } from 'lucide-react';

export default function QuestionsAnswers20({ data }: { data: any }) {
  const questions = data?.questions || [];
  const [query, setQuery] = useState('');

  const filtered = questions.filter((q: any) =>
    q.question.toLowerCase().includes(query.toLowerCase()) ||
    q.answer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">{data?.eyebrow || 'KNOWLEDGE HUB'}</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-1">{data?.heading || 'Product Knowledge Showcase'}</h2>
          
          {/* Live Search Input */}
          <div className="relative mt-6">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search product questions..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
            />
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filtered.map((item: any, idx: number) => (
              <motion.div
                key={item.id || idx}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-base font-bold text-white mt-1 mb-3">{item.question}</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">{item.answer}</p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-neutral-800 text-xs text-neutral-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    Verified Answer
                  </span>
                  <span className="flex items-center gap-1 text-amber-400">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    {item.helpfulCount || 30}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
`;
    default:
      return '';
  }
};

console.log("Writing Q&A TSX files...");
for (let i = 1; i <= 20; i++) {
  const folderPath = path.join(baseDir, `questions-answers-${i}`);
  const tsxContent = generateTSX(i);
  fs.writeFileSync(path.join(folderPath, `QuestionsAnswers${i}.tsx`), tsxContent, 'utf8');
}
console.log("All 20 Q&A TSX files generated successfully.");
