import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Share2 as Linkedin, Globe as Twitter, Code as Github, Mail, Award } from 'lucide-react';

export function AboutTeamShowcase16({ data }: { data?: any }) {
  const members = [
    { name: 'Elena Rostova', role: 'Chief Executive Officer', bio: 'Former VP of Design & Innovation leading scalable enterprise strategy.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80' },
    { name: 'Marcus Vance', role: 'Head of Product Engineering', bio: 'Specialist in distributed micro-frontend architectures and AI automation.', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80' },
    { name: 'Sarah Lin', role: 'Principal UX Architect', bio: 'Pioneering accessible multi-morphism component systems & spatial UI.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80' },
    { name: 'David Miller', role: 'VP of AI Research', bio: 'Directing generative design models and real-time design token compilation.', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-sky-400 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-black tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" /> ARCHITECTURAL BLUEPRINT #16
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Meet Our World-Class Team</h2>
          <p className="opacity-80 text-base sm:text-lg">The visionaries, engineers, and designers crafting next-generation digital experiences.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`p-6 rounded-3xl flex flex-col justify-between space-y-6 transition-all duration-300 bg-slate-950 border border-sky-500/40 text-sky-100 shadow-sm`}
            >
              <div className="space-y-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-inner group">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex gap-3 text-white">
                      <Linkedin className="w-5 h-5 cursor-pointer hover:text-indigo-400" />
                      <Twitter className="w-5 h-5 cursor-pointer hover:text-indigo-400" />
                      <Github className="w-5 h-5 cursor-pointer hover:text-indigo-400" />
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">{m.name}</h3>
                  <span className="text-xs font-mono font-semibold text-indigo-400 block">{m.role}</span>
                  <p className="opacity-80 text-xs leading-relaxed pt-2">{m.bio}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono opacity-60">
                <span>TEAM MEMBER 0{i+1}</span>
                <Award className="w-4 h-4 text-indigo-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
