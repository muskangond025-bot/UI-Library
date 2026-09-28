import React from 'react';
import { motion } from 'framer-motion';

interface BlogHighlight7Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      posts: { title: string; excerpt: string; author: { name: string; avatar: string }; date: string; category: string; imageUrl: string; readTime: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BlogHighlight7({ data }: BlogHighlight7Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#fafafa] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-[100px] opacity-60 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-200 rounded-full blur-[100px] opacity-60 translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight mb-4"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-slate-500 font-medium text-lg">{data.content.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.content.posts.slice(0, 3).map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/40 backdrop-blur-xl border border-white p-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 group flex flex-col cursor-pointer"
            >
              <div className="w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 relative shadow-inner">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur text-blue-600 font-bold text-xs uppercase px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              
              <div className="flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 line-clamp-3 mb-8 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto flex items-center justify-between border-t border-slate-200/50 pt-4">
                  <div className="flex items-center gap-3">
                    <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-800">{post.author.name}</span>
                      <span className="text-xs text-slate-400">{post.date}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
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
