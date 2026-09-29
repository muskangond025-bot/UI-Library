import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/*
  Animation Decisions:
  1. Concept: Cinematic Sticky Scroll with Clip-Path Reveals
  2. Trigger: Vertical page scroll
  3. Element: Staggered text blocks on the left, images on the right
  4. Motion: As the user scrolls, new images reveal using an expanding circular clip-path (giving a lens-like reveal). Text blocks fade in and translate up with glassmorphic highlighting.
  5. Why: Creates a highly immersive, editorial feel. The clip-path transition feels like looking through a camera lens, perfect for premium physical products.
*/

const features = [
  {
    id: 'f1',
    title: 'Advanced Acoustics',
    desc: 'Custom-designed drivers deliver high-fidelity audio with rich bass and crisp highs. Every note is rendered with stunning clarity, as the artist intended.',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'f2',
    title: 'Adaptive Noise Cancellation',
    desc: 'Intelligently analyzes your environment 500 times per second, adapting the noise cancellation profile to block out distractions perfectly without pressure build-up.',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'f3',
    title: 'Spatial Audio',
    desc: 'Dynamic head tracking brings theater-like sound that surrounds you. You will feel like you are standing right in the middle of the recording studio.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=1200'
  }
];

function FeatureTextBlock({ feature, index, total, scrollYProgress }: { feature: typeof features[0], index: number, total: number, scrollYProgress: any }) {
  const start = index / total;
  const end = (index + 1) / total;
  const fadeRange = 0.15;

  let input: number[];
  let opacityOutput: number[];
  let scaleOutput: number[];

  if (index === 0) {
    input = [0, end - fadeRange, end];
    opacityOutput = [1, 1, 0.2];
    scaleOutput = [1, 1, 0.95];
  } else if (index === total - 1) {
    input = [start - fadeRange, start, 1];
    opacityOutput = [0.2, 1, 1];
    scaleOutput = [0.95, 1, 1];
  } else {
    input = [start - fadeRange, start, end - fadeRange, end];
    opacityOutput = [0.2, 1, 1, 0.2];
    scaleOutput = [0.95, 1, 1, 0.95];
  }

  const opacity = useTransform(scrollYProgress, input, opacityOutput);
  const scale = useTransform(scrollYProgress, input, scaleOutput);

  return (
    <motion.div 
      style={{ opacity, scale }}
      className="h-[80vh] flex flex-col justify-center max-w-lg relative z-10"
    >
      <div className="p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">
        <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center font-bold text-lg mb-8 shadow-inner border border-white/20">
          0{index + 1}
        </div>
        <h3 className="text-5xl font-black tracking-tight text-white mb-6 leading-tight">{feature.title}</h3>
        <p className="text-xl text-neutral-300 leading-relaxed font-light">{feature.desc}</p>
      </div>
    </motion.div>
  );
}

export default function ProductHighlights3({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: contentRef,
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      ref={scrollContainerRef}
      className="bg-neutral-950 relative h-[800px] lg:h-screen w-full overflow-y-auto overflow-x-hidden hide-scrollbar"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <div className="max-w-7xl mx-auto px-6" ref={contentRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
          
          {/* Left Column: Scrolling Text */}
          <div className="py-[10vh]">
            {features.map((feature, i) => (
              <FeatureTextBlock 
                key={feature.id} 
                feature={feature} 
                index={i}
                total={features.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* Right Column: Sticky Cinematic Images */}
          <div className="hidden lg:block h-[80vh] sticky top-[10vh] rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)]">
            {features.map((feature, i) => {
              const start = i / features.length;
              const fadeRange = 0.15;
              
              // Only animate clip-path for elements after the first one
              const inStart = Math.max(0, start - fadeRange);
              const inEnd = start;

              // Cinematic circular clip-path reveal
              const clipPath = useTransform(
                scrollYProgress,
                [inStart, inEnd],
                ["circle(0% at 50% 50%)", "circle(150% at 50% 50%)"]
              );
              
              // Slow subtle zoom while active
              const scale = useTransform(
                scrollYProgress,
                [inStart, 1],
                [1, 1.1]
              );

              return (
                <motion.div
                  key={feature.id}
                  className="absolute inset-0 origin-center"
                  style={{ 
                    clipPath: i === 0 ? 'circle(150% at 50% 50%)' : clipPath,
                    scale,
                    zIndex: i
                  }}
                >
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
