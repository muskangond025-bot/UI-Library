import React from 'react';
import { motion } from 'framer-motion';

interface BlogHighlight6Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      posts: { title: string; excerpt: string; author: { name: string; avatar: string }; date: string; category: string; imageUrl: string; readTime: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BlogHighlight6({ data }: BlogHighlight6Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#1e293b]" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-16 border-4 border-black bg-pink-400 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-black uppercase text-black tracking-tighter mb-2"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-black font-bold uppercase">{data.content.description}</p>
          </div>
          <button className="px-8 py-3 bg-white text-black font-black uppercase border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            Read More
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {data.content.posts.map((post, idx) => {
            const bgColors = ['bg-yellow-400', 'bg-blue-400', 'bg-green-400', 'bg-purple-400'];
            const hoverBg = bgColors[idx % bgColors.length];

            return (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="w-full aspect-[4/3] border-4 border-black bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all relative overflow-hidden mb-6">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-500" />
                  <div className={`absolute inset-0 ${hoverBg} mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="absolute top-4 left-4 bg-white border-4 border-black px-3 py-1 font-black uppercase text-black text-xs shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                    {post.category}
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-black text-white uppercase text-sm">{post.date}</span>
                    <span className="font-black text-slate-400 uppercase text-xs">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-black text-white uppercase mb-4 leading-tight group-hover:text-pink-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-300 font-bold mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 border-2 border-white object-cover" />
                    <span className="font-black text-white uppercase tracking-widest text-sm">{post.author.name}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </div>
  );
}
