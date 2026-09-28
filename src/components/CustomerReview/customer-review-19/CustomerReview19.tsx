import React from 'react';
import { motion } from 'framer-motion';

interface CustomerReview19Props {
  data: {
    content: { heading: string; description: string; overallRating: number; totalReviews: number; reviews: { name: string; date: string; rating: number; title: string; content: string; avatar: string; verified: boolean; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function CustomerReview19({ data }: CustomerReview19Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-mono bg-[#09090b] overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="flex flex-col items-start">
            <div className="px-4 py-1 border border-pink-500 text-pink-500 text-xs font-bold uppercase tracking-widest mb-6">
              SYSTEM_REVIEWS.log
            </div>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-zinc-500">[{data.content.description}]</p>
          </div>

          <div className="border border-pink-500 p-6 flex items-center gap-6 bg-pink-500/5">
            <span className="text-5xl font-black text-pink-500">{data.content.overallRating}</span>
            <div>
              <div className="text-pink-500 flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <div className="text-xs text-pink-300 font-bold uppercase">TTL_COUNT: {data.content.totalReviews}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {data.content.reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-[1px] bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-800 hover:from-pink-500 hover:to-purple-600 transition-colors duration-500 rounded-none group"
            >
              <div className="bg-[#09090b] w-full p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start md:items-center">
                
                <div className="w-full md:w-1/4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-800 p-1 group-hover:bg-pink-500/20 transition-colors shrink-0">
                    <img src={review.avatar} alt={review.name} className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-sm truncate">{review.name}</h4>
                    <p className="text-[10px] text-zinc-500 uppercase mt-1">TS: {review.date}</p>
                  </div>
                </div>

                <div className="w-full md:w-3/4">
                  <div className="flex gap-1 text-pink-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < review.rating ? 'opacity-100' : 'opacity-30'}`}>★</span>
                    ))}
                  </div>
                  <div className="text-pink-500 mb-2 font-bold text-sm uppercase">{'//'} {review.title}</div>
                  <p className="text-zinc-300 text-sm leading-relaxed lowercase">
                    {review.content}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
