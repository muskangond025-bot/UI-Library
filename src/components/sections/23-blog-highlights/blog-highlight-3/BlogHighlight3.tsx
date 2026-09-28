import React from 'react';
import { motion } from 'framer-motion';

interface BlogHighlight3Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      posts: { title: string; excerpt: string; author: { name: string; avatar: string }; date: string; category: string; imageUrl: string; readTime: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BlogHighlight3({ data }: BlogHighlight3Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-[#f9fafb]" style={{ color: data.style.textColor }}>
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-xl text-slate-500 font-light">{data.content.description}</p>
        </div>

        <div className="flex flex-col gap-24">
          {data.content.posts.map((post, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 lg:gap-24 items-center group cursor-pointer`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <div className="w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">{post.category}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span className="text-slate-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                    <div>
                      <div className="font-bold text-slate-900">{post.author.name}</div>
                      <div className="text-sm text-slate-500">{post.date}</div>
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
