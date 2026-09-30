import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function ProductCare12({ data }) {
  const [items, setItems] = useState([
    { id: 1, text: "Wipe with damp cloth", done: false },
    { id: 2, text: "Apply leather conditioner", done: false },
    { id: 3, text: "Store in dust bag", done: false }
  ]);
  const [error, setError] = useState(false);

  const toggleItem = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  const handleFinish = () => {
    if (items.some(item => !item.done)) {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-slate-50 flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Care Checklist</h2>
        
        <div className="space-y-3 mb-8">
          {items.map(item => (
            <motion.div
              key={item.id}
              layout
              className={`flex items-center p-4 rounded-xl cursor-pointer transition-colors ${item.done ? 'bg-green-50 border border-green-200' : 'bg-slate-50 border border-slate-200 hover:bg-slate-100'}`}
              onClick={() => toggleItem(item.id)}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 ${item.done ? 'bg-green-500 text-white' : 'border-2 border-slate-300'}`}
              >
                <AnimatePresence>
                  {item.done && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <CheckCircle2 size={16} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <span className={`font-medium ${item.done ? 'text-green-700 line-through' : 'text-slate-700'}`}>
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
        
        <motion.button
          className={`w-full py-4 rounded-xl font-bold text-white transition-colors ${items.every(i => i.done) ? 'bg-green-500 hover:bg-green-600' : 'bg-slate-800 hover:bg-slate-900'}`}
          onClick={handleFinish}
          animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          {items.every(i => i.done) ? "All done!" : "Complete all steps"}
        </motion.button>
        
        <AnimatePresence>
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0 }}
              className="mt-4 flex items-center justify-center text-red-500 text-sm font-medium"
            >
              <AlertCircle size={16} className="mr-2" /> Please complete all steps
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
