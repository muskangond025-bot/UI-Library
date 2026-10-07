import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export function BlogRecentArticles12({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const articles = settings.articles || [];

  return (
    <div className="w-full py-10 px-4 bg-black text-emerald-400 font-mono">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-2 text-xs text-emerald-400"><Terminal className="w-4 h-4 animate-pulse" /> [SCI_FI_HUD_RECENT_TELEMETRY // 12]</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art: any, idx: number) => (
            <motion.div key={idx} whileHover={{ scale: 1.03 }} className="border border-emerald-500/40 p-5 rounded-lg bg-emerald-950/20 space-y-3 relative">
              <span className="text-[10px] text-emerald-400">TIMESTAMP: {art.publishedTime}</span>
              <h3 className="text-lg font-bold text-white uppercase">{art.title}</h3>
              <p className="text-xs text-emerald-300/70 font-sans line-clamp-2">{art.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}