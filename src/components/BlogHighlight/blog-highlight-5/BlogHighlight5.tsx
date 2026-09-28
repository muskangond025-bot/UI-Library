import React from 'react';
import { motion } from 'framer-motion';

interface BlogHighlight5Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      posts: { title: string; excerpt: string; author: { name: string; avatar: string }; date: string; category: string; imageUrl: string; readTime: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BlogHighlight5({ data }: BlogHighlight5Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 bg-white" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full border-y-2 border-black py-16">
        
        <div className="text-center mb-20 flex flex-col items-center">
          <span className="font-sans font-bold uppercase tracking-widest text-xs mb-6 text-gray-500">The Journal</span>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-6xl md:text-8xl font-serif font-black text-black leading-none mb-6 tracking-tight"
          >
            {data.content.heading}
          </motion.h2>
          <p className="font-serif text-2xl text-gray-600 max-w-2xl italic">{data.content.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Main Featured Post */}
          <div className="md:col-span-8 group cursor-pointer">
            <div className="w-full aspect-[16/9] mb-8 overflow-hidden">
              <img src={data.content.posts[0].imageUrl} alt={data.content.posts[0].title} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </div>
            <div className="flex gap-4 items-center mb-4 font-sans text-xs font-bold uppercase tracking-widest text-black">
              <span>{data.content.posts[0].category}</span>
              <span className="w-1 h-1 bg-black rounded-full" />
              <span className="text-gray-500">{data.content.posts[0].date}</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif font-black text-black mb-6 leading-tight group-hover:underline underline-offset-8 decoration-2">
              {data.content.posts[0].title}
            </h3>
            <p className="font-serif text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
              {data.content.posts[0].excerpt}
            </p>
            <div className="flex items-center gap-4 font-sans">
              <img src={data.content.posts[0].author.avatar} alt={data.content.posts[0].author.name} className="w-10 h-10 rounded-full grayscale" />
              <span className="font-bold text-sm uppercase tracking-wider">{data.content.posts[0].author.name}</span>
            </div>
          </div>

          {/* Sidebar Posts */}
          <div className="md:col-span-4 flex flex-col gap-12 md:pl-12 md:border-l border-gray-300">
            {data.content.posts.slice(1, 4).map((post, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="w-full aspect-[4/3] mb-6 overflow-hidden">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                </div>
                <div className="flex gap-3 items-center mb-3 font-sans text-[10px] font-bold uppercase tracking-widest text-black">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 bg-black rounded-full" />
                  <span className="text-gray-500">{post.readTime}</span>
                </div>
                <h4 className="text-2xl font-serif font-black text-black mb-3 leading-snug group-hover:underline underline-offset-4 decoration-2">
                  {post.title}
                </h4>
                <p className="font-serif text-gray-600 line-clamp-2">
                  {post.excerpt}
                </p>
              </motion.article>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
