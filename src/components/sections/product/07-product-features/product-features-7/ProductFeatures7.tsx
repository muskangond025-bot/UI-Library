import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductFeatures7({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  
  const features = [
    { title: "Titanium.", subtitle: "So strong. So light. So Pro.", color: "bg-neutral-900", text: "text-white" },
    { title: "A17 Pro chip.", subtitle: "A monster win for gaming.", color: "bg-neutral-200", text: "text-black" },
    { title: "Camera.", subtitle: "Wildest optical zoom ever.", color: "bg-blue-900", text: "text-white" }
  ];

  return (
    <section ref={scrollContainerRef} className="h-screen overflow-y-auto overflow-x-hidden hide-scrollbar bg-black relative">
      <div className="w-full">
        {/* Intro */}
        <div className="h-screen flex items-center justify-center sticky top-0">
          <h2 className="text-6xl md:text-8xl font-black text-white">Features.</h2>
        </div>

        {/* Stacking Cards */}
        <div className="pb-[50vh]">
          {features.map((feat, i) => (
            <div key={i} className="h-screen sticky top-0 flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-200px" }}
                className={`w-full max-w-5xl aspect-video rounded-[3rem] ${feat.color} ${feat.text} flex flex-col items-center justify-center text-center shadow-2xl`}
              >
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">{feat.title}</h3>
                <p className="text-2xl opacity-80">{feat.subtitle}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
