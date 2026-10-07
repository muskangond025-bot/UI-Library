const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/blog/02-blog-featured-article');

const designs = [
  { id: 1, name: 'Glass Editorial Spotlight', morphism: 'Glassmorphism', bg: 'bg-slate-950', border: 'border-slate-800', accent: 'amber' },
  { id: 2, name: 'Neumorphic Magazine Feature', morphism: 'Soft Neumorphism', bg: 'bg-slate-900', border: 'border-slate-700/50', accent: 'sky' },
  { id: 3, name: 'Holographic Cyber Hub', morphism: 'Holographic Morphism', bg: 'bg-slate-950', border: 'border-cyan-500/30', accent: 'cyan' },
  { id: 4, name: 'Depth Card Split Spotlight', morphism: 'Depth Morphism', bg: 'bg-zinc-950', border: 'border-zinc-800', accent: 'emerald' },
  { id: 5, name: 'Claymorphic 3D Story Card', morphism: 'Claymorphism', bg: 'bg-slate-900', border: 'border-indigo-500/20', accent: 'indigo' },
  { id: 6, name: 'Frosted Bento Feature Grid', morphism: 'Frosted Glass Sub-grid', bg: 'bg-slate-950', border: 'border-slate-800', accent: 'rose' },
  { id: 7, name: 'Chrome Metallic Tech Focus', morphism: 'Chrome Liquid Metal', bg: 'bg-black', border: 'border-slate-700', accent: 'slate' },
  { id: 8, name: 'Aurora Dynamic Mesh Focus', morphism: 'Liquid Mesh Glass', bg: 'bg-slate-950', border: 'border-purple-500/30', accent: 'purple' },
  { id: 9, name: 'Split Carousel Featured Focus', morphism: 'Split Glass Morphism', bg: 'bg-slate-900', border: 'border-slate-800', accent: 'blue' },
  { id: 10, name: 'Velvet Dark Mode Glass', morphism: 'Dark Velvet Glass', bg: 'bg-zinc-950', border: 'border-violet-500/30', accent: 'violet' },
  { id: 11, name: 'Skeuomorphic Journal Note', morphism: 'Paper Skeuomorphism', bg: 'bg-stone-900', border: 'border-stone-700', accent: 'amber' },
  { id: 12, name: 'Sci-Fi HUD Featured Frame', morphism: 'Sci-Fi HUD Glass', bg: 'bg-black', border: 'border-emerald-500/40', accent: 'emerald' },
  { id: 13, name: 'Bento Stacked Glass Feature', morphism: 'Glass Layer Stacking', bg: 'bg-slate-950', border: 'border-slate-800', accent: 'teal' },
  { id: 14, name: 'Liquid Glass Floating Capsule', morphism: 'Liquid Glass Pill', bg: 'bg-slate-900', border: 'border-blue-500/30', accent: 'blue' },
  { id: 15, name: 'Neon Edge Glow Feature', morphism: 'Neon Glow Edge', bg: 'bg-black', border: 'border-pink-500/40', accent: 'pink' },
  { id: 16, name: 'Architectural Wireframe Glass', morphism: 'Wireframe Glass', bg: 'bg-slate-950', border: 'border-slate-800', accent: 'orange' },
  { id: 17, name: 'Full Poster Cover Spotlight', morphism: 'Magazine Cover Morphism', bg: 'bg-slate-950', border: 'border-slate-800', accent: 'yellow' },
  { id: 18, name: 'Prismatic Refraction Glass', morphism: 'Prismatic Refraction', bg: 'bg-slate-900', border: 'border-cyan-500/40', accent: 'cyan' },
  { id: 19, name: 'Embossed Vintage Retro Card', morphism: 'Embossed Neumorphic Retro', bg: 'bg-zinc-900', border: 'border-amber-700/40', accent: 'amber' },
  { id: 20, name: 'Ultra Hero Full-Bleed Overlay', morphism: 'Ultra Full-Bleed Overlay', bg: 'bg-black', border: 'border-slate-800', accent: 'fuchsia' }
];

designs.forEach(item => {
  const numStr = item.id.toString().padStart(2, '0');
  const dirName = `featured-article-${numStr}`;
  const compName = `BlogFeaturedArticle${item.id}`;
  const folderPath = path.join(baseDir, dirName);
  
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const tsxCode = `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Clock, User, Bookmark, Eye, Share2 } from 'lucide-react';

export function ${compName}({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const badge = settings.badge || 'EDITORIAL SPOTLIGHT #${numStr}';
  const title = settings.title || 'THE FUTURE OF INNOVATION & DIGITAL ARCHITECTURE VOL. ${item.id}';
  const excerpt = settings.excerpt || 'An in-depth exploration into modern ${item.morphism} visual paradigms, user interaction models, and responsive design systems.';
  const authorName = settings.author?.name || 'Elena Rostova';
  const authorRole = settings.author?.role || 'Senior Editorial Director';
  const authorAvatar = settings.author?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80';
  const date = settings.date || 'OCT 07, 2026';
  const readTime = settings.readTime || '5 MIN READ';
  const image = settings.featuredImage || settings.image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80';
  const tags = settings.tags || ['Design Systems', '${item.morphism}', 'UI Architecture'];
  const morphismType = '${item.morphism}';

  return (
    <div className="w-full py-6 px-2 sm:px-4">
      <div className="relative w-full overflow-hidden ${item.bg} text-white rounded-3xl border ${item.border} shadow-2xl p-6 sm:p-10 lg:p-12">
        {/* Ambient Animated Glow background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <motion.div 
            className="absolute -top-20 -left-20 w-96 h-96 bg-${item.accent}-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div 
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-${item.accent}-400 text-xs font-mono font-bold uppercase tracking-wider shadow-lg"
              >
                <Sparkles className="w-3.5 h-3.5" />
                {badge}
              </motion.span>
              <span className="text-xs text-slate-400 font-mono">[{morphismType}]</span>
            </div>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-${item.accent}-300"
            >
              {title}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed"
            >
              {excerpt}
            </motion.p>

            <div className="flex flex-wrap gap-2 pt-1">
              {tags.map((tag: string, idx: number) => (
                <span key={idx} className="px-3 py-1 bg-slate-800/80 border border-slate-700/60 rounded-lg text-xs font-medium text-slate-300">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Footer */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img src={authorAvatar} alt={authorName} className="w-11 h-11 rounded-full object-cover ring-2 ring-white/20" />
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">{authorName}</h4>
                  <p className="text-xs text-slate-400">{authorRole}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-${item.accent}-400" /> {readTime}</span>
                <span>•</span>
                <span>{date}</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="inline-flex items-center gap-2.5 px-6 py-3 bg-${item.accent}-400 hover:bg-${item.accent}-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95">
                <span>{settings.actionText || 'Read Full Article'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                <button className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 rounded-xl transition-all">
                  <Bookmark className="w-4 h-4" />
                </button>
                <button className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 rounded-xl transition-all">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Media Column */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]"
            >
              <img src={image} alt="Featured Visual" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 bg-slate-950/60 backdrop-blur-md rounded-xl border border-white/10 text-xs text-slate-300">
                <span className="flex items-center gap-1.5"><Eye className="w-3.5 h-3.5 text-${item.accent}-400" /> 14.2K Reads</span>
                <span className="font-mono text-${item.accent}-300">Morphism: {morphismType}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ${compName};
`;

  fs.writeFileSync(
    path.join(folderPath, `${compName}.tsx`),
    tsxCode
  );
});

console.log('Successfully regenerated all 20 React components with fixed item reference!');
