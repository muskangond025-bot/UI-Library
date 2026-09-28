import React from 'react';
import { motion } from 'framer-motion';

interface CustomerReview12Props {
  data: {
    content: { heading: string; description: string; overallRating: number; totalReviews: number; reviews: { name: string; date: string; rating: number; title: string; content: string; avatar: string; verified: boolean; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function CustomerReview12({ data }: CustomerReview12Props) {
  // Mock breakdown data
  const breakdown = [
    { stars: 5, pct: 85 },
    { stars: 4, pct: 10 },
    { stars: 3, pct: 3 },
    { stars: 2, pct: 1 },
    { stars: 1, pct: 1 },
  ];

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-black" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16">
        
        {/* Left Side: Rating Breakdown */}
        <div className="w-full lg:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-4"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 mb-10"
          >
            {data.content.description}
          </motion.p>

          <div className="flex items-center gap-6 mb-8">
            <span className="text-6xl font-black text-white">{data.content.overallRating}</span>
            <div>
              <div className="flex gap-1 text-yellow-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
              <p className="text-sm text-zinc-400">{data.content.totalReviews.toLocaleString()} reviews</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full">
            {breakdown.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4"
              >
                <span className="text-sm text-zinc-400 w-12 text-right">{item.stars} stars</span>
                <div className="flex-1 h-3 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.pct}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-yellow-500 rounded-full"
                  />
                </div>
                <span className="text-sm text-zinc-500 w-8">{item.pct}%</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Reviews Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.content.reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-yellow-500 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? 'opacity-100' : 'opacity-20'}>★</span>
                    ))}
                  </div>
                  <span className="text-xs text-zinc-500">{review.date}</span>
                </div>
                <h4 className="font-bold text-white mb-2">{review.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">"{review.content}"</p>
              </div>
              
              <div className="flex items-center gap-3">
                <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover grayscale" />
                <div>
                  <h5 className="font-bold text-white text-sm">{review.name}</h5>
                  {review.verified && <span className="text-[10px] text-green-500 font-bold uppercase">Verified Buyer</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
