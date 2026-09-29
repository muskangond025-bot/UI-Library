import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { id: "01", title: "Build", desc: "Construct robust systems with our intuitive drag-and-drop interface." },
  { id: "02", title: "Scale", desc: "Deploy globally with a single click to edge networks." },
  { id: "03", title: "Analyze", desc: "Gain deep insights with real-time telemetry and metrics." }
];

export default function ProductFeatures15({ data }: { data: any }) {
  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row">
        
        {/* Sticky Left Sidebar */}
        <div className="md:w-1/3 relative">
          <div className="sticky top-1/2 -translate-y-1/2 h-[300px] flex items-center">
            <h2 className="text-[12rem] font-black text-neutral-100 leading-none pointer-events-none -ml-4">PRO</h2>
            <div className="absolute inset-0 flex flex-col justify-center gap-4">
              <p className="text-sm font-bold tracking-widest text-blue-600 uppercase">Features</p>
              <h3 className="text-5xl font-black text-black">The new<br/>standard.</h3>
            </div>
          </div>
        </div>

        {/* Right Scrollable Content */}
        <div className="md:w-2/3 mt-24 md:mt-0 pb-32">
          {features.map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ margin: "-100px" }}
              className="mb-48 last:mb-0 relative"
            >
              <div className="absolute -left-8 md:-left-24 top-0 text-3xl font-black text-neutral-300">{feat.id}</div>
              <div className="bg-neutral-50 rounded-[3rem] p-12 md:p-16 border border-neutral-200">
                <h4 className="text-4xl md:text-5xl font-black mb-6">{feat.title}</h4>
                <p className="text-2xl text-neutral-500 font-light">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
