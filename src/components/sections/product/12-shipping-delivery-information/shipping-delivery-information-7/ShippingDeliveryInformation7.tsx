import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, PackageSearch, Truck, Home } from 'lucide-react';

export default function ShippingDeliveryInformation7({ data }: { data: any }) {
  const steps = [
    { icon: ShoppingCart, title: "Order Placed", time: "Day 1" },
    { icon: PackageSearch, title: "Processing", time: "Day 1-2" },
    { icon: Truck, title: "In Transit", time: "Day 3-5" },
    { icon: Home, title: "Delivered", time: "Day 5-7" }
  ];

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-slate-50 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-800">The Delivery Journey</h2>
        
        <div className="flex flex-col md:flex-row justify-between items-center relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 hidden md:block z-0" />
          <motion.div 
            className="absolute top-1/2 left-0 right-0 h-1 bg-blue-500 -translate-y-1/2 hidden md:block z-0 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              className="relative z-10 flex flex-col items-center mb-8 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-16 h-16 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center mb-4 shadow-lg text-slate-400"
                whileInView={{ borderColor: "#3b82f6", color: "#3b82f6" }}
                transition={{ duration: 0.3, delay: (i * 0.5) + 0.2 }}
                viewport={{ once: true }}
              >
                <step.icon size={24} />
              </motion.div>
              <h4 className="font-bold text-slate-800">{step.title}</h4>
              <span className="text-sm font-medium text-slate-500">{step.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
