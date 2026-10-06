import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MapPin, Navigation, Plus, Sparkles, CheckCircle2 } from 'lucide-react';

const mockData = {
  primary: {
    title: 'PRIMARY DISPATCH PASS',
    name: 'Alex Morgan',
    street: '450 Fashion Avenue, Penthouse 14B',
    city: 'New York, NY 10001',
    code: 'USPS-RFID-10001-PH14B',
  },
  orbitalActions: [
    { title: 'Primary Penthouse', desc: 'New York, NY 10001', icon: MapPin, color: 'bg-indigo-600', tag: 'Default' },
    { title: 'Design Studio HQ', desc: 'Brooklyn, NY 11211', icon: Navigation, color: 'bg-emerald-600', tag: 'Studio' },
    { title: 'Hamptons Villa', desc: 'East Hampton, NY 11937', icon: MapPin, color: 'bg-rose-600', tag: 'Retreat' },
    { title: 'Add Destination', desc: 'Create New Location', icon: Plus, color: 'bg-amber-600', tag: 'New' },
  ]
};

export const AccountAddressBook10: React.FC = () => {
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
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">RFID LOCATION ACCESS PASS</span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">Magnetic Destination Pass</h1>
        </div>
        <span className="px-3 py-1 bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-mono rounded-full flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Holographic RFID Active
        </span>
      </div>

      {/* Main Centerpiece Area with 3D Mouse Parallax */}
      <div className="my-10 flex flex-col items-center justify-center relative perspective-[1000px] z-10">
        <motion.div
          style={{ rotateX, rotateY }}
          className="p-8 bg-gradient-to-b from-neutral-900 via-neutral-900 to-indigo-950/80 border-2 border-indigo-500/40 rounded-3xl shadow-2xl flex flex-col justify-between max-w-md w-full cursor-pointer relative group min-h-[220px]"
        >
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-indigo-300 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" /> {mockData.primary.title}
            </span>
            <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> DEFAULT
            </span>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">{mockData.primary.name}</h2>
            <p className="text-xs font-mono text-neutral-300 mt-1">{mockData.primary.street}</p>
            <p className="text-xs font-mono text-neutral-400 mt-0.5">{mockData.primary.city}</p>
          </div>

          <div className="pt-4 mt-4 border-t border-neutral-800 flex justify-between items-center text-[11px] font-mono text-neutral-400">
            <span>{mockData.primary.code}</span>
            <span className="text-indigo-400">Edit Pass →</span>
          </div>
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
                    {action.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">{action.title}</h3>
                <p className="text-xs text-neutral-400 mt-0.5 font-mono">{action.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
