import React from 'react';
import { motion } from 'framer-motion';

interface BlogHighlight19Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      posts: { title: string; excerpt: string; author: { name: string; avatar: string }; date: string; category: string; imageUrl: string; readTime: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BlogHighlight19({ data }: BlogHighlight19Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-mono bg-[#09090b] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Glitch/Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="mb-16 border-l-4 border-pink-500 pl-6 flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div>
            <div className="text-pink-500 text-xs font-bold uppercase tracking-widest mb-2 bg-pink-500/10 px-2 py-1 inline-block border border-pink-500/30">
              SYS_LOG // DATA_READ
            </div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-black text-white uppercase mb-2 tracking-tighter"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-zinc-500 text-sm">{'>>'} {data.content.description}</p>
          </div>
          <button className="border border-pink-500 text-pink-500 px-6 py-2 uppercase text-xs font-bold tracking-widest hover:bg-pink-500 hover:text-black transition-colors self-start md:self-auto">
            Execute ReadAll
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 flex flex-col gap-8">
            {data.content.posts.slice(0, 2).map((post, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-black border border-zinc-800 hover:border-pink-500 p-6 flex flex-col md:flex-row gap-8 group cursor-pointer transition-colors relative"
              >
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-full md:w-1/2 aspect-video md:aspect-[4/3] bg-zinc-950 border border-zinc-800 relative overflow-hidden">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.1)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col">
                  <div className="flex gap-4 mb-4">
                    <span className="text-pink-500 text-[10px] font-bold uppercase tracking-widest border-b border-pink-500/50 pb-1">
                      {post.category}
                    </span>
                    <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                      {post.date}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white uppercase mb-4 group-hover:text-pink-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-xs lowercase mb-6 flex-1 border-l-2 border-zinc-800 pl-4">
                    {post.excerpt}_
                  </p>
                  
                  <div className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">
                    Author: {post.author.name} // {post.readTime}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="text-pink-500 text-xs font-bold uppercase tracking-widest border-b border-zinc-800 pb-2 mb-2">
              Recent_Queries
            </div>
            {data.content.posts.slice(2).map((post, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-black border border-zinc-800 p-4 group cursor-pointer hover:border-pink-500/50 transition-colors"
              >
                <div className="text-pink-500 text-[10px] font-bold uppercase tracking-widest mb-2">[{post.category}]</div>
                <h4 className="text-white font-bold uppercase mb-2 group-hover:text-pink-400 transition-colors text-sm">
                  {post.title}
                </h4>
                <div className="flex justify-between items-center mt-4 text-[10px] uppercase font-bold text-zinc-500">
                  <span>{post.date}</span>
                  <span className="border border-zinc-800 px-2 py-1 group-hover:border-pink-500/50 transition-colors">{post.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
