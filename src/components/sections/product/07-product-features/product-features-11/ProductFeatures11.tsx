import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Ultra Fast", desc: "No more loading screens." },
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Secure", desc: "Military grade encryption." },
  { icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9", title: "Global", desc: "Servers across 50 regions." },
  { icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", title: "API First", desc: "Extensive developer tools." },
  { icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", title: "Storage", desc: "Unlimited capacity." },
  { icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4", title: "Control", desc: "Granular permissions." }
];

export default function ProductFeatures11({ data }: { data: any }) {
  return (
    <section className="py-32 bg-black min-h-screen flex items-center justify-center overflow-hidden relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-20 tracking-wide">Everything you need.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-neutral-900 border border-white/10 p-10 flex flex-col items-center text-center relative overflow-hidden group hover:border-white/20 transition-colors cursor-default"
            >
              {/* Hover Ripple */}
              <div className="absolute inset-0 bg-blue-500/10 scale-0 group-hover:scale-150 rounded-full transition-transform duration-700 ease-out origin-center opacity-0 group-hover:opacity-100" />
              
              <svg className="w-12 h-12 text-blue-500 mb-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feat.icon} />
              </svg>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">{feat.title}</h3>
              <p className="text-neutral-400 relative z-10">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
