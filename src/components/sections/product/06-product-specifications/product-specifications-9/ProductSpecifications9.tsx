import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductSpecifications9({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  const cards = [
    { title: "Processing", img: "https://picsum.photos/seed/tech91/800/800", specs: ["A17 Pro", "6-core CPU", "6-core GPU"] },
    { title: "Cameras", img: "https://picsum.photos/seed/tech92/800/800", specs: ["48MP Main", "12MP Ultra Wide", "5x Telephoto"] },
    { title: "Battery", img: "https://picsum.photos/seed/tech93/800/800", specs: ["29h video playback", "Fast-charge", "MagSafe"] },
  ];

  return (
    <section 
      ref={scrollContainerRef}
      className="h-[800px] lg:h-screen bg-black overflow-y-auto overflow-x-hidden hide-scrollbar relative"
    >
      <div ref={contentRef} className="h-[300vh] w-full">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          
          <motion.div style={{ x }} className="flex gap-8 px-12 md:px-32 w-[300vw] h-[60vh]">
            {cards.map((card, i) => (
              <div key={i} className="w-[100vw] max-w-4xl h-full flex-shrink-0 relative rounded-[3rem] overflow-hidden group">
                <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
                
                <div className="absolute inset-y-0 left-0 p-12 flex flex-col justify-center">
                  <h3 className="text-6xl font-black text-white mb-8">{card.title}</h3>
                  <ul className="space-y-4">
                    {card.specs.map((s, j) => (
                      <li key={j} className="text-2xl text-neutral-300 flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
