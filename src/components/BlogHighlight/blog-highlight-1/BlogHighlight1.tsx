import React from 'react';
import { motion } from 'framer-motion';

interface BlogHighlight1Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      posts: { title: string; excerpt: string; author: { name: string; avatar: string }; date: string; category: string; imageUrl: string; readTime: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BlogHighlight1({ data }: BlogHighlight1Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-white" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-slate-500 text-lg max-w-2xl">{data.content.description}</p>
          </div>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors shrink-0"
          >
            View all posts
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.content.posts.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                <span>{post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-slate-600 mb-6 line-clamp-2 flex-1">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100">
                <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover" />
                <span className="font-medium text-slate-900 text-sm">{post.author.name}</span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
