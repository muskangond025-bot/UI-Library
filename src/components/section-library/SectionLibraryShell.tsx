"use client";
import React, { useState, useEffect } from 'react';
import { SectionLibraryNavbar } from './SectionLibraryNavbar';
import { SectionLibraryGrid } from './SectionLibraryGrid';

export function SectionLibraryShell() {
  const [activeCategory, setActiveCategory] = useState('home');

  // Read URL params on initial load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category === 'home' || category === 'product') {
      setActiveCategory(category);
    }
  }, []);

  const handleSelectCategory = (category: string) => {
    setActiveCategory(category);
    window.history.pushState(null, '', `?category=${category}`);
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gray-50 font-sans text-gray-900 overflow-hidden">
      <SectionLibraryNavbar 
        activeCategory={activeCategory} 
        onSelectCategory={handleSelectCategory} 
      />
      
      <main className="flex-1 overflow-y-auto overflow-x-hidden relative z-0">
        <div className="pb-32">
          <SectionLibraryGrid category={activeCategory} />
        </div>
      </main>
    </div>
  );
}
