import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReturnRefundInformation15({ data }: { data: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { title: "How long do I have to return?", content: "You have 60 days from the date of delivery to return any unused, unwashed items in their original packaging." },
    { title: "Do I have to pay for shipping?", content: "No! All domestic returns are completely free. We provide a prepaid shipping label instantly." },
    { title: "When will I get my refund?", content: "Refunds are issued to your original payment method within 24 hours of the carrier scanning your return package." }
  ];

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-100 flex flex-col items-center py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-neutral-900">Origami FAQs</h2>
      </div>

      <div className="w-full max-w-2xl space-y-4 perspective-[1000px]">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div 
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-200 cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              initial={false}
              animate={{ 
                rotateX: isOpen ? 0 : 5, 
                backgroundColor: isOpen ? "#ffffff" : "#fafafa",
                transformOrigin: "top"
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="p-6 font-bold text-lg text-neutral-900 flex justify-between items-center">
                {faq.title}
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>↓</motion.span>
              </div>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, rotateX: -90 }}
                    animate={{ height: "auto", opacity: 1, rotateX: 0 }}
                    exit={{ height: 0, opacity: 0, rotateX: -90 }}
                    transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                    className="origin-top bg-neutral-50 border-t border-neutral-100"
                  >
                    <div className="p-6 text-neutral-600 leading-relaxed">
                      {faq.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
