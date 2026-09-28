import React from 'react';
import { motion } from 'framer-motion';

interface BlogHighlight17Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      posts: { title: string; excerpt: string; author: { name: string; avatar: string }; date: string; category: string; imageUrl: string; readTime: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BlogHighlight17({ data }: BlogHighlight17Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#1e1b4b] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Starry Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(indigo 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-400 mb-6 tracking-tight"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-indigo-200 font-light text-xl max-w-2xl mx-auto">{data.content.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.content.posts.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-indigo-950 border border-indigo-500/30 shadow-[0_0_40px_rgba(79,70,229,0.1)] group-hover:shadow-[0_0_60px_rgba(139,92,246,0.3)] transition-all duration-500 mb-6 relative">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-indigo-900/60 backdrop-blur-md border border-indigo-400/50 text-indigo-100 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              
              <div className="px-2 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-indigo-300 text-sm font-semibold mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,1)]" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 leading-snug group-hover:text-indigo-300 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-indigo-200/80 line-clamp-2 mb-6 font-light">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-3 mt-auto">
                  <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full border border-indigo-500/50" />
                  <span className="text-white font-medium">{post.author.name}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
