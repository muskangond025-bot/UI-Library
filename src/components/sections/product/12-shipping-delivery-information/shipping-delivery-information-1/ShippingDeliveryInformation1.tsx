import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Package, Truck, Home, Clock } from 'lucide-react';

export default function ShippingDeliveryInformation1({ data }: { data: any }) {
  const settings = data?.section?.settings || {
    eyebrow: "ORDER FULFILLMENT JOURNEY",
    title: "Delivery Timeline & Process",
    description: "Follow your order from our fulfillment warehouse directly to your doorstep in 4 clear stages.",
    timelineSteps: [
      { id: "01", stage: "Order Placed", time: "Instant Confirmation", desc: "Payment verified and order queued for warehouse pick." },
      { id: "02", stage: "Processing & Packing", time: "12–24 Hours", desc: "Items quality inspected and securely eco-packed." },
      { id: "03", stage: "In Transit", time: "2–4 Business Days", desc: "Handed to courier with active real-time GPS tracking." },
      { id: "04", stage: "Delivered", time: "Estimated Day 5", desc: "Safe delivery with doorstep photo verification." }
    ]
  };

  const icons = [CheckCircle2, Package, Truck, Home];

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-slate-950 text-white rounded-3xl overflow-hidden relative border border-slate-800">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            {settings.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {settings.title}
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            {settings.description}
          </p>
        </div>

        {/* Visual Progressive Timeline Container */}
        <div className="relative pt-4 pb-8">
          {/* Animated Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-slate-800 rounded-full z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {(settings.timelineSteps || settings.processSteps || [
              { id: "01", stage: "Order Placed", time: "Instant Confirmation", desc: "Payment verified and order queued for pick." },
              { id: "02", stage: "Processing & Packing", time: "12–24 Hours", desc: "Items quality inspected and securely packed." },
              { id: "03", stage: "In Transit", time: "2–4 Business Days", desc: "Handed to courier with active real-time tracking." },
              { id: "04", stage: "Delivered", time: "Estimated Day 5", desc: "Safe delivery with doorstep photo verification." }
            ]).map((step: any, idx: number) => {
              const StepIcon = icons[idx % icons.length];
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.3 }}
                  className="flex flex-col items-center text-center group"
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-slate-900 border-2 border-slate-700 group-hover:border-blue-500 flex items-center justify-center text-blue-400 shadow-xl transition-all duration-300 mb-6 group-hover:scale-110 group-hover:bg-slate-800"
                    whileHover={{ rotate: 5 }}
                  >
                    <StepIcon className="w-7 h-7" />
                  </motion.div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-2 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>{step.time}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {step.stage}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
