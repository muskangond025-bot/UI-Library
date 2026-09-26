import React from 'react';
import { motion } from 'framer-motion';

export type NavbarVariant = 'glass' | 'minimal' | 'split' | 'floating';

interface NavbarProps {
  variant?: NavbarVariant;
  textColor?: string;
  accentColor?: string;
}

export function Navbar({ variant = 'glass', textColor = '#ffffff', accentColor = '#FF3366' }: NavbarProps) {
  const links = ['Home', 'Collections', 'About', 'Contact'];

  if (variant === 'floating') {
    return (
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-full bg-black/20 backdrop-blur-xl border border-white/10 px-6 py-4 flex items-center justify-between z-50"
        style={{ color: textColor }}
      >
        <div className="text-xl font-black tracking-widest uppercase">BRAND</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-80">
          {links.map(l => (
            <a key={l} href="#" className="hover:opacity-100 transition-opacity">{l}</a>
          ))}
        </div>
        <button 
          className="px-5 py-2 rounded-full text-sm font-bold text-black transition-transform hover:scale-105"
          style={{ backgroundColor: textColor }}
        >
          Shop Now
        </button>
      </motion.nav>
    );
  }

  if (variant === 'minimal') {
    return (
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full px-6 md:px-12 py-8 flex items-center justify-between z-50 pointer-events-none"
        style={{ color: textColor }}
      >
        <div className="text-2xl font-serif italic pointer-events-auto cursor-pointer">Studio.</div>
        <div className="flex items-center gap-2 cursor-pointer pointer-events-auto hover:opacity-70 transition-opacity">
          <span className="text-xs tracking-[0.2em] uppercase font-mono mr-2">Menu</span>
          <div className="flex flex-col gap-1.5 w-6">
            <div className="h-px w-full bg-current" />
            <div className="h-px w-2/3 bg-current self-end" />
          </div>
        </div>
      </motion.nav>
    );
  }

  if (variant === 'split') {
    return (
      <nav 
        className="absolute top-0 left-0 w-full px-8 py-6 flex items-center justify-between z-50 border-b border-white/10"
        style={{ color: textColor }}
      >
        <div className="flex-1 flex items-center justify-start gap-6 hidden md:flex">
          {links.slice(0, 2).map(l => (
            <a key={l} href="#" className="text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">{l}</a>
          ))}
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-2xl font-black tracking-[0.3em]">NEXUS</div>
        </div>
        <div className="flex-1 flex items-center justify-end gap-6 hidden md:flex">
          {links.slice(2, 4).map(l => (
            <a key={l} href="#" className="text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">{l}</a>
          ))}
        </div>
        
        {/* Mobile menu icon */}
        <div className="md:hidden flex-1 flex justify-end">
          <div className="h-6 w-6 flex flex-col justify-center gap-1.5">
            <div className="h-0.5 w-full bg-current" />
            <div className="h-0.5 w-full bg-current" />
          </div>
        </div>
      </nav>
    );
  }

  // Default: glass
  return (
    <nav 
      className="absolute top-0 left-0 w-full px-6 md:px-12 py-5 flex items-center justify-between z-50 bg-gradient-to-b from-black/40 to-transparent"
      style={{ color: textColor }}
    >
      <div className="flex items-center gap-8">
        <div className="text-xl font-bold tracking-tight">VORTEX</div>
        <div className="hidden md:flex items-center gap-6 text-sm opacity-90">
          {links.map(l => (
            <a key={l} href="#" className="relative group overflow-hidden">
              <span className="relative z-10">{l}</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" style={{ backgroundColor: accentColor }} />
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="hidden md:block text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">Login</button>
        <button 
          className="px-4 py-2 rounded text-sm font-bold transition-opacity hover:opacity-90"
          style={{ backgroundColor: accentColor, color: '#fff' }}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
