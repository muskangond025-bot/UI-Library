import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  { title: "Precision Crafted", desc: "Forged from a single block of aerospace-grade titanium.", color: "#172554", img: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?q=80&w=800" }, // blue-950
  { title: "Ultimate Power", desc: "Powered by the revolutionary A17 Pro silicon chip.", color: "#1e1b4b", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800" }, // indigo-950
  { title: "All-day Battery", desc: "Optimized efficiency keeps you going from dawn to dusk.", color: "#3b0764", img: "https://images.unsplash.com/photo-1592840062778-9e19d7d921a2?q=80&w=800" }, // purple-950
];

function StackCard({ feature, index, total, scrollYProgress }: any) {
  // We want the card to scale down when the NEXT card is scrolling up over it.
  // The scroll progress goes from 0 to 1 over the whole container.
  // Each card's section is roughly 1/total of the progress.
  const start = index / total;
  const end = (index + 1) / total;

  // As the user scrolls past this card's segment, it scales down and gets darker.
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.9]);
  const y = useTransform(scrollYProgress, [start, end], ["0%", "-5%"]);
  // Instead of making the card transparent, we fade in a black overlay to darken it
  const overlayOpacity = useTransform(scrollYProgress, [start, end], [0, 0.6]);

  return (
    <div className="h-screen w-full flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, y, zIndex: index, backgroundColor: feature.color }}
        className={`w-full max-w-6xl h-[70vh] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 relative origin-top`}
      >
        <motion.div 
          className="absolute inset-0 bg-black pointer-events-none z-20"
          style={{ opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-12 md:p-24 z-10 gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">{feature.title}</h2>
            <p className="text-xl md:text-2xl text-neutral-300 font-light">{feature.desc}</p>
          </div>
          <div className="w-full md:w-1/2 h-full relative rounded-3xl overflow-hidden shadow-2xl">
            <img src={feature.img} alt={feature.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProductHighlights7({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ 
    target: contentRef, 
    container: scrollContainerRef,
    offset: ["start start", "end end"] 
  });

  return (
    <section 
      ref={scrollContainerRef} 
      className="bg-neutral-950 relative h-screen w-full overflow-y-auto hide-scrollbar"
    >
      <div className="py-24 text-center sticky top-0 z-0">
        <h2 className="text-4xl text-white font-bold">Scroll to stack features</h2>
      </div>
      
      <div ref={contentRef} className="relative z-10 pb-[20vh]">
        {features.map((f, i) => (
          <StackCard key={i} feature={f} index={i} total={features.length} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
