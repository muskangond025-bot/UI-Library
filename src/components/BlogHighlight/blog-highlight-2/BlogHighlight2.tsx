import React from 'react';
import { motion } from 'framer-motion';

interface BlogHighlight2Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      posts: { title: string; excerpt: string; author: { name: string; avatar: string }; date: string; category: string; imageUrl: string; readTime: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BlogHighlight2({ data }: BlogHighlight2Props) {
  const featuredPost = data.content.posts[0];
  const sidePosts = data.content.posts.slice(1, 4);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#0f172a]" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-slate-400 text-lg">{data.content.description}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Featured Post */}
          <div className="w-full lg:w-2/3">
            <motion.article 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl"
            >
              <img src={featuredPost.imageUrl} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90" />
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <span className="text-slate-300 text-sm">{featuredPost.readTime}</span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                  {featuredPost.title}
                </h3>
                
                <p className="text-slate-300 text-lg mb-6 line-clamp-2 max-w-2xl">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center gap-4">
                  <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-10 h-10 rounded-full border-2 border-slate-700" />
                  <div>
                    <div className="text-white font-medium">{featuredPost.author.name}</div>
                    <div className="text-slate-400 text-xs">{featuredPost.date}</div>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Side List */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {sidePosts.map((post, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4 group cursor-pointer bg-slate-800/50 p-4 rounded-2xl hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 transition-all"
              >
                <div className="w-32 aspect-square rounded-xl overflow-hidden shrink-0">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                    {post.category}
                  </span>
                  <h4 className="text-white font-bold leading-snug mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-auto">
                    <span>{post.date}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
