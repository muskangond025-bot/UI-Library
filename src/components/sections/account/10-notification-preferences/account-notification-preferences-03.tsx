import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShoppingBag, Tag, Heart } from 'lucide-react';

export function AccountNotificationPreferences3() {
  const [openCard, setOpenCard] = useState<string | null>('orders');

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Expandable Categories</span>
          <h2 className="text-3xl font-extrabold text-white">Notification Category Cards</h2>
        </div>

        <div className="space-y-4">
          {[
            { id: 'orders', title: 'Order & Shipping Status', icon: ShoppingBag, desc: 'Real-time dispatch, transit, and delivery alerts' },
            { id: 'offers', title: 'Offers & Promotional Deals', icon: Tag, desc: 'Discounts, flash sales, and exclusive coupons' },
            { id: 'wishlist', title: 'Wishlist & Price Drop Alerts', icon: Heart, desc: 'Stock replenishment and price drop notifications' }
          ].map((cat) => {
            const Icon = cat.icon;
            const isOpen = openCard === cat.id;
            return (
              <div key={cat.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div 
                  onClick={() => setOpenCard(isOpen ? null : cat.id)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">{cat.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{cat.desc}</p>
                    </div>
                  </div>
                  <ChevronDown className={'w-5 h-5 text-slate-400 transition-transform ' + (isOpen ? 'rotate-180' : '')} />
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="pt-4 border-t border-slate-800 space-y-3">
                      <div className="flex justify-between text-xs text-slate-300">
                        <span>Push Notifications</span>
                        <input type="checkbox" defaultChecked className="accent-indigo-600" />
                      </div>
                      <div className="flex justify-between text-xs text-slate-300">
                        <span>Email Notifications</span>
                        <input type="checkbox" defaultChecked className="accent-indigo-600" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences3;
