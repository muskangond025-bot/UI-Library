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
    const category = params.get('category');
    if (category) {
      setActiveCategory(category);
    }
  }, []);

  const handleSelectSection = (sectionId: string | null) => {
    setSelectedSection(sectionId);
    if (sectionId) {
      window.history.pushState(null, '', `?section=${sectionId}&category=${activeCategory}`);
    } else {
      window.history.pushState(null, '', `?category=${activeCategory}`);
    }
  };

  const isIframeMode = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('iframeMode') === 'true';

  if (isIframeMode && selectedSection) {
    return (
      <SectionPreviewLayout 
        sectionId={selectedSection} 
        onBack={() => {}} 
      />
    );
  }

  return (
    <div className="flex h-screen w-full bg-white font-sans text-gray-900 overflow-hidden">
      {!selectedSection && (
        <SectionLibrarySidebar 
          activeCategory={activeCategory} 
          onSelectCategory={(category) => {
            setActiveCategory(category);
            setSelectedSection(null);
            window.history.pushState(null, '', `?category=${category}`);
          }} 
        />
      )}
      
      <main className={`flex-1 ${!selectedSection ? 'ml-80' : 'ml-0'} flex flex-col min-h-screen overflow-hidden bg-white relative`}>
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
