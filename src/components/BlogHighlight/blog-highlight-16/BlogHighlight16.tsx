import React from 'react';
import { motion } from 'framer-motion';

interface BlogHighlight16Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      posts: { title: string; excerpt: string; author: { name: string; avatar: string }; date: string; category: string; imageUrl: string; readTime: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BlogHighlight16({ data }: BlogHighlight16Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#ecfccb] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d9f99d] rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#bef264] rounded-full blur-[100px] opacity-40 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black text-[#3f6212] mb-6 tracking-tight"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-[#4d7c0f] font-medium text-xl max-w-2xl mx-auto">{data.content.description}</p>
        </div>

        <div className="w-full max-w-5xl flex flex-col gap-12">
          {data.content.posts.map((post, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 lg:gap-16 items-center group cursor-pointer`}
              >
                <div className="w-full md:w-1/2">
                  <div className="w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(101,163,13,0.2)] border-4 border-white relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-[#3f6212]/10 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col relative z-20">
                  <div className={`bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(101,163,13,0.1)] border-2 border-[#d9f99d] ${isEven ? 'md:-ml-16' : 'md:-mr-16'} group-hover:border-[#bef264] transition-colors`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-[#bef264] text-[#14532d] font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                        {post.category}
                      </span>
                      <span className="text-[#65a30d] font-bold text-xs">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-3xl font-black text-[#14532d] mb-4 leading-tight group-hover:text-[#4d7c0f] transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-[#3f6212] mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex justify-between items-center mt-auto border-t border-[#d9f99d] pt-4">
                       <div className="flex items-center gap-3">
                         <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                         <div className="flex flex-col">
                           <span className="text-sm font-bold text-[#14532d]">{post.author.name}</span>
                           <span className="text-xs text-[#65a30d] font-bold">{post.date}</span>
                         </div>
                       </div>
                    </div>
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
