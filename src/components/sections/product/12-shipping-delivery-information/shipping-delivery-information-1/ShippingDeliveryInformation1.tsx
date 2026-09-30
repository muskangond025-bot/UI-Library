import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Globe, MapPin } from 'lucide-react';

export default function ShippingDeliveryInformation1({ data }: { data: any }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-slate-900 text-white flex flex-col items-center justify-center overflow-hidden relative">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        className="w-full max-w-4xl relative z-10"
      >
        <div className="text-center mb-16">
          <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Global Shipping
          </motion.h2>
          <motion.p variants={item} className="text-slate-400 max-w-lg mx-auto">
            Fast, reliable delivery to over 200 countries worldwide. Track your package every step of the way.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Package, title: "Processing", desc: "1-2 Business Days" },
            { icon: Truck, title: "Domestic", desc: "2-5 Business Days" },
            { icon: Globe, title: "International", desc: "7-14 Business Days" },
            { icon: MapPin, title: "Tracking", desc: "Real-time updates" }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              variants={item}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-slate-800 transition-colors cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-slate-700/50 rounded-xl flex items-center justify-center mb-4 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-slate-200 mb-1">{feature.title}</h3>
              <p className="text-sm text-slate-500">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
