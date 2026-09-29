import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFeatures16({ data }: { data: any }) {
  const circles = [
    { title: "Performance", value: 98, color: "#3b82f6" },
    { title: "Efficiency", value: 92, color: "#8b5cf6" },
    { title: "Security", value: 99, color: "#10b981" }
  ];

  return (
    <section className="py-32 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full text-center">
        <h2 className="text-5xl font-black text-white mb-24">By the numbers.</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24">
          {circles.map((circle, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6">
                {/* Background Ring */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
                  
                  {/* Animated Progress Ring */}
                  <motion.circle 
                    cx="50" cy="50" r="40" 
                    stroke={circle.color} 
                    strokeWidth="8" 
                    fill="none" 
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "251.2", strokeDashoffset: "251.2" }}
                    whileInView={{ strokeDashoffset: 251.2 - (251.2 * circle.value) / 100 }}
                    transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </svg>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-black text-white">{circle.value}%</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-400">{circle.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
