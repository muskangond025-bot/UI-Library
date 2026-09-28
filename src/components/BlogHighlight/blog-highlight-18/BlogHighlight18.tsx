import React from 'react';
import { motion } from 'framer-motion';

interface BlogHighlight18Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      posts: { title: string; excerpt: string; author: { name: string; avatar: string }; date: string; category: string; imageUrl: string; readTime: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BlogHighlight18({ data }: BlogHighlight18Props) {
  return (
    <div className="w-full font-sans bg-white relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* Left Side: Header & Featured */}
        <div className="bg-black text-white p-12 md:p-24 flex flex-col border-b-2 lg:border-b-0 lg:border-r-2 border-white lg:border-black">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-16"
          >
            <div className="inline-block bg-white text-black font-black uppercase tracking-widest text-xs px-3 py-1 mb-8">
              Journal / Issue 01
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
              {data.content.heading}
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-md">
              {data.content.description}
            </p>
          </motion.div>

          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="group cursor-pointer mt-auto"
          >
            <div className="w-full aspect-[4/3] bg-zinc-900 mb-8 overflow-hidden">
              <img src={data.content.posts[0].imageUrl} alt={data.content.posts[0].title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
            </div>
            <div className="flex gap-4 items-center mb-4 text-xs font-black uppercase tracking-widest text-gray-500">
              <span className="text-white">{data.content.posts[0].category}</span>
              <span>{data.content.posts[0].date}</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black uppercase leading-none mb-6 group-hover:text-gray-300 transition-colors">
              {data.content.posts[0].title}
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              {data.content.posts[0].excerpt}
            </p>
            <div className="inline-block border-b-2 border-white pb-1 font-black uppercase tracking-widest text-sm group-hover:text-gray-300 group-hover:border-gray-300 transition-colors">
              Read Article →
            </div>
          </motion.article>
        </div>

        {/* Right Side: Post List */}
        <div className="bg-white p-12 md:p-24 flex flex-col justify-center">
          <div className="flex flex-col gap-12">
            {data.content.posts.slice(1).map((post, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer border-b-2 border-black pb-12 last:border-0 last:pb-0"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-black text-white font-black uppercase tracking-widest text-[10px] px-3 py-1">
                    {post.category}
                  </span>
                  <span className="font-mono text-gray-500 font-bold">{post.readTime}</span>
                </div>
                
                <h4 className="text-3xl md:text-5xl font-black uppercase leading-none text-black mb-6 group-hover:underline decoration-4 underline-offset-4">
                  {post.title}
                </h4>
                
                <p className="text-gray-600 text-lg mb-8 max-w-xl">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4">
                  <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full grayscale border-2 border-black" />
                  <div>
                    <div className="font-black text-black uppercase tracking-wider">{post.author.name}</div>
                    <div className="text-gray-500 font-bold text-sm uppercase">{post.date}</div>
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
