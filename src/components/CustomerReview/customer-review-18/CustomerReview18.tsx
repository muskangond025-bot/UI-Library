import React from 'react';
import { motion } from 'framer-motion';

interface CustomerReview18Props {
  data: {
    content: { heading: string; description: string; overallRating: number; totalReviews: number; reviews: { name: string; date: string; rating: number; title: string; content: string; avatar: string; verified: boolean; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function CustomerReview18({ data }: CustomerReview18Props) {
  return (
    <div className="w-full font-sans bg-white" style={{ color: data.style.textColor }}>
      
      {/* Header Section */}
      <div className="w-full bg-black py-24 px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8"
        >
          {data.content.heading}
        </motion.h2>
        <div className="flex items-center justify-center gap-8 max-w-md mx-auto bg-white p-6 rounded-2xl">
          <span className="text-5xl font-black text-black">{data.content.overallRating}</span>
          <div className="text-left">
            <div className="flex gap-1 text-black mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xl">★</span>
              ))}
            </div>
            <p className="font-bold text-gray-500 uppercase text-xs">{data.content.totalReviews.toLocaleString()} REVIEWS</p>
          </div>
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {data.content.reviews.map((review, idx) => {
          // Alternating checkerboard pattern
          const isDark = (Math.floor(idx / 2) + (idx % 2)) % 2 === 0;

          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`p-12 md:p-24 flex flex-col justify-center min-h-[400px] ${isDark ? 'bg-zinc-100 text-black' : 'bg-white text-black'}`}
            >
              <div className="flex gap-1 mb-6 text-black">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-2xl ${i < review.rating ? 'opacity-100' : 'opacity-20'}`}>★</span>
                ))}
              </div>
              <h4 className="text-3xl font-black uppercase mb-6 leading-none">{review.title}</h4>
              <p className="text-lg font-medium leading-relaxed mb-10">"{review.content}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full object-cover grayscale" />
                <div>
                  <h5 className="font-black uppercase text-sm tracking-wider">{review.name}</h5>
                  <p className="text-gray-500 uppercase text-xs font-bold">{review.date}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
