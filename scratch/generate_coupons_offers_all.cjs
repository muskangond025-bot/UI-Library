const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../src/components/sections/account/09-coupons-offers');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 01 — PREMIUM COUPON COLLECTION
const code01 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, Copy, Check, Clock } from 'lucide-react';

export function AccountCouponsOffers1() {
  const [copied, setCopied] = useState<string | null>(null);

  const coupons = [
    { id: 'c1', discount: '₹500 OFF', code: 'SAVE500', minOrder: 'Min. Order: ₹2,999', exp: 'Expires 30 Sep 2026', title: 'Festive Season Savings' },
    { id: 'c2', discount: '20% OFF', code: 'FASHION20', minOrder: 'Max discount: ₹1,000', exp: 'Expires 15 Oct 2026', title: 'Apparel Category Special' },
    { id: 'c3', discount: 'FREE SHIPPING', code: 'FREESHIPVIP', minOrder: 'Valid on all orders', exp: 'Expires 31 Oct 2026', title: 'VIP Express Delivery Pass' }
  ];

  const handleCopy = (code: string) => {
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-800 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 block mb-1">PROMOTIONAL CATALOG</span>
            <h2 className="text-3xl font-extrabold text-white">Premium Coupon Collection</h2>
          </div>
          <span className="px-3.5 py-1.5 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 rounded-full text-xs font-semibold">
            3 Active Coupons
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coupons.map((coupon, idx) => (
            <motion.div
              key={coupon.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-indigo-500/50 transition-all shadow-xl group"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-1 bg-indigo-600 text-white font-black text-xs rounded-lg uppercase tracking-wide">
                    {coupon.discount}
                  </span>
                  <Tag className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                </div>
                <h3 className="font-bold text-white text-lg">{coupon.title}</h3>
                <p className="text-xs text-slate-400">{coupon.minOrder}</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-500" /> {coupon.exp}
                </div>

                <div className="flex justify-between items-center bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <code className="font-mono text-xs font-bold text-indigo-300 px-2">{coupon.code}</code>
                  <button
                    onClick={() => handleCopy(coupon.code)}
                    className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-lg transition-colors flex items-center gap-1"
                  >
                    {copied === coupon.code ? <><Check className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers1;
`;

// 02 — COUPON TICKET DESIGN
const code02 = `import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, Copy } from 'lucide-react';

export function AccountCouponsOffers2() {
  const tickets = [
    { discount: 'FLAT ₹1,000 OFF', code: 'FESTIVE1000', req: 'Min Spend: ₹4,999', exp: 'Valid until 15 Oct' },
    { discount: '15% SITEWIDE', code: 'EVERYONE15', req: 'No minimum order', exp: 'Valid until 31 Oct' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Voucher Passes</span>
          <h2 className="text-3xl font-extrabold">Coupon Ticket Design</h2>
        </div>

        <div className="space-y-6">
          {tickets.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden group shadow-2xl"
            >
              {/* Left Notch */}
              <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-900 rounded-full border border-slate-800" />
              {/* Right Notch */}
              <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-900 rounded-full border border-slate-800" />

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Ticket className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">{t.discount}</h3>
                  <p className="text-xs text-slate-400 mt-1">{t.req} • {t.exp}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-4 md:pt-0 border-slate-800">
                <code className="text-sm font-mono font-bold text-emerald-400 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
                  {t.code}
                </code>
                <button className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5">
                  <Copy className="w-4 h-4" /> Copy Code
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers2;
`;

// 03 — OFFER GRID
const code03 = `import React from 'react';
import { motion } from 'framer-motion';
import { Percent, Gift, Truck } from 'lucide-react';

export function AccountCouponsOffers3() {
  const gridOffers = [
    { icon: Percent, discount: '25% OFF', title: 'Summer Collection', code: 'SUMMER25', color: 'from-purple-900/40 to-slate-900' },
    { icon: Gift, discount: 'FREE GIFT', title: 'Orders above ₹3,000', code: 'FREEGIFTVIP', color: 'from-pink-900/40 to-slate-900' },
    { icon: Truck, discount: 'FREE SHIP', title: 'Zero Shipping Fee', code: 'SHIPFREE', color: 'from-blue-900/40 to-slate-900' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Promotional Matrix</span>
          <h2 className="text-3xl font-extrabold text-white">Interactive Offer Grid</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gridOffers.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={'p-6 rounded-2xl bg-gradient-to-b ' + item.color + ' border border-slate-800 flex flex-col justify-between space-y-6 shadow-xl'}
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black text-white block">{item.discount}</span>
                  <h4 className="font-bold text-slate-300 text-sm">{item.title}</h4>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                  <code className="text-xs font-mono font-bold text-purple-300 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                    {item.code}
                  </code>
                  <button className="px-3.5 py-1.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-lg transition-colors">
                    Copy
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers3;
`;

// 04 — EXPIRING SOON
const code04 = `import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldAlert } from 'lucide-react';

export function AccountCouponsOffers4() {
  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-3 pb-6 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Urgent Offers</span>
            <h2 className="text-3xl font-extrabold text-white">Ending Soon Offers</h2>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-950 border border-amber-500/30 p-8 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest rounded-full border border-amber-500/30">
                EXPIRES IN 24 HOURS
              </span>
              <h3 className="text-4xl font-black text-white mt-3">FLASH ₹750 OFF</h3>
              <p className="text-xs text-slate-400 mt-1">Valid on cart value over ₹3,500</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
              <Clock className="w-4 h-4" /> CODE: FLASH750
            </div>
          </div>

          <div className="pt-4 border-t border-slate-900 flex justify-end">
            <button className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors">
              Claim Flash Code Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers4;
`;

// 05 — COUPON CODE COPY EXPERIENCE
const code05 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

export function AccountCouponsOffers5() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-xl mx-auto text-center space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Micro Interaction</span>
          <h2 className="text-3xl font-extrabold text-white">Coupon Code Copy Experience</h2>
        </div>

        <div className="bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
          <span className="text-5xl font-black text-emerald-400 tracking-tight block">₹500 OFF</span>
          <p className="text-xs text-slate-400">Applicable on orders above ₹2,499</p>

          <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between">
            <code className="text-xl font-mono font-black text-white tracking-widest">SAVE500</code>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleCopy}
              className={'px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ' + (copied ? 'bg-emerald-500 text-slate-950' : 'bg-indigo-600 hover:bg-indigo-500 text-white')}
            >
              {copied ? <><Check className="w-4 h-4" /> CODE COPIED</> : <><Copy className="w-4 h-4" /> COPY CODE</>}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers5;
`;

// 06 — GLASS COUPON CARDS
const code06 = `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy } from 'lucide-react';

export function AccountCouponsOffers6() {
  return (
    <section className="w-full min-h-[650px] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-indigo-300 border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest inline-block">
            Glass Offer Deck
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Glass Coupon Cards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { offer: '₹300 OFF', code: 'GLASS300', title: 'Welcome Voucher' },
            { offer: '15% OFF', code: 'GLASS15', title: 'Footwear Special' },
            { offer: 'FREE SHIP', code: 'GLASSSHIP', title: 'Express Freight' }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-2">
                <Sparkles className="w-6 h-6 text-indigo-300" />
                <h3 className="text-3xl font-black text-white mt-2">{card.offer}</h3>
                <p className="text-xs text-slate-400 font-medium">{card.title}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <code className="text-xs font-mono font-bold text-indigo-200">{card.code}</code>
                <button className="px-3.5 py-1.5 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200 border border-indigo-500/40 rounded-xl text-xs font-bold transition-all flex items-center gap-1">
                  <Copy className="w-3.5 h-3.5" /> Copy
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers6;
`;

// 07 — EDITORIAL OFFERS
const code07 = `import React from 'react';
import { motion } from 'framer-motion';

export function AccountCouponsOffers7() {
  return (
    <section className="w-full min-h-[650px] bg-stone-950 text-stone-100 py-16 px-6 font-serif">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="border-b border-stone-800 pb-10 space-y-4"
        >
          <span className="font-sans text-xs uppercase tracking-widest text-amber-500 font-bold block">
            SEASONAL SAVINGS
          </span>
          <h1 className="text-5xl sm:text-7xl font-light tracking-tight uppercase leading-none">
            OFFERS <br /><span className="italic font-normal text-amber-400">FOR YOU</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-sans">
          <div className="p-8 bg-stone-900 rounded-2xl border border-stone-800 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">EXCLUSIVE CODE</span>
            <h3 className="text-4xl font-serif font-light text-white">₹1,500 OFF</h3>
            <p className="text-xs text-stone-400 leading-relaxed font-light">Applicable on luxury outerwear purchases above ₹10,000.</p>
            <code className="text-xs font-mono font-bold text-amber-400 block pt-2">CODE: LUXE1500</code>
          </div>

          <div className="p-8 bg-stone-900 rounded-2xl border border-stone-800 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">COMPLIMENTARY</span>
            <h3 className="text-4xl font-serif font-light text-white">FREE SHIP</h3>
            <p className="text-xs text-stone-400 leading-relaxed font-light">Complimentary express shipping on all domestic purchases.</p>
            <code className="text-xs font-mono font-bold text-amber-400 block pt-2">CODE: COMPSHIP</code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers7;
`;

// 08 — CATEGORY OFFERS
const code08 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function AccountCouponsOffers8() {
  const [activeCategory, setActiveCategory] = useState('Fashion');

  const offers = [
    { cat: 'Fashion', title: '25% OFF APPAREL', code: 'FASHION25', exp: 'Exp. 30 Oct' },
    { cat: 'Shoes', title: '₹800 OFF FOOTWEAR', code: 'SHOES800', exp: 'Exp. 15 Nov' },
    { cat: 'Accessories', title: '15% OFF WATCHES', code: 'ACC15', exp: 'Exp. 20 Oct' }
  ];

  const filtered = offers.filter(o => o.cat === activeCategory);

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Segmented Catalog</span>
          <h2 className="text-3xl font-extrabold">Category-Specific Offers</h2>
        </div>

        <div className="flex justify-center gap-2 border-b border-slate-800 pb-4">
          {['Fashion', 'Shoes', 'Accessories'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={'px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ' + (activeCategory === cat ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white')}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((o, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-slate-950 rounded-2xl border border-slate-800 flex justify-between items-center"
            >
              <div>
                <h4 className="font-bold text-white text-lg">{o.title}</h4>
                <p className="text-xs text-slate-400 mt-1">{o.exp}</p>
              </div>
              <code className="text-sm font-mono font-bold text-indigo-400 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
                {o.code}
              </code>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers8;
`;

// 09 — FEATURED OFFER
const code09 = `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy } from 'lucide-react';

export function AccountCouponsOffers9() {
  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Featured Highlight</span>
          <h2 className="text-3xl font-extrabold text-white">Hero Promotional Offer</h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-amber-500/20 via-slate-900 to-slate-900 p-8 sm:p-12 rounded-3xl border border-amber-500/30 space-y-6 shadow-2xl"
        >
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> HIGHLIGHT OF THE MONTH
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">FLAT ₹2,000 OFF</h1>
          <p className="text-sm text-slate-300 max-w-md">Valid on orders over ₹8,000 across all premier collections.</p>

          <div className="flex justify-between items-center pt-4 border-t border-slate-800">
            <code className="text-base font-mono font-bold text-amber-400">HERO2000</code>
            <button className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5">
              <Copy className="w-4 h-4" /> Copy Featured Code
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers9;
`;

// 10 — INFINITE OFFER MENU
const code10 = `import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

export function AccountCouponsOffers10() {
  const items = [
    { discount: '₹400 OFF', code: 'REWARD400', title: 'Storewide Pass' },
    { discount: '20% OFF', code: 'SUMMER20', title: 'Apparel Offer' },
    { discount: 'FREE SHIP', code: 'EXPRESS', title: 'Zero Freight' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Carousel Navigation</span>
          <h2 className="text-3xl font-extrabold">Infinite Offer Menu</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-2">
                <Tag className="w-5 h-5 text-cyan-400" />
                <h3 className="text-3xl font-black text-white">{item.discount}</h3>
                <p className="text-xs text-slate-400">{item.title}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                <code className="text-xs font-mono font-bold text-cyan-400">{item.code}</code>
                <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-lg transition-colors">
                  Claim
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers10;
`;

// 11 — COUPON + ELIGIBILITY
const code11 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Info } from 'lucide-react';

export function AccountCouponsOffers11() {
  const [openTerms, setOpenTerms] = useState(false);

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Eligibility Breakdown</span>
          <h2 className="text-3xl font-extrabold">Coupon Eligibility Matrix</h2>
        </div>

        <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-3xl font-black text-white">₹500 OFF</h3>
              <p className="text-xs text-slate-400 mt-1">CODE: SAVE500</p>
            </div>
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded-full">
              ELIGIBLE
            </span>
          </div>

          <div className="space-y-2 pt-4 border-t border-slate-900 text-xs text-slate-400">
            <p className="flex justify-between"><span>Minimum Order:</span> <strong className="text-white">₹2,999</strong></p>
            <p className="flex justify-between"><span>Applicable Category:</span> <strong className="text-white">Streetwear</strong></p>
          </div>

          <button
            onClick={() => setOpenTerms(!openTerms)}
            className="w-full pt-2 flex items-center justify-between text-xs font-bold text-indigo-400"
          >
            <span className="flex items-center gap-1"><Info className="w-3.5 h-3.5" /> View Terms & Conditions</span>
            <ChevronDown className={'w-4 h-4 transition-transform ' + (openTerms ? 'rotate-180' : '')} />
          </button>

          <AnimatePresence>
            {openTerms && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-xs text-slate-400 bg-slate-900 p-4 rounded-xl space-y-1"
              >
                <p>• Cannot be combined with other promotional vouchers.</p>
                <p>• Valid only on non-sale items.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers11;
`;

// 12 — OFFER STATUS
const code12 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function AccountCouponsOffers12() {
  const [tab, setTab] = useState('Available');

  const offers = [
    { title: '₹500 OFF', code: 'SAVE500', status: 'Available' },
    { title: '20% OFF', code: 'USED20', status: 'Used' },
    { title: 'FREE SHIP', code: 'EXPIREDSHIP', status: 'Expired' }
  ];

  const filtered = offers.filter(o => o.status === tab);

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Offer Lifecycle</span>
            <h2 className="text-3xl font-extrabold text-white">Offer Status Center</h2>
          </div>

          <div className="flex gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
            {['Available', 'Used', 'Expired'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={'px-4 py-2 rounded-lg text-xs font-bold transition-all ' + (tab === t ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white')}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-slate-900 rounded-2xl border border-slate-800 flex justify-between items-center"
            >
              <h4 className="font-bold text-white text-lg">{item.title}</h4>
              <code className="text-xs font-mono font-bold text-emerald-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                {item.code}
              </code>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers12;
`;

// 13 — SAVING VISUALIZATION
const code13 = `import React from 'react';
import { motion } from 'framer-motion';

export function AccountCouponsOffers13() {
  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-xl mx-auto text-center space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Value Breakdown</span>
          <h2 className="text-3xl font-extrabold">Saving Visualization Card</h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-6 shadow-2xl"
        >
          <div className="space-y-2 text-xs font-semibold text-slate-400 border-b border-slate-900 pb-4">
            <div className="flex justify-between"><span>Sample Order Value:</span> <span>₹4,999</span></div>
            <div className="flex justify-between text-emerald-400"><span>Applied Code (SAVE500):</span> <span>− ₹500</span></div>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">TOTAL SAVINGS</span>
            <p className="text-5xl font-black text-emerald-400 tracking-tight">YOU SAVE ₹500</p>
          </div>

          <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors">
            Apply Voucher Code
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers13;
`;

// 14 — OFFER TIMELINE
const code14 = `import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';

export function AccountCouponsOffers14() {
  const steps = [
    { title: 'Unlocked ₹500 Voucher', desc: 'Received on Sept 01', status: 'Completed' },
    { title: 'Offer Active', desc: 'Valid on orders > ₹2,999', status: 'Active' },
    { title: 'Expires Sept 30', desc: 'Will auto-expire if unused', status: 'Upcoming' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Lifecycle View</span>
          <h2 className="text-3xl font-extrabold text-white">Offer Timeline Path</h2>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative space-y-1"
            >
              <div className={'absolute -left-[31px] sm:-left-[39px] top-0 w-6 h-6 rounded-full flex items-center justify-center ' + (step.status === 'Completed' ? 'bg-indigo-500 text-white' : step.status === 'Active' ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-600')}>
                {step.status === 'Completed' ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
              </div>

              <h4 className="font-bold text-white text-lg">{step.title}</h4>
              <p className="text-xs text-slate-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers14;
`;

// 15 — MINIMAL MONOCHROME COUPONS
const code15 = `import React from 'react';

export function AccountCouponsOffers15() {
  return (
    <section className="w-full min-h-[650px] bg-white text-gray-900 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex justify-between items-center pb-6 border-b border-gray-900">
          <div>
            <span className="text-xs font-mono uppercase text-gray-400 tracking-widest block mb-1">PROMOTIONAL REGISTRY</span>
            <h2 className="text-3xl font-light tracking-tight text-gray-900 uppercase">AVAILABLE OFFERS</h2>
          </div>
          <span className="text-xs font-mono font-bold uppercase text-gray-900">02 OFFERS</span>
        </div>

        <div className="space-y-6 divide-y divide-gray-100">
          <div className="pb-6 flex justify-between items-center">
            <div>
              <span className="text-xs font-mono text-gray-400 block mb-1">01 // CODE: SAVE500</span>
              <h3 className="text-2xl font-light text-gray-900">₹500 DISCOUNT VOUCHER</h3>
            </div>
            <span className="text-xs font-mono font-bold border border-gray-900 px-4 py-2 uppercase">COPY CODE</span>
          </div>

          <div className="pt-6 flex justify-between items-center">
            <div>
              <span className="text-xs font-mono text-gray-400 block mb-1">02 // CODE: FREESHIP</span>
              <h3 className="text-2xl font-light text-gray-900">FREE GLOBAL FREIGHT</h3>
            </div>
            <span className="text-xs font-mono font-bold border border-gray-900 px-4 py-2 uppercase">COPY CODE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers15;
`;

// 16 — FLOATING OFFER CARDS
const code16 = `import React from 'react';
import { motion } from 'framer-motion';

export function AccountCouponsOffers16() {
  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Spatial Depth</span>
          <h2 className="text-3xl font-extrabold">Floating Offer Cards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="p-8 rounded-3xl bg-slate-900 border border-cyan-500/30 shadow-xl space-y-4"
          >
            <h3 className="text-4xl font-black text-white">₹500 OFF</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">CODE: SAVE500</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="p-8 rounded-3xl bg-slate-900 border border-indigo-500/30 shadow-xl space-y-4"
          >
            <h3 className="text-3xl font-bold text-white">20% OFF</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">CODE: FASHION20</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="p-8 rounded-3xl bg-slate-900 border border-purple-500/30 shadow-xl space-y-4"
          >
            <h3 className="text-3xl font-bold text-white">FREE SHIP</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">CODE: SHIPFREE</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers16;
`;

// 17 — OFFER FILTER EXPERIENCE
const code17 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function AccountCouponsOffers17() {
  const [filter, setFilter] = useState('All');

  const offers = [
    { title: '₹500 OFF Storewide', category: 'Fashion', code: 'SAVE500' },
    { title: '20% OFF Footwear', category: 'Shoes', code: 'SHOES20' },
    { title: '15% OFF Watch Strap', category: 'Accessories', code: 'ACC15' }
  ];

  const filtered = filter === 'All' ? offers : offers.filter(o => o.category === filter);

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Interactive Filter</span>
            <h2 className="text-3xl font-extrabold text-white">Offer Filter Experience</h2>
          </div>

          <div className="flex gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
            {['All', 'Fashion', 'Shoes', 'Accessories'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={'px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ' + (filter === f ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white')}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-slate-950 rounded-2xl border border-slate-800 flex justify-between items-center"
            >
              <h4 className="font-bold text-white text-lg">{item.title}</h4>
              <code className="text-xs font-mono font-bold text-emerald-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                {item.code}
              </code>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers17;
`;

// 18 — MAGAZINE OFFERS
const code18 = `import React from 'react';

export function AccountCouponsOffers18() {
  return (
    <section className="w-full min-h-[650px] bg-neutral-950 text-neutral-100 py-16 px-6 font-serif">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="font-sans text-xs uppercase tracking-widest text-amber-400 font-bold">L'ÉLITE OFFERS</span>
          <h1 className="text-4xl sm:text-6xl font-light uppercase tracking-wide">THE DISCOUNT EDITION</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-sans">
          <div className="p-8 bg-neutral-900 rounded-2xl border border-neutral-800 space-y-4">
            <span className="text-xs text-amber-400 uppercase tracking-widest font-bold">FEATURED DISCOUNTS</span>
            <p className="text-5xl font-serif font-light text-white">₹1,500 <span className="text-xs font-sans text-neutral-400">OFF</span></p>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">Exclusive patron discount valid on curated luxury outerwear.</p>
          </div>

          <div className="p-8 bg-neutral-900 rounded-2xl border border-neutral-800 space-y-4">
            <span className="text-xs text-amber-400 uppercase tracking-widest font-bold">VIP FREIGHT</span>
            <p className="text-4xl font-serif font-light text-white">FREE EXPRESS</p>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">Complimentary priority delivery across all international orders.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers18;
`;

// 19 — OFFER + QUICK ACTIONS
const code19 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ExternalLink } from 'lucide-react';

export function AccountCouponsOffers19() {
  const [copied, setCopied] = useState(false);

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Instant Actions</span>
          <h2 className="text-3xl font-extrabold">Offer + Quick Actions</h2>
        </div>

        <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-3xl font-black text-white">₹500 OFF VOUCHER</h3>
              <p className="text-xs text-slate-400 mt-1">Min Order: ₹2,499</p>
            </div>
            <code className="text-xs font-mono font-bold text-indigo-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              SAVE500
            </code>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-900">
            <button
              onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5"
            >
              {copied ? <><Check className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy Code</>}
            </button>

            <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5">
              <ExternalLink className="w-3.5 h-3.5" /> Shop Applicable Items
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers19;
`;

// 20 — AWARD-STYLE OFFERS EXPERIENCE
const code20 = `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Ticket, Copy } from 'lucide-react';

export function AccountCouponsOffers20() {
  return (
    <section className="w-full min-h-[650px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> ULTIMATE PROMOTIONAL SUITE
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">Award-Style Offers</h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Premier voucher presentation engineered with custom ticket cutouts, micro-copy interactions, and real-time offer eligibility tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 rounded-3xl bg-slate-950 border border-amber-500/40 shadow-2xl space-y-6 relative overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
                <Ticket className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 bg-amber-400 text-slate-950 font-black text-[10px] uppercase tracking-widest rounded-full">
                BEST SAVINGS
              </span>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">FLAT ₹1,000 OFF</h3>
              <p className="text-xs text-slate-400 mt-1">Valid on orders over ₹4,999</p>
            </div>

            <div className="pt-4 border-t border-slate-900 flex justify-between items-center">
              <code className="text-sm font-mono font-bold text-amber-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                VIP1000
              </code>
              <button className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5">
                <Copy className="w-4 h-4" /> Copy Code
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-slate-950 border border-amber-500/40 shadow-2xl space-y-6 relative overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
                <Ticket className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 font-bold text-[10px] uppercase tracking-widest rounded-full">
                SITEWIDE
              </span>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">20% OFF</h3>
              <p className="text-xs text-slate-400 mt-1">Valid on cart value over ₹2,999</p>
            </div>

            <div className="pt-4 border-t border-slate-900 flex justify-between items-center">
              <code className="text-sm font-mono font-bold text-amber-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                SUPER20
              </code>
              <button className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5">
                <Copy className="w-4 h-4" /> Copy Code
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers20;
`;

const codes = [
  code01, code02, code03, code04, code05,
  code06, code07, code08, code09, code10,
  code11, code12, code13, code14, code15,
  code16, code17, code18, code19, code20
];

const jsons = [
  { heading: "Premium Coupon Collection — Staggered Offer Reveal", description: "Grid of promo cards with discount values, expiration counters, and interactive code copy states." },
  { heading: "Coupon Ticket Design — Voucher Edge Pass", description: "Ticket-style coupon pass featuring side cutouts, discount values, and code copy action." },
  { heading: "Interactive Offer Grid — Multi-Offer Matrix", description: "Grid layout grouping percentage discounts, free gift vouchers, and free shipping passes." },
  { heading: "Ending Soon Offers — Urgent Expiry Visualizer", description: "High-urgency promotional banner calling out 24-hour flash offer expiration." },
  { heading: "Coupon Code Copy Experience — Code to Checkmark", description: "Focused code block card where clicking Copy transitions the button state to a checkmark." },
  { heading: "Glass Coupon Cards — Frosted Prism Offers", description: "Frosted glassmorphism coupon cards with subtle depth and glowing discount icons." },
  { heading: "Editorial Offers — High-Fashion Typography", description: "Editorial magazine layout displaying promotional discount codes in large serif typography." },
  { heading: "Category-Specific Offers — Segmented Catalog", description: "Tabbed category navigation grouping discount codes by Fashion, Shoes, and Accessories." },
  { heading: "Hero Promotional Offer — Featured Highlight Banner", description: "Hero promotional banner highlighting the top offer of the month with instant copy code button." },
  { heading: "Infinite Offer Menu — Carousel Navigation", description: "Interactive card menu adapted from infinite carousel concepts for browsing vouchers." },
  { heading: "Coupon Eligibility Matrix — Rules & Terms Breakdown", description: "Detailed offer card displaying minimum order rules, applicable categories, and expandable T&C." },
  { heading: "Offer Status Center — Lifecycle Filter Tabs", description: "Status center tab layout filtering promotional vouchers by Available, Used, and Expired states." },
  { heading: "Saving Visualization Card — Discount Calculator Preview", description: "Calculated savings preview card displaying sample cart value, discount deduction, and total savings." },
  { heading: "Offer Timeline Path — Lifecycle Flow View", description: "Vertical timeline path tracking coupon unlocking, active period, and expiration date." },
  { heading: "Minimal Monochrome Coupons — Precision Typography", description: "Typography-first minimalist coupon list with clean line dividers, code blocks, and restrained layout." },
  { heading: "Floating Offer Cards — Spatial Levitation Modules", description: "Asymmetric spatial modules floating with smooth Y-axis motion keyframes displaying promo codes." },
  { heading: "Offer Filter Experience — Interactive Category Grid", description: "Interactive filter toolbar updating available discount offers across product categories." },
  { heading: "Magazine Offers — Editorial Discount Edition", description: "Multi-column editorial composition showcasing VIP discounts and complimentary express shipping." },
  { heading: "Offer + Quick Actions — Direct Action Buttons", description: "Promotional card providing quick action buttons to copy code, shop applicable items, or view terms." },
  { heading: "Award-Style Offers — Ultimate VIP Promotional Suite", description: "Luxurious promotional dashboard with gold crest accents, custom voucher cutouts, and quick copy triggers." }
];

for (let i = 0; i < 20; i++) {
  const numStr = String(i + 1).padStart(2, '0');
  const tsxPath = path.join(targetDir, `account-coupons-offers-${numStr}.tsx`);
  const jsonPath = path.join(targetDir, `account-coupons-offers-${numStr}.json`);

  fs.writeFileSync(tsxPath, codes[i].trim() + '\n', 'utf-8');
  fs.writeFileSync(jsonPath, JSON.stringify(jsons[i], null, 2) + '\n', 'utf-8');
  console.log(`Generated account-coupons-offers-${numStr}`);
}

console.log('All 20 Coupons & Offers variants generated successfully!');
