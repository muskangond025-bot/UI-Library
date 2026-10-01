const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/25-brand-information');

const generateTSX = (id) => {
  switch (id) {
    case 1:
      return `import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowRight, MapPin } from 'lucide-react';

export default function BrandInformation1({ data }: { data: any }) {
  const paragraphs = data?.storyParagraphs || [];
  const images = data?.images || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-neutral-800 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase">{data?.eyebrow || 'OUR NARRATIVE'}</span>
            <h2 className="text-4xl sm:text-6xl font-serif text-neutral-100 mt-2">{data?.heading || 'The Pursuit of Timeless Excellence'}</h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>{data?.origin || 'Florence, Italy'} • Est. {data?.foundedYear || '2014'}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <Quote className="w-10 h-10 text-amber-400/40" />
            <p className="text-2xl sm:text-3xl font-serif italic text-amber-300 leading-snug">
              "{data?.quote || 'We do not design for the moment; we craft for a lifetime.'}"
            </p>
            <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              {paragraphs.map((p: string, idx: number) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest hover:text-amber-300 pt-4">
              Discover Our Heritage <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {images.map((img: string, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={\`rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl \${idx === 0 ? 'h-80' : 'h-80 mt-8'}\`}
              >
                <img src={img} alt="Brand Story" className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
`;
    case 2:
      return `import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export default function BrandInformation2({ data }: { data: any }) {
  const milestones = data?.milestones || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">{data?.eyebrow || 'HERITAGE & LEGACY'}</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white mt-2">{data?.heading || 'A Century of Craftsmanship'}</h2>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">{data?.subtitle || 'Trace our journey across ten decades of textile innovation.'}</p>
        </div>

        <div className="relative border-l-2 border-emerald-500/40 ml-4 sm:ml-32 space-y-12 pl-6 sm:pl-10">
          {milestones.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-neutral-900" />
              <span className="hidden sm:block absolute -left-36 top-1 text-sm text-emerald-400 font-serif font-bold">{item.year}</span>

              <div className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="sm:hidden text-xs font-bold text-emerald-400 font-serif">{item.year}</span>
                  <span className="text-[10px] text-neutral-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    {item.location}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 3:
      return `import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function BrandInformation3({ data }: { data: any }) {
  const points = data?.philosophyPoints || [];

  return (
    <section className="py-24 px-4 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono text-purple-400 uppercase">{data?.eyebrow || 'OUR PHILOSOPHY'}</span>
          <h2 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight">{data?.heading || 'Form, Function & Integrity'}</h2>
          <p className="text-xl sm:text-2xl font-serif italic text-purple-300 mt-6 leading-relaxed">
            "{data?.manifesto || 'Purity of material. Restraint in design. Permanence in value.'}"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((pt: any, idx: number) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-purple-400 font-bold mb-3 block">0{idx + 1}</span>
                <h3 className="text-base font-bold text-white mb-3">{pt.title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{pt.description}</p>
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
import { Quote } from 'lucide-react';

export default function BrandInformation4({ data }: { data: any }) {
  const paragraphs = data?.storyParagraphs || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative h-[480px] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
            <img src={data?.founderPortrait || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"} alt={data?.founderName} className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800">
              <h4 className="text-sm font-bold text-white">{data?.founderName || 'Matteo Vane'}</h4>
              <p className="text-xs text-amber-400">{data?.founderRole || 'Founder & Creative Director'}</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">{data?.eyebrow || 'THE FOUNDER'}</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-white mt-1">{data?.heading || 'Designed by Matteo Vane'}</h2>
            </div>

            <Quote className="w-8 h-8 text-amber-400/40" />
            <p className="text-xl font-serif italic text-amber-300 leading-relaxed">
              "{data?.quote || 'True luxury is felt in the weight of the fabric and the silence of clean stitching.'}"
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              {paragraphs.map((p: string, idx: number) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`;
    case 5:
      return `import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function BrandInformation5({ data }: { data: any }) {
  const values = data?.values || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">{data?.eyebrow || 'CORE VALUES'}</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-white">{data?.heading || 'The Pillars of Our Maison'}</h2>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">{data?.subtitle || 'Uncompromising standards that guide every fabric choice.'}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v: any, idx: number) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-neutral-950 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-black text-cyan-400 font-mono">{v.number}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {v.metric}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{v.title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{v.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 6:
      return `import React from 'react';
import { motion } from 'framer-motion';
import { Compass, MapPin } from 'lucide-react';

export default function BrandInformation6({ data }: { data: any }) {
  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-amber-400 uppercase">{data?.eyebrow || 'GEOGRAPHIC ORIGIN'}</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">{data?.heading || 'Rooted in Milanese Architecture'}</h2>
            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center gap-3 text-xs font-mono text-amber-300">
              <Compass className="w-5 h-5 text-amber-400" />
              <span>{data?.coordinates || '45.4642° N, 9.1900° E'} • {data?.locationName || 'Milan & Biella, Italy'}</span>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">{data?.regionHistory}</p>
          </div>

          <div className="lg:col-span-6 h-96 rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
            <img src={data?.originImage || "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=80"} alt="Origin" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
`;
    case 7:
      return `import React from 'react';
import { motion } from 'framer-motion';

export default function BrandInformation7({ data }: { data: any }) {
  const steps = data?.processSteps || [];

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-rose-400 tracking-widest uppercase">{data?.eyebrow || 'ATELIER CRAFT'}</span>
          <h2 className="text-3xl font-bold mt-1 text-white">{data?.heading || 'The Art of Master Tailoring'}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st: any, idx: number) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-neutral-950 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-black text-rose-400 font-mono block mb-2">{st.stepNumber}</span>
                <h3 className="text-sm font-bold text-white mb-2">{st.title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-4">{st.description}</p>
              </div>
              <span className="text-[10px] font-mono text-rose-300 bg-rose-950/60 p-2 rounded-xl text-center border border-rose-800">
                Timeline: {st.duration}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 8:
      return `import React from 'react';
import { motion } from 'framer-motion';

export default function BrandInformation8({ data }: { data: any }) {
  const lines = data?.manifestoLines || [];

  return (
    <section className="py-24 px-4 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">{data?.eyebrow || 'BRAND MANIFESTO'}</span>
        <h2 className="text-3xl sm:text-5xl font-black text-white">{data?.heading || 'What We Believe'}</h2>
        
        <div className="space-y-6 pt-8">
          {lines.map((line: string, idx: number) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="text-xl sm:text-3xl font-serif italic text-neutral-200 hover:text-amber-300 transition-colors"
            >
              "{line}"
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 9:
      return `import React from 'react';
import { motion } from 'framer-motion';

export default function BrandInformation9({ data }: { data: any }) {
  const phases = data?.journeyPhases || [];

  return (
    <section className="py-20 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <span className="text-xs font-bold text-pink-400 tracking-widest uppercase">{data?.eyebrow || 'OUR JOURNEY'}</span>
        <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Evolution of the Maison'}</h2>
      </div>

      <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 pb-8 snap-x snap-mandatory">
        {phases.map((ph: any, idx: number) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="flex-none w-80 snap-start bg-neutral-900 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between"
          >
            <div>
              <span className="text-2xl font-bold text-pink-400 font-mono mb-2 block">{ph.year}</span>
              <h3 className="text-base font-bold text-white mb-2">{ph.phaseTitle}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed mb-4">{ph.description}</p>
            </div>
            <img src={ph.archivedImage} alt={ph.phaseTitle} className="w-full h-40 object-cover rounded-2xl" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
`;
    case 10:
      return `import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

export default function BrandInformation10({ data }: { data: any }) {
  const mission = data?.mission || {};
  const vision = data?.vision || {};

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-teal-400 tracking-widest uppercase">{data?.eyebrow || 'PURPOSE & HORIZON'}</span>
          <h2 className="text-3xl font-bold mt-1 text-white">{data?.heading || 'Mission & Vision'}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-3xl shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal-400 mb-4">
                <Target className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">{mission.title}</h3>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">{mission.statement}</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800">
              {mission.pillars?.map((p: string, idx: number) => (
                <span key={idx} className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-950 text-teal-300 border border-teal-800">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-3xl shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal-400 mb-4">
                <Eye className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">{vision.title}</h3>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">{vision.statement}</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800">
              {vision.goals?.map((g: string, idx: number) => (
                <span key={idx} className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-900 text-neutral-300 border border-neutral-800">
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`;
    case 11:
      return `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BrandInformation11({ data }: { data: any }) {
  const milestones = data?.milestones || [];
  const [selectedIdx, setSelectedIdx] = useState(0);

  const current = milestones[selectedIdx] || {};

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-yellow-400 tracking-widest uppercase">{data?.eyebrow || 'KEY MILESTONES'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Interactive History Showcase'}</h2>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {milestones.map((m: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={\`px-6 py-2.5 rounded-full text-sm font-bold transition-all \${
                idx === selectedIdx ? 'bg-yellow-400 text-neutral-950 shadow-lg scale-105' : 'bg-neutral-900 text-neutral-400 border border-neutral-800'
              }\`}
            >
              {m.year}
            </button>
          ))}
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-3xl font-black text-yellow-400 font-mono">{current.year}</span>
            <h3 className="text-xl font-bold text-white mt-2 mb-4">{current.title}</h3>
            <p className="text-sm text-neutral-300 leading-relaxed mb-6">{current.description}</p>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-yellow-950 text-yellow-300 border border-yellow-800">
              Impact: {current.impactMetric}
            </span>
          </div>
          <img src={current.heroImage} alt={current.title} className="w-full h-72 object-cover rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
`;
    case 12:
      return `import React from 'react';
import { motion } from 'framer-motion';

export default function BrandInformation12({ data }: { data: any }) {
  const chapters = data?.chapters || [];

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">{data?.eyebrow || 'STORY CHAPTERS'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'The Three Chapters of Aurelia'}</h2>
        </div>

        <div className="space-y-6">
          {chapters.map((ch: any, idx: number) => (
            <motion.div
              key={idx}
              whileHover={{ x: 6 }}
              className="bg-neutral-950 border border-neutral-800 p-8 rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-8">
                <span className="text-xs font-mono text-amber-400 font-bold block mb-1">CHAPTER {ch.chapterNumber}</span>
                <h3 className="text-lg font-bold text-white mb-2">{ch.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{ch.fullStory}</p>
              </div>
              <div className="md:col-span-4 h-40 rounded-2xl overflow-hidden bg-neutral-900">
                <img src={ch.image} alt={ch.title} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 13:
      return `import React from 'react';

export default function BrandInformation13({ data }: { data: any }) {
  return (
    <section className="py-24 px-4 bg-[#fbf9f5] text-stone-900 border-y border-stone-300">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <span className="text-xs font-serif tracking-widest text-stone-500 uppercase">{data?.eyebrow || 'MONOCLE EDITION • PROFILE'}</span>
        <h2 className="text-4xl sm:text-6xl font-serif text-stone-900">{data?.heading || 'The Quiet Luxury Revolution'}</h2>
        
        <p className="font-serif text-base sm:text-lg text-stone-800 leading-relaxed italic max-w-3xl mx-auto">
          {data?.dropCapParagraph}
        </p>

        <div className="py-6 border-y border-stone-300 font-serif text-xl sm:text-2xl font-bold text-amber-900 italic">
          "{data?.quoteBlock}"
        </div>

        <p className="text-xs font-serif text-stone-500">{data?.editorNote}</p>
      </div>
    </section>
  );
}
`;
    case 14:
      return `import React from 'react';
import { motion } from 'framer-motion';

export default function BrandInformation14({ data }: { data: any }) {
  const principles = data?.principles || [];

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">{data?.eyebrow || 'OUR COMMITMENTS'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Bento Principles Matrix'}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((pr: any, idx: number) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold text-cyan-300 bg-cyan-950 border border-cyan-800 uppercase">
                    {pr.badge}
                  </span>
                  <span className="text-2xl font-black text-cyan-400 font-mono">{pr.statNumber}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{pr.title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{pr.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 15:
      return `import React from 'react';

export default function BrandInformation15({ data }: { data: any }) {
  return (
    <section className="relative min-h-[600px] w-full bg-neutral-950 text-white overflow-hidden flex items-center justify-center py-20 px-4">
      <img src={data?.fullBleedImage} alt="Brand Narrative" className="absolute inset-0 w-full h-full object-cover filter brightness-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/70" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/10 text-white border border-white/20 backdrop-blur-md">
          {data?.eyebrow || 'CINEMATIC EXPERIENCE'}
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-white">{data?.narrativeTitle}</h2>
        <p className="text-lg sm:text-2xl font-serif italic text-amber-200">"{data?.quote}"</p>
      </div>
    </section>
  );
}
`;
    case 16:
      return `import React from 'react';
import { motion } from 'framer-motion';

export default function BrandInformation16({ data }: { data: any }) {
  const elements = data?.identityElements || [];

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">{data?.eyebrow || 'BRAND SYSTEM'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'The Visual & Tactile Identity'}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {elements.map((el: any, idx: number) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-purple-400 uppercase">{el.category}</span>
                <h3 className="text-base font-bold text-white mt-1 mb-2">{el.title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-4">{el.description}</p>
              </div>
              <span className="text-xs font-mono text-neutral-400 bg-neutral-950 p-2.5 rounded-xl border border-neutral-800">
                {el.specDetail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 17:
      return `import React from 'react';

export default function BrandInformation17({ data }: { data: any }) {
  const gallery = data?.processGallery || [];

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-rose-400 tracking-widest uppercase">{data?.eyebrow || 'BEHIND THE SCENES'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'The Creative Process'}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gallery.map((g: any, idx: number) => (
            <div key={idx} className="bg-neutral-950 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between">
              <div>
                <img src={g.image} alt={g.title} className="w-full h-44 object-cover rounded-2xl mb-4" />
                <span className="text-xs font-bold text-rose-400 uppercase">{g.phase}</span>
                <h3 className="text-base font-bold text-white mt-1 mb-2">{g.title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{g.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 18:
      return `import React from 'react';

export default function BrandInformation18({ data }: { data: any }) {
  const heritage = data?.heritage || {};
  const modernity = data?.modernity || {};

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">{data?.eyebrow || 'PAST & FUTURE'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Heritage Meets Modernity'}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl shadow-2xl">
            <span className="text-3xl font-black text-amber-400 font-mono mb-2 block">{heritage.year}</span>
            <h3 className="text-xl font-bold text-white mb-3">{heritage.title}</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">{heritage.description}</p>
            <img src={heritage.archiveImage} alt={heritage.title} className="w-full h-56 object-cover rounded-2xl filter grayscale" />
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl shadow-2xl">
            <span className="text-3xl font-black text-emerald-400 font-mono mb-2 block">{modernity.year}</span>
            <h3 className="text-xl font-bold text-white mb-3">{modernity.title}</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">{modernity.description}</p>
            <img src={modernity.modernImage} alt={modernity.title} className="w-full h-56 object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
`;
    case 19:
      return `import React from 'react';
import { Play } from 'lucide-react';

export default function BrandInformation19({ data }: { data: any }) {
  const chapters = data?.chapters || [];

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase">{data?.eyebrow || 'SHORT FILM'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'The Thread of Time: A Documentary'}</h2>
        </div>

        <div className="relative h-96 rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl mb-8 group cursor-pointer">
          <img src={data?.videoPoster} alt="Documentary Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="p-5 rounded-full bg-red-600 text-white shadow-2xl group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-white" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-neutral-950/80 backdrop-blur-md flex justify-between items-center text-xs">
            <span className="font-bold text-white">{data?.docTitle}</span>
            <span className="text-neutral-400 font-mono">Duration: {data?.duration}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
`;
    case 20:
      return `import React, { useState } from 'react';
import { Search, Download, FileText } from 'lucide-react';

export default function BrandInformation20({ data }: { data: any }) {
  const sections = data?.knowledgeSections || [];
  const [query, setQuery] = useState('');

  const filtered = sections.filter((s: any) =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">{data?.eyebrow || 'KNOWLEDGE BASE'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Master Brand Knowledge Hub'}</h2>
          
          <div className="relative mt-6">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sustainability reports, ethics code..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((s: any, idx: number) => (
            <div key={idx} className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase">{s.category}</span>
                <h3 className="text-base font-bold text-white mt-1 mb-2">{s.title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-4">{s.description}</p>
              </div>
              <a href={s.downloadLink} className="flex items-center gap-1 text-xs text-amber-400 font-semibold hover:text-amber-300">
                <Download className="w-3.5 h-3.5" /> Download Report
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    default:
      return '';
  }
};

console.log("Writing Brand Information TSX files for all 20 variants...");
for (let i = 1; i <= 20; i++) {
  const folderPath = path.join(baseDir, `brand-information-${i}`);
  const tsxContent = generateTSX(i);
  fs.writeFileSync(path.join(folderPath, `BrandInformation${i}.tsx`), tsxContent, 'utf8');
}
console.log("All 20 Brand Information TSX files generated successfully.");
