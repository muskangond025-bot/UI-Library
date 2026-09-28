import React from 'react';
import { motion } from 'framer-motion';

interface CustomerReview15Props {
  data: {
    content: { heading: string; description: string; overallRating: number; totalReviews: number; reviews: { name: string; date: string; rating: number; title: string; content: string; avatar: string; verified: boolean; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function CustomerReview15({ data }: CustomerReview15Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 bg-[#fafafa]" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Editorial Header */}
        <div className="border-y-2 border-black py-8 mb-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl md:text-7xl font-serif font-black text-black tracking-tight text-center md:text-left leading-none"
          >
            {data.content.heading}
          </motion.h2>
          <div className="text-center md:text-right font-sans">
            <span className="text-4xl font-bold text-black">{data.content.overallRating}</span>
            <span className="text-xl text-gray-500"> / 5</span>
            <div className="flex gap-1 text-black mt-2 justify-center md:justify-end">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg">★</span>
              ))}
            </div>
            <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mt-2">{data.content.totalReviews.toLocaleString()} REVIEWS</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.content.reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col border-r-0 lg:border-r border-gray-300 last:border-0 lg:pr-8 last:pr-0"
            >
              <div className="mb-6 pb-6 border-b border-gray-300 flex justify-between items-center">
                <span className="font-sans font-bold text-xs uppercase tracking-widest text-black">{review.date}</span>
                <div className="flex gap-1 text-black">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xs ${i < review.rating ? 'opacity-100' : 'opacity-20'}`}>★</span>
                  ))}
                </div>
              </div>
              <h4 className="font-serif font-bold text-2xl text-black mb-4 leading-tight">{review.title}</h4>
              <p className="font-serif text-gray-600 leading-relaxed mb-8 flex-1">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover grayscale" />
                <div className="font-sans">
                  <h5 className="font-bold text-black text-sm uppercase tracking-wide">{review.name}</h5>
                  {review.verified && <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Verified Reader</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
