import React from 'react';
import { motion } from 'framer-motion';

interface CustomerReview11Props {
  data: {
    content: { heading: string; description: string; overallRating: number; totalReviews: number; reviews: { name: string; date: string; rating: number; title: string; content: string; avatar: string; verified: boolean; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function CustomerReview11({ data }: CustomerReview11Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#f8fafc] overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16 items-center lg:items-start">
        
        {/* Left Side: Sticky Header */}
        <div className="w-full lg:w-5/12 flex flex-col gap-6 lg:sticky lg:top-24 h-fit text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-16 h-2 bg-blue-600 mx-auto lg:mx-0 mb-4"
          />
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl font-black text-slate-900 leading-tight"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 font-medium max-w-md mx-auto lg:mx-0"
          >
            {data.content.description}
          </motion.p>
          
          <div className="mt-8 p-8 bg-white rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center lg:items-start max-w-sm mx-auto lg:mx-0">
            <span className="text-7xl font-black text-slate-900 mb-2">{data.content.overallRating}</span>
            <div className="flex gap-1 text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-2xl ${i < Math.floor(data.content.overallRating) ? 'opacity-100' : 'opacity-30'}`}>★</span>
              ))}
            </div>
            <p className="text-slate-500 font-medium">From {data.content.totalReviews.toLocaleString()} verified reviews</p>
          </div>
        </div>

        {/* Right Side: Reviews Stack */}
        <div className="w-full lg:w-7/12 flex flex-col gap-8 pt-8">
          {data.content.reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl border border-slate-100 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-lg ${i < review.rating ? 'opacity-100' : 'opacity-20'}`}>★</span>
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full">{review.date}</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{review.title}</h4>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">"{review.content}"</p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h5 className="font-bold text-slate-900 text-lg">{review.name}</h5>
                  {review.verified && <p className="text-sm text-blue-600 font-semibold flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Verified Customer
                  </p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
