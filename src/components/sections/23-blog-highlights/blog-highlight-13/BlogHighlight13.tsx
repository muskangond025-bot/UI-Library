import React from 'react';
import { motion } from 'framer-motion';

interface BlogHighlight13Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      posts: { title: string; excerpt: string; author: { name: string; avatar: string }; date: string; category: string; imageUrl: string; readTime: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BlogHighlight13({ data }: BlogHighlight13Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 bg-[#fdfbf7]" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="border-y-4 border-[#292524] py-8 mb-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-6xl md:text-8xl font-serif font-black text-[#292524] uppercase tracking-tighter"
            >
              {data.content.heading}
            </motion.h2>
          </div>
          <div className="md:border-l-2 md:border-[#292524] md:pl-8 max-w-sm">
            <p className="font-serif italic text-xl text-[#57534e]">{data.content.description}</p>
            <p className="font-sans font-bold text-xs uppercase tracking-widest text-[#292524] mt-4">Volume IV • {new Date().getFullYear()}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Main Story */}
          <div className="md:col-span-8 flex flex-col">
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group cursor-pointer flex flex-col"
            >
              <h3 className="text-5xl md:text-6xl font-serif font-black text-[#292524] mb-6 leading-none group-hover:underline decoration-4 underline-offset-4">
                {data.content.posts[0].title}
              </h3>
              
              <div className="w-full aspect-[21/9] mb-8 border-2 border-[#292524] overflow-hidden">
                <img src={data.content.posts[0].imageUrl} alt={data.content.posts[0].title} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-700" />
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 border-b-2 md:border-b-0 md:border-r-2 border-[#292524] pb-6 md:pb-0 md:pr-6">
                  <span className="font-sans font-black uppercase text-xs tracking-widest block mb-4 border-b border-[#292524] pb-2">By {data.content.posts[0].author.name}</span>
                  <p className="font-serif text-lg leading-relaxed text-[#292524]">
                    The daily dispatch on {data.content.posts[0].category.toLowerCase()} and related fields. Read time: {data.content.posts[0].readTime}.
                  </p>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="font-serif text-2xl leading-relaxed text-[#44403c] first-letter:text-6xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                    {data.content.posts[0].excerpt} Continues on page A4. The quick brown fox jumps over the lazy dog. Exploring the profound implications of modern architecture and structured design methodologies in the modern era.
                  </p>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Side Stories */}
          <div className="md:col-span-4 flex flex-col gap-8 md:border-l-4 md:border-[#292524] md:pl-12">
            <h4 className="font-sans font-black uppercase text-xl tracking-widest text-[#292524] border-b-2 border-[#292524] pb-2">Briefings</h4>
            
            {data.content.posts.slice(1).map((post, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer border-b border-[#d6d3d1] pb-8 last:border-0"
              >
                <span className="font-sans font-bold uppercase text-[10px] tracking-widest text-[#57534e] block mb-2">{post.category} • {post.date}</span>
                <h5 className="text-3xl font-serif font-black text-[#292524] mb-3 leading-tight group-hover:underline decoration-2 underline-offset-4">
                  {post.title}
                </h5>
                <p className="font-serif text-[#57534e] mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                {idx === 0 && (
                  <div className="w-full aspect-video border-2 border-[#292524] overflow-hidden mt-4">
                     <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                )}
              </motion.article>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
