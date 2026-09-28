import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogHighlight11Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      posts: { title: string; excerpt: string; author: { name: string; avatar: string }; date: string; category: string; imageUrl: string; readTime: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BlogHighlight11({ data }: BlogHighlight11Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-white" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-slate-500 text-lg max-w-2xl">{data.content.description}</p>
        </div>

        <div className="flex flex-col border-t border-slate-200">
          {data.content.posts.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer border-b border-slate-200 py-8 relative"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(0)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                <div className="flex-1 md:pr-12">
                  <div className="flex items-center gap-4 text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">
                    <span>{post.category}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span className="text-slate-400">{post.date}</span>
                  </div>
                  <h3 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-500 ${hoveredIndex === idx ? 'text-blue-600' : 'text-slate-900'}`}>
                    {post.title}
                  </h3>
                  <p className="text-slate-500 line-clamp-2 max-w-3xl">
                    {post.excerpt}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-4">
                  <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full object-cover" />
                  <div className="hidden md:block text-right">
                    <div className="font-bold text-slate-900">{post.author.name}</div>
                    <div className="text-sm text-slate-500">{post.readTime}</div>
                  </div>
                  <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${hoveredIndex === idx ? 'border-blue-600 text-blue-600' : 'border-slate-200 text-slate-400'}`}>
                    <svg className="w-6 h-6 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                  </div>
                </div>
              </div>

              {/* Expanding Image Background on Desktop */}
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 300 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="hidden md:block w-full overflow-hidden rounded-[2rem] mt-8 relative"
                  >
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/10" />
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
