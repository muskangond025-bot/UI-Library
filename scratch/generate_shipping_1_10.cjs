const fs = require('fs');
const path = require('path');

const components = [
  {
    name: 'ShippingDeliveryInformation1',
    content: `import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Globe, MapPin } from 'lucide-react';

export default function ShippingDeliveryInformation1({ data }: { data: any }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-slate-900 text-white flex flex-col items-center justify-center overflow-hidden relative">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        className="w-full max-w-4xl relative z-10"
      >
        <div className="text-center mb-16">
          <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Global Shipping
          </motion.h2>
          <motion.p variants={item} className="text-slate-400 max-w-lg mx-auto">
            Fast, reliable delivery to over 200 countries worldwide. Track your package every step of the way.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Package, title: "Processing", desc: "1-2 Business Days" },
            { icon: Truck, title: "Domestic", desc: "2-5 Business Days" },
            { icon: Globe, title: "International", desc: "7-14 Business Days" },
            { icon: MapPin, title: "Tracking", desc: "Real-time updates" }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              variants={item}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-slate-800 transition-colors cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-slate-700/50 rounded-xl flex items-center justify-center mb-4 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-slate-200 mb-1">{feature.title}</h3>
              <p className="text-sm text-slate-500">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
`
  },
  {
    name: 'ShippingDeliveryInformation2',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ShippingDeliveryInformation2({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-100 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Portal Hero Effect */}
      <motion.div 
        className="absolute inset-0 z-0 bg-neutral-900"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isOpen ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "bottom" }}
      >
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        
        <div className="h-full flex flex-col items-center justify-center text-white p-12">
          <motion.h3 
            className="text-4xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isOpen ? 0 : 20, opacity: isOpen ? 1 : 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Express Delivery
          </motion.h3>
          <motion.div 
            className="grid grid-cols-2 gap-8 text-center max-w-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isOpen ? 0 : 20, opacity: isOpen ? 1 : 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div>
              <div className="text-3xl font-black text-emerald-400 mb-1">24h</div>
              <div className="text-neutral-400 text-sm uppercase tracking-widest">Dispatch</div>
            </div>
            <div>
              <div className="text-3xl font-black text-emerald-400 mb-1">Next Day</div>
              <div className="text-neutral-400 text-sm uppercase tracking-widest">Arrival</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold text-neutral-900 mb-8">Shipping Options</h2>
        <motion.button 
          onClick={() => setIsOpen(!isOpen)}
          className={\`px-8 py-4 rounded-full font-bold tracking-wide transition-colors \${isOpen ? 'bg-white text-neutral-900' : 'bg-neutral-900 text-white'}\`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? 'Close Details' : 'Reveal Express Shipping'}
        </motion.button>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ShippingDeliveryInformation3',
    content: `import React from 'react';
import { motion } from 'framer-motion';

export default function ShippingDeliveryInformation3({ data }: { data: any }) {
  // Infinite marquee text
  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-[#E5F5E0] flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl font-black text-[#1A4D2E] mb-4 uppercase tracking-tighter">Delivery Updates</h2>
        <p className="text-[#4F6F52] font-medium text-lg">Always moving, just like your packages.</p>
      </div>

      <div className="w-full bg-[#1A4D2E] py-4 -mx-8 rotate-[-2deg] overflow-hidden shadow-2xl relative z-0">
        <motion.div 
          className="whitespace-nowrap flex items-center gap-8 text-[#E5F5E0] font-black text-3xl uppercase tracking-widest"
          variants={marqueeVariants}
          animate="animate"
        >
          <span>FAST SHIPPING</span>
          <span className="text-[#4F6F52]">•</span>
          <span>FREE RETURNS</span>
          <span className="text-[#4F6F52]">•</span>
          <span>GLOBAL DELIVERY</span>
          <span className="text-[#4F6F52]">•</span>
          <span>CARBON NEUTRAL</span>
          <span className="text-[#4F6F52]">•</span>
          
          {/* Duplicate for seamless loop */}
          <span>FAST SHIPPING</span>
          <span className="text-[#4F6F52]">•</span>
          <span>FREE RETURNS</span>
          <span className="text-[#4F6F52]">•</span>
          <span>GLOBAL DELIVERY</span>
          <span className="text-[#4F6F52]">•</span>
          <span>CARBON NEUTRAL</span>
          <span className="text-[#4F6F52]">•</span>
        </motion.div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ShippingDeliveryInformation4',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ShippingDeliveryInformation4({ data }: { data: any }) {
  const [selected, setSelected] = useState(0);
  
  const regions = [
    { name: 'North America', time: '3-5 Days', cost: 'Free over $50' },
    { name: 'Europe', time: '5-7 Days', cost: '$15 Flat Rate' },
    { name: 'Asia Pacific', time: '7-10 Days', cost: '$25 Flat Rate' }
  ];

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-zinc-50 flex items-center justify-center">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-black text-zinc-900 mb-8 uppercase tracking-tighter leading-none">Shipping<br/>Destinations</h2>
          <div className="space-y-4">
            {regions.map((region, i) => (
              <div 
                key={i}
                onClick={() => setSelected(i)}
                className={\`cursor-pointer border-b-2 py-4 transition-colors duration-300 \${selected === i ? 'border-zinc-900' : 'border-zinc-200 hover:border-zinc-400'}\`}
              >
                <h3 className={\`text-2xl font-bold \${selected === i ? 'text-zinc-900' : 'text-zinc-400'}\`}>
                  {region.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-zinc-900 text-white p-12 rounded-[2rem] h-full flex flex-col justify-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selected}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-zinc-400 font-bold uppercase tracking-widest mb-2">Estimated Time</div>
              <div className="text-5xl font-black mb-12">{regions[selected].time}</div>
              
              <div className="text-zinc-400 font-bold uppercase tracking-widest mb-2">Shipping Cost</div>
              <div className="text-4xl font-light">{regions[selected].cost}</div>
            </motion.div>
          </AnimatePresence>
          
          <motion.div 
            className="absolute -right-20 -bottom-20 text-[20rem] font-black text-zinc-800/50 leading-none pointer-events-none select-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            key={\`bg-\${selected}\`}
            transition={{ duration: 0.5 }}
          >
            {selected + 1}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ShippingDeliveryInformation5',
    content: `import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ShippingDeliveryInformation5({ data }: { data: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-indigo-950 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4">Route Tracking</h2>
        <p className="text-indigo-200">Watch your package travel the globe.</p>
      </div>

      <div ref={ref} className="relative w-full max-w-2xl h-64 border-b border-indigo-500/30">
        {/* Animated Arc */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <motion.path
            d="M 10 250 Q 300 0 600 250"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4"
            strokeDasharray="10 10"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Animated Package */}
        <motion.div 
          className="absolute w-8 h-8 bg-white rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.5)] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
          initial={{ offsetDistance: "0%" } as any}
          animate={isInView ? { offsetDistance: "100%" } as any : { offsetDistance: "0%" } as any}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ 
            offsetPath: "path('M 10 250 Q 300 0 600 250')",
          } as any}
        >
          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping" />
        </motion.div>
      </div>
      
      <div className="w-full max-w-2xl flex justify-between text-indigo-300 font-medium mt-4 px-4">
        <span>Warehouse</span>
        <span>Your Door</span>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ShippingDeliveryInformation6',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box } from 'lucide-react';

export default function ShippingDeliveryInformation6({ data }: { data: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-amber-100 flex flex-col items-center justify-center perspective-1000">
      <motion.div 
        className="w-full max-w-sm bg-white p-12 rounded-3xl shadow-xl flex flex-col items-center text-center cursor-pointer relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ rotateX: isHovered ? 10 : 0, scale: isHovered ? 1.05 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div 
          className="w-24 h-24 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden"
        >
          <motion.div 
            className="absolute inset-0 bg-amber-500 origin-bottom"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <Box 
            size={40} 
            className={\`relative z-10 transition-colors duration-300 \${isHovered ? 'text-white' : 'text-amber-500'}\`} 
          />
        </motion.div>
        
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Unboxing Experience</h3>
        <p className="text-slate-500">
          Your order arrives in eco-friendly, premium packaging designed to protect and impress.
        </p>
        
        <motion.div 
          className="absolute inset-x-0 bottom-0 h-1 bg-amber-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
}
`
  },
  {
    name: 'ShippingDeliveryInformation7',
    content: `import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, PackageSearch, Truck, Home } from 'lucide-react';

export default function ShippingDeliveryInformation7({ data }: { data: any }) {
  const steps = [
    { icon: ShoppingCart, title: "Order Placed", time: "Day 1" },
    { icon: PackageSearch, title: "Processing", time: "Day 1-2" },
    { icon: Truck, title: "In Transit", time: "Day 3-5" },
    { icon: Home, title: "Delivered", time: "Day 5-7" }
  ];

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-slate-50 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-800">The Delivery Journey</h2>
        
        <div className="flex flex-col md:flex-row justify-between items-center relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 hidden md:block z-0" />
          <motion.div 
            className="absolute top-1/2 left-0 right-0 h-1 bg-blue-500 -translate-y-1/2 hidden md:block z-0 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              className="relative z-10 flex flex-col items-center mb-8 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-16 h-16 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center mb-4 shadow-lg text-slate-400"
                whileInView={{ borderColor: "#3b82f6", color: "#3b82f6" }}
                transition={{ duration: 0.3, delay: (i * 0.5) + 0.2 }}
                viewport={{ once: true }}
              >
                <step.icon size={24} />
              </motion.div>
              <h4 className="font-bold text-slate-800">{step.title}</h4>
              <span className="text-sm font-medium text-slate-500">{step.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ShippingDeliveryInformation8',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ShippingDeliveryInformation8({ data }: { data: any }) {
  const [zip, setZip] = useState('');
  const [calculating, setCalculating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zip) return;
    
    setCalculating(true);
    setResult(null);
    
    setTimeout(() => {
      setCalculating(false);
      setResult("Arrives by Friday, Oct 24 - Free Shipping");
    }, 1500);
  };

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-emerald-900 flex flex-col items-center justify-center text-white relative overflow-hidden">
      <motion.div 
        className="w-full max-w-md bg-emerald-950/50 backdrop-blur-md p-8 rounded-3xl border border-emerald-800/50 shadow-2xl relative z-10"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-2">Estimate Delivery</h2>
        <p className="text-emerald-300/70 mb-6 text-sm">Enter your zip code to see delivery dates and costs.</p>
        
        <form onSubmit={handleCalculate} className="flex gap-2 mb-4">
          <input 
            type="text" 
            placeholder="Zip Code" 
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="flex-1 bg-emerald-900/50 border border-emerald-700 rounded-xl px-4 py-3 text-white placeholder-emerald-500 focus:outline-none focus:border-emerald-400 transition-colors"
          />
          <motion.button 
            type="submit"
            className="bg-emerald-500 text-emerald-950 font-bold px-6 py-3 rounded-xl disabled:opacity-50"
            disabled={calculating || !zip}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {calculating ? (
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-5 h-5 border-2 border-emerald-950 border-t-transparent rounded-full"
              />
            ) : "Check"}
          </motion.button>
        </form>
        
        <div className="h-12 flex items-center justify-center">
          {result && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-emerald-300 font-medium text-sm flex items-center gap-2 bg-emerald-900/50 px-4 py-2 rounded-lg"
            >
              🎉 {result}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
`
  },
  {
    name: 'ShippingDeliveryInformation9',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';

export default function ShippingDeliveryInformation9({ data }: { data: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="p-8 min-h-[400px] rounded-3xl bg-sky-100 flex items-center justify-center relative overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* City Skyline Background */}
      <div className="absolute bottom-0 w-full flex justify-center space-x-1 opacity-20 pointer-events-none">
        <div className="w-8 h-20 bg-sky-900 rounded-t-sm" />
        <div className="w-12 h-32 bg-sky-900 rounded-t-sm" />
        <div className="w-10 h-24 bg-sky-900 rounded-t-sm" />
        <div className="w-16 h-40 bg-sky-900 rounded-t-sm" />
        <div className="w-8 h-16 bg-sky-900 rounded-t-sm" />
      </div>

      {/* Road */}
      <div className="absolute bottom-10 w-full h-1 bg-sky-900/30">
        <motion.div 
          className="w-full h-full border-t-2 border-dashed border-sky-100"
          animate={{ x: isHovered ? -20 : 0 }}
          transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        <motion.div 
          className="mb-8 text-sky-600"
          animate={{ 
            x: isHovered ? [0, 50, -50, 0] : 0,
            y: isHovered ? [0, -5, 0, -5, 0] : 0
          }}
          transition={{ 
            x: { duration: 3, ease: "easeInOut", repeat: Infinity },
            y: { duration: 0.5, repeat: Infinity }
          }}
        >
          <Truck size={80} strokeWidth={1.5} />
        </motion.div>
        
        <h2 className="text-4xl font-bold text-sky-950 mb-2">Always on the move</h2>
        <p className="text-sky-800/60 font-medium">Hover to hit the gas. We dispatch orders 7 days a week.</p>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ShippingDeliveryInformation10',
    content: `import React from 'react';
import { motion } from 'framer-motion';

export default function ShippingDeliveryInformation10({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-900 flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Transparent Logistics</h2>
        <p className="text-neutral-400">Everything you need to know, printed clearly.</p>
      </div>

      <div className="relative">
        {/* Envelope Top */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-72 h-8 bg-neutral-800 rounded-t-xl z-20 border-b border-neutral-700" />
        
        {/* Animated Receipt */}
        <motion.div 
          className="w-64 bg-yellow-50 p-6 shadow-2xl relative z-10 mx-auto border-t-4 border-b-4 border-dashed border-neutral-300"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 20, opacity: 1 }}
          transition={{ type: "spring", damping: 12, delay: 0.2 }}
          viewport={{ once: true, margin: "-20%" }}
        >
          <div className="flex justify-between items-center border-b border-neutral-300 pb-4 mb-4">
            <span className="font-mono text-sm font-bold">PACKING SLIP</span>
            <span className="font-mono text-xs text-neutral-500">#ORD-992</span>
          </div>
          
          <div className="space-y-3 font-mono text-sm">
            <div className="flex justify-between">
              <span className="text-neutral-600">Handling</span>
              <span className="font-bold">0.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600">Standard</span>
              <span className="font-bold">4.99</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600">Express</span>
              <span className="font-bold">14.99</span>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-neutral-300">
            <div className="w-full h-8 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e9/UPC-A-036000291452.svg')] bg-contain bg-no-repeat bg-center opacity-50 mix-blend-multiply" />
          </div>
        </motion.div>
        
        {/* Envelope Bottom */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 h-32 bg-neutral-800 rounded-xl z-30 shadow-2xl flex items-center justify-center border border-neutral-700">
          <div className="w-12 h-12 rounded-full border-2 border-neutral-600 flex items-center justify-center rotate-12 opacity-50">
            <span className="text-xs font-bold text-neutral-500">SEAL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
`
  }
];

components.forEach(comp => {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'sections', 'product', '12-shipping-delivery-information', 'shipping-delivery-information-' + comp.name.replace('ShippingDeliveryInformation', ''), comp.name + '.tsx');
  
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, comp.content, 'utf-8');
  console.log('Updated ' + comp.name);
});
