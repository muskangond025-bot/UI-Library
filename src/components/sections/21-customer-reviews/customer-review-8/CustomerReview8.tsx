import React from 'react';
import { motion } from 'framer-motion';

interface CustomerReview8Props {
  data: {
    content: { heading: string; description: string; overallRating: number; totalReviews: number; reviews: { name: string; date: string; rating: number; title: string; content: string; avatar: string; verified: boolean; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function CustomerReview8({ data }: CustomerReview8Props) {
  return (
    <div className="w-full py-24 font-sans bg-[#050505] overflow-hidden" style={{ color: data.style.textColor }}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="w-full md:w-5/12 text-center md:text-left z-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg mb-12"
          >
            {data.content.description}
          </motion.p>
          
          <div className="flex items-center gap-6 justify-center md:justify-start">
            <span className="text-6xl font-black text-white">{data.content.overallRating}</span>
            <div>
              <div className="flex text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-500 text-sm">{data.content.totalReviews.toLocaleString()} reviews</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-7/12 relative h-[500px] perspective-[1000px] flex items-center justify-center">
          {data.content.reviews.map((review, idx) => {
            // Stack effect calculation
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 100, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.8, type: "spring" }}
                className="absolute w-[90%] md:w-[400px] bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:-translate-y-10 transition-transform duration-500 cursor-pointer"
                style={{
                  zIndex: data.content.reviews.length - idx,
                  transform: `translateY(${idx * 25}px) scale(${1 - idx * 0.05})`,
                }}
              >
                <div className="flex items-center gap-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${i < review.rating ? 'opacity-100' : 'opacity-20'}`}>★</span>
                  ))}
                </div>
                <h5 className="text-white font-bold text-xl mb-2">{review.title}</h5>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">"{review.content}"</p>
                
                <div className="flex items-center gap-3">
                  <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover grayscale" />
                  <div>
                    <h4 className="font-bold text-white text-sm">{review.name}</h4>
                    <p className="text-xs text-zinc-500">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
