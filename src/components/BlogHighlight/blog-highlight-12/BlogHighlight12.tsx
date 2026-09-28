import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogHighlight12Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      posts: { title: string; excerpt: string; author: { name: string; avatar: string }; date: string; category: string; imageUrl: string; readTime: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BlogHighlight12({ data }: BlogHighlight12Props) {
  const [activePost, setActivePost] = useState(0);

  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 font-sans bg-[#0f172a] relative overflow-hidden flex flex-col justify-center" style={{ color: data.style.textColor }}>
      
      {/* Dynamic Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePost}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.4, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img src={data.content.posts[activePost].imageUrl} alt="Background" className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Main Content Area */}
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              {data.content.posts[activePost].title}
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              {data.content.posts[activePost].excerpt}
            </p>
            
            <div className="flex items-center gap-6 text-slate-400 uppercase tracking-widest text-sm font-bold">
              <span className="text-blue-400">{data.content.posts[activePost].category}</span>
              <span>•</span>
              <span>{data.content.posts[activePost].date}</span>
              <span>•</span>
              <span>{data.content.posts[activePost].readTime}</span>
            </div>
          </motion.div>
          
          <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-colors flex items-center gap-3">
            Read Full Article
            <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>

        {/* Sidebar Cards */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="flex justify-between items-end mb-4">
            <h3 className="text-white font-bold text-xl">{data.content.heading}</h3>
            <span className="text-slate-500 text-sm">{data.content.description}</span>
          </div>
          
          {data.content.posts.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setActivePost(idx)}
              className={`flex gap-6 p-4 rounded-2xl cursor-pointer transition-all duration-300 backdrop-blur-md border ${activePost === idx ? 'bg-white/10 border-white/20 shadow-2xl scale-105' : 'bg-slate-800/30 border-slate-700/30 hover:bg-slate-800/60'}`}
            >
              <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className={`font-bold line-clamp-2 mb-2 transition-colors ${activePost === idx ? 'text-white text-lg' : 'text-slate-300'}`}>
                  {post.title}
                </h4>
                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full" />
                  <span>{post.author.name}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
