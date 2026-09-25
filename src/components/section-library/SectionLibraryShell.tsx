"use client";
import React, { useState, useEffect } from 'react';
import { SectionLibrarySidebar } from './SectionLibrarySidebar';
import { SectionLibraryGrid } from './SectionLibraryGrid';
import { SectionPreviewLayout } from './SectionPreviewLayout';

export function SectionLibraryShell() {
  const [activeCategory, setActiveCategory] = useState('hero');
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  // Read URL params on initial load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const section = params.get('section');
    if (section) {
      setSelectedSection(section);
    }
  }, []);

  const handleSelectSection = (sectionId: string | null) => {
    setSelectedSection(sectionId);
    if (sectionId) {
      window.history.pushState(null, '', `?section=${sectionId}`);
    } else {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  return (
    <div className="flex h-screen w-full bg-white font-sans text-gray-900 overflow-hidden">
      <SectionLibrarySidebar 
        activeCategory={activeCategory} 
        onSelectCategory={(category) => {
          setActiveCategory(category);
          handleSelectSection(null);
        }} 
      />
      
      <main className="flex-1 ml-64 flex flex-col min-h-screen overflow-hidden bg-white relative">
        {selectedSection ? (
          <SectionPreviewLayout 
            sectionId={selectedSection} 
            onBack={() => handleSelectSection(null)} 
          />
        ) : (
          <div className="flex-1 overflow-auto">
            <SectionLibraryGrid 
              category={activeCategory} 
              onSelectSection={handleSelectSection} 
            />
          </div>
        )}
      </main>
    </div>
  );
}
