import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShoppingBag, Heart, Award, MapPin, Sparkles } from 'lucide-react';

const mockData = {
  user: {
    name: 'Alex Morgan',
    tier: 'Platinum VIP Member',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    email: 'alex.morgan@example.com',
  },
  orbitalActions: [
    { title: 'Orders', count: '18 Orders', icon: ShoppingBag, color: 'bg-indigo-600', badge: '1 In Transit' },
    { title: 'Wishlist', count: '14 Items', icon: Heart, color: 'bg-rose-600', badge: '4 Price Drops' },
    { title: 'Rewards', count: '3,450 Pts', icon: Award, color: 'bg-amber-600', badge: '$35 Credit' },
    { title: 'Locations', count: '2 Addresses', icon: MapPin, color: 'bg-emerald-600', badge: 'Default Saved' },
  ]
};

export const AccountOverview10: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-12, 12]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full bg-[#0d0f14] text-[#f0f4f8] min-h-[750px] p-6 sm:p-12 font-sans border border-neutral-800 rounded-3xl flex flex-col justify-between relative overflow-hidden"
    >
      {/* Title */}
      <div className="flex justify-between items-center pb-6 border-b border-neutral-800 relative z-10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">MAGNETIC OBJECT COMPOSITION</span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">Interactive Profile Centerpiece</h1>
        </div>
        <span className="px-3 py-1 bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-mono rounded-full flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Magnetic Tracking Active
        </span>
      </div>

      {/* Main Centerpiece Area with 3D Mouse Parallax */}
      <div className="my-10 flex flex-col items-center justify-center relative perspective-[1000px] z-10">
        <motion.div
          style={{ rotateX, rotateY }}
          className="p-8 bg-gradient-to-b from-neutral-900 via-neutral-900 to-indigo-950/80 border-2 border-indigo-500/40 rounded-3xl shadow-2xl flex flex-col items-center text-center max-w-sm w-full cursor-pointer relative group"
        >
          <div className="relative mb-4">
            <img 
              src={mockData.user.avatar} 
              alt={mockData.user.name} 
              className="w-28 h-28 rounded-full object-cover border-4 border-amber-400/80 shadow-xl"
            />
            <div className="absolute bottom-0 right-0 p-2 bg-amber-400 text-black rounded-full shadow-lg">
              <Award className="w-5 h-5" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">{mockData.user.name}</h2>
          <p className="text-xs font-mono text-neutral-400 mt-1">{mockData.user.email}</p>
          <span className="mt-3 px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-mono font-medium rounded-full border border-indigo-500/30">
            {mockData.user.tier}
          </span>
        </motion.div>

        {/* 4 Orbital Action Chips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-10">
          {mockData.orbitalActions.map((action, idx) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                className="p-5 bg-neutral-900/80 border border-neutral-800 rounded-2xl hover:border-neutral-600 transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className={`p-2.5 rounded-xl ${action.color} text-white`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-800 text-neutral-300 rounded">
                    {action.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">{action.title}</h3>
                <p className="text-xs text-neutral-400 mt-0.5 font-mono">{action.count}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
