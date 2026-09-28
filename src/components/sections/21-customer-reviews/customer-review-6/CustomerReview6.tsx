import React from 'react';
import { motion } from 'framer-motion';

interface CustomerReview6Props {
  data: {
    content: { heading: string; description: string; overallRating: number; totalReviews: number; reviews: { name: string; date: string; rating: number; title: string; content: string; avatar: string; verified: boolean; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function CustomerReview6({ data }: CustomerReview6Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#1e293b] overflow-hidden border-b-8 border-yellow-400" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-16">
        
        <div className="w-full md:w-1/3 flex flex-col gap-8">
          <div className="bg-yellow-400 p-8 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-black mb-4 tracking-tighter leading-none">{data.content.heading}</h2>
            <p className="text-xl font-bold text-black mb-8">{data.content.description}</p>
            
            <div className="border-t-4 border-black pt-6 flex items-center justify-between">
              <span className="text-6xl font-black text-black">{data.content.overallRating}</span>
              <div className="text-right">
                <div className="flex gap-1 text-black mb-1 justify-end">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-bold text-black uppercase">{data.content.totalReviews} Reviews</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-1 gap-8">
          {data.content.reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <img src={review.avatar} alt={review.name} className="w-16 h-16 border-4 border-black object-cover" />
                  <div>
                    <h4 className="font-black text-black text-xl uppercase tracking-wider">{review.name}</h4>
                    <p className="font-bold text-gray-500 uppercase text-xs">{review.date}</p>
                  </div>
                </div>
                {review.verified && (
                  <span className="bg-blue-500 text-white font-black uppercase text-xs px-3 py-1 border-2 border-black">
                    Verified
                  </span>
                )}
              </div>
              <h5 className="font-black text-2xl text-black mb-4 uppercase">{review.title}</h5>
              <p className="text-black font-bold text-lg leading-relaxed">
                {review.content}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
