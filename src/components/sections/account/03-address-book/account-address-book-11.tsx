import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Plus, ChevronLeft, ChevronRight, Check } from 'lucide-react';

const mockSteps = [
  {
    id: 1,
    title: 'Primary Penthouse',
    subtitle: 'New York, NY 10001 • Default Location',
    icon: MapPin,
    content: {
      recipient: 'Alex Morgan',
      street: '450 Fashion Avenue, Penthouse 14B',
      city: 'New York, NY 10001',
      country: 'United States',
      phone: '+1 (212) 555-0192',
      doorman: '24/7 Doorman Active (Chime #14B)',
    }
  },
  {
    id: 2,
    title: 'Design Studio HQ',
    subtitle: 'Brooklyn, NY 11211 • Commercial Dispatch',
    icon: Navigation,
    content: {
      recipient: 'Alex Morgan // Studio',
      street: '88 Wythe Avenue, Suite 402',
      city: 'Brooklyn, NY 11211',
      country: 'United States',
      phone: '+1 (718) 555-0144',
      doorman: 'Freight Elevator Passcode #4902',
    }
  },
  {
    id: 3,
    title: 'Hamptons Retreat',
    subtitle: 'East Hampton, NY 11937 • Seasonal Villa',
    icon: MapPin,
    content: {
      recipient: 'Alex Morgan',
      street: '142 Ocean Drive',
      city: 'East Hampton, NY 11937',
      country: 'United States',
      phone: '+1 (631) 555-0811',
      doorman: 'Side porch delivery if gate open',
    }
  },
  {
    id: 4,
    title: 'Add New Destination',
    subtitle: 'Register New Shipping Location',
    icon: Plus,
    content: {
      recipient: 'Create New Entry',
      street: 'Enter Street Address',
      city: 'Enter City, State & Zip',
      country: 'Select Country',
      phone: 'Enter Contact Phone',
      doorman: 'Add Special Courier Instructions',
    }
  }
];

export const AccountAddressBook11: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const activeStepData = mockSteps.find(s => s.id === currentStep)!;

  return (
    <div className="w-full bg-[#0e1017] text-neutral-100 min-h-[750px] p-6 sm:p-10 font-sans border border-neutral-800 rounded-3xl flex flex-col justify-between">
      {/* Header */}
      <div className="pb-6 border-b border-neutral-800">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">HORIZONTAL ROUTING JOURNEY</span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">Destination Stepper Navigation</h1>
      </div>

      {/* Step Progress Track */}
      <div className="my-8 overflow-x-auto pb-4">
        <div className="flex items-center justify-between min-w-[650px] relative">
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

      {/* Main Slide Panel View */}
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
                <span className="text-xs font-mono text-indigo-400 uppercase">DESTINATION 0{activeStepData.id} OF 04</span>
                <h2 className="text-2xl font-bold text-white">{activeStepData.title}</h2>
                <p className="text-xs text-neutral-400 mt-0.5">{activeStepData.subtitle}</p>
              </div>
            </div>

            {/* Step Detail Data */}
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
            <ChevronLeft className="w-4 h-4" /> Previous Location
          </button>

          <span className="text-xs font-mono text-neutral-400">Step {currentStep} of 4</span>

          <button
            disabled={currentStep === 4}
            onClick={() => setCurrentStep(prev => prev + 1)}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-xs font-mono text-white rounded-full flex items-center gap-2 transition-colors"
          >
            Next Location <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
