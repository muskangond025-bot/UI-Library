import React from 'react';
import { motion } from 'framer-motion';

interface CustomerReview7Props {
  data: {
    content: { heading: string; description: string; overallRating: number; totalReviews: number; reviews: { name: string; date: string; rating: number; title: string; content: string; avatar: string; verified: boolean; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function CustomerReview7({ data }: CustomerReview7Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-[#fafafa]" style={{ color: data.style.textColor }}>
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        
        <div className="text-center mb-24 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-light text-slate-800 mb-6 tracking-tight"
          >
            {data.content.heading}
          </motion.h2>
          <div className="flex items-center justify-center gap-6 mb-8">
            <span className="text-4xl font-light text-slate-900">{data.content.overallRating}</span>
            <div className="h-8 w-px bg-slate-300" />
            <div className="flex gap-1 text-slate-800">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xl">★</span>
              ))}
            </div>
          </div>
          <p className="text-slate-500 font-light text-lg">{data.content.description}</p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {data.content.reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col border-t border-slate-200 pt-10"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover grayscale" />
                  <div>
                    <h4 className="font-semibold text-slate-900">{review.name}</h4>
                    <p className="text-sm text-slate-500 font-light">{review.date}</p>
                  </div>
                </div>
                <div className="flex text-slate-800 gap-1 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < review.rating ? 'opacity-100' : 'opacity-20'}>★</span>
                  ))}
                </div>
              </div>
              <h5 className="font-medium text-xl text-slate-900 mb-4">{review.title}</h5>
              <p className="text-slate-600 font-light leading-relaxed">
                "{review.content}"
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
