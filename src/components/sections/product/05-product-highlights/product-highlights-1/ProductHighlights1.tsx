import React, { useState, MouseEvent, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Shield, Zap, Droplets, Cpu, Settings, Activity } from 'lucide-react';

/*
  Animation Decisions:
  1. Concept: Glassmorphic 3D Tilt Hover
  2. Trigger: Mouse movement over individual feature cards
  3. Element: The card container, the icon, and a dynamic glare overlay
  4. Motion: Card rotates on X/Y axes based on mouse position. Icon scales up and glows. A subtle gradient "glare" tracks the cursor.
  5. Why: Creates a tactile, premium feel (like frosted glass) that makes standard product features feel cutting-edge and highly interactive.
*/

const features = [
  { icon: Shield, title: 'Military-Grade Durability', desc: 'Engineered with aerospace-grade materials to withstand extreme conditions without compromising on weight.' },
  { icon: Zap, title: 'Ultra-Fast Processing', desc: 'Experience zero latency with our custom-designed silicon, delivering peak performance instantly.' },
  { icon: Droplets, title: 'Weather Resistance', desc: 'Fully sealed architecture ensures complete protection against water, dust, and environmental factors.' },
  { icon: Cpu, title: 'Neural Engine', desc: 'Advanced AI capabilities adapt to your usage patterns, optimizing battery and performance on the fly.' },
  { icon: Settings, title: 'Precision Control', desc: 'Tactile, responsive interfaces that give you granular control over every aspect of the device.' },
  { icon: Activity, title: 'Health Tracking', desc: 'Continuous biometric monitoring seamlessly integrated into the background of your daily routine.' },
];

function GlassCard({ feature }: { feature: typeof features[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);
  
  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }, [x, y]);
  
  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden cursor-crosshair transition-colors hover:bg-white/10"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%)',
          transform: 'translateZ(-10px)'
        }}
      />
      
      <motion.div 
        className="relative z-10 flex flex-col items-start gap-4"
        style={{ transform: 'translateZ(30px)' }}
      >
        <div className="p-4 rounded-xl bg-gradient-to-br from-neutral-800 to-black border border-neutral-700 shadow-xl group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-shadow duration-500">
          <feature.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500 ease-out" />
        </div>
        
        <h3 className="text-xl font-semibold text-white tracking-tight">{feature.title}</h3>
        <p className="text-neutral-400 leading-relaxed text-sm">{feature.desc}</p>
      </motion.div>
    </motion.div>
  );
}

export default function ProductHighlights1({ data }: { data: any }) {
  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden perspective-1000">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Designed for the future. <br/><span className="text-neutral-500">Built for today.</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Every component has been meticulously crafted to deliver an unparalleled experience of power and elegance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <GlassCard key={idx} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
