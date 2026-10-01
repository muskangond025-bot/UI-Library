import React from 'react';
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
