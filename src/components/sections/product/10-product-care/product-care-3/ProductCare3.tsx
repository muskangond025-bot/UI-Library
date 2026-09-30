import React, { useState } from 'react';
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
            className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === i ? 'text-blue-900' : 'text-blue-200 hover:text-white'}`}
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
