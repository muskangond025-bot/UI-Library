import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial3Props {
  data: {
    content: { heading: string; description: string; testimonials: { name: string; role: string; content: string; avatar: string; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Testimonial3({ data }: Testimonial3Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % data.content.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + data.content.testimonials.length) % data.content.testimonials.length);
  };

  return (
    <div className="w-full min-h-[800px] py-24 px-6 md:px-12 font-sans bg-[#f3f4f6] flex flex-col justify-center" style={{ color: data.style.textColor }}>
      <div className="max-w-5xl mx-auto w-full relative">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">{data.content.heading}</h2>
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center text-center justify-center"
            >
              <p className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-12 max-w-4xl">
                "{data.content.testimonials[currentIndex].content}"
              </p>
              <div className="flex flex-col items-center gap-4">
                <img 
                  src={data.content.testimonials[currentIndex].avatar} 
                  alt={data.content.testimonials[currentIndex].name} 
                  className="w-20 h-20 rounded-full object-cover shadow-lg border-4 border-white" 
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{data.content.testimonials[currentIndex].name}</h4>
                  <p className="text-gray-500 font-medium">{data.content.testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-24">
          <button 
            onClick={prevTestimonial}
            className="w-14 h-14 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:scale-110 transition-all text-gray-800"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="w-14 h-14 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:scale-110 transition-all text-gray-800"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
