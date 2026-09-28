import React from 'react';
import { motion } from 'framer-motion';

interface CustomerReview9Props {
  data: {
    content: { heading: string; description: string; overallRating: number; totalReviews: number; reviews: { name: string; date: string; rating: number; title: string; content: string; avatar: string; verified: boolean; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function CustomerReview9({ data }: CustomerReview9Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-white overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-black mb-4 text-slate-900"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-slate-500 max-w-xl">{data.content.description}</p>
          </div>
          <div className="text-right">
            <span className="text-4xl font-black text-slate-900">{data.content.overallRating} / 5.0</span>
            <div className="text-slate-500 mt-2 font-medium">{data.content.totalReviews.toLocaleString()} Total Reviews</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          
          {/* Main Large Bento Item */}
          {data.content.reviews[0] && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="md:col-span-2 md:row-span-2 bg-blue-600 text-white rounded-[2rem] p-10 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <h5 className="text-2xl md:text-3xl font-bold mb-4">{data.content.reviews[0].title}</h5>
                <p className="text-xl font-medium leading-relaxed text-blue-100">"{data.content.reviews[0].content}"</p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <img src={data.content.reviews[0].avatar} alt={data.content.reviews[0].name} className="w-14 h-14 rounded-full object-cover border-2 border-white/20" />
                <div>
                  <h4 className="font-bold text-lg">{data.content.reviews[0].name}</h4>
                  <p className="text-blue-200 text-sm">{data.content.reviews[0].date}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Small Bento Items */}
          {data.content.reviews.slice(1).map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: (idx + 1) * 0.1 }}
              className={`bg-slate-50 border border-slate-200 rounded-[2rem] p-8 flex flex-col justify-between hover:shadow-md transition-shadow ${idx === 2 ? 'md:col-span-2' : 'md:col-span-2 lg:col-span-1'}`}
            >
              <div>
                <div className="flex text-yellow-400 mb-3 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < review.rating ? 'opacity-100' : 'opacity-20'}>★</span>
                  ))}
                </div>
                <h5 className="font-bold text-slate-900 mb-2">{review.title}</h5>
                <p className="text-slate-600 text-sm line-clamp-3">"{review.content}"</p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">{review.name}</h4>
                  <p className="text-[10px] text-slate-500">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
