import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock, ShieldAlert, Globe, PackageCheck, HelpCircle } from 'lucide-react';

export default function ShippingDeliveryInformation10({ data }: { data: any }) {
  const settings = data?.section?.settings || {};

  const accordionItems = [
    {
      id: "acc-1",
      icon: Clock,
      title: "Delivery Lead Times & Cutoffs",
      content: "Orders placed prior to 2:00 PM IST Monday through Saturday are dispatched from our central hub on the same business day. Standard ground transit takes 3 to 5 business days, while express air items arrive within 24 to 48 hours."
    },
    {
      id: "acc-2",
      icon: ShieldAlert,
      title: "Shipping Charges & Free Thresholds",
      content: "All orders under ₹2,999 carry a flat nationwide shipping fee of ₹99. Orders exceeding ₹2,999 automatically qualify for 100% complimentary express air shipping at checkout with no coupon code required."
    },
    {
      id: "acc-3",
      icon: Globe,
      title: "International Duties & Customs",
      content: "We ship internationally to over 150 countries via DHL Express and FedEx. Customs duties and import taxes are calculated upfront during checkout to guarantee zero surprise fees upon parcel arrival."
    },
    {
      id: "acc-4",
      icon: PackageCheck,
      title: "Real-Time Tracking & Verification",
      content: "Once handed to our courier partner, a unique live GPS tracking link is dispatched via SMS and Email. Doorstep deliveries require photo verification or OTP confirmation to prevent missing packages."
    },
    {
      id: "acc-5",
      icon: HelpCircle,
      title: "Eco-Friendly Protective Packaging",
      content: "Every item is protected using 100% recyclable molded paper pulp and biodegradable tape. Fragile items are sealed in shock-absorbent water-resistant pouches."
    }
  ];

  const [openId, setOpenId] = useState<string | null>(accordionItems[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-slate-950 text-white rounded-3xl overflow-hidden relative border border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            {settings.eyebrow || 'COMPREHENSIVE KNOWLEDGE'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {settings.title || 'Accordion Shipping Guide'}
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            {settings.description || 'Expandable detailed policy guides covering every aspect of international fulfillment.'}
          </p>
        </div>

        {/* Accessible Accordion Stack */}
        <div className="space-y-4">
          {accordionItems.map((item) => {
            const isOpen = openId === item.id;
            const IconComp = item.icon;

            return (
              <div
                key={item.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:bg-slate-800/60"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isOpen ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-semibold text-white">{item.title}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-400' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-slate-400 leading-relaxed border-t border-slate-800/80 mt-1">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
