import React from 'react';
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
