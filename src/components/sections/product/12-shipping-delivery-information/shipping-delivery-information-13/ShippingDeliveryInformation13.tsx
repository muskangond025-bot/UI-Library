import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Truck, Package, Clock } from 'lucide-react';

export default function ShippingDeliveryInformation13({ data }: { data: any }) {
  const events = [
    { icon: CheckCircle2, title: "Order Confirmed", time: "10:24 AM", active: true },
    { icon: Package, title: "Packed & Ready", time: "2:15 PM", active: true },
    { icon: Truck, title: "Out for Delivery", time: "Today", active: true },
    { icon: Clock, title: "Estimated Arrival", time: "4:00 PM", active: false }
  ];

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-zinc-50 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">
        <h2 className="text-2xl font-bold text-zinc-800 mb-8">Tracking Details</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-zinc-100" />
          
          {events.map((event, i) => (
            <motion.div 
              key={i}
              className="relative z-10 flex items-start mb-8 last:mb-0"
              initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 mr-4 shadow-sm ${event.active ? 'bg-zinc-900 text-white' : 'bg-white border-2 border-zinc-200 text-zinc-300'}`}>
                <event.icon size={20} />
              </div>
              <div className="pt-2">
                <h4 className={`font-bold ${event.active ? 'text-zinc-800' : 'text-zinc-400'}`}>{event.title}</h4>
                <p className="text-sm font-medium text-zinc-500">{event.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
