import React from 'react';
import { motion } from 'framer-motion';

interface BlogHighlight4Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      posts: { title: string; excerpt: string; author: { name: string; avatar: string }; date: string; category: string; imageUrl: string; readTime: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BlogHighlight4({ data }: BlogHighlight4Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-mono bg-black overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="mb-16 border-l-4 border-[#00ff41] pl-6">
          <div className="text-[#00ff41] text-xs font-bold uppercase tracking-widest mb-2 inline-block bg-[#00ff41]/10 px-2 py-1">
            DATA_STREAM: ACTIVE
          </div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-black text-white uppercase mb-4 tracking-tighter"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-gray-400 text-sm">{'//'} {data.content.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.content.posts.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="border border-[#00ff41]/30 bg-zinc-950 p-6 flex flex-col hover:border-[#00ff41] hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-all cursor-pointer group"
            >
              <div className="w-full aspect-video border border-zinc-800 mb-6 relative overflow-hidden bg-black">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.1)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
                <div className="absolute top-3 right-3 bg-black text-[#00ff41] text-[10px] px-2 py-1 uppercase border border-[#00ff41]/50">
                  {post.readTime}
                </div>
              </div>

              <div className="flex gap-4 mb-4">
                <span className="text-[#00ff41] text-xs uppercase font-bold tracking-widest">[{post.category}]</span>
                <span className="text-zinc-500 text-xs uppercase">{post.date}</span>
              </div>

              <h3 className="text-xl font-bold text-white uppercase mb-4 group-hover:text-[#00ff41] transition-colors leading-snug">
                {post.title}
              </h3>
              
              <p className="text-zinc-400 text-sm lowercase mb-8 flex-1">
                &gt; {post.excerpt}_
              </p>
              
              <div className="flex items-center gap-3 border-t border-zinc-800 pt-4 mt-auto">
                <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-sm grayscale border border-zinc-700 group-hover:border-[#00ff41] transition-colors" />
                <div>
                  <div className="text-zinc-300 text-xs font-bold uppercase">{post.author.name}</div>
                  <div className="text-zinc-600 text-[10px] uppercase tracking-widest">AUTHOR_SYS</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
