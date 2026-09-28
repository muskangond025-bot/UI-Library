import React from 'react';
import { motion } from 'framer-motion';

interface BlogHighlight8Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      posts: { title: string; excerpt: string; author: { name: string; avatar: string }; date: string; category: string; imageUrl: string; readTime: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BlogHighlight8({ data }: BlogHighlight8Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#050505]" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-zinc-400 text-lg">{data.content.description}</p>
          </div>
          <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-zinc-200 transition-colors">
            All Articles
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          
          {/* Main Large Bento Item */}
          <motion.article 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="md:col-span-2 md:row-span-2 rounded-[2rem] overflow-hidden relative group cursor-pointer"
          >
            <img src={data.content.posts[0].imageUrl} alt={data.content.posts[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="bg-yellow-500 text-black font-bold uppercase tracking-widest text-[10px] px-3 py-1 rounded-full self-start mb-4">
                {data.content.posts[0].category}
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight group-hover:text-yellow-500 transition-colors">
                {data.content.posts[0].title}
              </h3>
              <p className="text-zinc-300 line-clamp-2 mb-6 max-w-lg">{data.content.posts[0].excerpt}</p>
              <div className="flex items-center gap-3">
                <img src={data.content.posts[0].author.avatar} alt={data.content.posts[0].author.name} className="w-8 h-8 rounded-full" />
                <span className="text-white text-sm font-bold">{data.content.posts[0].author.name}</span>
                <span className="text-zinc-500 text-sm">• {data.content.posts[0].date}</span>
              </div>
            </div>
          </motion.article>

          {/* Smaller Bento Items */}
          {data.content.posts.slice(1, 4).map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`${idx === 2 ? 'md:col-span-2' : 'md:col-span-1 md:row-span-1'} bg-zinc-900 rounded-[2rem] overflow-hidden relative group cursor-pointer p-6 flex flex-col`}
            >
              <div className="absolute inset-0 z-0">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-auto">
                  <span className="text-yellow-500 text-[10px] font-bold uppercase tracking-widest">
                    {post.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-colors text-white">
                    <svg className="w-4 h-4 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className={`font-bold text-white mb-2 leading-tight ${idx === 2 ? 'text-2xl' : 'text-lg line-clamp-3'}`}>
                    {post.title}
                  </h4>
                  {idx === 2 && <p className="text-zinc-400 text-sm line-clamp-2 mb-4">{post.excerpt}</p>}
                  <div className="text-zinc-500 text-xs">
                    {post.date}
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
