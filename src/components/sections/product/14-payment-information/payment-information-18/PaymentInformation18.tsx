import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function PaymentInformation18({ data }: { data: any }) {
  const [step, setStep] = useState(0);

  const steps = [
    { date: "Today", amount: "$50.00", status: "Paid" },
    { date: "Oct 15", amount: "$50.00", status: "Upcoming" },
    { date: "Oct 29", amount: "$50.00", status: "Upcoming" },
    { date: "Nov 12", amount: "$50.00", status: "Upcoming" },
  ];

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-neutral-100 flex flex-col items-center justify-center relative cursor-pointer" onClick={() => setStep(s => (s + 1) % 5)}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-neutral-800">Installment Timeline</h2>
        <p className="text-neutral-500">Click to advance the timeline simulation.</p>
      </div>

      <div className="relative border-l-4 border-neutral-300 py-4 ml-4 space-y-12">
        {steps.map((s, i) => {
          const isActive = i < step;
          const isCurrent = i === step;

          return (
            <div key={i} className="relative pl-8">
              {/* Node */}
              <motion.div 
                className={`absolute -left-[14px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 ${isActive ? 'bg-emerald-500 border-emerald-200' : isCurrent ? 'bg-blue-500 border-blue-200 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-white border-neutral-300'}`}
                animate={{ scale: isCurrent ? 1.2 : 1 }}
              />
              
              <div className={`transition-colors duration-500 ${isActive ? 'opacity-50' : isCurrent ? 'opacity-100' : 'opacity-40'}`}>
                <div className="font-bold text-sm text-neutral-400 uppercase tracking-widest">{s.date}</div>
                <div className="text-3xl font-black text-neutral-900">{s.amount}</div>
                <div className={`text-sm font-bold ${isActive ? 'text-emerald-600' : isCurrent ? 'text-blue-600' : 'text-neutral-500'}`}>
                  {isActive ? 'Successfully Charged' : isCurrent ? 'Next Payment' : 'Scheduled'}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
