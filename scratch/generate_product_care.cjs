const fs = require('fs');
const path = require('path');

const components = [
  {
    name: 'ProductCare1',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Droplets, Sun, Wind } from 'lucide-react';

export default function ProductCare1({ data }) {
  const [hovered, setHovered] = useState(null);
  
  const careItems = [
    { icon: <Shield size={32} />, title: 'Protection', desc: 'Keep away from sharp objects.' },
    { icon: <Droplets size={32} />, title: 'Cleaning', desc: 'Wipe with a damp cloth.' },
    { icon: <Sun size={32} />, title: 'Storage', desc: 'Store in a cool, dry place.' },
    { icon: <Wind size={32} />, title: 'Ventilation', desc: 'Allow to air out occasionally.' },
  ];

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(50,50,50,0.5),transparent_70%)]" />
      <h2 className="text-3xl font-light text-white mb-12 z-10 tracking-widest">PRODUCT CARE</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-10 w-full max-w-2xl">
        {careItems.map((item, i) => (
          <motion.div
            key={i}
            className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden cursor-pointer"
            onHoverStart={() => setHovered(i)}
            onHoverEnd={() => setHovered(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: hovered === i ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <div className="text-white/80 mb-4">{item.icon}</div>
            <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
            <p className="text-sm text-white/50">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ProductCare2',
    content: `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCare2({ data }) {
  const words = "Handle with Care".split(" ");
  
  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-zinc-100 flex flex-col items-center justify-center overflow-hidden">
      <div className="flex gap-4 mb-12">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2, type: "spring" }}
            viewport={{ once: true }}
          >
            {word}
          </motion.span>
        ))}
      </div>
      
      <motion.div 
        className="w-full max-w-3xl h-1 bg-zinc-300 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="h-full bg-zinc-900"
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        />
      </motion.div>
      
      <motion.div 
        className="mt-12 grid grid-cols-3 gap-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        viewport={{ once: true }}
      >
        <div>
          <h4 className="font-bold text-zinc-900 mb-2">Wash</h4>
          <p className="text-sm text-zinc-500">Machine wash cold, gentle cycle.</p>
        </div>
        <div>
          <h4 className="font-bold text-zinc-900 mb-2">Dry</h4>
          <p className="text-sm text-zinc-500">Tumble dry low or hang to dry.</p>
        </div>
        <div>
          <h4 className="font-bold text-zinc-900 mb-2">Iron</h4>
          <p className="text-sm text-zinc-500">Cool iron if necessary.</p>
        </div>
      </motion.div>
    </div>
  );
}
`
  },
  {
    name: 'ProductCare3',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductCare3({ data }) {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { title: "Routine", content: "Daily care ensures longevity. Dust regularly with a soft, dry cloth." },
    { title: "Deep Clean", content: "Use a specialized cleaner every 3-6 months. Avoid abrasive materials." },
    { title: "Storage", content: "Store in original packaging or a breathable bag. Keep away from direct sunlight." }
  ];

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-blue-900 flex flex-col items-center justify-center text-white">
      <h2 className="text-3xl font-serif mb-8">Maintenance Guide</h2>
      
      <div className="flex gap-4 mb-8 bg-blue-950/50 p-2 rounded-full">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={\`relative px-6 py-2 rounded-full text-sm font-medium transition-colors \${activeTab === i ? 'text-blue-900' : 'text-blue-200 hover:text-white'}\`}
          >
            {activeTab === i && (
              <motion.div 
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-white rounded-full -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {tab.title}
          </button>
        ))}
      </div>
      
      <div className="w-full max-w-xl h-32 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 text-center flex items-center justify-center text-blue-100 text-lg leading-relaxed"
          >
            {tabs[activeTab].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ProductCare4',
    content: `import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ProductCare4({ data }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <div ref={containerRef} className="p-8 min-h-[500px] rounded-3xl bg-gradient-to-br from-orange-100 to-amber-50 overflow-hidden relative flex items-center justify-center">
      <motion.div style={{ y: y1 }} className="absolute left-10 top-20 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-60" />
      <motion.div style={{ y: y2 }} className="absolute right-10 bottom-20 w-48 h-48 bg-amber-300 rounded-full blur-3xl opacity-40" />
      
      <div className="z-10 bg-white/60 backdrop-blur-xl p-10 rounded-2xl border border-white max-w-md w-full shadow-xl">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-orange-900 mb-6"
        >
          Care Instructions
        </motion.h2>
        
        <ul className="space-y-4">
          {[
            "Keep away from direct heat",
            "Do not use chemical solvents",
            "Professional cleaning recommended"
          ].map((item, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="flex items-center text-orange-800"
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-4" />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ProductCare5',
    content: `import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, AlertTriangle, CheckCircle } from 'lucide-react';

export default function ProductCare5({ data }) {
  const cards = [
    { icon: <CheckCircle />, title: "Do's", items: ["Regular dusting", "Use mild soap", "Dry immediately"] },
    { icon: <AlertTriangle />, title: "Don'ts", items: ["Abrasive sponges", "Bleach", "Prolonged soaking"] }
  ];

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-emerald-950 flex items-center justify-center gap-8 flex-wrap">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className="bg-emerald-900/50 p-8 rounded-2xl border border-emerald-800/50 w-full max-w-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
        >
          <div className="text-emerald-400 mb-4 h-12 w-12 bg-emerald-950 rounded-full flex items-center justify-center">
            {card.icon}
          </div>
          <h3 className="text-2xl font-semibold text-emerald-50 mb-6">{card.title}</h3>
          <ul className="space-y-3 text-emerald-200/80">
            {card.items.map((item, j) => (
              <li key={j} className="flex items-center">
                <span className="mr-2 text-emerald-500">•</span> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
`
  },
  {
    name: 'ProductCare6',
    content: `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCare6({ data }) {
  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-gray-50 flex items-center justify-center">
      <div className="relative group cursor-pointer">
        <motion.div 
          className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
        />
        <div className="relative bg-white p-10 rounded-xl ring-1 ring-gray-900/5 leading-none flex items-top justify-start space-x-6 max-w-lg">
          <div className="space-y-6">
            <h2 className="text-slate-800 font-bold text-2xl">Premium Care</h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                Our products are crafted with meticulous attention to detail using premium materials.
              </p>
              <motion.div 
                className="overflow-hidden h-0 group-hover:h-auto"
                initial={false}
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="pt-2 text-slate-500"
                >
                  To maintain the pristine condition, we strongly advise against the use of harsh chemicals. Gently wipe the surface with a microfiber cloth dampened with lukewarm water.
                </motion.p>
              </motion.div>
            </div>
            <div className="pt-4 flex items-center space-x-4 text-sm font-semibold text-purple-600">
              <span className="group-hover:translate-x-2 transition-transform duration-300">Read full guide &rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ProductCare7',
    content: `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCare7({ data }) {
  const steps = [
    { num: "01", text: "Unpack carefully" },
    { num: "02", text: "Assemble parts" },
    { num: "03", text: "Wipe down" },
    { num: "04", text: "Enjoy" }
  ];

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-black text-white flex flex-col justify-center overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 ml-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300">Quick</span> Start
      </h2>
      
      <div className="flex flex-wrap gap-4 px-4">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="flex-1 min-w-[200px] border-t border-gray-800 pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <div className="text-gray-500 font-mono text-sm mb-2">{step.num}</div>
            <div className="text-xl font-medium tracking-wide">{step.text}</div>
            <motion.div 
              className="h-0.5 bg-white mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: i * 0.15 + 0.3, duration: 0.8 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ProductCare8',
    content: `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCare8({ data }) {
  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-indigo-50 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <motion.div 
          className="bg-white p-8 rounded-2xl shadow-sm border border-indigo-100"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="h-12 w-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center text-xl font-bold mb-6">
            !
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Important Warning</h3>
          <p className="text-gray-600">
            Never expose this product to extreme temperatures or high humidity environments for prolonged periods.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-indigo-600 p-8 rounded-2xl shadow-md text-white"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="h-12 w-12 bg-indigo-500 rounded-xl flex items-center justify-center text-xl font-bold mb-6">
            ?
          </div>
          <h3 className="text-xl font-bold mb-4">Need Help?</h3>
          <p className="text-indigo-100 mb-6">
            Our support team is available 24/7 to assist you with any care or maintenance questions.
          </p>
          <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-medium text-sm hover:bg-indigo-50 transition-colors">
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'ProductCare9',
    content: `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCare9({ data }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-neutral-100 flex items-center justify-center">
      <motion.div 
        className="bg-white p-8 md:p-12 rounded-3xl shadow-xl w-full max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-serif text-neutral-800 mb-2">Care & Content</motion.h2>
        <motion.p variants={itemVariants} className="text-neutral-500 mb-8 font-light">Follow these instructions carefully</motion.p>
        
        <div className="space-y-6">
          {['100% Organic Cotton', 'Machine wash max 30°C', 'Do not bleach', 'Iron maximum 110°C'].map((text, i) => (
            <motion.div key={i} variants={itemVariants} className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <span className="text-neutral-700">{text}</span>
              <div className="h-2 w-2 rounded-full bg-neutral-300" />
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
    name: 'ProductCare10',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductCare10({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-rose-50 flex items-center justify-center">
      <motion.div 
        className="bg-white rounded-3xl shadow-lg overflow-hidden w-full max-w-md"
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.div 
          className="p-8 cursor-pointer flex justify-between items-center bg-rose-100/50 hover:bg-rose-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          layout
        >
          <h3 className="text-xl font-bold text-rose-900">Care Instructions</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="text-rose-500"
          >
            ▼
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="px-8 overflow-hidden"
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
            paddingTop: isOpen ? 32 : 0,
            paddingBottom: isOpen ? 32 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-4 text-rose-950/70 text-sm leading-relaxed">
            <p><strong>Step 1:</strong> Prepare the surface by removing any loose debris.</p>
            <p><strong>Step 2:</strong> Apply the cleaning solution evenly across the affected area.</p>
            <p><strong>Step 3:</strong> Let it sit for 5 minutes to break down stains.</p>
            <p><strong>Step 4:</strong> Wipe gently with a circular motion until clean.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
`
  }
];

components.forEach(comp => {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'sections', 'product', '10-product-care', 'product-care-' + comp.name.replace('ProductCare', ''), comp.name + '.tsx');
  
  // Create dir if not exists (though it should based on grep)
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, comp.content, 'utf-8');
  console.log('Updated ' + comp.name);
});
