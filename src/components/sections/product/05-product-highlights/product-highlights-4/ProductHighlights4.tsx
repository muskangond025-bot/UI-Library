import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

/*
  Animation Decisions:
  1. Concept: Interactive Pulsing Hotspots
  2. Trigger: Click on a hotspot dot over a product image
  3. Element: Hotspot markers and absolute positioned info cards
  4. Motion: The hotspot marker pulses infinitely. When clicked, an info card springs outward from the dot's origin using scale and opacity, while the dot rotates into a close icon.
  5. Why: Highly engaging, exploratory UI that invites users to interact directly with the product image to learn about specific physical features.
*/

const hotspots = [
  {
    id: 1,
    title: 'Precision Dial',
    desc: 'Machined from a single block of titanium for tactile, infinite scrolling feedback.',
    top: '30%',
    left: '25%'
  },
  {
    id: 2,
    title: 'Acoustic Mesh',
    desc: 'Engineered pattern allows 20% more sound flow while maintaining dust resistance.',
    top: '60%',
    left: '45%'
  },
  {
    id: 3,
    title: 'Magnetic Connector',
    desc: 'Snaps perfectly into place every time with a satisfying magnetic click.',
    top: '75%',
    left: '75%'
  }
];

function Hotspot({ spot, activeId, setActiveId }: { spot: typeof hotspots[0], activeId: number | null, setActiveId: (id: number | null) => void }) {
  const isActive = activeId === spot.id;
  
  return (
    <div className="absolute z-20" style={{ top: spot.top, left: spot.left }}>
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        {/* Pulsing rings */}
        <motion.div
          animate={{
            scale: [1, 2.5, 3],
            opacity: [0.7, 0, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
          className="absolute inset-0 bg-white rounded-full pointer-events-none"
        />
        
        {/* Clickable button */}
        <motion.button
          onClick={() => setActiveId(isActive ? null : spot.id)}
          className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-lg ${isActive ? 'bg-black text-white' : 'bg-white text-black hover:bg-neutral-100'}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isActive ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Plus className="w-5 h-5" />
          </motion.div>
        </motion.button>
        
        {/* Expanding Info Card */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10, x: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: -50 }}
              exit={{ opacity: 0, scale: 0.8, y: 10, x: -50 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute top-12 left-1/2 w-64 p-5 bg-white rounded-xl shadow-2xl border border-neutral-100 origin-top"
            >
              <h4 className="font-semibold text-neutral-900 mb-2">{spot.title}</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">{spot.desc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function ProductHighlights4({ data }: { data: any }) {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 mb-4">Explore the Details</h2>
          <p className="text-xl text-neutral-500">Interact with the markers to uncover the engineering breakthroughs.</p>
        </div>
        
        <div className="relative rounded-3xl overflow-hidden bg-neutral-200 aspect-[16/9] shadow-inner border border-neutral-300/50">
          {/* Main Product Image */}
          <img 
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1600" 
            alt="Product" 
            className="w-full h-full object-cover"
          />
          
          {/* Overlay to dim image slightly when a hotspot is active */}
          <motion.div 
            animate={{ opacity: activeId ? 0.3 : 0 }}
            className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-500"
          />
          
          {/* Hotspots */}
          {hotspots.map((spot) => (
            <Hotspot key={spot.id} spot={spot} activeId={activeId} setActiveId={setActiveId} />
          ))}
        </div>
      </div>
    </section>
  );
}
