const fs = require('fs');
const path = require('path');

const components = [
  {
    name: 'WarrantyInformation1',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, Shield } from 'lucide-react';

export default function WarrantyInformation1({ data }: { data: any }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Portal Hero Background Effect */}
      <motion.div 
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        animate={{ opacity: hovered ? 1 : 0.5 }}
        transition={{ duration: 1 }}
      />

      <motion.div 
        className="relative z-10 max-w-xl text-center"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <motion.div 
          className="mx-auto w-24 h-24 mb-8 relative"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <div className="absolute inset-0 bg-indigo-500 rounded-full blur-2xl opacity-50 mix-blend-screen" />
          <div className="relative w-full h-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center">
            <Shield className="w-12 h-12 text-indigo-300" />
          </div>
        </motion.div>

        <h2 className="text-4xl font-bold text-white mb-4">Lifetime Coverage</h2>
        <p className="text-neutral-400 mb-8 leading-relaxed">
          Our products are built to last. Enjoy complete peace of mind with our comprehensive lifetime warranty covering all manufacturing defects.
        </p>

        <motion.button 
          className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-neutral-950 rounded-full font-medium overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="absolute inset-0 bg-indigo-100"
            initial={{ x: "100%" }}
            whileHover={{ x: 0 }}
            transition={{ type: "tween", ease: "easeInOut" }}
          />
          <span className="relative flex items-center gap-2">
            View Details 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
}
`
  },
  {
    name: 'WarrantyInformation2',
    content: `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function WarrantyInformation2({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <div ref={containerRef} className="p-8 min-h-[600px] rounded-3xl bg-orange-50 flex items-center justify-center relative overflow-hidden">
      <motion.div 
        style={{ y: y1 }} 
        className="absolute left-10 md:left-32 top-20 text-[10rem] md:text-[15rem] font-black text-orange-900/5 leading-none select-none"
      >
        2
      </motion.div>
      <motion.div 
        style={{ y: y2 }} 
        className="absolute right-10 md:right-32 bottom-20 text-[10rem] md:text-[15rem] font-black text-orange-900/5 leading-none select-none"
      >
        YEARS
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-lg bg-white/60 backdrop-blur-xl p-10 rounded-3xl border border-white shadow-xl text-center">
        <h3 className="text-3xl font-bold text-orange-900 mb-6">Standard Warranty</h3>
        <p className="text-orange-950/70 text-lg leading-relaxed mb-8">
          Every purchase includes a 2-year limited warranty protecting against material and workmanship defects under normal use.
        </p>
        <div className="w-full h-2 bg-orange-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-orange-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
    </div>
  );
}
`
  },
  {
    name: 'WarrantyInformation3',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WarrantyInformation3({ data }: { data: any }) {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { title: "What's Covered", content: "Manufacturing defects, hardware failures, and zipper breakages within the first 3 years." },
    { title: "What's Not", content: "Normal wear and tear, accidental damage, cosmetic blemishes, and improper care." },
    { title: "How to Claim", content: "Submit your receipt and photos through our portal. Claims are processed within 48 hours." }
  ];

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-blue-900 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Warranty Coverage</h2>
        
        <div className="flex bg-blue-950/50 p-1 rounded-2xl mb-8 relative">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={\`flex-1 py-4 text-sm font-medium z-10 transition-colors \${activeTab === i ? 'text-blue-900' : 'text-blue-200 hover:text-white'}\`}
            >
              {tab.title}
            </button>
          ))}
          <motion.div
            className="absolute top-1 bottom-1 w-[calc(33.33%-4px)] bg-white rounded-xl shadow-sm z-0"
            initial={false}
            animate={{ left: \`calc(\${activeTab * 33.33}% + 2px)\` }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        </div>

        <div className="h-32 bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden backdrop-blur-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 p-6 flex items-center justify-center text-center text-blue-100 text-lg"
            >
              {tabs[activeTab].content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'WarrantyInformation4',
    content: `import React from 'react';
import { motion } from 'framer-motion';

export default function WarrantyInformation4({ data }: { data: any }) {
  const text = "100% Satisfaction Guarantee";
  
  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-emerald-50 flex flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-wrap justify-center mb-8 gap-x-2 gap-y-4 max-w-lg">
        {text.split(" ").map((word, i) => (
          <motion.span
            key={i}
            className="text-4xl md:text-5xl font-black text-emerald-900"
            initial={{ opacity: 0, rotateX: -90, y: 20 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: i * 0.15,
              type: "spring",
              damping: 12
            }}
            viewport={{ once: true }}
            style={{ transformOrigin: "bottom" }}
          >
            {word}
          </motion.span>
        ))}
      </div>
      
      <motion.div 
        className="max-w-md text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-emerald-700 font-medium mb-6">
          If you're not completely satisfied with your purchase, return it within 30 days for a full refund. No questions asked.
        </p>
        <motion.button 
          className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-emerald-500/30"
          whileHover={{ scale: 1.05, backgroundColor: "#059669" }}
          whileTap={{ scale: 0.95 }}
        >
          Read Policy
        </motion.button>
      </motion.div>
    </div>
  );
}
`
  },
  {
    name: 'WarrantyInformation5',
    content: `import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Tool, Truck } from 'lucide-react';

export default function WarrantyInformation5({ data }: { data: any }) {
  const steps = [
    { icon: <FileText size={32} />, title: "File Claim", desc: "Submit online form" },
    { icon: <Truck size={32} />, title: "Ship", desc: "Send it to our facility" },
    { icon: <Tool size={32} />, title: "Repair", desc: "We fix or replace it" }
  ];

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-zinc-900 flex flex-col items-center justify-center text-white">
      <h2 className="text-2xl font-bold mb-16">The Repair Process</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-4xl relative">
        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-zinc-800 -z-10" />
        
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center bg-zinc-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="w-20 h-20 bg-zinc-800 border border-zinc-700 rounded-2xl flex items-center justify-center mb-6 text-zinc-300 relative group"
              whileHover={{ y: -5, borderColor: "#a1a1aa" }}
            >
              <motion.div 
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" 
              />
              {step.icon}
            </motion.div>
            <h3 className="font-bold text-lg mb-2">{step.title}</h3>
            <p className="text-zinc-500 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
`
  },
  {
    name: 'WarrantyInformation6',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function WarrantyInformation6({ data }: { data: any }) {
  const [openId, setOpenId] = useState<number | null>(0);
  
  const faqs = [
    { id: 0, q: "Is water damage covered?", a: "No, liquid damage is not covered under the standard warranty unless specifically stated for waterproof products." },
    { id: 1, q: "Do I need the original receipt?", a: "Yes, proof of purchase from an authorized retailer is required for all warranty claims." },
    { id: 2, q: "Does the warranty transfer?", a: "The warranty is only valid for the original purchaser and cannot be transferred to another person." }
  ];

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-slate-50 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Warranty FAQ</h2>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <motion.div 
              key={faq.id}
              className="border border-slate-200 rounded-2xl overflow-hidden"
              initial={false}
              animate={{ backgroundColor: openId === faq.id ? "#f8fafc" : "#ffffff" }}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <span className="font-semibold text-slate-800">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  className="text-slate-500"
                >
                  {openId === faq.id ? <Minus size={20} /> : <Plus size={20} />}
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
    name: 'WarrantyInformation7',
    content: `import React from 'react';
import { motion } from 'framer-motion';

export default function WarrantyInformation7({ data }: { data: any }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20, filter: "blur(5px)" },
    show: { opacity: 1, x: 0, filter: "blur(0px)" }
  };

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-neutral-100 flex items-center justify-center">
      <motion.div 
        className="bg-white p-12 rounded-[2rem] shadow-xl w-full max-w-2xl relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <motion.p variants={itemVariants} className="text-amber-600 font-bold tracking-widest text-sm uppercase mb-4">Terms & Conditions</motion.p>
        <motion.h2 variants={itemVariants} className="text-4xl font-serif text-neutral-900 mb-8">Warranty Details</motion.p>
        
        <div className="space-y-6 relative z-10">
          {[
            'Valid for 12 months from purchase date',
            'Covers hardware defects and workmanship',
            'Requires original proof of purchase',
            'Excludes accidental and cosmetic damage'
          ].map((text, i) => (
            <motion.div key={i} variants={itemVariants} className="flex items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 mr-4 shrink-0" />
              <span className="text-neutral-600 text-lg leading-relaxed">{text}</span>
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
    name: 'WarrantyInformation8',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function WarrantyInformation8({ data }: { data: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-purple-50 flex items-center justify-center overflow-hidden">
      <motion.div 
        className="relative bg-white w-full max-w-md aspect-[4/3] rounded-3xl shadow-lg border border-purple-100 p-8 flex flex-col items-center justify-center cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 rounded-3xl"
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
        
        <div className="relative z-10 text-center">
          <motion.div 
            className="w-20 h-20 mx-auto border-4 border-purple-200 rounded-full flex items-center justify-center mb-6"
            animate={{ 
              borderColor: isHovered ? "#a855f7" : "#e9d5ff",
              rotate: isHovered ? 180 : 0 
            }}
            transition={{ duration: 0.6, ease: "backOut" }}
          >
            <span className="text-3xl font-bold text-purple-900">5</span>
          </motion.div>
          
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Five Year Warranty</h3>
          
          <motion.div 
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-slate-500 mt-4">
              Premium protection for your investment. We guarantee this product will remain free of defects for five full years.
            </p>
          </motion.div>
          
          <motion.div 
            animate={{ opacity: isHovered ? 0 : 1, height: isHovered ? 0 : "auto" }}
            className="text-purple-600 font-medium mt-4"
          >
            Hover to explore
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
`
  },
  {
    name: 'WarrantyInformation9',
    content: `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function WarrantyInformation9({ data }: { data: any }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 0]);

  return (
    <div ref={targetRef} className="p-8 min-h-[600px] rounded-3xl bg-slate-900 flex items-center justify-center perspective-[1000px]">
      <motion.div 
        style={{ scale, opacity, rotateX: rotate }}
        className="w-full max-w-3xl bg-slate-800 p-1 rounded-3xl border border-slate-700 shadow-2xl"
      >
        <div className="bg-slate-900 rounded-[22px] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Global Warranty</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              No matter where you travel, our warranty travels with you. Get support and replacements at any of our 500+ global service centers.
            </p>
            <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-colors">
              Find a Center
            </button>
          </div>
          <div className="w-48 h-48 rounded-full border-[8px] border-slate-800 flex items-center justify-center relative shadow-[0_0_50px_rgba(255,255,255,0.05)]">
            <motion.div 
              className="absolute inset-0 border-t-[8px] border-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <span className="text-white text-4xl">🌍</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
`
  },
  {
    name: 'WarrantyInformation10',
    content: `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WarrantyInformation10({ data }: { data: any }) {
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCertificate(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-teal-950 flex flex-col items-center justify-center relative">
      {!showCertificate && (
        <motion.div 
          className="text-teal-400 flex flex-col items-center"
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <motion.div 
            className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="font-mono text-sm tracking-widest">GENERATING CERTIFICATE...</p>
        </motion.div>
      )}

      <AnimatePresence>
        {showCertificate && (
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-full max-w-xl bg-gradient-to-br from-teal-50 to-white p-1 rounded-2xl shadow-2xl relative"
          >
            <div className="bg-white rounded-xl p-8 border-4 border-double border-teal-100 relative overflow-hidden">
              {/* Seal */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-xs font-bold uppercase tracking-widest opacity-20 rotate-12">
                Valid
              </div>
              
              <h2 className="text-3xl font-serif text-teal-900 mb-2 border-b-2 border-teal-100 pb-4">Certificate of Warranty</h2>
              
              <div className="mt-8 space-y-4 font-mono text-sm text-teal-800/70">
                <div className="flex justify-between border-b border-teal-50 border-dashed pb-2">
                  <span>REGISTRATION NO:</span>
                  <span className="font-bold text-teal-900">#WR-2948-AX</span>
                </div>
                <div className="flex justify-between border-b border-teal-50 border-dashed pb-2">
                  <span>COVERAGE:</span>
                  <span className="font-bold text-teal-900">PREMIUM CARE (2 YRS)</span>
                </div>
                <div className="flex justify-between border-b border-teal-50 border-dashed pb-2">
                  <span>STATUS:</span>
                  <span className="font-bold text-green-600">ACTIVE</span>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-teal-100 flex justify-between items-end">
                <div>
                  <div className="text-xs text-teal-500 mb-1">AUTHORIZED SIGNATURE</div>
                  <div className="font-serif italic text-2xl text-teal-900 opacity-60">John Doe</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {showCertificate && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-teal-300 hover:text-white transition-colors underline underline-offset-4 text-sm"
          onClick={() => {
            setShowCertificate(false);
            setTimeout(() => setShowCertificate(true), 1500);
          }}
        >
          Regenerate Certificate
        </motion.button>
      )}
    </div>
  );
}
`
  }
];

components.forEach(comp => {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'sections', 'product', '11-warranty-information', 'warranty-information-' + comp.name.replace('WarrantyInformation', ''), comp.name + '.tsx');
  
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, comp.content, 'utf-8');
  console.log('Updated ' + comp.name);
});
