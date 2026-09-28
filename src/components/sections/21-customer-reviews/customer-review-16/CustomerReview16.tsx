import React from 'react';
import { motion } from 'framer-motion';

interface CustomerReview16Props {
  data: {
    content: { heading: string; description: string; overallRating: number; totalReviews: number; reviews: { name: string; date: string; rating: number; title: string; content: string; avatar: string; verified: boolean; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function CustomerReview16({ data }: CustomerReview16Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#ecfccb] overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        <div className="text-center mb-24 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-bold text-[#3f6212] mb-6"
          >
            {data.content.heading}
          </motion.h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <span className="text-4xl font-black text-[#166534]">{data.content.overallRating}</span>
            <div className="flex gap-1 text-[#65a30d]">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl">★</span>
              ))}
            </div>
          </div>
          <p className="text-[#4d7c0f] text-lg font-medium">Based on {data.content.totalReviews.toLocaleString()} reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
          {data.content.reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white p-10 rounded-[3rem] relative shadow-[0_10px_40px_rgba(101,163,13,0.1)] hover:shadow-[0_20px_50px_rgba(101,163,13,0.2)] transition-shadow border-4 border-transparent hover:border-[#bef264] flex flex-col justify-between"
            >
              <div className="absolute -top-8 left-10 p-2 bg-white rounded-full shadow-lg">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-16 h-16 rounded-full object-cover border-4 border-[#d9f99d]"
                />
              </div>
              
              <div className="mt-10">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex text-[#84cc16] gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-lg ${i < review.rating ? 'opacity-100' : 'opacity-30'}`}>★</span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#4d7c0f] uppercase bg-[#f7fee7] px-3 py-1 rounded-full">{review.date}</span>
                </div>
                <h4 className="font-bold text-2xl text-[#14532d] mb-4">{review.title}</h4>
                <p className="text-[#3f6212] text-lg leading-relaxed mb-6">
                  "{review.content}"
                </p>
              </div>
              
              <div className="pt-6 border-t-2 border-[#f7fee7]">
                <h5 className="font-bold text-[#166534] text-lg">{review.name}</h5>
                {review.verified && <span className="text-[#65a30d] font-bold text-xs uppercase tracking-widest">Verified User</span>}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
