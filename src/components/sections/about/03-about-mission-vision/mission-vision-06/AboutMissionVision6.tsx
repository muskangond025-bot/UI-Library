import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Target, Compass, Heart, Shield } from 'lucide-react';

export function AboutMissionVision6({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl space-y-4">
            <Target className="w-8 h-8 text-rose-400" />
            <h3 className="text-xl font-bold text-white">MISSION</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{settings.mission || 'To empower engineers with ultra-performant UI components.'}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl space-y-4">
            <Compass className="w-8 h-8 text-rose-400" />
            <h3 className="text-xl font-bold text-white">VISION</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{settings.vision || 'Leading the future of digital interface design worldwide.'}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl space-y-4">
            <Heart className="w-8 h-8 text-rose-400" />
            <h3 className="text-xl font-bold text-white">VALUES</h3>
            <p className="text-xs text-slate-300 leading-relaxed">Empathy, speed, and craftsmanship in every line of code.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl space-y-4">
            <Shield className="w-8 h-8 text-rose-400" />
            <h3 className="text-xl font-bold text-white">IMPACT</h3>
            <p className="text-xs text-slate-300 leading-relaxed">Serving 2.4M active users across 40+ countries daily.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
