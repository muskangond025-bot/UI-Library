import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ShoppingBag, Heart, MapPin, Award, ArrowUpRight, Box } from 'lucide-react';

export function AccountOverview16() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="w-full bg-slate-950 text-white p-8 md:p-14 min-h-[700px] flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full space-y-10">
        <div className="text-center space-y-2">
          <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full text-xs font-mono uppercase">
            CONTROLLED PERSPECTIVE
          </span>
          <h1 className="text-3xl font-bold text-white">3D Account Perspective Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
          {[
            { title: 'Orders & Deliveries', stat: '12 Orders', desc: 'Active track: #DH-28491', icon: ShoppingBag, color: 'border-cyan-500/30' },
            { title: 'Personal Wishlist', stat: '8 Items', desc: 'Saved products collection', icon: Heart, color: 'border-pink-500/30' },
            { title: 'Saved Addresses', stat: '3 Hubs', desc: 'Primary: Home address', icon: MapPin, color: 'border-emerald-500/30' },
            { title: 'Loyalty Rewards', stat: '1,250 Pts', desc: 'Gold VIP Perks Unlocked', icon: Award, color: 'border-amber-500/30' },
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className={`bg-slate-900/90 rounded-3xl p-8 border ${card.color} shadow-2xl hover:shadow-cyan-500/10 transition-all cursor-pointer group flex flex-col justify-between`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-slate-800 text-cyan-400 rounded-2xl">
                    <Icon className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{card.title}</h3>
                  <div className="text-3xl font-extrabold text-white mt-1">{card.stat}</div>
                  <p className="text-xs text-slate-400 mt-1">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AccountOverview16;
