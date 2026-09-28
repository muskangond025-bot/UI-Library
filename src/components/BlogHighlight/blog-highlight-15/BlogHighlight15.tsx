import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface BlogHighlight15Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      posts: { title: string; excerpt: string; author: { name: string; avatar: string }; date: string; category: string; imageUrl: string; readTime: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BlogHighlight15({ data }: BlogHighlight15Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div ref={containerRef} className="w-full h-[200vh] bg-white font-sans relative" style={{ color: data.style.textColor }}>
      
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center px-6 md:px-12 py-24">
        
        <div className="max-w-7xl mx-auto w-full mb-16 relative z-10 shrink-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-4"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-xl text-gray-500 max-w-2xl">{data.content.description}</p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 md:gap-16 items-center pl-6 md:pl-12">
          {data.content.posts.map((post, idx) => (
            <div 
              key={idx}
              className="w-[85vw] md:w-[600px] shrink-0 h-[60vh] md:h-[70vh] rounded-[3rem] overflow-hidden relative group cursor-pointer"
            >
              <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-white text-black font-bold uppercase tracking-widest text-[10px] px-4 py-2 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-white/80 text-sm font-medium">{post.readTime}</span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-white/80 text-lg line-clamp-2 mb-8 max-w-lg">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4">
                  <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full border-2 border-white/50" />
                  <div>
                    <div className="text-white font-bold">{post.author.name}</div>
                    <div className="text-white/60 text-sm">{post.date}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="absolute bottom-12 right-12 flex items-center gap-4 text-black font-bold uppercase tracking-widest">
          Scroll Down <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>

      </div>

    </div>
  );
}
