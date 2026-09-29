import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useVelocity, useAnimationFrame, useSpring, useMotionValue } from 'framer-motion';

/*
  Animation Decisions:
  1. Concept: Interactive Infinite Marquee with Hover Focus
  2. Trigger: Automatic infinite loop + scroll velocity + hover interaction
  3. Element: A horizontal track of premium feature cards (image + text)
  4. Motion: Continuous translation. Scroll velocity skews the cards. Hovering pauses the marquee and dims non-hovered items, bringing the hovered item into sharp focus with a scale-up.
  5. Why: Elevates a standard marquee into an engaging, tactile exploration tool.
*/

const features = [
  { title: "Titanium Chassis", image: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?auto=format&fit=crop&q=80&w=600" },
  { title: "A17 Pro Silicon", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600" },
  { title: "Action Button", image: "https://images.unsplash.com/photo-1592840062778-9e19d7d921a2?auto=format&fit=crop&q=80&w=600" },
  { title: "48MP Main Camera", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600" },
  { title: "USB-C Protocol", image: "https://images.unsplash.com/photo-1588508065123-287b28e01397?auto=format&fit=crop&q=80&w=600" },
];

function MarqueeTrack({ baseVelocity = 100 }: { baseVelocity?: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const skewX = useTransform(smoothVelocity, [-1000, 1000], [10, -10]);

  const [isHovered, setIsHovered] = useState(false);
  const x = useTransform(baseX, (v: number) => `${v}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    if (isHovered) return; // Pause on hover

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    
    let currentX = baseX.get() + moveBy;
    if (currentX <= -50) {
      currentX += 50;
    } else if (currentX > 0) {
      currentX -= 50;
    }
    baseX.set(currentX);
  });

  return (
    <div className="overflow-hidden py-12 flex m-0 relative">
      <motion.div 
        className="flex gap-8 px-4" 
        style={{ x, skewX }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...features, ...features, ...features].map((feat, i) => (
          <motion.div 
            key={i} 
            className="group relative w-[400px] aspect-[4/3] rounded-3xl overflow-hidden shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img src={feat.image} alt={feat.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-3xl font-bold text-white uppercase tracking-wider">{feat.title}</h3>
            </div>
            {/* Hover Outline */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/50 rounded-3xl z-30 transition-colors duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function ProductHighlights2({ data }: { data: any }) {
  return (
    <section className="py-24 bg-neutral-950 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
          Uncompromised Innovation.
        </h2>
        <p className="text-neutral-400 text-xl max-w-2xl mx-auto">
          Hover to pause and explore the breakthrough technologies powering the next generation.
        </p>
      </div>
      
      <div className="relative z-10 -rotate-2">
        <MarqueeTrack baseVelocity={-15} />
      </div>
      
      <div className="relative z-10 rotate-2 -mt-12">
        <MarqueeTrack baseVelocity={15} />
      </div>
    </section>
  );
}
