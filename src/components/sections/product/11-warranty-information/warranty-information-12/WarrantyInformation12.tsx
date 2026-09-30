import React from 'react';
import { motion } from 'framer-motion';

export default function WarrantyInformation12({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-zinc-950 flex flex-col items-center justify-center text-white overflow-hidden">
      <h2 className="text-4xl font-bold mb-12">Claim Progress</h2>
      
      <div className="w-full max-w-3xl space-y-12">
        {[
          { label: "Submitted", status: "Done" },
          { label: "In Review", status: "Done" },
          { label: "Approved", status: "Active" },
          { label: "Resolved", status: "Pending" }
        ].map((step, i) => (
          <div key={i} className="relative">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xl font-medium text-zinc-300">{step.label}</span>
              <span className={`text-sm font-bold uppercase ${step.status === 'Active' ? 'text-amber-400' : 'text-zinc-600'}`}>
                {step.status}
              </span>
            </div>
            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden relative">
              <motion.div 
                className={`h-full ${step.status === 'Pending' ? 'bg-transparent' : 'bg-amber-400'}`}
                initial={{ width: "0%" }}
                whileInView={{ 
                  width: step.status === 'Done' ? "100%" : (step.status === 'Active' ? "45%" : "0%") 
                }}
                transition={{ duration: 1.5, delay: i * 0.4, ease: "easeOut" }}
                viewport={{ once: true, margin: "-10%" }}
              />
              {step.status === 'Active' && (
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-white/50 w-20 rounded-full blur-[2px]"
                  initial={{ x: "-100px" }}
                  animate={{ x: "600px" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
