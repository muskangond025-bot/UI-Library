import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Compass } from 'lucide-react';

export function AboutMissionVision9({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-900 text-slate-100 overflow-hidden">
      <div className="max-w-4xl mx-auto border border-slate-800 rounded-3xl p-8 bg-slate-950 shadow-2xl space-y-6">
        <div className="flex gap-4 border-b border-slate-800 pb-4">
          <button onClick={() => setActiveTab('mission')} className={`px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${activeTab === 'mission' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400'}`}>
            OUR MISSION 2026
          </button>
          <button onClick={() => setActiveTab('vision')} className={`px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${activeTab === 'vision' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400'}`}>
            FUTURE VISION 2030
          </button>
        </div>
        {activeTab === 'mission' ? (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <h3 className="text-3xl font-black text-white">MISSION PURPOSE</h3>
            <p className="text-slate-300 text-base leading-relaxed">{settings.mission || 'To empower engineers and designers globally with accessible, high-speed UI architectures.'}</p>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <h3 className="text-3xl font-black text-white">NORTH STAR VISION</h3>
            <p className="text-slate-300 text-base leading-relaxed">{settings.vision || 'To lead the global standard for modern web application component architecture.'}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
