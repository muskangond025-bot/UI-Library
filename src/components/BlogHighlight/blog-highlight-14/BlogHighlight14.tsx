import React from 'react';
import { motion } from 'framer-motion';

interface BlogHighlight14Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      posts: { title: string; excerpt: string; author: { name: string; avatar: string }; date: string; category: string; imageUrl: string; readTime: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BlogHighlight14({ data }: BlogHighlight14Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-black" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-6"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-2xl text-zinc-400 font-light max-w-xl">{data.content.description}</p>
          </div>
          <button className="text-white uppercase tracking-widest text-sm font-bold border-b border-white pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-colors">
            View Archive
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {data.content.posts.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="w-full aspect-[4/5] md:aspect-square overflow-hidden mb-8 relative">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-white text-xs font-bold uppercase tracking-widest">{post.category}</span>
                <span className="text-zinc-500 text-xs uppercase tracking-widest">{post.date}</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-zinc-300 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-zinc-400 text-lg leading-relaxed mb-8 flex-1 font-light">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-800">
                <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover grayscale" />
                <span className="text-white font-medium">{post.author.name}</span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
