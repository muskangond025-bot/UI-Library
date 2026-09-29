import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  { title: "Fluid Motion", desc: "Experience 120Hz ProMotion displays." },
  { title: "Spatial Audio", desc: "Immersive sound that surrounds you." },
  { title: "MagSafe", desc: "Snap on cases, wallets, and chargers." },
  { title: "Ceramic Shield", desc: "Tougher than any smartphone glass." },
];

export default function ProductHighlights12({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ 
    target: contentRef, 
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end end"] 
  });
  
  // Translate X horizontally as we scroll vertically
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section 
      ref={scrollContainerRef} 
      className="h-[800px] lg:h-screen bg-black w-full overflow-y-auto overflow-x-hidden hide-scrollbar relative"
    >
      <div ref={contentRef} className="h-[400vh] w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          <motion.div style={{ x }} className="flex gap-16 px-12 md:px-32 w-[400vw]">
            {features.map((f, i) => (
              <div key={i} className="w-[100vw] max-w-2xl flex-shrink-0">
                <div className="aspect-video bg-neutral-900 rounded-3xl mb-8 relative overflow-hidden border border-white/10 flex items-center justify-center">
                  <span className="text-[15rem] font-black text-white/5 absolute -right-10 -bottom-20 leading-none">0{i + 1}</span>
                </div>
                <h3 className="text-5xl font-black text-white mb-4">{f.title}</h3>
                <p className="text-2xl text-neutral-400">{f.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
