import React from 'react';
import { motion } from 'framer-motion';

interface BlogHighlight10Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      posts: { title: string; excerpt: string; author: { name: string; avatar: string }; date: string; category: string; imageUrl: string; readTime: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BlogHighlight10({ data }: BlogHighlight10Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-[#020617] overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-xl text-slate-400 font-light">{data.content.description}</p>
        </div>

        <div className="flex flex-col gap-12">
          {data.content.posts.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer relative"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-900/40 rounded-[2rem] p-6 hover:bg-slate-900 transition-colors border border-transparent hover:border-slate-800">
                
                <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden shrink-0 relative shadow-2xl">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
                </div>
                
                <div className="w-full md:w-2/3 flex flex-col justify-center px-4">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">{post.category}</span>
                    <span className="w-1.5 h-1.5 bg-slate-700 rounded-full" />
                    <span className="text-slate-500 text-sm">{post.date}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-blue-300 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-400 text-lg line-clamp-2 mb-8 font-light">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full border border-slate-700 grayscale group-hover:grayscale-0 transition-all" />
                      <span className="text-slate-300 font-medium">{post.author.name}</span>
                    </div>
                    
                    <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all">
                      <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                  </div>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
