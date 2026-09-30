import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, AlertTriangle, CheckCircle } from 'lucide-react';

export default function ProductCare5({ data }) {
  const cards = [
    { icon: <CheckCircle />, title: "Do's", items: ["Regular dusting", "Use mild soap", "Dry immediately"] },
    { icon: <AlertTriangle />, title: "Don'ts", items: ["Abrasive sponges", "Bleach", "Prolonged soaking"] }
  ];

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-emerald-950 flex items-center justify-center gap-8 flex-wrap">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className="bg-emerald-900/50 p-8 rounded-2xl border border-emerald-800/50 w-full max-w-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
        >
          <div className="text-emerald-400 mb-4 h-12 w-12 bg-emerald-950 rounded-full flex items-center justify-center">
            {card.icon}
          </div>
          <h3 className="text-2xl font-semibold text-emerald-50 mb-6">{card.title}</h3>
          <ul className="space-y-3 text-emerald-200/80">
            {card.items.map((item, j) => (
              <li key={j} className="flex items-center">
                <span className="mr-2 text-emerald-500">•</span> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
