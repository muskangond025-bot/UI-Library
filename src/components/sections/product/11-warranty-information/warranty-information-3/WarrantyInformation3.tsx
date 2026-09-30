import React, { useState } from 'react';
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
              className={`flex-1 py-4 text-sm font-medium z-10 transition-colors ${activeTab === i ? 'text-blue-900' : 'text-blue-200 hover:text-white'}`}
            >
              {tab.title}
            </button>
          ))}
          <motion.div
            className="absolute top-1 bottom-1 w-[calc(33.33%-4px)] bg-white rounded-xl shadow-sm z-0"
            initial={false}
            animate={{ left: `calc(${activeTab * 33.33}% + 2px)` }}
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
