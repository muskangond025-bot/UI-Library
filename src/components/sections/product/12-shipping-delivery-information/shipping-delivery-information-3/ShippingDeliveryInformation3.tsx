import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Feather } from 'lucide-react';

export default function ShippingDeliveryInformation3({ data }: { data: any }) {
  const settings = data?.section?.settings || {};

  return (
    <div className="w-full py-20 px-6 md:px-12 bg-amber-50/50 text-stone-900 rounded-3xl overflow-hidden relative border border-amber-200/60 font-serif">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-sans text-xs tracking-[0.3em] text-amber-800 uppercase block mb-4">
            {settings.eyebrow || 'EDITORIAL SHIPPING STORY'}
          </span>
          <h2 className="text-4xl md:text-7xl font-light italic tracking-tight text-stone-900 mb-6 leading-tight">
            "{settings.title || 'Delivered with care.'}"
          </h2>
          <p className="font-sans text-stone-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto italic">
            {settings.description || 'Every piece is hand-wrapped in eco-friendly protective linen paper, sealed with bespoke wax, and transported in climate-stabilized shipping vaults.'}
          </p>
        </motion.div>

        {/* Editorial Story Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-sans border-t border-amber-200/80 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 mb-4">
              <Feather className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl text-stone-900 font-medium italic">Artisanal Packaging</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We eliminate single-use plastics in favor of biodegradable organic cotton sleeves and recycled custom cardboard.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl text-stone-900 font-medium italic">Full Transit Insurance</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Complementary white-glove coverage on every package, ensuring immediate replacement or refund in any event.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-3"
          >
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl text-stone-900 font-medium italic">Carbon-Neutral Journey</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              100% of carbon emissions generated during air and ground transportation are offset through certified reforestation projects.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
