import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full aspect-square rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-8 backdrop-blur-xl shadow-2xl flex flex-col justify-end"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative z-10"
      >
        {children}
      </div>
    </motion.div>
  );
}

export default function ProductHighlights13({ data }: { data: any }) {
  return (
    <section className="py-32 bg-neutral-950 flex flex-col items-center justify-center relative perspective-[1000px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_50%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        <TiltCard>
          <h3 className="text-3xl font-black text-white mb-2">Machine Learning</h3>
          <p className="text-neutral-400">16-core Neural Engine.</p>
        </TiltCard>
        <TiltCard>
          <h3 className="text-3xl font-black text-white mb-2">Graphics</h3>
          <p className="text-neutral-400">Up to 40-core GPU.</p>
        </TiltCard>
        <TiltCard>
          <h3 className="text-3xl font-black text-white mb-2">Memory</h3>
          <p className="text-neutral-400">Up to 128GB unified memory.</p>
        </TiltCard>
      </div>
    </section>
  );
}
