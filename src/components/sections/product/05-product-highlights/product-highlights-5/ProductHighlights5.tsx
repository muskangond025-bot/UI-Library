import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Zap, Shield, Battery, Activity } from 'lucide-react';

/*
  Animation Decisions:
  1. Concept: Expandable Accordion Highlights
  2. Trigger: Click on a highlight row
  3. Element: Accordion row content height and an inner image layout
  4. Motion: Row smoothly expands height using Framer Motion `layout` prop. Inner content fades in with a stagger. The chevron rotates. Non-active rows dim slightly to shift focus.
  5. Why: Space-efficient and organized. It keeps the UI clean while allowing users to deep-dive into specific features with a satisfying, buttery-smooth physical expansion.
*/

const accordionData = [
  {
    id: '1',
    icon: Zap,
    title: 'Lightning Fast Performance',
    subtitle: 'Powered by the all-new M-series silicon.',
    details: 'Our latest architecture delivers up to 40% faster CPU performance and up to 2x faster GPU performance compared to the previous generation, all while maintaining incredible power efficiency.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    icon: Shield,
    title: 'Hardware-Level Security',
    subtitle: 'Your data, protected at the core.',
    details: 'A dedicated secure enclave protects your biometric data, passwords, and sensitive information with military-grade encryption directly on the device, never leaving your possession.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    icon: Battery,
    title: 'All-Day Battery Life',
    subtitle: 'Up to 24 hours of continuous usage.',
    details: 'Breakthrough power management algorithms combined with a high-density battery cell mean you can leave your charger at home. Intelligent charging learns your routine to extend battery lifespan.',
    image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    icon: Activity,
    title: 'Advanced Sensor Array',
    subtitle: 'Measure what matters most.',
    details: 'Packed with a next-generation accelerometer, gyroscope, and environmental sensors to provide pinpoint accuracy for fitness tracking, spatial awareness, and augmented reality applications.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  }
];

function AccordionItem({ 
  item, 
  isOpen, 
  onClick, 
  isAnyOpen 
}: { 
  item: typeof accordionData[0], 
  isOpen: boolean, 
  onClick: () => void,
  isAnyOpen: boolean 
}) {
  return (
    <motion.div 
      layout
      onClick={onClick}
      className={`border-b border-neutral-200 cursor-pointer overflow-hidden transition-colors duration-500 hover:bg-neutral-50 ${isAnyOpen && !isOpen ? 'opacity-40' : 'opacity-100'}`}
    >
      <motion.div layout className="flex items-center justify-between py-6 px-4">
        <div className="flex items-center gap-6">
          <div className={`p-3 rounded-xl transition-colors duration-300 ${isOpen ? 'bg-black text-white' : 'bg-neutral-100 text-neutral-600'}`}>
            <item.icon className="w-6 h-6" />
          </div>
          <div>
            <motion.h3 layout className="text-2xl font-semibold text-neutral-900 tracking-tight">{item.title}</motion.h3>
            <motion.p layout className="text-neutral-500 mt-1">{item.subtitle}</motion.p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="text-neutral-400"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-4 pb-8 pt-2 flex flex-col md:flex-row gap-8">
              <div className="flex-1 text-lg text-neutral-600 leading-relaxed">
                {item.details}
              </div>
              <div className="flex-1 relative aspect-video rounded-2xl overflow-hidden bg-neutral-100">
                <motion.img 
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ProductHighlights5({ data }: { data: any }) {
  const [openId, setOpenId] = useState<string | null>(accordionData[0].id);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold tracking-tighter text-neutral-900 mb-16">
          Core Capabilities.
        </h2>
        
        <div className="border-t border-neutral-200">
          {accordionData.map((item) => (
            <AccordionItem 
              key={item.id} 
              item={item} 
              isOpen={openId === item.id}
              isAnyOpen={openId !== null}
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
