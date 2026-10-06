import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, ShoppingBag, Heart, Award, Star, ChevronLeft, ChevronRight, Check } from 'lucide-react';

const mockSteps = [
  {
    id: 1,
    key: 'profile',
    title: 'Profile Identity',
    subtitle: 'Alex Morgan • VIP Platinum Member',
    icon: User,
    content: {
      headline: 'Alex Morgan',
      email: 'alex.morgan@example.com',
      memberSince: 'March 2024',
      location: 'New York, USA',
      status: 'Verified Account (100% Security Score)',
    }
  },
  {
    id: 2,
    key: 'orders',
    title: 'Recent Orders',
    subtitle: '3 Shipments • 1 In Transit Today',
    icon: ShoppingBag,
    content: {
      orderId: '#DH-9941',
      item: 'Architectural Silk Trench & Leather Tote',
      status: 'Out for Delivery (ETA 4:30 PM)',
      total: '$420.00',
    }
  },
  {
    id: 3,
    key: 'wishlist',
    title: 'Wishlist Items',
    subtitle: '14 Saved Products • 4 Price Drops',
    icon: Heart,
    content: {
      count: '14 Products Saved',
      topItem: 'Minimalist Wool Blazer ($180 - Was $220)',
      alert: '2 Items Back in Stock',
    }
  },
  {
    id: 4,
    key: 'rewards',
    title: 'Rewards & Tier',
    subtitle: '3,450 Points • $35 Credit Available',
    icon: Award,
    content: {
      points: '3,450 Platinum Points',
      credit: '$35 Redeemable Voucher',
      perk: 'Free Worldwide Express Courier',
    }
  },
  {
    id: 5,
    key: 'reviews',
    title: 'Ratings & Reviews',
    subtitle: '9 Reviews Published • 4.9 ★ Rating',
    icon: Star,
    content: {
      rating: '4.9 Star Rating Average',
      reviews: '9 Verified Product Reviews',
      badge: 'Top Helpful Contributor',
    }
  }
];

export const AccountOverview11: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const activeStepData = mockSteps.find(s => s.id === currentStep)!;

  return (
    <div className="w-full bg-[#0e1017] text-neutral-100 min-h-[750px] p-6 sm:p-10 font-sans border border-neutral-800 rounded-3xl flex flex-col justify-between">
      {/* Header */}
      <div className="pb-6 border-b border-neutral-800">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">HORIZONTAL STEPPER JOURNEY</span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">Account Navigation Journey</h1>
      </div>

      {/* Horizontal Step Progress Bar */}
      <div className="my-8 overflow-x-auto pb-4">
        <div className="flex items-center justify-between min-w-[650px] relative">
          {/* Progress Line */}
          <div className="absolute top-5 left-8 right-8 h-0.5 bg-neutral-800 -z-0">
            <motion.div 
              className="h-full bg-indigo-500"
              animate={{ width: `${((currentStep - 1) / (mockSteps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </div>

          {mockSteps.map((step) => {
            const Icon = step.icon;
            const isPassed = step.id <= currentStep;
            const isCurrent = step.id === currentStep;

            return (
              <button
                key={step.id}
                onClick={() => setCurrentStep(step.id)}
                className="flex flex-col items-center relative z-10 group"
              >
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${isCurrent ? 'bg-indigo-500 text-white ring-4 ring-indigo-500/30 scale-110' : isPassed ? 'bg-indigo-950 text-indigo-300 border border-indigo-700' : 'bg-neutral-900 text-neutral-500 border border-neutral-800'}`}
                >
                  {isPassed && !isCurrent ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                </div>
                <span className={`text-xs mt-2 font-mono ${isCurrent ? 'text-indigo-300 font-bold' : 'text-neutral-400'}`}>
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Slide-In Panel View */}
      <div className="my-4 bg-neutral-900/90 border border-neutral-800 rounded-3xl p-8 min-h-[300px] flex flex-col justify-between relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-500/20 text-indigo-300 rounded-2xl border border-indigo-500/30">
                <activeStepData.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase">STEP 0{activeStepData.id} OF 05</span>
                <h2 className="text-2xl font-bold text-white">{activeStepData.title}</h2>
                <p className="text-xs text-neutral-400 mt-0.5">{activeStepData.subtitle}</p>
              </div>
            </div>

            {/* Dynamic Step Content Showcase */}
            <div className="p-6 bg-neutral-950/80 rounded-2xl border border-neutral-800 space-y-3 font-mono text-sm">
              {Object.entries(activeStepData.content).map(([k, v]) => (
                <div key={k} className="flex justify-between items-center py-1.5 border-b border-neutral-900 last:border-none">
                  <span className="text-neutral-400 capitalize">{k.replace(/([A-Z])/g, ' $1')}:</span>
                  <span className="text-white font-semibold">{v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Step Navigation Controls */}
        <div className="flex justify-between items-center pt-6 border-t border-neutral-800 mt-6">
          <button
            disabled={currentStep === 1}
            onClick={() => setCurrentStep(prev => prev - 1)}
            className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 disabled:opacity-40 text-xs font-mono text-white rounded-full flex items-center gap-2 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          <span className="text-xs font-mono text-neutral-400">Step {currentStep} of 5</span>

          <button
            disabled={currentStep === 5}
            onClick={() => setCurrentStep(prev => prev + 1)}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-xs font-mono text-white rounded-full flex items-center gap-2 transition-colors"
          >
            Next Step <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
