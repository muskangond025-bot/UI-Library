import React from 'react';
import { motion } from 'framer-motion';

interface BlogHighlight20Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      posts: { title: string; excerpt: string; author: { name: string; avatar: string }; date: string; category: string; imageUrl: string; readTime: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BlogHighlight20({ data }: BlogHighlight20Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-[#f8fafc] overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-lg text-slate-500 font-medium">{data.content.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {data.content.posts.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-shadow duration-500 relative bg-slate-100">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500" />
              </div>
              
              <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                <span className="text-blue-600">{post.category}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                <span>{post.readTime}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-slate-500 line-clamp-3 mb-8 leading-relaxed font-medium flex-1">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200 mt-auto">
                <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-900">{post.author.name}</span>
                  <span className="text-xs text-slate-400 font-medium">{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
