import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';

export function AccountLoyaltyRewards14() {
  const steps = [
    { title: 'Earned 2,000 Points', desc: 'Completed online shopping milestones', status: 'Completed' },
    { title: 'Unlocked Silver Tier', desc: 'Achieved tier status privileges', status: 'Completed' },
    { title: 'Redeem $25 Voucher', desc: 'Ready to use on next order', status: 'Active' },
    { title: 'Gold Status Unlock', desc: 'Target at 3,000 Points', status: 'Upcoming' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Progression Path</span>
          <h2 className="text-3xl font-extrabold text-white">Reward Lifecycle Timeline</h2>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative space-y-1"
            >
              <div className={'absolute -left-[31px] sm:-left-[39px] top-0 w-6 h-6 rounded-full flex items-center justify-center ' + (step.status === 'Completed' ? 'bg-indigo-500 text-white' : step.status === 'Active' ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-600')}>
                {step.status === 'Completed' ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
              </div>

              <h4 className="font-bold text-white text-lg">{step.title}</h4>
              <p className="text-xs text-slate-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards14;
