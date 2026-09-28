import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface BlogHighlight9Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      posts: { title: string; excerpt: string; author: { name: string; avatar: string }; date: string; category: string; imageUrl: string; readTime: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BlogHighlight9({ data }: BlogHighlight9Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };
  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <div className="w-full py-24 pl-6 md:pl-12 font-sans bg-white overflow-hidden" style={{ color: data.style.textColor }}>
      
      <div className="max-w-7xl mx-auto w-full pr-6 md:pr-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-slate-500 text-lg">{data.content.description}</p>
        </div>
        <div className="flex gap-4">
          <button onClick={scrollLeft} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all">
            <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={scrollRight} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all">
            <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 pr-6 md:pr-12 custom-scrollbar"
        style={{ scrollbarWidth: 'none' }}
      >
        {data.content.posts.map((post, idx) => (
          <motion.article 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="min-w-[300px] md:min-w-[450px] snap-center group cursor-pointer"
          >
            <div className="w-full aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden relative mb-6">
              <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                {post.category}
              </div>
            </div>
            
            <div className="px-2">
              <div className="flex items-center gap-3 text-sm text-slate-400 font-medium mb-3">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                <span>{post.readTime}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-slate-500 line-clamp-2 mb-6">
                {post.excerpt}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

    </div>
  );
}
